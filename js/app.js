/* ============================================================
   Вилла де Бурабай — логика прототипа
   Этап 0 по PRD: витрина, календарь, бронь, демо-оплата,
   ИИ-помощник, карта, симуляция WhatsApp
   ============================================================ */
(function () {
  'use strict';

  const T = (k, v) => window.Lang.t(k, v);
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

  /* ---------- Состояние ---------- */
  const state = {
    checkin: null,
    checkout: null,
    guests: 2,
    roomId: null,
    extras: new Set(),
  };

  const STORAGE_KEY = 'vdb_bookings';

  /* ---------- Утилиты ---------- */
  const LOCALES = { ru: 'ru-RU', kz: 'kk-KZ', en: 'en-GB' };

  const toISO = (d) => {
    const z = new Date(d.getTime() - d.getTimezoneOffset() * 60000);
    return z.toISOString().slice(0, 10);
  };

  const parseISO = (s) => {
    const [y, m, d] = s.split('-').map(Number);
    return new Date(y, m - 1, d);
  };

  const fmtDate = (iso) =>
    parseISO(iso).toLocaleDateString(LOCALES[window.Lang.current] || 'ru-RU', {
      day: 'numeric',
      month: 'long',
    });

  const fmtMoney = (n) => new Intl.NumberFormat('ru-RU').format(Math.round(n)) + ' ₸';

  const nightsBetween = (a, b) => Math.round((parseISO(b) - parseISO(a)) / 86400000);

  const pluralNights = (n) => {
    if (window.Lang.current === 'ru') {
      const m10 = n % 10, m100 = n % 100;
      if (m10 === 1 && m100 !== 11) return `${n} ночь`;
      if (m10 >= 2 && m10 <= 4 && (m100 < 12 || m100 > 14)) return `${n} ночи`;
      return `${n} ночей`;
    }
    if (window.Lang.current === 'en') return `${n} ${n === 1 ? 'night' : 'nights'}`;
    return `${n} ${T('ui.nights')}`;
  };

  const loc = (field) => (typeof field === 'object' ? field[window.Lang.current] || field.ru : field);

  const eachDate = (fromISODate, toISODate) => {
    const out = [];
    const end = parseISO(toISODate);
    for (let d = parseISO(fromISODate); d < end; d.setDate(d.getDate() + 1)) out.push(toISO(d));
    return out;
  };

  const roomById = (id) => window.DATA.rooms.find((r) => r.id === id);

  const isRoomFree = (room) => {
    if (!state.checkin || !state.checkout) return true;
    return !eachDate(state.checkin, state.checkout).some((d) => window.DATA.isRoomBusy(room.id, d));
  };

  /* ---------- Расчёт стоимости ---------- */
  function calcTotals() {
    const room = roomById(state.roomId);
    if (!room || !state.checkin || !state.checkout) return null;
    const nights = nightsBetween(state.checkin, state.checkout);
    if (nights <= 0) return null;

    const roomTotal = room.price * nights;
    let extrasTotal = 0;
    state.extras.forEach((id) => {
      const act = window.DATA.activities.find((a) => a.id === id);
      if (!act) return;
      extrasTotal += act.unit === 'person' ? act.price * state.guests : act.price;
    });

    const total = roomTotal + extrasTotal;
    const prepay = total * window.DATA.prepayRate;
    return { room, nights, roomTotal, extrasTotal, total, prepay, rest: total - prepay };
  }

  /* ============================================================
     Язык и навигация
     ============================================================ */
  function initLang() {
    window.Lang.apply();
    $$('.lang-btn').forEach((btn) =>
      btn.addEventListener('click', () => window.Lang.set(btn.dataset.lang))
    );
    document.addEventListener('langchange', () => {
      renderRooms();
      renderActivities();
      renderBookingSummary();
      renderChatQuick();
    });
  }

  function initNav() {
    const burger = $('#burger');
    const nav = $('#nav');
    burger.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      burger.setAttribute('aria-expanded', String(open));
    });
    $$('.nav__link').forEach((l) =>
      l.addEventListener('click', () => {
        nav.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
      })
    );
  }

  /* ============================================================
     Даты и поиск номеров
     ============================================================ */
  function initDates() {
    const ci = $('#checkin');
    const co = $('#checkout');
    const today = new Date();
    const inTwoWeeks = new Date(today);
    inTwoWeeks.setDate(today.getDate() + 14);
    const plusTwo = new Date(inTwoWeeks);
    plusTwo.setDate(inTwoWeeks.getDate() + 2);

    ci.min = toISO(today);
    co.min = toISO(today);
    ci.value = toISO(inTwoWeeks);
    co.value = toISO(plusTwo);
    state.checkin = ci.value;
    state.checkout = co.value;

    ci.addEventListener('change', () => {
      if (!ci.value) return;
      co.min = ci.value;
      if (co.value && co.value <= ci.value) {
        const next = parseISO(ci.value);
        next.setDate(next.getDate() + 1);
        co.value = toISO(next);
      }
      applyDates();
    });
    co.addEventListener('change', applyDates);
    $('#guests').addEventListener('change', (e) => {
      state.guests = Number(e.target.value);
      applyDates();
    });
    $('#btnFindRooms').addEventListener('click', () => {
      applyDates();
      $('#roomsGrid').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  }

  function applyDates() {
    const ci = $('#checkin').value;
    const co = $('#checkout').value;
    const grid = $('#roomsGrid');

    if (!ci || !co) {
      grid.innerHTML = `<p class="muted">${T('ui.selectDates')}</p>`;
      return;
    }
    if (nightsBetween(ci, co) <= 0) {
      grid.innerHTML = `<p class="muted">${T('ui.badDates')}</p>`;
      return;
    }
    state.checkin = ci;
    state.checkout = co;
    state.guests = Number($('#guests').value);

    // выбранный номер мог стать недоступен
    if (state.roomId) {
      const r = roomById(state.roomId);
      if (!r || !isRoomFree(r) || r.capacity < state.guests) state.roomId = null;
    }
    renderRooms();
    renderBookingSummary();
  }

  /* ============================================================
     Рендер номеров
     ============================================================ */
  function renderRooms() {
    const grid = $('#roomsGrid');
    const rooms = window.DATA.rooms.filter((r) => r.capacity >= state.guests);
    const nights = state.checkin && state.checkout ? nightsBetween(state.checkin, state.checkout) : 0;

    const available = rooms.filter(isRoomFree);
    if (!available.length) {
      grid.innerHTML = `<p class="muted">${T('ui.noRooms')}</p>`;
      return;
    }

    grid.innerHTML = rooms
      .map((room) => {
        const free = isRoomFree(room);
        const selected = state.roomId === room.id;
        const total = nights > 0 ? room.price * nights : 0;
        return `
          <article class="card room-card${selected ? ' room-card--selected' : ''}">
            <div class="room-card__img" style="background:${room.grad}"></div>
            <h3>${loc(room.title)}</h3>
            <div class="room-card__meta">
              <span>👥 ${T('ui.guestsUpTo', { n: room.capacity })}</span>
            </div>
            <p class="muted">${loc(room.desc)}</p>
            <div class="room-card__tags">
              ${loc(room.tags).map((t) => `<span class="tag">${t}</span>`).join('')}
            </div>
            ${miniCalendar(room)}
            <div class="room-card__price">
              ${fmtMoney(room.price)} <span>${T('ui.perNight')}</span>
            </div>
            ${nights > 0 ? `<div class="muted">${pluralNights(nights)} · ${fmtMoney(total)}</div>` : ''}
            <div class="room-card__actions">
              <span class="room-card__status room-card__status--${free ? 'free' : 'busy'}">
                ${free ? '● ' + T('ui.free') : '● ' + T('ui.busy')}
              </span>
              ${
                free
                  ? `<button class="btn ${selected ? 'btn--secondary' : 'btn--primary'}" data-room="${room.id}" style="margin-left:auto">
                       ${selected ? T('ui.selected') + ' ✓' : T('ui.book')}
                     </button>`
                  : ''
              }
            </div>
          </article>`;
      })
      .join('');

    $$('[data-room]', grid).forEach((btn) =>
      btn.addEventListener('click', () => {
        state.roomId = btn.dataset.room;
        renderRooms();
        renderBookingSummary();
        $('#booking').scrollIntoView({ behavior: 'smooth' });
      })
    );
  }

  /* Мини-календарь на 14 дней от даты заезда */
  function miniCalendar(room) {
    if (!state.checkin) return '';
    const start = parseISO(state.checkin);
    start.setDate(start.getDate() - 2);
    const selected = new Set(
      state.checkin && state.checkout ? eachDate(state.checkin, state.checkout) : []
    );
    let cells = '';
    for (let i = 0; i < 14; i++) {
      const d = new Date(start);
      d.setDate(start.getDate() + i);
      const iso = toISO(d);
      const busy = window.DATA.isRoomBusy(room.id, iso);
      const cls = selected.has(iso) ? 'sel' : busy ? 'busy' : '';
      cells += `<span class="${cls}" title="${iso}">${d.getDate()}</span>`;
    }
    return `<div class="mini-calendar" aria-hidden="true">${cells}</div>`;
  }

  /* ============================================================
     Рендер досуга
     ============================================================ */
  function renderActivities() {
    const grid = $('#activitiesGrid');
    grid.innerHTML = window.DATA.activities
      .map((a) => {
        const added = state.extras.has(a.id);
        const unitLabel =
          a.unit === 'hour'
            ? `${a.duration} ${T('ui.hours')}`
            : a.unit === 'person'
            ? `1 ${T('ui.person')}`
            : `${a.duration} ${T('ui.hours')}`;
        return `
          <article class="card activity-card">
            <div class="activity-card__img" style="background:${a.grad}"></div>
            <h3>${loc(a.title)}</h3>
            <p>${loc(a.desc)}</p>
            <div class="activity-card__meta">
              <span>⏱ ${unitLabel}</span>
              <span class="activity-card__price">${fmtMoney(a.price)}</span>
            </div>
            <button class="btn ${added ? 'btn--secondary' : 'btn--ghost'} btn--block" data-act="${a.id}">
              ${added ? T('ui.added') : T('ui.add')}
            </button>
          </article>`;
      })
      .join('');

    $$('[data-act]', grid).forEach((btn) =>
      btn.addEventListener('click', () => {
        const id = btn.dataset.act;
        state.extras.has(id) ? state.extras.delete(id) : state.extras.add(id);
        renderActivities();
        renderBookingSummary();
      })
    );
  }

  /* ============================================================
     Сводка брони и форма
     ============================================================ */
  function renderBookingSummary() {
    const box = $('#bookingSummary');
    const form = $('#bookingForm');
    const totals = calcTotals();

    if (!totals) {
      box.textContent = T('booking.empty');
      form.hidden = true;
      return;
    }

    const extrasList = [...state.extras]
      .map((id) => {
        const a = window.DATA.activities.find((x) => x.id === id);
        if (!a) return '';
        const sum = a.unit === 'person' ? a.price * state.guests : a.price;
        return `<li>${loc(a.title)} — ${fmtMoney(sum)}</li>`;
      })
      .join('');

    box.innerHTML = `
      <div class="summary">
        <p class="summary__room"><strong>${loc(totals.room.title)}</strong></p>
        <p class="muted">${fmtDate(state.checkin)} — ${fmtDate(state.checkout)} · ${pluralNights(
      totals.nights
    )} · ${state.guests} 👥</p>
        <div class="summary__lines">
          <div><span>${loc(totals.room.title)} × ${pluralNights(totals.nights)}</span><span>${fmtMoney(
      totals.roomTotal
    )}</span></div>
          ${
            extrasList
              ? `<div class="summary__extras"><span>${T('ui.extras')}</span><ul>${extrasList}</ul></div>`
              : ''
          }
          <div class="summary__total"><span>${T('ui.total')}</span><span>${fmtMoney(totals.total)}</span></div>
          <div class="summary__prepay"><span>${T('ui.prepay')}</span><span>${fmtMoney(totals.prepay)}</span></div>
          <div class="muted"><span>${T('ui.rest')}</span><span>${fmtMoney(totals.rest)}</span></div>
        </div>
      </div>`;

    form.hidden = false;
    $('#bookingResult').hidden = true;
  }

  /* ============================================================
     Демо-оплата и создание брони
     ============================================================ */
  function initBookingForm() {
    $('#bookingForm').addEventListener('submit', (e) => {
      e.preventDefault();
      const totals = calcTotals();
      if (!totals) return;

      const btn = e.target.querySelector('button[type="submit"]');
      const label = btn.textContent;
      btn.disabled = true;
      btn.textContent = T('ui.processing');

      // Симуляция обращения к платёжному шлюзу (Kaspi / EPay / Stripe)
      setTimeout(() => {
        const booking = {
          code: makeCode(),
          name: $('#fio').value.trim(),
          phone: normalizePhone($('#phone').value),
          email: $('#email').value.trim(),
          comment: $('#comment').value.trim(),
          roomId: state.roomId,
          roomTitle: loc(totals.room.title),
          from: state.checkin,
          to: state.checkout,
          guests: state.guests,
          extras: [...state.extras],
          total: totals.total,
          prepay: totals.prepay,
          rest: totals.rest,
          method: $('input[name="pay"]:checked').value,
          marketing: $('#marketing').checked,
          status: 'confirmed',
          createdAt: new Date().toISOString(),
        };

        saveBooking(booking);
        showResult(booking);
        sendWhatsApp(booking);

        btn.disabled = false;
        btn.textContent = label;
      }, 1200);
    });

    $('#btnCopyCode').addEventListener('click', async (e) => {
      const code = $('#resCode').textContent;
      try {
        await navigator.clipboard.writeText(code);
        e.target.textContent = T('ui.copied');
        setTimeout(() => (e.target.textContent = T('result.copy')), 1800);
      } catch {
        /* clipboard недоступен — код и так на экране */
      }
    });
  }

  function makeCode() {
    const n = Math.floor(1000 + Math.random() * 9000);
    return `BRB-${new Date().getFullYear()}-${n}`;
  }

  const normalizePhone = (p) => p.replace(/[^\d+]/g, '');

  function saveBooking(b) {
    const all = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    all.push(b);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
  }

  function showResult(b) {
    $('#bookingForm').hidden = true;
    $('#bookingSummary').innerHTML = '';
    const res = $('#bookingResult');
    res.hidden = false;
    $('#resCode').textContent = b.code;
    $('#resDetails').innerHTML = `
      ${b.roomTitle} · ${fmtDate(b.from)} — ${fmtDate(b.to)} · ${b.guests} 👥<br/>
      ${T('ui.prepay')}: <strong>${fmtMoney(b.prepay)}</strong> · ${T('ui.rest')}: ${fmtMoney(b.rest)}`;
    $('#btn2gisLink').href = mapLinks().gis;
    res.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  /* ============================================================
     Моя бронь (PRD 6.3)
     ============================================================ */
  function initMyBooking() {
    $('#btnFindMy').addEventListener('click', () => {
      const phone = normalizePhone($('#myPhone').value);
      const code = $('#myCode').value.trim().toUpperCase();
      const box = $('#myResult');
      box.hidden = false;

      const all = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
      const found = all.find(
        (b) => b.code.toUpperCase() === code && b.phone.slice(-7) === phone.slice(-7)
      );

      if (!found) {
        box.innerHTML = `<span class="muted">${T('ui.notFound')}</span>`;
        return;
      }

      const statusKey = {
        pending: 'ui.statusPending',
        confirmed: 'ui.statusConfirmed',
        done: 'ui.statusDone',
        cancelled: 'ui.statusCancelled',
      }[found.status];

      box.innerHTML = `
        <p class="status status--${found.status}">${T(statusKey)}</p>
        <p><strong>${found.roomTitle}</strong></p>
        <p>${fmtDate(found.from)} — ${fmtDate(found.to)} · ${found.guests} 👥</p>
        <p>${T('ui.paid')}: ${fmtMoney(found.prepay)}<br/>${T('ui.rest')}: ${fmtMoney(found.rest)}</p>
        <p class="mono">${found.code}</p>`;
    });
  }

  /* ============================================================
     Карта и маршруты (PRD 6.6)
     ============================================================ */
  function mapLinks() {
    const { lat, lng, name } = window.DATA.venue;
    return {
      gis: `https://2gis.kz/geo/${lng},${lat}`,
      google: `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`,
      yandex: `https://yandex.ru/maps/?rtext=~${lat},${lng}&rtt=auto&text=${encodeURIComponent(name)}`,
    };
  }

  function initMap() {
    const l = mapLinks();
    $('#btn2gis').href = l.gis;
    $('#btnGoogle').href = l.google;
    $('#btnYandex').href = l.yandex;
  }

  /* ============================================================
     Заявка на обратный звонок (PRD 6.4)
     ============================================================ */
  function initRequestForm() {
    $('#requestForm').addEventListener('submit', (e) => {
      e.preventDefault();
      const msg = $('#requestMsg');
      msg.hidden = false;
      msg.textContent = T('ui.reqSent');
      e.target.reset();
      setTimeout(() => (msg.hidden = true), 6000);
    });
  }

  /* ============================================================
     WhatsApp-симуляция (PRD 6.7)
     ============================================================ */
  function sendWhatsApp(b) {
    const text = T('ui.waConfirm', {
      name: b.name || '—',
      code: b.code,
      room: b.roomTitle,
      from: fmtDate(b.from),
      to: fmtDate(b.to),
      guests: b.guests,
      prepay: new Intl.NumberFormat('ru-RU').format(Math.round(b.prepay)),
      rest: new Intl.NumberFormat('ru-RU').format(Math.round(b.rest)),
      link: mapLinks().gis,
    });

    const time = new Date().toLocaleTimeString(LOCALES[window.Lang.current] || 'ru-RU', {
      hour: '2-digit',
      minute: '2-digit',
    });

    $('#toastBody').innerHTML = `
      <div class="wa-bubble">${escapeHtml(text).replace(
        /(https?:\/\/\S+)/g,
        '<a href="$1" target="_blank" rel="noopener">$1</a>'
      )}<span class="wa-time">${time} ✓✓</span></div>`;
    $('#toast').hidden = false;
  }

  function initToast() {
    const toast = $('#toast');
    $('#toastClose').addEventListener('click', () => (toast.hidden = true));
    toast.addEventListener('click', (e) => {
      if (e.target === toast) toast.hidden = true;
    });
  }

  const escapeHtml = (s) =>
    s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  /* ============================================================
     ИИ-помощник (PRD 6.8)
     ============================================================ */
  function initChat() {
    const fab = $('#chatFab');
    const chat = $('#chat');
    let greeted = false;

    const open = () => {
      chat.hidden = false;
      fab.hidden = true;
      if (!greeted) {
        addMsg(loc(window.DATA.chatGreeting), 'bot');
        greeted = true;
      }
      $('#chatText').focus();
    };
    const close = () => {
      chat.hidden = true;
      fab.hidden = false;
    };

    fab.addEventListener('click', open);
    $('#chatClose').addEventListener('click', close);

    $('#chatForm').addEventListener('submit', (e) => {
      e.preventDefault();
      const input = $('#chatText');
      const text = input.value.trim();
      if (!text) return;
      input.value = '';
      ask(text);
    });

    renderChatQuick();
  }

  function renderChatQuick() {
    const box = $('#chatQuick');
    if (!box) return;
    box.innerHTML = loc(window.DATA.quickQuestions)
      .map((q) => `<button class="quick-btn" type="button">${q}</button>`)
      .join('');
    $$('.quick-btn', box).forEach((b) => b.addEventListener('click', () => ask(b.textContent)));
  }

  function ask(text) {
    addMsg(text, 'user');
    const typing = addMsg('…', 'bot');
    setTimeout(() => {
      typing.textContent = answerFor(text);
      $('#chatBody').scrollTop = $('#chatBody').scrollHeight;
    }, 550);
  }

  function answerFor(question) {
    const q = question.toLowerCase();
    const lang = window.Lang.current;

    // Вопрос про конкретную активность — отвечаем её карточкой, а не общим прайсом.
    // Сравниваем по основам всех значимых слов названия, берём самое длинное совпадение.
    const GENERIC = ['активности', 'activities', 'белсенділіктер'];
    let act = null;
    let actScore = 0;
    for (const a of window.DATA.activities) {
      let score = 0;
      for (const title of Object.values(a.title)) {
        for (const word of title.toLowerCase().split(/[\s-]+/)) {
          if (word.length < 4 || GENERIC.includes(word)) continue;
          const stem = word.length > 5 ? word.slice(0, -2) : word;
          if (q.includes(stem)) score += stem.length;
        }
      }
      if (score > actScore) {
        actScore = score;
        act = a;
      }
    }
    if (act) {
      const unit =
        act.unit === 'hour'
          ? `/${T('ui.hours')}`
          : act.unit === 'person'
          ? `/${T('ui.person')}`
          : '';
      return `${loc(act.title)} — ${fmtMoney(act.price)}${unit}. ${loc(act.desc)}`;
    }

    let best = null;
    let bestScore = 0;

    for (const item of window.DATA.faq) {
      const keys = [...(item.keys[lang] || []), ...(item.keys.ru || []), ...(item.keys.en || [])];
      let score = 0;
      for (const k of keys) if (q.includes(k.toLowerCase())) score += k.length;
      if (score > bestScore) {
        bestScore = score;
        best = item;
      }
    }
    return best ? loc(best.a) : loc(window.DATA.chatFallback);
  }

  function addMsg(text, who) {
    const body = $('#chatBody');
    const el = document.createElement('div');
    el.className = `msg msg--${who}`;
    el.textContent = text;
    body.appendChild(el);
    body.scrollTop = body.scrollHeight;
    return el;
  }

  /* ============================================================
     Аналитика воронки (заглушка, PRD 7)
     ============================================================ */
  function track(event, payload) {
    // В MVP — Google Analytics / Яндекс.Метрика
    if (window.console && window.location.search.includes('debug')) {
      console.log('[analytics]', event, payload || {});
    }
  }

  /* ============================================================
     Старт
     ============================================================ */
  document.addEventListener('DOMContentLoaded', () => {
    initLang();
    initNav();
    initDates();
    renderRooms();
    renderActivities();
    renderBookingSummary();
    initBookingForm();
    initMyBooking();
    initMap();
    initRequestForm();
    initToast();
    initChat();
    track('page_view');
  });
})();
