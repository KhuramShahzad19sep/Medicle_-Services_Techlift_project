import React from 'react'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import SplitButton from 'react-bootstrap/SplitButton';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import '../Sidebar.css'
import Topbar from '../Elements/Topbar';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import TimePicker from 'react-bootstrap-time-picker';

import "react-datepicker/dist/react-datepicker.css";

const Book_Appointment = () => {


    const [startDate, setStartDate] = useState(new Date());
  const navigate = useNavigate();
  const [usersList, setUsersList] = useState([]);




  useEffect(() => {
    fetch("http://localhost:3008/users")
      .then((resp) => resp.json())
      .then((info) => setUsersList(info));


  }, []);

  return (
    <>
      <Topbar user="Patient" />

      <div className="sidebar">
        <a onClick={()=>navigate("/Patient_Dashboard")}  href="#">Dashboard</a>
        <a className="active" href="#">Find Doctor</a>
        <a href="#">View Appointment</a>
        <a href="#">Edit Details</a>
      </div>

      <div className="content py-5" style={{ zIndex: '1' }}>
      <h2 className='bg-info text-left my-2 py-2'>Book Appointment</h2>


        <div className='row w-100 mt-5'>
          {/* {usersList.map((Patient) => ( */}
            <div className='col-4'>
              <div className="card text-white bg-info mb-3" >
                <div className="card-header">Header</div>
                <div className="card-body">
                  <h5 className="card-title">I{usersList.name}</h5>
                  <p className="card-text"> {usersList.email}Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <DatePicker className='from-control' selected={startDate} onChange={(date:Date) => setStartDate(date)} />
                  <TimePicker start="10:00" end="21:00" step={30} />
                </div>
                <div className='card-footer'><btn href="#" onClick={()=>navigate("/Main_Page")} className="btn btn-success">Book Appointment</btn></div>
              </div>
            </div>
          {/* ))} */}

        </div>




        <div>

        </div>
      </div>

    </>
  )
};

export default Book_Appointment;