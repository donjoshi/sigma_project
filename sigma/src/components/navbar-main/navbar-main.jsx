import React, { useState } from "react";
import "./navbar-main.css";
import Model from 'react-modal';

export default function NavbarMain() {
    const [showSignup, setShowSignup] = useState(false);
    const [showLogin, setShowLogin] = useState(false);

    const handleSignupClick = () => {
        setShowSignup(true);
    };

    const handleCloseSignup = () => {
        setShowSignup(false);
    };

    const handleLoginClick = () => {
        setShowLogin(true);
    };

    const handleCloseLogin = () => {
        setShowLogin(false);
    };

    const handleSubmitSignup = (e) => {
        e.preventDefault();
        // Add your signup form submission logic here
        // You can access form data using e.target.elements
        console.log("Signup Form submitted!");
        // Reset form or close popup
        setShowLogin(true);
        setShowSignup(false);

    };

    const handleSubmitLogin = (e) => {
        e.preventDefault();
        // Add your login form submission logic here
        // You can access form data using e.target.elements
        console.log("Login Form submitted!");


        // Reset form or close popup
        setShowLogin(false);
    };

    return (
        <div className="nav-container">
            <div className="logo">image</div>

            <div className="details">
                <button className="about">About</button>
                <button className="contact">Contact us</button>
                <button className="service">Service</button>
            </div>

            <div className="login">
                <button className="primary small-btn" onClick={() => setShowSignup(true)}>
                    Signup
                </button>
                <button className="secondary small-btn" onClick={() => setShowLogin(true)}>
                    Sign in
                </button>
            </div>


            <Model isOpen={showSignup} onRequestClose={() => setShowSignup(false)} className="popup"

                style={{
                    content: {
                        position: 'absolute',
                        marginTop: '100px',
                        top: '50%',
                        left: '50%',
                        right: 'auto',
                        bottom: 'auto',
                        transform: 'translate(-50%, -50%)',
                        marginRight: '-50%',
                        width: '30%',
                        height: '60%',
                        margin: 'auto',
                        padding: '20px',
                        borderRadius: '10px',
                        border: '1px solid black',
                        gap: '10px',
                        backgroundColor: 'white',

                    }
                }}

            >

                <div className="signup-popup">

                    <h1>Signup</h1>
                    <form onSubmit={handleSubmitSignup}>

                        <input type="text" placeholder="Name" name="name" required />
                        <input type="email" placeholder="Email" name="email" required />
                        <input type="text" placeholder="Phone" name="phone" required />
                        <input type="password" placeholder="Password" name="password" required />
                        <input type="password" placeholder="confirm password" name="confirmPassword" required />
                        <button type="submit">Submit</button>
                    </form>
                </div>

            </Model>




            {/* {showSignup && (
                <div className="popup">
                    <div className="popup-content">
                        <span className="close" onClick={handleCloseSignup}>
                            &times;
                        </span>
                        <h2>Signup Form</h2>
                        <form onSubmit={handleSubmitSignup}>
                           
                            <input type="text" placeholder="Name" name="name" required />
                            <input type="email" placeholder="Email" name="email" required />
                            <input type="text" placeholder="Phone" name="phone" required />
                            <input type="password" placeholder="Password" name="password" required />
                            <input type="password" placeholder="confirm password" name="confirmPassword" required />
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            )} */}

            {/* {showLogin && (
                <div className="popup">
                    <div className="popup-content">
                        <span className="close" onClick={handleCloseLogin}>
                            &times;
                        </span>
                        <h2>Login Form</h2>
                        <form onSubmit={handleSubmitLogin}>
                          
                            <input type="text" placeholder="Username" name="username" required />
                            <input type="password" placeholder="Password" name="password" required />
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            )
            } */}
        </div>
    );
}
