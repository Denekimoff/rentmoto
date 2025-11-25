import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import Header from './components/Header'
import './App.css'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
