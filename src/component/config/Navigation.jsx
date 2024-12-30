import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home'
import About from '../About'
import Contact from '../Contact'
import Man from '../Man'
import Ourproduct from '../Ourproduct'

export default function navigation() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/product" element={<Ourproduct />} />

      <Route path="/man" element={<Man />} />

    </Routes>

  )
}
