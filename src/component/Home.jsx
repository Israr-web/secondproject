import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Slider from './Slider'
import Whyshop from './whyshop'
import Ourproduct from './Ourproduct'

export default function Home() {
  return (
    <div>

      <Slider/>
      <Whyshop/>
      <Ourproduct/>
    
      </div>
  )
}
