import { Navbar } from "react-bootstrap";
import logo from "../../Images/logo.png"
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';

const Topbar = (props) => {




  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light px-4 sticky-top d-flex justify-content-between align-items-center" style={{ zIndex: '2' }}>
        <div className="d-flex align-items-center"><a class="navbar-brand mx-3" href="#"><img src={logo} width="100px" /></a>
        <ul class="navbar-nav mr-auto">

            <li class=" mx-5">
              <h2>Hello{}</h2>
            </li>
          </ul>
          </div>
        <div>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          
          <form class="form-inline my-2 my-lg-0 d-flex">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
          </div>
          </div>
          <div>
          <div>
          <Dropdown as={ButtonGroup}>
            <Button variant="info">{props.role}</Button>

            <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />


            <Dropdown.Menu variant="dark">
              <Dropdown.Item href="#/action-1" active>
                View Profile
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">Edit Profile</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#/action-4">Log Out</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        </div>
      </nav>

    </>
  )
};
export default Topbar;