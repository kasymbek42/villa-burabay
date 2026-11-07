/* ============================================================
   i18n — RU (основной) / KZ / EN
   Ключи совпадают с data-i18n в index.html
   ============================================================ */
window.I18N = {
  ru: {
    'nav.about': 'О зоне',
    'nav.rooms': 'Номера',
    'nav.activities': 'Досуг',
    'nav.location': 'Как добраться',
    'nav.booking': 'Забронировать',

    'hero.eyebrow': 'Бурабай · Казахстан',
    'hero.title': 'Тишина сосен.<br/>Отражение гор в озере.<br/>Ваш отдых — в одном клике.',
    'hero.subtitle': 'Экологичная зона отдыха на берегу. Бронируйте номер онлайн, оплачивайте аванс и получайте подтверждение в WhatsApp за минуту.',
    'hero.cta1': 'Забронировать номер',
    'hero.cta2': 'Чем заняться',
    'hero.trust1': 'рейтинг гостей',
    'hero.trust2': 'ИИ-помощник',
    'hero.trust3': 'до подтверждения',

    'about.title': 'О зоне отдыха',
    'about.lead': '«Вилла де Бурабай» — небольшая экологичная зона отдыха в сосновом бору на берегу озера. Мы бережём тишину, чистоту и атмосферу — чтобы вы выдохнули.',
    'about.f1t': 'Сосновый бор',
    'about.f1d': 'Номера и домики прячутся среди вековых сосен — воздух, который хочется запомнить.',
    'about.f2t': 'Озеро в 2 минутах',
    'about.f2d': 'Собственный спуск к воде, песчаный пляж, прокат сапов и лодок.',
    'about.f3t': 'Баня на дровах',
    'about.f3d': 'Настоящая русская баня с купелью — расслабление после горных маршрутов.',
    'about.f4t': 'Конные прогулки',
    'about.f4d': 'Маршруты с инструктором по сосновым тропам — для новичков и опытных.',

    'gallery.title': 'Атмосфера Бурабая',
    'gallery.g1': 'Озеро на рассвете',
    'gallery.g2': 'Сосновый бор',
    'gallery.g3': 'Гора Болектай',
    'gallery.g4': 'Баня у купели',
    'gallery.g5': 'Конные тропы',
    'gallery.g6': 'Зимний Бурабай',

    'rooms.title': 'Свободные номера',
    'rooms.lead': 'Выберите даты заезда и выезда — покажем свободные номера и рассчитаем аванс.',

    'booking.checkin': 'Заезд',
    'booking.checkout': 'Выезд',
    'booking.guests': 'Гостей',
    'booking.find': 'Найти номера',
    'booking.title': 'Бронирование',
    'booking.empty': 'Выберите номер выше, чтобы начать бронирование.',
    'booking.pay': 'Оплатить аванс и забронировать',

    'calendar.free': 'свободно',
    'calendar.busy': 'занято',
    'calendar.selected': 'вы выбрали',

    'activities.title': 'Чем заняться в Бурабае',
    'activities.lead': 'Активности можно добавить к брони или заказать отдельно — администратор подтвердит время.',

    'form.fio': 'ФИО',
    'form.phone': 'Телефон (WhatsApp)',
    'form.comment': 'Комментарий',
    'form.agree': 'Согласен с условиями проживания и обработкой персональных данных',
    'form.marketing': 'Хочу получать уведомления об акциях в WhatsApp',

    'pay.title': 'Аванс 30%',
    'pay.desc': 'Демонстрационный платёж — списания не будет.',

    'result.title': 'Бронь подтверждена',
    'result.code': 'Код брони',
    'result.note': 'Мы отправили подтверждение и маршрут 2GIS в ваш WhatsApp (симуляция).',
    'result.copy': 'Скопировать код',

    'my.title': 'Моя бронь',
    'my.lead': 'Уже бронировали? Введите телефон и код брони.',
    'my.code': 'Код брони',
    'my.find': 'Найти бронь',

    'loc.title': 'Как добраться',
    'loc.fromAstana': 'Из Астаны',
    'loc.fromAstanaD': '~250 км, 3 часа по трассе Астана–Щучинск. Удобнее всего на автомобиле или нашем трансфере.',
    'loc.transfer': 'Трансфер',
    'loc.transferD': 'Организуем трансфер от Щучинска, Кокшетау или Астаны. Укажите при бронировании.',
    'loc.coords': 'Координаты',

    'contact.title': 'Остались вопросы?',
    'contact.lead': 'Оставьте заявку — перезвоним в течение 15 минут в рабочее время или ответьте ИИ-помощнику сразу.',
    'contact.send': 'Перезвоните мне',

    'footer.tag': 'Экологичный отдых на берегу озера',
    'footer.contacts': 'Контакты',
    'footer.docs': 'Документы',
    'footer.rules': 'Правила проживания',
    'footer.privacy': 'Политика конфиденциальности',
    'footer.offer': 'Публичная оферта',
    'footer.demo': 'Демо-версия по PRD · 2026 · Оплата и уведомления — симуляция',

    'chat.title': 'ИИ-помощник Бурабай',
    'chat.online': 'онлайн · отвечает мгновенно',

    // Динамические строки (JS)
    'ui.nights': 'ночей',
    'ui.night': 'ночь',
    'ui.perNight': 'за ночь',
    'ui.guestsUpTo': 'до {n} гостей',
    'ui.free': 'Свободно',
    'ui.busy': 'Занято на эти даты',
    'ui.book': 'Забронировать',
    'ui.selected': 'Выбрано',
    'ui.selectDates': 'Укажите даты заезда и выезда',
    'ui.badDates': 'Дата выезда должна быть позже даты заезда',
    'ui.pastDate': 'Нельзя выбрать прошедшую дату',
    'ui.noRooms': 'На выбранные даты свободных номеров нет. Попробуйте другие даты или напишите ИИ-помощнику.',
    'ui.summary': '{room}, {nights} · {guests} гостей · {from} — {to}',
    'ui.total': 'Итого',
    'ui.prepay': 'Аванс к оплате сейчас',
    'ui.paid': 'Оплачен аванс',
    'ui.rest': 'Остаток при заселении',
    'ui.add': 'Добавить к брони',
    'ui.added': 'Добавлено ✓',
    'ui.processing': 'Обрабатываем платёж…',
    'ui.copied': 'Код скопирован',
    'ui.reqSent': 'Заявка принята! Перезвоним в течение 15 минут.',
    'ui.notFound': 'Бронь не найдена. Проверьте телефон и код брони.',
    'ui.statusPending': 'Ожидает оплаты',
    'ui.statusConfirmed': 'Подтверждена',
    'ui.statusDone': 'Завершена',
    'ui.statusCancelled': 'Отменена',
    'ui.min': 'мин',
    'ui.hours': 'ч',
    'ui.person': 'чел.',
    'ui.extras': 'Досуг',
    'ui.waConfirm': 'Вилла де Бурабай 🌲\n\nЗдравствуйте, {name}!\nВаша бронь подтверждена ✅\n\nКод брони: {code}\nНомер: {room}\nЗаезд: {from} (с 14:00)\nВыезд: {to} (до 12:00)\nГостей: {guests}\n\nОплачен аванс: {prepay} ₸\nК оплате при заселении: {rest} ₸\n\nМаршрут в 2GIS: {link}\n\nЖдём вас! По вопросам — отвечаем здесь.',
  },

  kz: {
    'nav.about': 'Аймақ туралы',
    'nav.rooms': 'Нөмірлер',
    'nav.activities': 'Демалыс',
    'nav.location': 'Қалай жетуге болады',
    'nav.booking': 'Брондау',

    'hero.eyebrow': 'Бурабай · Қазақстан',
    'hero.title': 'Қарағай тыныштығы.<br/>Көлдегі таулар көрінісі.<br/>Демалысыңыз — бір басуда.',
    'hero.subtitle': 'Көл жағасындағы экологиялық демалыс аймағы. Нөмірді онлайн брондаңыз, аванс төлеп, WhatsApp арқылы бір минутта растау алыңыз.',
    'hero.cta1': 'Нөмір брондау',
    'hero.cta2': 'Немен айналысуға болады',
    'hero.trust1': 'қонақтар рейтингі',
    'hero.trust2': 'ЖИ-көмекші',
    'hero.trust3': 'растауға дейін',

    'about.title': 'Демалыс аймағы туралы',
    'about.lead': '«Вилла де Бурабай» — көл жағасындағы қарағайлы ормандағы шағын экологиялық демалыс аймағы. Біз тыныштықты, тазалықты және атмосфераны сақтаймыз.',
    'about.f1t': 'Қарағайлы орман',
    'about.f1d': 'Нөмірлер мен үйшіктер ғасырлық қарағайлар арасында жасырынған — есте қаларлық ауа.',
    'about.f2t': 'Көл 2 минутта',
    'about.f2d': 'Суға өз түсуіміз, құмды жағажай, сап пен қайық жалдау.',
    'about.f3t': 'Отын моншасы',
    'about.f3d': 'Нағыз орыс моншасы — тау маршруттарынан кейінгі демалыс.',
    'about.f4t': 'Атпен серуендеу',
    'about.f4d': 'Нұсқаушымен қарағай соқпақтарындағы маршруттар — жаңадан бастаушылар мен тәжірибелілерге.',

    'gallery.title': 'Бурабай атмосферасы',
    'gallery.g1': 'Таңертеңгі көл',
    'gallery.g2': 'Қарағайлы орман',
    'gallery.g3': 'Бөлектау тауы',
    'gallery.g4': 'Монша',
    'gallery.g5': 'Ат соқпақтары',
    'gallery.g6': 'Қысқы Бурабай',

    'rooms.title': 'Бос нөмірлер',
    'rooms.lead': 'Келу және кету күндерін таңдаңыз — бос нөмірлерді көрсетіп, авансты есептейміз.',

    'booking.checkin': 'Келу',
    'booking.checkout': 'Кету',
    'booking.guests': 'Қонақтар',
    'booking.find': 'Нөмір табу',
    'booking.title': 'Брондау',
    'booking.empty': 'Брондауды бастау үшін жоғарыдан нөмір таңдаңыз.',
    'booking.pay': 'Аванс төлеп, брондау',

    'calendar.free': 'бос',
    'calendar.busy': 'бос емес',
    'calendar.selected': 'сіз таңдадыңыз',

    'activities.title': 'Бурабайда немен айналысуға болады',
    'activities.lead': 'Белсенділіктерді бронға қосуға немесе бөлек тапсырыс беруге болады.',

    'form.fio': 'Аты-жөні',
    'form.phone': 'Телефон (WhatsApp)',
    'form.comment': 'Пікір',
    'form.agree': 'Тұру шарттарымен және дербес деректерді өңдеумен келісемін',
    'form.marketing': 'WhatsApp-та акциялар туралы хабарлама алғым келеді',

    'pay.title': 'Аванс 30%',
    'pay.desc': 'Демонстрациялық төлем — ақша шегерілмейді.',

    'result.title': 'Брон расталды',
    'result.code': 'Брон коды',
    'result.note': 'Растауды және 2GIS маршрутын WhatsApp-қа жібердік (симуляция).',
    'result.copy': 'Кодты көшіру',

    'my.title': 'Менің броным',
    'my.lead': 'Брондағансыз ба? Телефон мен брон кодын енгізіңіз.',
    'my.code': 'Брон коды',
    'my.find': 'Бронды табу',

    'loc.title': 'Қалай жетуге болады',
    'loc.fromAstana': 'Астанадан',
    'loc.fromAstanaD': '~250 км, Астана–Щучинск тас жолымен 3 сағат. Автокөлікпен немесе трансферімізбен ыңғайлы.',
    'loc.transfer': 'Трансфер',
    'loc.transferD': 'Щучинск, Көкшетау немесе Астанадан трансфер ұйымдастырамыз.',
    'loc.coords': 'Координаттар',

    'contact.title': 'Сұрақтарыңыз бар ма?',
    'contact.lead': 'Өтінім қалдырыңыз — жұмыс уақытында 15 минут ішінде қайта қоңырау шаламыз.',
    'contact.send': 'Маған қоңырау шалыңыз',

    'footer.tag': 'Көл жағасындағы экологиялық демалыс',
    'footer.contacts': 'Байланыс',
    'footer.docs': 'Құжаттар',
    'footer.rules': 'Тұру ережелері',
    'footer.privacy': 'Құпиялылық саясаты',
    'footer.offer': 'Жария оферта',
    'footer.demo': 'PRD бойынша демо-нұсқа · 2026 · Төлем мен хабарламалар — симуляция',

    'chat.title': 'Бурабай ЖИ-көмекшісі',
    'chat.online': 'онлайн · бірден жауап береді',

    'ui.nights': 'түн',
    'ui.night': 'түн',
    'ui.perNight': 'бір түнге',
    'ui.guestsUpTo': '{n} қонаққа дейін',
    'ui.free': 'Бос',
    'ui.busy': 'Бұл күндерге бос емес',
    'ui.book': 'Брондау',
    'ui.selected': 'Таңдалды',
    'ui.selectDates': 'Келу және кету күндерін көрсетіңіз',
    'ui.badDates': 'Кету күні келу күнінен кейін болуы керек',
    'ui.pastDate': 'Өткен күнді таңдауға болмайды',
    'ui.noRooms': 'Таңдалған күндерге бос нөмір жоқ. Басқа күндерді байқап көріңіз.',
    'ui.summary': '{room}, {nights} · {guests} қонақ · {from} — {to}',
    'ui.total': 'Барлығы',
    'ui.prepay': 'Қазір төленетін аванс',
    'ui.paid': 'Төленген аванс',
    'ui.rest': 'Орналасқанда қалғаны',
    'ui.add': 'Бронға қосу',
    'ui.added': 'Қосылды ✓',
    'ui.processing': 'Төлемді өңдеудеміз…',
    'ui.copied': 'Код көшірілді',
    'ui.reqSent': 'Өтінім қабылданды! 15 минут ішінде қоңырау шаламыз.',
    'ui.notFound': 'Брон табылмады. Телефон мен кодты тексеріңіз.',
    'ui.statusPending': 'Төлемді күтуде',
    'ui.statusConfirmed': 'Расталды',
    'ui.statusDone': 'Аяқталды',
    'ui.statusCancelled': 'Болдырылмады',
    'ui.min': 'мин',
    'ui.hours': 'сағ',
    'ui.person': 'адам',
    'ui.extras': 'Демалыс',
    'ui.waConfirm': 'Вилла де Бурабай 🌲\n\nСәлеметсіз бе, {name}!\nБроныңыз расталды ✅\n\nБрон коды: {code}\nНөмір: {room}\nКелу: {from} (14:00-ден)\nКету: {to} (12:00-ге дейін)\nҚонақтар: {guests}\n\nТөленген аванс: {prepay} ₸\nОрналасқанда төленеді: {rest} ₸\n\n2GIS маршруты: {link}\n\nСіздерді күтеміз!',
  },

  en: {
    'nav.about': 'About',
    'nav.rooms': 'Rooms',
    'nav.activities': 'Activities',
    'nav.location': 'Getting here',
    'nav.booking': 'Book now',

    'hero.eyebrow': 'Burabay · Kazakhstan',
    'hero.title': 'Silence of the pines.<br/>Mountains mirrored in the lake.<br/>Your escape — one click away.',
    'hero.subtitle': 'An eco-friendly lakeside retreat. Book online, pay the deposit and get your WhatsApp confirmation within a minute.',
    'hero.cta1': 'Book a room',
    'hero.cta2': 'Things to do',
    'hero.trust1': 'guest rating',
    'hero.trust2': 'AI assistant',
    'hero.trust3': 'to confirmation',

    'about.title': 'About the retreat',
    'about.lead': 'Villa de Burabay is a small eco-friendly retreat in a pine forest on the lakeshore. We protect the quiet, the cleanliness and the atmosphere — so you can breathe out.',
    'about.f1t': 'Pine forest',
    'about.f1d': 'Rooms and cabins tucked among century-old pines — air you will remember.',
    'about.f2t': 'Lake 2 minutes away',
    'about.f2d': 'Private path to the water, sandy beach, SUP and boat rental.',
    'about.f3t': 'Wood-fired banya',
    'about.f3d': 'A real Russian banya with a plunge tub — recovery after the mountain trails.',
    'about.f4t': 'Horse riding',
    'about.f4d': 'Guided routes along pine trails — for beginners and experienced riders alike.',

    'gallery.title': 'The feel of Burabay',
    'gallery.g1': 'Lake at sunrise',
    'gallery.g2': 'Pine forest',
    'gallery.g3': 'Bolektau hill',
    'gallery.g4': 'Banya and plunge tub',
    'gallery.g5': 'Horse trails',
    'gallery.g6': 'Burabay in winter',

    'rooms.title': 'Available rooms',
    'rooms.lead': 'Pick your check-in and check-out dates — we will show what is free and calculate the deposit.',

    'booking.checkin': 'Check-in',
    'booking.checkout': 'Check-out',
    'booking.guests': 'Guests',
    'booking.find': 'Find rooms',
    'booking.title': 'Booking',
    'booking.empty': 'Pick a room above to start booking.',
    'booking.pay': 'Pay deposit and book',

    'calendar.free': 'available',
    'calendar.busy': 'booked',
    'calendar.selected': 'your dates',

    'activities.title': 'Things to do in Burabay',
    'activities.lead': 'Activities can be added to your booking or ordered separately — our team confirms the time.',

    'form.fio': 'Full name',
    'form.phone': 'Phone (WhatsApp)',
    'form.comment': 'Comment',
    'form.agree': 'I agree to the house rules and the processing of my personal data',
    'form.marketing': 'Send me offers and news on WhatsApp',

    'pay.title': '30% deposit',
    'pay.desc': 'Demo payment — no money will be charged.',

    'result.title': 'Booking confirmed',
    'result.code': 'Booking code',
    'result.note': 'We sent the confirmation and the 2GIS route to your WhatsApp (simulated).',
    'result.copy': 'Copy code',

    'my.title': 'My booking',
    'my.lead': 'Booked already? Enter your phone and booking code.',
    'my.code': 'Booking code',
    'my.find': 'Find booking',

    'loc.title': 'Getting here',
    'loc.fromAstana': 'From Astana',
    'loc.fromAstanaD': '~250 km, 3 hours along the Astana–Shchuchinsk highway. Easiest by car or with our transfer.',
    'loc.transfer': 'Transfer',
    'loc.transferD': 'We arrange transfers from Shchuchinsk, Kokshetau or Astana. Just mention it when booking.',
    'loc.coords': 'Coordinates',

    'contact.title': 'Still have questions?',
    'contact.lead': 'Leave a request — we call back within 15 minutes during working hours, or ask the AI assistant right now.',
    'contact.send': 'Call me back',

    'footer.tag': 'Eco-friendly lakeside retreat',
    'footer.contacts': 'Contacts',
    'footer.docs': 'Documents',
    'footer.rules': 'House rules',
    'footer.privacy': 'Privacy policy',
    'footer.offer': 'Public offer',
    'footer.demo': 'Demo built from the PRD · 2026 · Payments and notifications are simulated',

    'chat.title': 'Burabay AI assistant',
    'chat.online': 'online · replies instantly',

    'ui.nights': 'nights',
    'ui.night': 'night',
    'ui.perNight': 'per night',
    'ui.guestsUpTo': 'up to {n} guests',
    'ui.free': 'Available',
    'ui.busy': 'Booked for these dates',
    'ui.book': 'Book',
    'ui.selected': 'Selected',
    'ui.selectDates': 'Please choose check-in and check-out dates',
    'ui.badDates': 'Check-out must be after check-in',
    'ui.pastDate': 'You cannot pick a past date',
    'ui.noRooms': 'No rooms available for these dates. Try other dates or ask the AI assistant.',
    'ui.summary': '{room}, {nights} · {guests} guests · {from} — {to}',
    'ui.total': 'Total',
    'ui.prepay': 'Deposit due now',
    'ui.paid': 'Deposit paid',
    'ui.rest': 'Balance on arrival',
    'ui.add': 'Add to booking',
    'ui.added': 'Added ✓',
    'ui.processing': 'Processing payment…',
    'ui.copied': 'Code copied',
    'ui.reqSent': 'Request received! We will call you back within 15 minutes.',
    'ui.notFound': 'Booking not found. Check the phone number and the code.',
    'ui.statusPending': 'Awaiting payment',
    'ui.statusConfirmed': 'Confirmed',
    'ui.statusDone': 'Completed',
    'ui.statusCancelled': 'Cancelled',
    'ui.min': 'min',
    'ui.hours': 'h',
    'ui.person': 'person',
    'ui.extras': 'Activities',
    'ui.waConfirm': 'Villa de Burabay 🌲\n\nHello, {name}!\nYour booking is confirmed ✅\n\nBooking code: {code}\nRoom: {room}\nCheck-in: {from} (from 2 PM)\nCheck-out: {to} (until 12 PM)\nGuests: {guests}\n\nDeposit paid: {prepay} ₸\nDue on arrival: {rest} ₸\n\n2GIS route: {link}\n\nSee you soon!',
  },
};

/* --------- Публичный API --------- */
window.Lang = {
  current: localStorage.getItem('vdb_lang') || 'ru',

  t(key, vars) {
    const dict = window.I18N[this.current] || window.I18N.ru;
    let s = dict[key] ?? window.I18N.ru[key] ?? key;
    if (vars) {
      for (const [k, v] of Object.entries(vars)) s = s.replaceAll(`{${k}}`, v);
    }
    return s;
  },

  apply() {
    document.documentElement.lang = this.current === 'kz' ? 'kk' : this.current;
    document.body.dataset.lang = this.current;
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const val = this.t(el.dataset.i18n);
      if (val.includes('<')) el.innerHTML = val;
      else el.textContent = val;
    });
    document.querySelectorAll('.lang-btn').forEach((b) => {
      b.classList.toggle('active', b.dataset.lang === this.current);
    });
  },

  set(lang) {
    this.current = lang;
    localStorage.setItem('vdb_lang', lang);
    this.apply();
    document.dispatchEvent(new CustomEvent('langchange', { detail: lang }));
  },
};
