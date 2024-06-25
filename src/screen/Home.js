import React from 'react'
import Navbar from '../component/Navbar'
import Footerr from '../component/Footerr'
import Card from '../component/Card'
import Carousel from '../component/Carousel'

export default function Home() {
  return (
    <div >
      <div><Navbar /></div>
      <div><Carousel /></div>
      <div className='horizontal-cards m-3'>
        <div className='card-wrapper'>
          <Card />
        </div>
        <div className='card-wrapper'>
          <Card />
        </div>
        <div className='card-wrapper'>
          <Card />
        </div>
        <div className='card-wrapper'>
          <Card />
        </div>
      </div>
      <div className='horizontal-cards m-3'>
        <div className='card-wrapper'>
          <Card />
        </div>
        <div className='card-wrapper'>
          <Card />
        </div>
        <div className='card-wrapper'>
          <Card />
        </div>
        <div className='card-wrapper'>
          <Card />
        </div>
      </div>
      <div><Footerr /></div>
    </div>
  )
}
