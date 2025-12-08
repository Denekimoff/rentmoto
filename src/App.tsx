import { lazy } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import './App.css'
const LazyFooter = lazy(() => import('./components/Footer'))

export default function App() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <LazyFooter />
    </div>
  )
}
