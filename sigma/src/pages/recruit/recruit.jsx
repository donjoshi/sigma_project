import React from 'react';
import Navbar from '../../components/navbar/navbar';
import './recruit.css';
// import Dropdown from 'react-bootstrap/Dropdown';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';


export default function Recruit() {

    const options = [
        'Type of occupation','Plumbing', 'Electrical', 'Construction'
    ];
    const defaultOption = options[0];
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
                        {/* <select name="type" id="type">
                            <option value="">Type of occupation</option>
                            <option value="plumbing">Plumbing</option>
                            <option value="electrical">Electrical</option>
                            <option value="construction">Construction</option>
                        </select> */}

                        <Dropdown className='drop-down' options={options}  value={defaultOption} 
                        placeholder="Select an option"
                        style={{height:'50px'}}                       
                        
                        
                        />;

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
