import React from 'react';
import Navbar from '../../components/navbar/navbar';
import './recruit.css';

export default function Recruit() {
    return (
        <div className='main-container'>
            <div>
                <Navbar />
            </div>
            <div className="content">
                <div className="heading">
                    <h1>Recruit</h1>
                </div>
                <div className="form">
                    <form>
                        <select name="type" id="type">
                            <option value="">Type of occupation</option>
                            <option value="plumbing">Plumbing</option>
                            <option value="electrical">Electrical</option>
                            <option value="construction">Construction</option>
                        </select>

                        <input
                            type="text"
                            id="no_of_labours"
                            name="no_of_labours"
                            placeholder="No of Labours required"
                        />

                        <input className='date' type="date" id="date" name="date" placeholder="Date" />

                        <input type="text" id="time" name="time" placeholder="Time duration" />

                        <input type="text" id="location" name="location" placeholder="Location" />

                        <button className='primary' type="submit">Proceed to pay</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
