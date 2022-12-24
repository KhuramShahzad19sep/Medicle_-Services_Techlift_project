import React, { useEffect } from "react";
// import { useFormik } from 'formik';
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
// import { useRef } from "react";
import Pateint_Dashboard from "./Pateint_Dashboard";
import Header from "../Elements/Header";
import Footer from "../Elements/Footer";
import { Card } from "react-bootstrap";


const Patient_Loging = () => {
//  const [database, setDatabase] = useState([]);
//  const [email, setEmail]=useState([]);
  const [database, setDatabase] = useState([]);
  // const [email, setEmail] = useState([]);
  // const [pass, setPass] = useState([]);
  // const [email, setEmail] = useState();
  //   const [pass, setPas] = useState();
 const nav=useNavigate();
 
 const Click=()=>{
  nav('/Patient_Dashboard')
  
 }
  // const email=useRef();
  // const password =useRef();
  // const Pateint={email, password}
//   fetch('http://localhost:3008/Pateint', {
//     method: "GET",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify(Pateint)
// }).then(resp => (resp.json() ));



  
  const navigate = useNavigate();

  const SUBMIT =(event)=>{
    event.preventDefault();
    const { email, password } = document.forms[0];
    const userData = database.find((user) => user.email === email.value );
    const userData2 = database.find((user) => user.password === password.value );
    const Total= userData && userData2;
    if (userData) {
      if ((userData.email !== email.value)||(userData.email!==email.value) ) {
        // Invalid password
        alert("Invalid password");
      } else {
        // log the user in
        localStorage.setItem('name', JSON.stringify(userData.name));
        
        // handleClick();
        Click();
      }
    } else {
      // Username not found
      alert("email not found");
    }

    console.log(password, email);

    if (!email.value || !password.value) {
      alert("Fill the empty input fields");
      return false;
    }


    // alert("new click")
   
                   
}
useEffect(()=>{
  fetch("http://localhost:3008/Pateint")
  .then((response) => response.json())
  .then((json) => setDatabase(json))
},[])
 
return (
  <>
  <Header/>
  <div className='carousel_item bg-info'>
  <Card style={{ width: '18rem' }} className='p-3'>
    <div className="form mt-3">
      <h2 className="text-center ">Login</h2>
      <form onSubmit={SUBMIT}>
      <div className="form-body p-2">
        <div className="email py-2">
          <label className="form__label" for="email">
            Email{" "}
          </label>
          <input
            type="text" 
            // ref={email}
            id="email"
            className="form-control"
            placeholder="Email"
          />
        </div>
        <div className="password">
          <label className="form__label" for="password">
            Password{" "}
          </label>
          <input
            className="form-control"
            type="password"
            // ref={password}
            id="password"
            placeholder="Password"
          />
        </div>
      </div>
      <div class="footer">
        <button
          type="submit"
          class="btn btn-success"
          >
           Log in
        </button>
        {/* <p>
          <Link to="/Sign">Signup Here</Link>
        </p> */}
      </div>
      </form>
    </div>
    </Card>
    </div>
    <Footer/>
    </>
  );
};
export default Patient_Loging;