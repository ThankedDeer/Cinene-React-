import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';


import './Video.css';

const Video = () => {
    return (
        <>
            <br />
            <br />
            <br />
            <section>
                <Container >
                    <Row  >
                        <Col id='carousel' sm={12} md={12} lg={6}>
                            <Carousel >
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://larepublica.pe/resizer/43RTeLfI1UZd5sxU2QsaiwRUDEg=/807x475/top/smart/cloudfront-us-east-1.images.arcpublishing.com/gruporepublica/S3P75M6LQ5F7RDFHSCYLV5GATY.jpg"
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <h3 className='carusel'>Spider-Man: No Way Home</h3>
                                        <p className='carusel'>La menos interesante de la trilogía pre-"hombre" araña es un aparatoso encajer.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://th.bing.com/th/id/R.851e586bb0ccb7b8eaedab97d3a9cca6?rik=01PPVAw4ciFLiA&pid=ImgRaw&r=0"
                                        alt="Second slide"
                                    />

                                    <Carousel.Caption>
                                        <h3 className='carusel'>Spider-Man: Lejos de casa</h3>
                                        <p className='carusel'> Ni hablar. 'Spider-Man: Lejos de casa' es un divertimento de gran nivel.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://th.bing.com/th/id/R.485f2cfdcfa8c9147119209c67e1b20d?rik=7o%2fxVUFnVUKrSQ&pid=ImgRaw&r=0"
                                        alt="Third slide"
                                    />

                                    <Carousel.Caption>
                                        <h3 className='carusel'>Spider-Man: Homecoming</h3>
                                        <p className='carusel'>
                                        Peter Parker compagina su vida de estudiante ordinario de instituto en Queens con su alter ego de superhéroe.
                                        </p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                        <Col id='carousel' sm={12} md={12} lg={6}>
                            <Card id='laloo' style={{ width: '18rem' }}>
                                <Card.Img id='imgcard' variant="top" src="https://1.bp.blogspot.com/-vuUWb3L0IIA/XfwDCLDeX-I/AAAAAAAAAYg/Xn74n39Vd3MPGhENjoBph2-FV5rPdbC_gCLcBGAsYHQ/s1600/91A%252BeXyGmvL._RI_.jpg" />
                                <Card.Body>
                                    <Card.Title></Card.Title>
                                    <Card.Text>
                                      <h2 className='carta'>Spider-Man Far From Home</h2>
                                      <h className='carta'><strong>Acción</strong></h>
                                      <p className='carta'>Tras los acontecimientos de Vengadores: Endgame, Spider-Man debe enfrentarse a nuevas amenazas en un mundo que ha cambiado para siempre.</p>
                                    </Card.Text>
                                </Card.Body>
                                <Card.Body>
                                    <Card.Link href="https://youtu.be/m4DVLBdHiG0">Ver Trailer</Card.Link>
                                    
                                </Card.Body>
                            </Card>
                        </Col>

                    </Row>
                </Container>
            </section>
        </>
    );
}

export default Video;






