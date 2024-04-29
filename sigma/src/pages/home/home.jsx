import React from 'react'
import NavbarMain from '../../components/navbar-main/navbar-main'
import Footer from '../../components/footer/footer'

export default function Home() {
  return (
    <div className='main-container'>
        <div>
            <NavbarMain />
        </div>

        <div className="content">
            <div className="description">
                <h1>Accelerate Mass Hiring</h1>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believablek</p>

                <button className="Signup">Sign up for free</button>
            
            </div>

            <div className="image">
                add image
            </div>
        </div>

        <div className="footer">
            <Footer />
        </div>

      
    </div>
  )
}
