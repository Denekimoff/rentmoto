import React from 'react'
import Banner from '../components/Banner'
import Offer from '../components/Offer'
import Routes from '../components/Routes'
import Testing from '../components/Testing'
import Gallery from '../components/Gallery'
import OurPerson from '../components/OurPerson'
import Conditions from '../components/Conditions'
import Sales from '../components/Sales'
import Gift from '../components/Gift'
import Contacts from '../components/Contacts'
import Extra from '../components/Extra'
import '../styles/home.css'

export default function Home() {
  return (
    <div className='home'>
      <Banner />
      <Offer />
      <Routes />
      <Testing />
      <Gallery />
      <OurPerson />
      <Conditions />
      <Sales />
      <Gift/>
      <Extra/>
      <Contacts/>
    </div>
  )
}
