import React, { useState } from "react";

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
        <div className="main-container">
            <div className="logo">image</div>

            <div className="details">
                <button className="about">About</button>
                <button className="contact">Contact us</button>
                <button className="service">Service</button>
            </div>

            <div className="login">
                <button className="signup" onClick={handleSignupClick}>
                    Signup
                </button>
                <button className="signin" onClick={handleLoginClick}>
                    Sign in
                </button>
            </div>

            {showSignup && (
                <div className="popup">
                    <div className="popup-content">
                        <span className="close" onClick={handleCloseSignup}>
                            &times;
                        </span>
                        <h2>Signup Form</h2>
                        <form onSubmit={handleSubmitSignup}>
                            {/* Your signup form fields go here */}
                            <input type="text" placeholder="Name" name="name" required />
                            <input type="email" placeholder="Email" name="email" required />
                            <input type="text" placeholder="Phone" name="phone" required />
                            <input type="password" placeholder="Password" name="password" required />
                            <input type="password" placeholder="confirm password" name="confirmPassword" required />
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            )}

            {showLogin && (
                <div className="popup">
                    <div className="popup-content">
                        <span className="close" onClick={handleCloseLogin}>
                            &times;
                        </span>
                        <h2>Login Form</h2>
                        <form onSubmit={handleSubmitLogin}>
                            {/* Your login form fields go here */}
                            <input type="text" placeholder="Username" name="username" required />
                            <input type="password" placeholder="Password" name="password" required />
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
