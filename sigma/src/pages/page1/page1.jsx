import React from 'react'
import Navbar from '../../components/navbar/navbar'
import Footer from '../../components/footer/footer'


export default function Page1() {
    return (
        <div className="main-container">
            <div>
                <Navbar />
            </div>

            <div className="content">
                <div className="content1">
                    <div className="image">
                        <img src="Images\🦆 illustration _Logo design design brand branding_.png" alt="" />
                    </div>

                    <div className="description">
                        <h1>Find your perfect Employee</h1>
                    </div>
                </div>
                <div className="buttons">
                    <button className='Recruit'>
                        Recruit
                    </button>
                    <button className="Enquire">
                        Enquire
                    </button>
                </div>
            </div>

            <div className="footer">
                <Footer />
            </div>


        </div>
    )
}
