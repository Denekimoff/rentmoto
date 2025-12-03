export type ButtonType = {
  text?: string
  onClick?: () => void
}

export type ImageType = Array<string>

export type NavListDataType = {
  section: string
  text: string
}

export type RouteDataType = {
  title: string
  price: string
  time: string
  distance: string
  rate: string
  route: string
  image: ImageType
}

export type OfferDataType = {
  logo: string
  title: string
  description: string
}

export type GalleryDataType = Array<string>

export type OurPersonsDataType = {
  name: string
  job: string
  avatar: string
}

export type ConditionsDataType = Array<string>

export type SalesDataType = {
  image: string
  title: string
  description: string
}

export type ExtraDataType = {
  text: string
  src: string
}

export type ContactsDataType = {
  text: string
  href: string
}

export type SocialDataType = {
  alt: string
  href: string
  src: string
}

export type DataStateType = {
  navListData: Array<NavListDataType>
  offerData: Array<OfferDataType>
  routesData: Array<RouteDataType>
  galleryData: GalleryDataType
  ourPersonsData: Array<OurPersonsDataType>
  conditionsData: ConditionsDataType
  salesData: Array<SalesDataType>
  extraData: Array<ExtraDataType>
  contactsData: Array<ContactsDataType>
  socialData: Array<SocialDataType>
}

export type BookingStateType = {
  selectedRoute: string | null
  isModalOpen: boolean
}

export type CallMeStateType = {
  selectedText: string
  isModalOpen: boolean
}

export type StoreStatesType = {
  data: DataStateType
  booking: BookingStateType
  setSelectedRoute: (route: string) => void
  openBookingModal: () => void
  closeBookingModal: () => void
  callMe: CallMeStateType
  setSelectedText: (text: string) => void
  openCallMeModal: () => void
  closeCallMeModal: () => void
}

export type FormDataType = {
  name: string
  phone: string
  telegram: string
  bookingDate: string
}
export type FormCallMeType = {
  name: string
  phone: string
}

export type FormErrorsType = {
  name?: string
  phone?: string
  telegram?: string
  bookingDate?: string
}
