import React from 'react'
import Navbar from '../../components/navbar/navbar'
import './about.css'
import { useNavigate } from 'react-router-dom'

export default function About() {
  const navigate = useNavigate();

  const handlePlusClick = () => {
    navigate('/add-about');
  }
  return (
    <div className='main-container'>
      <div>
        <Navbar />
      </div>
      <div className="content-abt">
        <div className="one">
          <img className='test-img' src="Images\Ellipse 2.png" alt="" />
          <div className='test-text'>
            <span className='Title'>Rafael R</span>
            <span className='Subtitle'>#Customer Service Rep #plumber</span>
            <span className='paragraph'>Dedicated Customer Service Representative dedicated to providing quality care for ultimate customer satisfaction. Proven ability to establish and maintain excellent communication and relationships with clients. Adept in general accounting and finance transactions.</span>
            <button className='primary small-btn cta'>Contact Me</button>
          </div>
        </div>
        <div className="one">
          <img className='test-img' src="Images\Ellipse 3.png" alt="" />
          <div className='test-text'>
            <span className='Title'>Rafael R</span>
            <span className='Subtitle'>#Customer Service Rep #plumber</span>
            <span className='paragraph'>Dedicated Customer Service Representative dedicated to providing quality care for ultimate customer satisfaction. Proven ability to establish and maintain excellent communication and relationships with clients. Adept in general accounting and finance transactions.</span><button className='primary small-btn cta'>Contact Me</button>
          </div>

        </div>
        <div className="one">
          <img className='test-img' src="Images\Ellipse 4.png" alt="" />
          <div className='test-text'>
            <span className='Title'>Rafael R</span>
            <span className='Subtitle'>#Customer Service Rep #plumber</span>
            <span className='paragraph'>Dedicated Customer Service Representative dedicated to providing quality care for ultimate customer satisfaction. Proven ability to establish and maintain excellent communication and relationships with clients. Adept in general accounting and finance transactions.</span><button className='primary small-btn cta'>Contact Me</button>
          </div>

        </div>
      </div>
      <div className="plus" onClick={handlePlusClick} >
        <svg width="108" height="108" viewBox="0 0 108 108" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_324_4505)">
            <circle cx="54" cy="50" r="50" fill="#A7A0FC" />
          </g>
          <path d="M17.9141 13.9141H90.5158V86.5157H17.9141V13.9141Z" fill="white" fill-opacity="0.01" />
          <path d="M54.307 29.0391L54.2515 71.39" stroke="black" stroke-width="6.05014" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M33.0386 50.2148H75.3896" stroke="black" stroke-width="6.05014" stroke-linecap="round" stroke-linejoin="round" />
          <defs>
            <filter id="filter0_d_324_4505" x="0" y="0" width="108" height="108" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_324_4505" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_324_4505" result="shape" />
            </filter>
          </defs>
        </svg>

      </div>

    </div>
  )
}
