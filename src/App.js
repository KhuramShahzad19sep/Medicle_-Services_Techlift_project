import logo from "./logo.svg";
import "./App.css";

// import User_Page from './Components/Main_Page/Main_Page';
// import Sign from './Components/Pateint_Registration';

import { Routes, Route } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Add_Doctors from "./Components/Doctor_Panel/Add_Doctor";
import Doctor_Loging from "./Components/Doctor_Panel/Doctor";
import Pateint_Data from "./Components/Pateint_Panel/Pateint_Data";
import Sign from "./Components/Pateint_Panel/Pateint_Registration";
import User_Home from "./Components/Home_Page/Home";
import User_Page from "./Components/Main_Page/Main_Page";
import Hospital_Login from "./Components/Hospital_Panel/Hospital_Dashboard";
import Edit_Doctors from "./Components/Doctor_Panel/Edit_Doctor";
import Patient_Login from "./Components/Pateint_Panel/Pateint_Login";
import Pateint_Dashboard from "./Components/Pateint_Panel/Pateint_Dashboard";
import Find_Doctor from "./Components/Pateint_Panel/Find_Doctor";
import Book_Appointment from "./Components/Pateint_Panel/Book_Appointment";
import Doctor_Dashboard from "./Components/Doctor_Panel/Doctor_Dashboard";
import Doctor_Login from "./Components/Doctor_Panel/Doctor_Login";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<User_Page />} />
        <Route path="/Book_Appointment" element={<Book_Appointment />} />
        <Route path="/Doctor_Login" element={<Doctor_Login />} />
        <Route path="/Doctor_Dashboard" element={<Doctor_Dashboard />} />
        <Route path="/Find_Doctor" element={<Find_Doctor />} />
        <Route path="/Hospital_Login" element={<Hospital_Login />} />
        <Route path="/Home" element={<User_Home />} />
        <Route path="/Patient_Sign_Up_Page" element={<Sign />} />
        <Route path="/Patient_Login_Page" element={<Patient_Login />} />
        <Route path="/Patient" element={<Pateint_Data />} />
        <Route path="/Patient_Dashboard" element={<Pateint_Dashboard />} />
        <Route path="/Doctor_Login" element={<Doctor_Loging />} />
        <Route path="/Add_Doctor" element={<Add_Doctors />} />
        <Route path="/Home/Edit_Doctors/:id" element={<Edit_Doctors />} />
      </Routes>
    </div>
  );
}

export default App;
