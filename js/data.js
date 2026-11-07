/* ============================================================
   Демо-данные прототипа: номерной фонд, досуг, занятость, FAQ
   В MVP заменяется реальным API / админ-панелью
   ============================================================ */

window.DATA = {
  /* Координаты и ссылки на карты */
  venue: {
    name: 'Вилла де Бурабай',
    lat: 53.0833,
    lng: 70.3,
    address: 'Казахстан, Акмолинская обл., Бурабай',
    phone: '+7 700 123-45-67',
  },

  /* Доля аванса — настраивается (PRD 6.5) */
  prepayRate: 0.3,

  /* Номерной фонд */
  rooms: [
    {
      id: 'eco-std',
      grad: 'linear-gradient(160deg,#9fc6a8,#3f6b4d)',
      capacity: 2,
      price: 28000,
      title: { ru: 'Эко-номер «Сосна»', kz: 'Эко-нөмір «Қарағай»', en: 'Eco room "Pine"' },
      desc: {
        ru: 'Уютный номер с видом на бор, двуспальная кровать, душ, чайная станция.',
        kz: 'Орманға көрінісі бар жайлы нөмір, екі орындық төсек, душ, шай станциясы.',
        en: 'A cosy room facing the forest, double bed, shower, tea station.',
      },
      tags: {
        ru: ['Wi-Fi', 'Душ', 'Завтрак', 'Вид на лес'],
        kz: ['Wi-Fi', 'Душ', 'Таңғы ас', 'Орман көрінісі'],
        en: ['Wi-Fi', 'Shower', 'Breakfast', 'Forest view'],
      },
    },
    {
      id: 'lake-view',
      grad: 'linear-gradient(160deg,#9cc8d6,#3c6f86)',
      capacity: 3,
      price: 42000,
      title: { ru: 'Номер «Озеро»', kz: '«Көл» нөмірі', en: 'Lake room' },
      desc: {
        ru: 'Панорамное окно на озеро, балкон, двуспальная кровать + диван.',
        kz: 'Көлге панорамалық терезе, балкон, екі орындық төсек + диван.',
        en: 'Panoramic lake window, balcony, double bed plus sofa.',
      },
      tags: {
        ru: ['Wi-Fi', 'Балкон', 'Завтрак', 'Вид на озеро'],
        kz: ['Wi-Fi', 'Балкон', 'Таңғы ас', 'Көл көрінісі'],
        en: ['Wi-Fi', 'Balcony', 'Breakfast', 'Lake view'],
      },
    },
    {
      id: 'family-cabin',
      grad: 'linear-gradient(160deg,#c9a06b,#7a5a34)',
      capacity: 5,
      price: 65000,
      title: { ru: 'Семейный домик', kz: 'Отбасылық үйшік', en: 'Family cabin' },
      desc: {
        ru: 'Отдельный деревянный домик: две спальни, кухня, терраса с мангалом.',
        kz: 'Жеке ағаш үйшік: екі жатын бөлме, ас үй, мангалы бар терраса.',
        en: 'Standalone wooden cabin: two bedrooms, kitchen, terrace with a grill.',
      },
      tags: {
        ru: ['Кухня', 'Мангал', 'Терраса', '2 спальни'],
        kz: ['Ас үй', 'Мангал', 'Терраса', '2 жатын бөлме'],
        en: ['Kitchen', 'Grill', 'Terrace', '2 bedrooms'],
      },
    },
    {
      id: 'lux-banya',
      grad: 'linear-gradient(160deg,#b08968,#4e3620)',
      capacity: 4,
      price: 88000,
      title: { ru: 'Люкс с баней', kz: 'Моншасы бар люкс', en: 'Suite with banya' },
      desc: {
        ru: 'Просторный люкс с собственной баней на дровах и купелью во дворе.',
        kz: 'Жеке отын моншасы және аулада күбісі бар кең люкс.',
        en: 'Spacious suite with a private wood-fired banya and an outdoor plunge tub.',
      },
      tags: {
        ru: ['Своя баня', 'Купель', 'Камин', 'Завтрак'],
        kz: ['Жеке монша', 'Күбі', 'Камин', 'Таңғы ас'],
        en: ['Private banya', 'Plunge tub', 'Fireplace', 'Breakfast'],
      },
    },
    {
      id: 'glamping',
      grad: 'linear-gradient(160deg,#d9d2c0,#8a8068)',
      capacity: 2,
      price: 22000,
      title: { ru: 'Глэмпинг-шатёр', kz: 'Глэмпинг шатыры', en: 'Glamping tent' },
      desc: {
        ru: 'Утеплённый шатёр с настоящей кроватью и печкой — ночёвка в лесу с комфортом.',
        kz: 'Нағыз төсегі мен пеші бар жылытылған шатыр — орманда жайлы түнеу.',
        en: 'Insulated tent with a real bed and a stove — a night in the forest, done comfortably.',
      },
      tags: {
        ru: ['Печка', 'Завтрак', 'Общий душ'],
        kz: ['Пеш', 'Таңғы ас', 'Ортақ душ'],
        en: ['Stove', 'Breakfast', 'Shared shower'],
      },
    },
    {
      id: 'lux-lake-house',
      grad: 'linear-gradient(160deg,#7fa4b6,#35566b)',
      capacity: 6,
      price: 120000,
      title: { ru: 'Дом у воды', kz: 'Су жағасындағы үй', en: 'Lakeside house' },
      desc: {
        ru: 'Два этажа, три спальни, панорамная гостиная и собственный выход к озеру.',
        kz: 'Екі қабат, үш жатын бөлме, панорамалық қонақ бөлме және көлге жеке шығу.',
        en: 'Two floors, three bedrooms, panoramic living room and private lake access.',
      },
      tags: {
        ru: ['3 спальни', 'Выход к озеру', 'Кухня', 'Камин'],
        kz: ['3 жатын бөлме', 'Көлге шығу', 'Ас үй', 'Камин'],
        en: ['3 bedrooms', 'Lake access', 'Kitchen', 'Fireplace'],
      },
    },
  ],

  /* Виды досуга (PRD 6.2) */
  activities: [
    {
      id: 'boat',
      grad: 'linear-gradient(160deg,#9cc8d6,#3c6f86)',
      price: 12000,
      unit: 'hour',
      duration: 1,
      title: { ru: 'Прогулка на катере', kz: 'Катермен серуендеу', en: 'Boat trip' },
      desc: {
        ru: 'Часовая прогулка по озеру с остановкой у скалы Жумбактас.',
        kz: 'Жұмбақтас жартасының жанында аялдамасы бар бір сағаттық серуен.',
        en: 'An hour on the lake with a stop by the Zhumbaktas rock.',
      },
    },
    {
      id: 'horse',
      grad: 'linear-gradient(160deg,#a8895f,#5e4426)',
      price: 9000,
      unit: 'hour',
      duration: 1.5,
      title: { ru: 'Конная прогулка', kz: 'Атпен серуендеу', en: 'Horse ride' },
      desc: {
        ru: 'Маршрут с инструктором по сосновым тропам, подходит новичкам.',
        kz: 'Нұсқаушымен қарағай соқпақтары, жаңадан бастаушыларға жарайды.',
        en: 'Guided route along the pine trails, suitable for beginners.',
      },
    },
    {
      id: 'banya',
      grad: 'linear-gradient(160deg,#c9a06b,#7a5a34)',
      price: 25000,
      unit: 'session',
      duration: 3,
      title: { ru: 'Баня на дровах', kz: 'Отын моншасы', en: 'Wood-fired banya' },
      desc: {
        ru: 'Три часа в бане с купелью, вениками и травяным чаем.',
        kz: 'Күбісі, сыпырғысы және шөп шайы бар моншада үш сағат.',
        en: 'Three hours in the banya with a plunge tub, birch whisks and herbal tea.',
      },
    },
    {
      id: 'fishing',
      grad: 'linear-gradient(160deg,#8fb6a0,#3f6b4d)',
      price: 15000,
      unit: 'session',
      duration: 4,
      title: { ru: 'Рыбалка', kz: 'Балық аулау', en: 'Fishing' },
      desc: {
        ru: 'Утренняя рыбалка со снастями и лодкой, улов готовим на месте.',
        kz: 'Құрал-жабдық пен қайығы бар таңғы балық аулау.',
        en: 'Morning fishing with gear and a boat; we cook your catch on site.',
      },
    },
    {
      id: 'bike',
      grad: 'linear-gradient(160deg,#b6c9b0,#57705a)',
      price: 4000,
      unit: 'hour',
      duration: 1,
      title: { ru: 'Велопрокат', kz: 'Велосипед жалдау', en: 'Bike rental' },
      desc: {
        ru: 'Горные велосипеды со шлемами и картой маршрутов по бору.',
        kz: 'Дулығалары мен маршрут картасы бар тау велосипедтері.',
        en: 'Mountain bikes with helmets and a map of forest routes.',
      },
    },
    {
      id: 'hike',
      grad: 'linear-gradient(160deg,#9fc6a8,#3f6b4d)',
      price: 7000,
      unit: 'person',
      duration: 4,
      title: { ru: 'Поход на Окжетпес', kz: 'Оқжетпеске жорық', en: 'Okzhetpes hike' },
      desc: {
        ru: 'Пеший маршрут с гидом: Окжетпес и смотровая на горе Болектай.',
        kz: 'Гидпен жаяу маршрут: Оқжетпес және Бөлектау бақылау алаңы.',
        en: 'Guided hike: Okzhetpes rock and the Bolektau viewpoint.',
      },
    },
    {
      id: 'sup',
      grad: 'linear-gradient(160deg,#9cc8d6,#4f8ba3)',
      price: 5000,
      unit: 'hour',
      duration: 1,
      title: { ru: 'Сап-борд', kz: 'Сап-борд', en: 'SUP board' },
      desc: {
        ru: 'Сапы с жилетами, инструктаж для начинающих включён.',
        kz: 'Жилеттері бар саптар, жаңадан бастаушыларға нұсқаулық кіреді.',
        en: 'SUP boards with vests; a beginner briefing is included.',
      },
    },
    {
      id: 'winter',
      grad: 'linear-gradient(160deg,#dcebf0,#7fa4b6)',
      price: 11000,
      unit: 'session',
      duration: 2,
      title: { ru: 'Зимние активности', kz: 'Қысқы белсенділіктер', en: 'Winter activities' },
      desc: {
        ru: 'Снегоходы, коньки на озере, тюбинг и глинтвейн у костра.',
        kz: 'Қарлы мотоциклдер, көлдегі коньки, тюбинг және от басында глинтвейн.',
        en: 'Snowmobiles, skating on the lake, tubing and mulled wine by the fire.',
      },
    },
  ],

  /* Занятость: детерминированная псевдослучайная «загрузка» по номеру и дате.
     В MVP — реальный календарь из админ-панели. */
  isRoomBusy(roomId, dateStr) {
    let h = 0;
    const s = roomId + dateStr;
    for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
    // Люкс и дом у воды заняты чаще, глэмпинг — реже
    const load = roomId === 'lux-banya' || roomId === 'lux-lake-house' ? 42 : roomId === 'glamping' ? 18 : 28;
    return h % 100 < load;
  },

  /* База знаний ИИ-помощника (PRD 6.8) */
  faq: [
    {
      id: 'price',
      keys: {
        ru: ['цена', 'сколько стоит', 'стоимость', 'прайс', 'дорого', 'тариф'],
        kz: ['баға', 'қанша тұрады', 'құны', 'прайс'],
        en: ['price', 'cost', 'how much', 'rate'],
      },
      q: { ru: 'Сколько стоит проживание?', kz: 'Тұру қанша тұрады?', en: 'How much does a stay cost?' },
      a: {
        ru: 'Номера — от 22 000 ₸ за ночь (глэмпинг-шатёр) до 120 000 ₸ (дом у воды). Эко-номер «Сосна» — 28 000 ₸, номер «Озеро» — 42 000 ₸, семейный домик — 65 000 ₸, люкс с баней — 88 000 ₸. Завтрак включён в большинство категорий. Точную сумму и аванс покажет калькулятор при выборе дат.',
        kz: 'Нөмірлер — түнге 22 000 ₸-ден (глэмпинг шатыры) 120 000 ₸-ге дейін (су жағасындағы үй). «Қарағай» эко-нөмірі — 28 000 ₸, «Көл» нөмірі — 42 000 ₸, отбасылық үйшік — 65 000 ₸, моншасы бар люкс — 88 000 ₸. Көп санатта таңғы ас кіреді.',
        en: 'Rooms range from 22,000 ₸ per night (glamping tent) to 120,000 ₸ (lakeside house). The "Pine" eco room is 28,000 ₸, the Lake room 42,000 ₸, the family cabin 65,000 ₸, the suite with banya 88,000 ₸. Breakfast is included in most categories.',
      },
    },
    {
      id: 'included',
      keys: {
        ru: ['включено', 'входит', 'завтрак', 'питание', 'еда', 'кормят', 'ресторан'],
        kz: ['кіреді', 'таңғы ас', 'тамақ', 'мейрамхана'],
        en: ['included', 'breakfast', 'food', 'meals', 'restaurant'],
      },
      q: { ru: 'Что включено в проживание?', kz: 'Тұруға не кіреді?', en: 'What is included?' },
      a: {
        ru: 'В стоимость входят: завтрак (кроме глэмпинга по запросу), Wi-Fi, парковка, постельное бельё и полотенца, доступ к пляжу и зоне костра. Обед и ужин — в нашем кафе или на мангале у домика. Досуг (баня, катер, кони) оплачивается отдельно.',
        kz: 'Бағаға кіреді: таңғы ас, Wi-Fi, тұрақ, төсек-орын және сүлгілер, жағажай мен от аймағына кіру. Түскі және кешкі ас — кафеде немесе үйшік жанындағы мангалда. Демалыс түрлері бөлек төленеді.',
        en: 'Included: breakfast, Wi-Fi, parking, linen and towels, beach access and the fire pit area. Lunch and dinner are served in our cafe or at your cabin grill. Activities (banya, boat, horses) are charged separately.',
      },
    },
    {
      id: 'route',
      keys: {
        ru: ['добраться', 'доехать', 'дорога', 'маршрут', 'трансфер', 'астана', 'как найти', 'адрес'],
        kz: ['жету', 'жол', 'маршрут', 'трансфер', 'астана', 'мекенжай'],
        en: ['get there', 'route', 'directions', 'transfer', 'astana', 'address', 'how to reach'],
      },
      q: { ru: 'Как до вас добраться?', kz: 'Сізге қалай жетуге болады?', en: 'How do I get to you?' },
      a: {
        ru: 'Мы в Бурабае, ~250 км от Астаны (около 3 часов по трассе Астана–Щучинск). На машине — удобнее всего, парковка бесплатная. Организуем трансфер от Щучинска, Кокшетау или Астаны — укажите при бронировании. Готовый маршрут в 2GIS придёт в WhatsApp вместе с подтверждением брони.',
        kz: 'Біз Бурабайдамыз, Астанадан ~250 км (Астана–Щучинск тас жолымен шамамен 3 сағат). Автокөлікпен ыңғайлы, тұрақ тегін. Щучинск, Көкшетау немесе Астанадан трансфер ұйымдастырамыз. 2GIS маршруты брон растауымен бірге WhatsApp-қа келеді.',
        en: 'We are in Burabay, about 250 km from Astana (roughly 3 hours via the Astana–Shchuchinsk highway). Driving is easiest and parking is free. We can arrange a transfer from Shchuchinsk, Kokshetau or Astana — just mention it when booking. A ready 2GIS route arrives on WhatsApp with your confirmation.',
      },
    },
    {
      id: 'checkin',
      keys: {
        ru: ['заезд', 'выезд', 'время заезда', 'во сколько', 'ранний', 'поздний'],
        kz: ['келу', 'кету', 'сағат', 'ерте', 'кеш'],
        en: ['check-in', 'check out', 'what time', 'early', 'late'],
      },
      q: { ru: 'Во сколько заезд и выезд?', kz: 'Келу және кету сағаты?', en: 'What are check-in and check-out times?' },
      a: {
        ru: 'Заезд с 14:00, выезд до 12:00. Ранний заезд и поздний выезд — по возможности и бесплатно, если номер свободен; напишите нам заранее или укажите в комментарии к брони.',
        kz: 'Келу 14:00-ден, кету 12:00-ге дейін. Ерте келу және кеш кету — нөмір бос болса, тегін; алдын ала жазыңыз.',
        en: 'Check-in from 2 PM, check-out until 12 PM. Early check-in and late check-out are free when the room is free — just let us know in advance or note it in your booking comment.',
      },
    },
    {
      id: 'pets',
      keys: {
        ru: ['животн', 'питомц', 'собак', 'кошк', 'с собакой'],
        kz: ['жануар', 'ит', 'мысық'],
        en: ['pet', 'dog', 'cat', 'animal'],
      },
      q: { ru: 'Можно с питомцем?', kz: 'Үй жануарымен бола ма?', en: 'Can I bring a pet?' },
      a: {
        ru: 'Да, в семейные домики и дом у воды можно с питомцем — доплата 5 000 ₸ за весь период уборки. В номерах основного корпуса и глэмпинге, к сожалению, нельзя. Просим предупредить заранее.',
        kz: 'Иә, отбасылық үйшіктер мен су жағасындағы үйге жануармен болады — тазалау үшін 5 000 ₸ қосымша төлем. Негізгі корпус нөмірлерінде және глэмпингте болмайды.',
        en: 'Yes — pets are welcome in the family cabins and the lakeside house, with a 5,000 ₸ cleaning surcharge. Unfortunately not in the main building rooms or the glamping tents. Please let us know in advance.',
      },
    },
    {
      id: 'cancel',
      keys: {
        ru: ['отмен', 'возврат', 'вернут деньги', 'перенос', 'аванс'],
        kz: ['болдырмау', 'қайтару', 'ауыстыру', 'аванс'],
        en: ['cancel', 'refund', 'reschedule', 'deposit'],
      },
      q: { ru: 'Условия отмены и возврата?', kz: 'Болдырмау және қайтару шарттары?', en: 'What is the cancellation policy?' },
      a: {
        ru: 'При бронировании оплачивается аванс 30%. Бесплатная отмена — за 7 дней до заезда, аванс возвращается полностью. От 7 до 2 дней — возвращаем 50%. Менее 48 часов — аванс не возвращается, но дату можно перенести один раз в течение сезона. (Условия демо-прототипа, финальные уточняются.)',
        kz: 'Брондау кезінде 30% аванс төленеді. Тегін болдырмау — келуге 7 күн қалғанда, аванс толық қайтарылады. 7-2 күн аралығында — 50% қайтарамыз. 48 сағаттан аз — аванс қайтарылмайды, бірақ күнді маусым ішінде бір рет ауыстыруға болады.',
        en: 'A 30% deposit is paid at booking. Free cancellation up to 7 days before arrival — the deposit is fully refunded. Between 7 and 2 days — 50% refunded. Under 48 hours the deposit is non-refundable, but you may move the dates once within the season. (Demo terms; final policy to be confirmed.)',
      },
    },
    {
      id: 'activities',
      keys: {
        ru: ['досуг', 'занять', 'развлеч', 'активност', 'чем заняться', 'экскурс'],
        kz: ['демалыс', 'белсенділік', 'не істеуге'],
        en: ['activity', 'activities', 'things to do', 'excursion', 'entertainment'],
      },
      q: { ru: 'Чем заняться у вас?', kz: 'Сізде немен айналысуға болады?', en: 'What is there to do?' },
      a: {
        ru: 'Баня на дровах с купелью (25 000 ₸), прогулка на катере к Жумбактасу (12 000 ₸/час), конные прогулки (9 000 ₸), рыбалка с лодкой (15 000 ₸), сапы (5 000 ₸/час), велопрокат (4 000 ₸/час), поход на Окжетпес и Болектай с гидом (7 000 ₸/чел). Зимой — снегоходы, коньки и тюбинг. Всё можно добавить к брони на сайте.',
        kz: 'Күбісі бар отын моншасы (25 000 ₸), Жұмбақтасқа катермен серуен (сағатына 12 000 ₸), атпен серуендеу (9 000 ₸), қайықпен балық аулау (15 000 ₸), саптар (сағатына 5 000 ₸), велосипед (сағатына 4 000 ₸), Оқжетпес пен Бөлектауға жорық (адамына 7 000 ₸). Қыста — қарлы мотоциклдер, коньки, тюбинг.',
        en: 'Wood-fired banya with a plunge tub (25,000 ₸), boat trip to Zhumbaktas (12,000 ₸/hour), horse riding (9,000 ₸), fishing with a boat (15,000 ₸), SUP (5,000 ₸/hour), bike rental (4,000 ₸/hour), guided hike to Okzhetpes and Bolektau (7,000 ₸/person). In winter: snowmobiles, skating and tubing. All can be added to your booking.',
      },
    },
    {
      id: 'booking',
      keys: {
        ru: ['бронир', 'забронир', 'как заброн', 'свободн', 'есть места', 'номер свободен'],
        kz: ['брондау', 'бос орын', 'бос нөмір'],
        en: ['book', 'booking', 'available', 'free room', 'reserve'],
      },
      q: { ru: 'Как забронировать?', kz: 'Қалай брондауға болады?', en: 'How do I book?' },
      a: {
        ru: 'Выберите даты в блоке «Свободные номера» — система покажет, что свободно, и посчитает аванс 30%. Заполните имя, телефон WhatsApp и email, оплатите аванс — бронь сразу закрепляется за вами, а подтверждение с маршрутом придёт в WhatsApp. Проверить бронь потом можно в блоке «Моя бронь» по телефону и коду.',
        kz: '«Бос нөмірлер» бөлімінде күндерді таңдаңыз — жүйе бос нөмірлерді көрсетіп, 30% авансты есептейді. Аты, WhatsApp телефоны мен email толтырып, аванс төлеңіз — брон бірден сізге бекітіледі. Кейін «Менің броным» бөлімінен тексеруге болады.',
        en: 'Pick your dates in the "Available rooms" section — the site shows what is free and calculates the 30% deposit. Fill in your name, WhatsApp number and email, pay the deposit, and the room is locked to you; confirmation with the route arrives on WhatsApp. You can check it later under "My booking" using your phone and code.',
      },
    },
    {
      id: 'operator',
      keys: {
        ru: ['оператор', 'человек', 'менеджер', 'позвонить', 'связаться', 'телефон'],
        kz: ['оператор', 'адам', 'менеджер', 'қоңырау', 'телефон'],
        en: ['operator', 'human', 'manager', 'call', 'contact', 'phone'],
      },
      q: { ru: 'Хочу поговорить с человеком', kz: 'Адаммен сөйлескім келеді', en: 'I want to talk to a human' },
      a: {
        ru: 'Конечно. Позвоните +7 700 123-45-67 или оставьте заявку в блоке «Остались вопросы?» — администратор перезвонит в течение 15 минут в рабочее время (09:00–21:00). Также пишем в WhatsApp на этот же номер.',
        kz: 'Әрине. +7 700 123-45-67 нөміріне қоңырау шалыңыз немесе «Сұрақтарыңыз бар ма?» бөлімінде өтінім қалдырыңыз — әкімші жұмыс уақытында (09:00–21:00) 15 минут ішінде қайта қоңырау шалады.',
        en: 'Of course. Call +7 700 123-45-67 or leave a request in the "Still have questions?" section — an administrator calls back within 15 minutes during working hours (9 AM – 9 PM). We also reply on WhatsApp at the same number.',
      },
    },
  ],

  /* Быстрые кнопки чата */
  quickQuestions: {
    ru: ['Сколько стоит?', 'Как добраться?', 'Можно с питомцем?', 'Условия отмены', 'Чем заняться?'],
    kz: ['Қанша тұрады?', 'Қалай жетуге болады?', 'Жануармен бола ма?', 'Болдырмау шарттары', 'Немен айналысуға болады?'],
    en: ['How much?', 'How to get there?', 'Can I bring a pet?', 'Cancellation policy', 'Things to do'],
  },

  /* Приветствие и ответ-заглушка */
  chatGreeting: {
    ru: 'Здравствуйте! 🌲 Я помощник «Виллы де Бурабай». Спрошу коротко: что вас интересует — цены, свободные даты, дорога или досуг? Отвечаю круглосуточно.',
    kz: 'Сәлеметсіз бе! 🌲 Мен «Вилла де Бурабай» көмекшісімін. Сізді не қызықтырады — бағалар, бос күндер, жол немесе демалыс? Тәулік бойы жауап беремін.',
    en: 'Hello! 🌲 I am the Villa de Burabay assistant. What are you after — prices, free dates, directions or activities? I am here around the clock.',
  },

  chatFallback: {
    ru: 'Не уверен, что понял вопрос. Могу рассказать про цены, что включено, как добраться, заезд и выезд, питомцев, условия отмены и виды досуга. Если нужен живой человек — позвоните +7 700 123-45-67, перезвоним в течение 15 минут.',
    kz: 'Сұрақты толық түсінбедім. Бағалар, не кіретіні, жол, келу-кету, жануарлар, болдырмау шарттары және демалыс туралы айта аламын. Тірі адам керек болса — +7 700 123-45-67.',
    en: 'I am not sure I understood. I can help with prices, what is included, directions, check-in and check-out, pets, cancellation terms and activities. If you need a human — call +7 700 123-45-67 and we will ring you back within 15 minutes.',
  },
};
