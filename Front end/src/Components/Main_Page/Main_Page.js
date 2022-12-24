
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Header from '../Elements/Header';
import Footer from '../Elements/Footer';

import Container from 'react-bootstrap/Container';
import Doctor_Loging from '../Doctor_Panel/Doctor';
import { useDebugValue } from 'react';


const User_Page = () => {
  const nav = useNavigate();
  const nav2 = useNavigate();
  const nav3 = useNavigate();
  const handleClick1 = () => {
    nav('/Patient_Sign_Up_Page');
  }

  var handleClick2 = () => {
    nav2('/Hospital_Login');
  }
  const handleClick3 = () => {
    nav2('/Doctor_Login');
  }

  return (
<>
<Header/>
      <Carousel>
        <Carousel.Item>
          {/* doctor      */}
          <div className='carousel_item bg-info'>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="Hospital.jpg" alt="Logo" />
              <Card.Body>
                <Card.Title><b>Doctor</b></Card.Title>
                <Card.Text>
                  Please login width valid email and password.
                </Card.Text>

                <Button variant="primary" onClick={handleClick3} >Login</Button>
              </Card.Body>
            </Card>
          </div>

        </Carousel.Item>


        <Carousel.Item>
          {/* Patient */}
          <div className='carousel_item bg-info '>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="hospital.jpg" />
              <Card.Body>
                <Card.Title><b>Patient</b> </Card.Title>
                <Card.Text>
                  Please register your self then login.
                </Card.Text>
                <Button onClick={handleClick1} variant="primary">Sig Up</Button>
              </Card.Body>
            </Card>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          {/* Hospital Admin */}
          <div className='carousel_item bg-info '>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="hospital.jpg" />
              <Card.Body>
                <Card.Title><b>Hospital</b></Card.Title>
                <Card.Text>
                  Just hospital can register to doctors.
                </Card.Text>

                <Button onClick={handleClick2} variant="primary">Login</Button>
              </Card.Body>
            </Card>
          </div>




        </Carousel.Item>
      </Carousel>
      <Footer/>
</>

  );

}; export default User_Page;