import React from 'react'
import NavbarMain from '../../components/navbar-main/navbar-main'
import Footer from '../../components/footer/footer'

export default function Home() {
    return (
        <div className='main-container'>
            <div>
                <NavbarMain />
            </div>

            <div class="hero">
                <div class="hero-text">
                    <h1>Accelerating Mass Hiring</h1>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believablek</p>
                    <button class="primary">Sign up for free</button></div>
                <img class="hero-image" alt="" src="Images/Asset 5 1.png"/>
            </div>
            <div className="footer">
                <Footer />
            </div>


        </div>
    )
}
