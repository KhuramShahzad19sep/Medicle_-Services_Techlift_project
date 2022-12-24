import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import SplitButton from "react-bootstrap/SplitButton";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "../Sidebar.css";
import Topbar from "../Elements/Topbar";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom/dist";
import Layout from "../../layout/Layout";
const Doctor_Dashboard = () => {
  const navigate = useNavigate();
  const id  = useParams()
  console.log("id", id)
  const [usersList, setUsersList] = useState([]);
  const [user, setUser] = useState(null);


const getUser = () => {

  fetch(`http://localhost:3008/Pateint/${id}`)
  .then((resp) => resp.json())
  .then((info) => 
     console.log(info, "ssss") );

  console.log(user, "iijo")
 
}

  useEffect(() => {
 

    getUser();
    fetch("http://localhost:3008/Pateint")
      .then((resp) => resp.json())
      .then((info) => setUsersList(info));

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

  return (
    <>
      <Layout role="Doctor" PatientMenu={DoctorMenu}/>

      <div class="content p-5" style={{ zIndex: "1" }}>
        <h2 className="bg-info text-left my-2 py-2">Doctors List</h2>

        {/* ..<Container>
         <Navbar expand="lg" variant="light" bg="light">
        <Container>
          <Navbar.Brand >Pateint</Navbar.Brand>
        </Container>
      </Navbar>
         <div class="col-md-3 col-lg-2 sidebar-offcanvas pl-0" id="sidebar" role="navigation" style={{backgroundColor:"#e9ecef"}}>
            <ul class="nav flex-column sticky-top pl-0 pt-5 p-3 mt-3 ">
                <li class="nav-item mb-2 mt-3"><a class="nav-link text-secondary" href="#"><h5>Pateint</h5></a></li>
                <Dropdown as={ButtonGroup}>
      <Button variant="danger">Doctor</Button>

      <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

      
      <Dropdown.Menu variant="dark">
          <Dropdown.Item href="#/action-1" active>
            
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2">Gynacoloist</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
    <br/>
    <Dropdown as={ButtonGroup}>
      <Button variant="danger">Pharmacy</Button>

      <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

      
      <Dropdown.Menu variant="dark">
          <Dropdown.Item href="#/action-1" active>
            kkk
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
    <br/>
    <Dropdown as={ButtonGroup}>
      <Button variant="success">Our vission</Button>

      <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

      
      <Dropdown.Menu variant="dark">
          
          
          <Dropdown.Item ><p> Our vission is fast kkkkkkkkkkkkkkkkkkkk</p></Dropdown.Item>
         
          <Dropdown.Divider />
         
        </Dropdown.Menu>
    </Dropdown>


               
                <li class="nav-item mb-2">
                    {/* <a class="nav-link text-secondary" href="#submenu1" data-toggle="collapse" data-target="#submenu1"><i class="far fa-file-word font-weight-bold"></i> <span className="ml-3"> Reports▾</span></a> */}
        {/* <ul class="list-unstyled flex-column pl-3 collapse" id="submenu1" aria-expanded="false">
                      
                    </ul> */}
        {/* </li>
                <li class="nav-item mb-2"><a class="nav-link text-secondary" href="#"><i class="far fa-chart-bar font-weight-bold"></i> 
                <span className="ml-3">Analytics</span></a></li>
                <li class="nav-item mb-2"><a class="nav-link text-secondary" href="#"><i class="fas fa-file-export font-weight-bold">
                </i><span className="ml-3">Export</span></a></li>

           
                
            </ul>
            
       </div>
       </Container> */}
        <div>
          <div className="card mt-5">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                {usersList.map((Patient) => (
                  <tr>
                    <th scope="row">1</th>
                    <td>{Patient.id}</td>
                    <td>{Patient.name}</td>
                    <td>{Patient.email}</td>
                    {/* <td> <Link to={`/Home/Edit_Doctors/${user.id}`}><Button>Edit</Button></Link></td> 
         <Link onClick={()=>Delet_User(user.id)}><Button>Delet</Button></Link> */}
                  </tr>
                ))}
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Doctor_Dashboard;
