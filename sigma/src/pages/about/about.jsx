import React from 'react'
import Navbar from '../../components/navbar/navbar'
import './about.css'

export default function About() {
  return (
    <div className='main-container'>
        <div>
            <Navbar />
        </div>
        <div className="content">
            <div className="one">
                image and description
            </div>
            <div className="two">
                image and description
            </div>
            <div className="three">
                image and description
            </div>
        </div>
        <div className="plus">
            logo of plus
        </div>
      
    </div>
  )
}
