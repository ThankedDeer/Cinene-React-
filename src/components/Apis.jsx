import React, { useState } from 'react';
import './Apis.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Apis = () => {
    let long;
    let lat;

    const kelvin = 273.15

    const [temperatura, setTemperatura] = useState("");
    const [loc, setLoc] = useState("");

    window.addEventListener("load", () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {

                console.log(position);
                long = position.coords.longitude;
                lat = position.coords.latitude




                const url_base = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=4888ecec780f750e514b1528efe7602d`;

                fetch(url_base)
                    .then((response) => {

                        console.log("RESPUESTA JSON");
                        return response.json();
                    })
                    .then((data) => {
                        console.log("ESTA ES LA DATA")
                        console.log(data);
                        const t = Math.floor(data.main.temp - kelvin) + "°C";

                        setTemperatura(t);

                        const p = data.name + ", " + data.sys.country;
                        setLoc(p);
                    })
            }

            )
        }
    })
    return (<>

        <Container>


            <Row>
                <Col xs={12} md={8}>
                    <img id='mapa' src="recursos\mapa.png" alt='asiento' />
                </Col>
                <Col id='centrar' xs={12} md={4}>
                    <div className='cardd'  >
                        <h3 id='clima'>Clima</h3>

                        <h2 id='temperatura' class="temp">{temperatura}</h2>

                        <h4 id='loc' class="ciudad">-{loc}</h4>
                    </div>

                   

                </Col>

            </Row>
        </Container>



    </>);
}

export default Apis;