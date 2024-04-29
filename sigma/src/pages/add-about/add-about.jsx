import React from 'react'
import Navbar from '../../components/navbar/navbar'
export default function Add_About() {
  return (
    <div className='main-container'>
        <div>
            <Navbar />
        </div>

        <div className="details">
            <div className="image">
                image
            </div>
            <div className="form">
                <input type="text" name="name" placeholder='Name' />
                <input type="text" name="job" placeholder='Job Tags'/>
                <textarea name="description" id="description" cols="30" rows="10" placeholder='Describe yourself...'></textarea>
                <input type="submit" />
            </div>
        </div>

      
    </div>
  )
}
