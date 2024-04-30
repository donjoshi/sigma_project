import React from 'react'
import Navbar from '../../components/navbar/navbar'
import './verification.css'

export default function Verification() {
    return (
        <div className='main-container'>
            <div>
                <Navbar />
            </div>

            <div className="content">
                <div className="image">
                    <img src="Images\Ellipse 5.png" alt="" />
                </div>
                <div className="sentence">
                    <span className='para'>The verification code has been sent to your
                        registered mobile number and email id</span>
                </div>
                <div className="buttons">
                    <button className='primary'>Go Back to Home </button>
                </div>

            </div>

        </div>
    )
}
