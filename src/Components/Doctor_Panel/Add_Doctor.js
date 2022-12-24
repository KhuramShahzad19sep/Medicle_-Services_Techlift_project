import { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Topbar from "../Elements/Topbar";
import { Card } from "react-bootstrap";
import Layout from "../../layout/Layout";
const Add_Doctors=()=>{
    

  const navigate = useNavigate();
    const[doctor, setDoctor]= useState({
        name:"",
        email:""
    })
     const [startdate, setStartDate] = useState(new Date());
    let NAV=useNavigate();
   
    const NavLinkCSS=({isActive})=>{
        return {
          fontWeight: isActive ?  'bold' :'normal',
          fontSize : isActive ? '40px' : '30px',
          colour :isActive  ? 'White' :'White'
        }
  }
    
    const {name,email }=doctor;
    const handleInputChange=(e)=>{
          setDoctor({...doctor,[e.target.name]:e.target.value})
    }
    const onSubmit= async e=> {
        // e.preventDefault();
         axios.post("http://localhost:3008/users",doctor)
        NAV.push("/");
    
    }
    const AdminMenu = [
        {
          name: "Dashboard",
          link: "/Home",
        },
        {
          name: "Add Doctor",
          link: "/Add_Doctor",
        },
        {
          name: "Patient List",
          link: "/Patient",
        },
        {
          name: "Doctor List",
          link: "/",
        },
        {
          name: "Log Out",
          link: "/",
        },
      ];
    
      return (
        <>
          <Layout role="Admin" PatientMenu={AdminMenu}/>

<div class="content d-flex justify-content-center mt-5" style={{  zIndex: '1' }}>
    
        <form className='from-control w-50 '>
            
    
            <div className='form-control bg-light'>
            <h2 className='text-center'> Add Doctor</h2>
           
                <div className='form-body'>
                    <div className='form-control bg-light'>
                   
                        <input className='form-control '
                            placeholder='Name'
                            type="text"
                            name='name'
                            id='name'
                            value={name}
                            required
                            onChange={(e) => (handleInputChange(e))}
                        />
                        <label className='form-label' ></label>
                        <input className='form-control '
                            placeholder='Email'
                            type="email"
                            name='email'
                            id='email'
                            value={email}
                            onChange={(e) => (handleInputChange(e))}
                        />
                    </div>
                 
                </div>
                <NavLink style={NavLinkCSS} to ='/Home'>
                <Button onClick={onSubmit} >Submit
                {/* <DatePicker selected={startdate} onChange={(date) => setStartDate(date)} /> */}
                </Button>
                
                </NavLink>
                
            </div>
            
        </form>
        </div>
        </>
    );
}; export default Add_Doctors;