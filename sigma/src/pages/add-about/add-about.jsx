import React from 'react'
import Navbar from '../../components/navbar/navbar'
import './add-about.css'
import { useNavigate } from 'react-router-dom'

export default function Add_About() {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate('/about');
  }

  return (
    <div className='main-container'>
      <div>
        <Navbar />
      </div>

      <div className="details-add">
        <div className="add-image">
          <svg width="146" height="147" viewBox="0 0 146 147" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M145.2 73.26C145.2 113.72 112.696 146.52 72.6 146.52C32.5041 146.52 0 113.72 0 73.26C0 32.7996 32.5041 0 72.6 0C112.696 0 145.2 32.7996 145.2 73.26Z" fill="#C4C4C4" />
            <path d="M73.1633 91.6491C77.1383 91.6491 80.5176 90.2573 83.3011 87.4737C86.0847 84.6902 87.4754 81.312 87.4733 77.3391C87.4733 73.3641 86.0815 69.9848 83.298 67.2012C80.5144 64.4177 77.1362 63.0269 73.1633 63.0291C69.1883 63.0291 65.809 64.4209 63.0255 67.2044C60.2419 69.988 58.8512 73.3662 58.8533 77.3391C58.8533 81.3141 60.2451 84.6934 63.0286 87.4769C65.8122 90.2605 69.1904 91.6512 73.1633 91.6491ZM73.1633 88.4691L69.6653 80.8371L62.0333 77.3391L69.6653 73.8411L73.1633 66.2091L76.6613 73.8411L84.2933 77.3391L76.6613 80.8371L73.1633 88.4691ZM47.7233 102.779C45.9743 102.779 44.4765 102.156 43.2299 100.909C41.9834 99.6627 41.3612 98.166 41.3633 96.4191V58.2591C41.3633 56.5101 41.9866 55.0123 43.2331 53.7657C44.4797 52.5192 45.9764 51.8969 47.7233 51.8991H57.7403L63.6233 45.5391H82.7033L88.5863 51.8991H98.6033C100.352 51.8991 101.85 52.5223 103.097 53.7689C104.343 55.0155 104.965 56.5122 104.963 58.2591V96.4191C104.963 98.1681 104.34 99.6659 103.093 100.912C101.847 102.159 100.35 102.781 98.6033 102.779H47.7233Z" fill="#6A6A6A" />
          </svg>
          <span className='caption'>add your
            picture</span>

        </div>
        <div className="form-add">
          <input className='fadd' type="text" name="name" placeholder='Name' />
          <input className='fadd' type="text" name="job" placeholder='Job Tags' />
          <textarea name="description" id="description" cols="30" rows="10" placeholder='Describe yourself...'></textarea>
          <input className='primary btn-small btn-b' type="submit" onClick={handleSubmit} />
        </div>
      </div>


    </div>
  )
}
