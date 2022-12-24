import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';


const Wellcome = () => {




    return (
        <>
            <header className="App-header">
                <h1>MERHAM</h1>
            </header>
            <hero>
                <div className="row">
                    <Carousel>
                        <Carousel.Item>
                            <div className='carousel_item bg-dark '>
                                <Card className='card' style={{ width: '18rem' }}>
                                    <Card.Body className='align-left'>
                                        <Card.Title><b>Marham</b></Card.Title>
                                        <Card.Text className='align-left'>
                                            We Care For You
                                        </Card.Text>

                                        <Button variant="primary"  >Login</Button>
                                    </Card.Body>
                                </Card>
                            </div>

                        </Carousel.Item>


                        <Carousel.Item>
                            {/* Patient */}
                            <div className='carousel_item bg-dark '>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Header>Patient</Card.Header>
                                    <Card.Img variant="top" src="hospital.jpg" />
                                    <Card.Body>
                                        <Card.Title><b>Patient</b> </Card.Title>
                                        <Card.Text>
                                            Please register your self then login.
                                        </Card.Text>
                                        <Button variant="primary">Sig Up</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            {/* Hospital Admin */}
                            <div className='carousel_item bg-dark '>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Header>Hospital</Card.Header>
                                    <Card.Img variant="top" src="hospital.jpg" />
                                    <Card.Body>
                                        <Card.Title><b>Hospital</b></Card.Title>
                                        <Card.Text>
                                            Just hospital can register to doctors.
                                        </Card.Text>

                                        <Button variant="primary">Login</Button>
                                    </Card.Body>
                                </Card>
                            </div>




                        </Carousel.Item>
                    </Carousel>
                </div>
            </hero>

            <footer className='App-header'>
                <p>We are providing the medicle services</p>

                {/* <Moment subtract={{  hours: 12 }}>{date}</Moment> */}

            </footer>
        </>
    )
};
export default Wellcome;