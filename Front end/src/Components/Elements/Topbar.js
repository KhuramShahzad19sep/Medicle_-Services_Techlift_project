import { Navbar } from "react-bootstrap";
import logo from "../../Images/logo.png"
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';

const Topbar = (props) => {




    return (
        <>
         <nav class="navbar navbar-expand-lg navbar-light bg-light px-4 sticky-top " style={{  zIndex: '2' }}>
  <a class="navbar-brand" href="#"><img src={logo} width="100px"/></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0 d-flex">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
    <Dropdown as={ButtonGroup}>
      <Button variant="danger">{props.user}</Button>

      <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

      
      <Dropdown.Menu variant="dark">
          <Dropdown.Item href="#/action-1" active>
            kkk
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2">Gynacoloist</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
  </div>
</nav>
            
        </>
    )
};
export default Topbar;