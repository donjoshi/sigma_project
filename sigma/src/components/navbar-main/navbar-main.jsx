import React from "react";


export default function NavbarMain() 
{
    return (
        <div className="main-container">
            <div className="logo">
                image
            </div>

            <div className="details">
                <button className="about">
                    About
                </button>
                <button className="contact">
                    Contact us
                </button>
                <button className="service">
                    Service
                </button>
            </div>

            <div className="login">
                <button className="signup">
                    Signup
                </button>
                <button className="signin">
                    Sign in
                </button>
            </div>
        </div>
    )
}