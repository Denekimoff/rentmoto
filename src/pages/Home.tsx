import { lazy } from 'react'
import Banner from '../components/Banner'
import Offer from '../components/Offer'
import Routes from '../components/Routes'
import Testing from '../components/Testing'
const LazyGallery = lazy(() => import('../components/Gallery'))
const LazyOurPerson = lazy(() => import('../components/OurPerson'))
const LazyConditions = lazy(() => import('../components/Conditions'))
const LazySales = lazy(() => import('../components/Sales'))
const LazyGift = lazy(() => import('../components/Gift'))
const LazyExtra = lazy(() => import('../components/Extra'))
const LazyContacts = lazy(() => import('../components/Contacts'))
const LazyCallMeModal = lazy(() => import('../components/CallMeModal'))
import '../styles/home.css'

export default function Home() {
  return (
    <div className="home">
      <Banner />
      <Offer />
      <Routes />
      <Testing />
      <LazyGallery />
      <LazyOurPerson />
      <LazyConditions />
      <LazySales />
      <LazyGift />
      <LazyExtra />
      <LazyContacts />
      <LazyCallMeModal />
    </div>
  )
}
