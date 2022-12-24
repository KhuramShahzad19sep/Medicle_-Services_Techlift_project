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
import axios from 'axios';
import {Link} from "react-router-dom";
import { useParams } from "react-router-dom";
const Find_Doctor = () => {


  const navigate = useNavigate();
  const [usersList, setUsersList] = useState([]);
  const {id}=useParams();

  const loadUser= async ()=>{
    const result =await axios.get(`http://localhost:3008/users`);
  setUsersList(result.data);
  Find_Doctor();
  }

  useEffect(() => {
    // fetch(`http://localhost:3008/Pateint`)
    //   .then((resp) => resp.json())
    //   .then((info) => setUsersList(info));
    loadUser();


  }, []);
  const Find_Doctor= async id =>{
   
    await axios.get(`http://localhost:3008/users/${id}`);
    // loadUser();
  // loadUser();
  };
  useEffect(() => {
    // fetch(`http://localhost:3008/Pateint`)
    //   .then((resp) => resp.json())
    //   .then((info) => setUsersList(info));
    Find_Doctor();


  }, []);

  return (
    <>
      <Topbar user="Patient" />

      <div className="sidebar">
        <a onClick={()=>navigate("/Patient_Dashboard")}  href="#home">Dashboard</a>
        <a className="active" href="#">Find Doctor</a>
        <a href="#">View Appointment</a>
        <a href="#">Edit Details</a>
      </div>

      <div className="content py-5" style={{ zIndex: '1' }}>
      <h2 className='bg-info text-left my-2 py-2'>Doctors List</h2>


        <div className='row w-100 mt-5'>
          {usersList.map((Doctor) => (
            <div className='col-4'>
              <div className="card text-white bg-info mb-3" >
                <div className="card-header">Doctor</div>
                <div className="card-body">
                  <h5 className="card-title">{Doctor.name}</h5>
                  <p className="card-text"> {Doctor.email}Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <div className='card-footer'><btn href="#" onClick={()=>navigate("/Find_Doctor/Book_Appointment:id")} 
                className="btn btn-success">Book Appointment</btn></div>
                <Link to={`/Find_Doctor/Book_Appointment:id/${Doctor.id}`}><Button>Edit</Button></Link> 
              </div>
            </div>
          ))}

        </div>




        <div>



        </div>
      </div>

    </>
  )
};

export default Find_Doctor;