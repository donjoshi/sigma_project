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
                    img
                </div>
                <div className="sentence">
                    <p>The verification code has been sent to your
                        registered mobile number and email id</p>
                </div>
                <div className="button">
                    <button>Go Back to Home </button>
                </div>

            </div>

        </div>
    )
}
