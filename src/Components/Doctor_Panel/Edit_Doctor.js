import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";

import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import Layout from "../../layout/Layout";
import { Card } from "@mui/material";

const Edit_Doctors = () => {
  let NAV = useNavigate();
  const { id } = useParams();
  const [doctor, setDoctor] = useState({
    name: "",
    email: "",
  });
  const NavLinkCSS = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      fontSize: isActive ? "40px" : "70px",
      colour: isActive ? "White" : "White",
    };
  };

  const { name, email } = doctor;
  const handleInputChange = (e) => {
    setDoctor({ ...doctor, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3008/users/${id}`, doctor);
    NAV.push("/Home");
    //    NAGIGATION();
  };
  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3008/users/${id}`, doctor);
    setDoctor(result.data);
  };
  useEffect(() => {
    loadUser();
  }, []);

  const DoctorMenu = [
    {
      name: "Dashboard",
      link: "/Home",
    },
    {
      name: "View Appointment",
      link: "",
    },
    {
      name: "Edit Details",
      link: "/Home/Edit_Doctors/:id",
    },
    {
      name: "Doctor List",
      link: "",
    },
    {
      name: "Log Out",
      link: "/",
    },
  ];
  console.log(DoctorMenu, "cnsanin");

  return (
    <>
      <Layout role="Doctor" PatientMenu={DoctorMenu} />

      <div class="content p-5" style={{ zIndex: "1" }}>
        <Card style={{ width: "22rem" }} className="p-3">
          <form className="from-control">
            <h1>Edit Doctor Details</h1>
            <div className="form-control">
              <h2 className="text-center">Edit Doctor</h2>

              <div className="form-body">
                <div className="form-control">
                  <input
                    className="form-control "
                    placeholder="Name"
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    required
                    onChange={(e) => handleInputChange(e)}
                  />

                  <input
                    className="form-control "
                    placeholder="Email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => handleInputChange(e)}
                  />
                </div>
              </div>
              <NavLink style={NavLinkCSS} to="/Home">
                <Button onClick={onSubmit}>Submit</Button>
              </NavLink>
            </div>
          </form>
        </Card>
      </div>
    </>
  );
};
export default Edit_Doctors;
