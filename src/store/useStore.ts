import { createStore } from 'zustand'
import { StoreStatesType } from '../types/types'

const storeStates = createStore<StoreStatesType>()((set) => ({
  data: {
    navListData: [
      {
        section: 'routes',
        text: 'МАРШРУТЫ',
        title: 'Перейти к секции Маршруты',
      },
      {
        section: 'gallery',
        text: 'ГАЛЕРЕЯ',
        title: 'Перейти к секции Галерея',
      },
      {
        section: 'sales',
        text: 'АКЦИИ',
        title: 'Перейти к секции Акции',
      },
      {
        section: 'contacts',
        text: 'КОНТАКТЫ',
        title: 'Перейти к секции Контакты',
      },
    ],
    offerData: [
      {
        logo: '/1.svg',
        title: 'Увлекательные экскурсии',
        description: 'Маршруты от лесных дорожек до полного бездорожья!',
      },
      {
        logo: '/2.svg',
        title: 'Надежная техника',
        description: '15 квадроциклов всех японских брендов',
      },
      {
        logo: '/3.svg',
        title: 'Экипировка бесплатно',
        description: 'Необходимая экипировка выдается бесплатно',
      },
      {
        logo: '/4.svg',
        title: 'Опытные инструктора',
        description: 'Обеспечат полную безопасность Вашего отдыха',
      },
    ],
    routesData: [
      {
        title: 'БАЗОВЫЙ',
        price: '160',
        time: '1,5 - 2 часа',
        distance: '20 - 25 км',
        rate: '3',
        route:
          'Смотровая - Родник - Камень Джигита - Адербиевка - Гора Нексис - Грозовые Ворота - Шашлыки - Цыгельский водопад (чаша любви) - Форсаж',
        image: ['/base-route-1.webp', '/base-route-2.webp'],
      },
      {
        title: 'РАСШИРЕННЫЙ',
        price: '630',
        time: '6 - 8 часов',
        distance: '60 - 70 км',
        rate: '4',
        route:
          'Смотровая - Родник - Камень Джигита - Адербиевка - Гора Нексис - Грозовые Ворота - Шашлыки - Цыгельский водопад (чаша любви) - Форсаж',
        image: ['/long-route-1.webp', '/long-route-2.webp'],
      },
      {
        title: 'ПРОДВИНУТЫЙ',
        price: '320',
        time: '4 часа',
        distance: '40 - 50 км',
        rate: '5',
        route: 'Форсаж - Голубая бухта – Заброшенная Тур База – Сухогруз Рио - Форсаж',
        image: ['/expirience-route-1.webp', '/expirience-route-2.webp'],
      },
    ],
    galleryData: [
      '/gallery1.webp',
      '/gallery2.webp',
      '/gallery3.webp',
      '/gallery1.webp',
      '/gallery2.webp',
      '/gallery3.webp',
    ],
    ourPersonsData: [
      {
        name: 'Юлиана',
        job: 'руководитель',
        avatar: '/ourperson1.webp',
      },
      {
        name: 'Максим',
        job: 'старший инструктор',
        avatar: '/ourperson4.webp',
      },
      {
        name: 'Кристина',
        job: 'администратор',
        avatar: '/ourperson3.webp',
      },
      {
        name: 'Юрий',
        job: 'старший механик',
        avatar: '/ourperson2.webp',
      },
    ],
    conditionsData: [
      'При прокате или аренде строго соблюдать правила техники безопасности и все требования инструктора!',
      'К управлению НЕ ДОПУСКАЮТСЯ лица младше 16 лет и лица в алкогольном опьянении!',
      'Распивать спиртные напитки во время проката, аренды ЗАПРЕЩЕНО! (После? На ваше усмотрение)',
      'Управление осуществляйте в меру своих сил и возможностей. Не переоценивайте себя! Это опасно!!!',
      'Перед каждым катанием опытный инструктор научит Вас основам управления и будет сопровождать на протяжении всего маршрута.',
      'При прокате или аренде строго соблюдать правила техники безопасности и все требования инструктора!',
    ],
    salesData: [
      {
        image: '/sales-1.webp',
        title: ' 15%',
        description: 'в честь Дня Рождения - дарим имениннику скидку 15%',
      },
      {
        image: '/sales-2.webp',
        title: ' 10%',
        description: 'дарим скидку 10% на первую поездку!',
      },
    ],
    extraData: [
      {
        text: 'Эвакуация, ремонт квадроциклов',
        src: '/extra-1.webp',
        alt: 'Фото 1',
      },
      {
        text: 'Транспортировка техники',
        src: '/extra-2.webp',
        alt: 'Фото 2',
      },
      {
        text: 'Заправка, чекап, мойка',
        src: '/extra-3.webp',
        alt: 'Фото 3',
      },
      {
        text: 'Индивидуальные маршруты',
        src: '/extra-4.webp',
        alt: 'Фото 4',
      },
    ],
    contactsData: [
      {
        text: '+375 (29) 123-45-67',
        href: 'tel:+375298734927',
        label: 'Позвонить на телефон',
      },
      {
        text: 'rent-moto@gmail.com',
        href: 'mailto:ekimoffdenis@gmail.com',
        label: 'Отправить email',
      },
      {
        text: 'Минск, улица Западная 19а',
        href: 'https://yandex.by/maps/org/kvadromototsentr/108734637626/?utm_medium=mapframe&utm_source=maps',
        label: 'Проложить маршрут в Яндекс навигаторе',
      },
    ],
    socialData: [
      {
        alt: 'Telegram',
        href: 'https://t.me/@ekmvdn',
        src: '/social-telegram.svg',
        label: 'Написать в Telegram',
      },
      {
        alt: 'Instagram',
        href: 'https://www.instagram.com/',
        src: '/social-instagram.svg',
        label: 'Написать в Instagram',
      },
      {
        alt: 'Whatsapp',
        href: 'https://www.whatsapp.com/?lang=ru',
        src: '/social-whatsapp.svg',
        label: 'Написать в Whatsapp',
      },
    ],
  },
  booking: {
    selectedRoute: null,
    isModalOpen: false,
  },
  setSelectedRoute: (route: string) =>
    set((state) => ({
      booking: {
        ...state.booking,
        selectedRoute: route,
      },
    })),
  openBookingModal: () =>
    set((state) => ({
      booking: {
        ...state.booking,
        isModalOpen: true,
      },
    })),
  closeBookingModal: () =>
    set((state) => ({
      booking: {
        ...state.booking,
        selectedRoute: null,
        isModalOpen: false,
      },
    })),
  callMe: {
    selectedText: '',
    isModalOpen: false,
  },
  setSelectedText: (text: string) =>
    set((state) => ({
      callMe: {
        ...state.callMe,
        selectedText: text,
      },
    })),
  openCallMeModal: () =>
    set((state) => ({
      callMe: {
        ...state.callMe,
        isModalOpen: true,
      },
    })),
  closeCallMeModal: () =>
    set((state) => ({
      callMe: {
        ...state.callMe,
        selectedText: '',
        isModalOpen: false,
      },
    })),
}))

export default storeStates
