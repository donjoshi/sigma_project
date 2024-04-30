import React from 'react'
import Navbar from '../../components/navbar/navbar'
import Footer from '../../components/footer/footer'
import './page1.css';
import { useNavigate } from 'react-router-dom';

export default function Page1() {
    const navigate = useNavigate();

    const handleRecruitClick = () => {
        navigate('/recruit');
    }
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
                        <h1>Find your <br></br>perfect Employee</h1>
                    </div>
                </div>
                <div className="buttons ">
                    <button className='Recruit primary' onClick={handleRecruitClick}>
                        Recruit
                    </button>
                    <button className="Enquire secondary">
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
