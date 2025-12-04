import React from 'react'
import { Routes, Route } from 'react-router-dom'
import App from '../App'
import Home from '../pages/Home'
import About from '../pages/About'

export default function RouterComponent() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  )
}
