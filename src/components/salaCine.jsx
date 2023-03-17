import React, { useState } from 'react';
import './salaCine.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ModalSeat from './Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { Link } from "react-router-dom";
const Lalo = () => {

  const [total, setTotal] = useState(0);



  let comprar = [];


  const reservar = e => {

    comprar = [];
    let tt = 0;
    const asientos = document.querySelectorAll('.seats')
    localStorage.setItem('comprar', comprar);
    const Horario = document.getElementById('Horario').value;


    asientos.forEach(asiento => {

      if (asiento.checked === true) {

        tt += 50;
        //console.log(asiento);
        const reserva = {
          id: asiento.value,
          precio: 50,
          total: tt,
          funcion: Horario
        }
        setTotal(reserva.total);


        comprar.push(reserva);
        localStorage.setItem("comprar", JSON.stringify(comprar));

      }
    })
    asientosReservados()

    // let localstoragearr = JSON.parse(localStorage.getItem("comprar"))
    // console.log(localstoragearr);

  }
const  libres =[];

  function asientosReservados() {
    limpiarSala()
    pintaRojo();
   
   

   
  }
  function pintaRojo() {
    const funcion = document.getElementById("Horario").value;
    axios.get('http://localhost:3100/asientosReservados/'+funcion )
      .then((response) => {

        const data = response.data;
        console.log(data);
        data.forEach(asientoReservado => {
          libres.push(asientoReservado);
            document.getElementById(asientoReservado.Asiento).setAttribute('disabled',true);
            document.getElementById("asiento"+asientoReservado.Asiento).classList.add("ocupado")


        });

      })
      .catch((error => {
        console.log(error);
      }))
  }
function limpiarSala() {
  const limpiar =  document.querySelectorAll(".checkeable");

  for (const checkbox of document.querySelectorAll('.seats')) {
  
    checkbox.removeAttribute('disabled');
    // checkbox.checked = true //for selection
    checkbox.checked = false //for unselection
    }
  

  limpiar.forEach(element => {
    element.classList.add("libre")
    element.classList.remove("ocupado")
  
   
  });
  
}


  return (


    <div id='marginSala'>



      <Container id='salacentrar' >
        <Row  >
          <Col id='columnas' xs={1} sm={1} md={1} lg={1} >
            <h2>1</h2>
          </Col>
          <Col id='columnas' xs={1} sm={1} md={1} lg={1} >
            <h2>2</h2>
          </Col>
          <Col id='columnas' xs={1} sm={1} md={1} lg={1} >
            <h2>3</h2>
          </Col>
          <Col id='columnas' xs={1} sm={1} md={1} lg={1} >
            <h2>4</h2>
          </Col>
          <Col id='columnas' xs={1} sm={1} md={1} lg={1} >
            <h2>5</h2>
          </Col>
          <Col id='columnas' xs={1} sm={1} md={1} lg={1} >
            <h2>6</h2>
          </Col>
          <Col id='columnas' xs={1} sm={1} md={1} lg={1} >
            <h2>7</h2>
          </Col>
          <Col id='columnas' xs={1} sm={1} md={1} lg={1} >
            <h2>8</h2>
          </Col>
          <Col id='columnas' xs={1} sm={1} md={1} lg={1} >
            <h2>9</h2>
          </Col>
          <Col id='columnas' xs={1} sm={1} md={1} lg={1} >
            <h2>10</h2>
          </Col>

        </Row>
        <Row  >
          <Col id='colSala' xs={1} sm={1} md={1} lg={1} >
            <label id='asientoA1' class="checkeable">
              <input  className='seats' id='A1' value='A1' type="checkbox" name="cap1" />
              <img id='imgAsiento' src="recursos\seat.png" alt='asiento' />
            </label>
          </Col>
          <Col id='colSala' xs={1} sm={1} md={1} lg={1} >
            <label  id='asientoA2' class="checkeable">
              <input className='seats' id='A2' value='A2' type="checkbox" name="cap1" />
              <img id='imgAsiento' src="recursos\seat.png" alt='asiento' />
            </label>
          </Col>
          <Col id='colSala' xs={1} sm={1} md={1} lg={1} >
            <label  id='asientoA3' class="checkeable">
              <input className='seats' id='A3' value='A3' type="checkbox" name="cap1" />
              <img id='imgAsiento' src="recursos\seat.png" alt='asiento' />
            </label>
          </Col>
          <Col id='colSala' xs={1} sm={1} md={1} lg={1} >
            <label  id='asientoA4' class="checkeable">
              <input className='seats' id='A4' value='A4' type="checkbox" name="cap1" />
              <img id='imgAsiento' src="recursos\seat.png" alt='asiento' />
            </label>
          </Col>
          <Col id='colSala' xs={1} sm={1} md={1} lg={1} >
            <label  id='asientoA5' class="checkeable">
              <input className='seats' id='A5' value='A5' type="checkbox" name="cap1" />
              <img id='imgAsiento'  src="recursos\seat.png" alt='asiento' />
            </label>
          </Col>
          <Col id='colSala' xs={1} sm={1} md={1} lg={1} >
            <label  id='asientoA6' class="checkeable">
              <input className='seats' id='A6' value='A6' type="checkbox" name="cap1" />
              <img id='imgAsiento' src="recursos\seat.png" alt='asiento' />
            </label>
          </Col>
          <Col id='colSala' xs={1} sm={1} md={1} lg={1} >
            <label  id='asientoA7' class="checkeable">
              <input className='seats' id='A7' value='A7' type="checkbox" name="cap1" />
              <img id='imgAsiento' src="recursos\seat.png" alt='asiento' />
            </label>
          </Col>
          <Col id='colSala' xs={1} sm={1} md={1} lg={1} >
            <label  id='asientoA8' class="checkeable">
              <input className='seats' id='A8' value='A8' type="checkbox" name="cap1" />
              <img id='imgAsiento' src="recursos\seat.png" alt='asiento' />
            </label>
          </Col>
          <Col id='colSala' xs={1} sm={1} md={1} lg={1} >
            <label  id='asientoA9' class="checkeable">
              <input className='seats' id='A9' value='A9' type="checkbox" name="cap1" />
              <img id='imgAsiento' src="recursos\seat.png" alt='asiento' />
            </label>
          </Col>
          <Col id='colSala' xs={1} sm={1} md={1} lg={1} >
            <label  id='asientoA10' class="checkeable">
              <input className='seats' id='A10' value='A10' type="checkbox" name="cap1" />
              <img id='imgAsiento' src="recursos\seat.png" alt='asiento' />
            </label>
          </Col>

          <Col id='filas' xs={1} sm={1} md={1} lg={1} >
            <h2>A</h2>
          </Col>
        </Row>

        <Row  >
          <Col id='colSala' xs={1} sm={1} md={1} lg={1} >
            <label  id='asientoB1' class="checkeable">
              <input className='seats' id='B1' value='B1' type="checkbox" name="cap1" />
              <img id='imgAsiento' src="recursos\seat.png" alt='asiento' />
            </label>
          </Col>
          <Col id='colSala' xs={1} sm={1} md={1} lg={1} >
            <label id='asientoB2' class="checkeable">
              <input className='seats' id='B2' value='B2' type="checkbox" name="cap1" />
              <img id='imgAsiento' src="recursos\seat.png" alt='asiento' />
            </label>
          </Col>
          <Col id='colSala' xs={1} sm={1} md={1} lg={1} >
            <label id='asientoB3' class="checkeable">
              <input className='seats' id='B3' value='B3' type="checkbox" name="cap1" />
              <img id='imgAsiento' src="recursos\seat.png" alt='asiento' />
            </label>
          </Col>
          <Col id='colSala' xs={1} sm={1} md={1} lg={1} >
            <label id='asientoB4' class="checkeable">
              <input className='seats' id='B4' value='B4' type="checkbox" name="cap1" />
              <img id='imgAsiento' src="recursos\seat.png" alt='asiento' />
            </label>
          </Col>
          <Col id='colSala' xs={1} sm={1} md={1} lg={1} >
            <label id='asientoB5' class="checkeable">
              <input className='seats' id='B5' value='B5' type="checkbox" name="cap1" />
              <img id='imgAsiento' src="recursos\seat.png" alt='asiento' />
            </label>
          </Col>
          <Col id='colSala' xs={1} sm={1} md={1} lg={1} >
            <label id='asientoB6' class="checkeable">
              <input className='seats' id='B6' value='B6' type="checkbox" name="cap1" />
              <img id='imgAsiento' src="recursos\seat.png" alt='asiento' />
            </label>
          </Col>
          <Col id='colSala' xs={1} sm={1} md={1} lg={1} >
            <label id='asientoB7' class="checkeable">
              <input className='seats' id='B7' value='B7' type="checkbox" name="cap1" />
              <img id='imgAsiento' src="recursos\seat.png" alt='asiento' />
            </label>
          </Col>
          <Col id='colSala' xs={1} sm={1} md={1} lg={1} >
            <label id='asientoB8' class="checkeable">
              <input className='seats' id='B8' value='B8' type="checkbox" name="cap1" />
              <img id='imgAsiento' src="recursos\seat.png" alt='asiento' />
            </label>
          </Col>
          <Col id='colSala' xs={1} sm={1} md={1} lg={1} >
            <label id='asientoB9' class="checkeable">
              <input className='seats' id='B9' value='B9' type="checkbox" name="cap1" />
              <img id='imgAsiento' src="recursos\seat.png" alt='asiento' />
            </label>
          </Col>
          <Col id='colSala' xs={1} sm={1} md={1} lg={1} >
            <label id='asientoB10' class="checkeable">
              <input className='seats' id='B10' value='B10' type="checkbox" name="cap1" />
              <img id='imgAsiento' src="recursos\seat.png" alt='asiento' />
            </label>
          </Col>
          <Col id='filas' xs={1} sm={1} md={1} lg={1} >
            <h2>B</h2>
          </Col>
        </Row>

        <Row  >
          <Col id='colSala' xs={1} sm={1} md={1} lg={1} >
            <label id='asientoC1' class="checkeable">
              <input className='seats' id='C1' value='C1' type="checkbox" name="cap1" />
              <img id='imgAsiento' src="recursos\seat.png" alt='asiento' />
            </label>
          </Col>
          <Col id='colSala' xs={1} sm={1} md={1} lg={1} >
            <label id='asientoC2' class="checkeable">
              <input className='seats' id='C2' value='C2' type="checkbox" name="cap1" />
              <img id='imgAsiento' src="recursos\seat.png" alt='asiento' />
            </label>
          </Col>
          <Col id='colSala' xs={1} sm={1} md={1} lg={1} >
            <label id='asientoC3' class="checkeable">
              <input className='seats' id='C3' value='C3' type="checkbox" name="cap1" />
              <img id='imgAsiento' src="recursos\seat.png" alt='asiento' />
            </label>
          </Col>
          <Col id='colSala' xs={1} sm={1} md={1} lg={1} >
            <label id='asientoC4' class="checkeable">
              <input className='seats' id='C4' value='C4' type="checkbox" name="cap1" />
              <img id='imgAsiento' src="recursos\seat.png" alt='asiento' />
            </label>
          </Col>
          <Col id='colSala' xs={1} sm={1} md={1} lg={1} >
            <label id='asientoC5' class="checkeable">
              <input className='seats' id='C5' value='C5' type="checkbox" name="cap1" />
              <img id='imgAsiento' src="recursos\seat.png" alt='asiento' />
            </label>
          </Col>
          <Col id='colSala' xs={1} sm={1} md={1} lg={1} >
            <label id='asientoC6' class="checkeable">
              <input className='seats' id='C6' value='C6' type="checkbox" name="cap1" />
              <img id='imgAsiento' src="recursos\seat.png" alt='asiento' />
            </label>
          </Col>
          <Col id='colSala' xs={1} sm={1} md={1} lg={1} >
            <label id='asientoC7' class="checkeable">
              <input className='seats' id='C7' value='C7' type="checkbox" name="cap1" />
              <img id='imgAsiento' src="recursos\seat.png" alt='asiento' />
            </label>
          </Col>
          <Col id='colSala' xs={1} sm={1} md={1} lg={1} >
            <label id='asientoC8' class="checkeable">
              <input className='seats' id='C8' value='C8' type="checkbox" name="cap1" />
              <img id='imgAsiento' src="recursos\seat.png" alt='asiento' />
            </label>
          </Col>
          <Col id='colSala' xs={1} sm={1} md={1} lg={1} >
            <label id='asientoC9' class="checkeable">
              <input className='seats' id='C9' value='C9' type="checkbox" name="cap1" />
              <img id='imgAsiento' src="recursos\seat.png" alt='asiento' />
            </label>
          </Col>
          <Col id='colSala' xs={1} sm={1} md={1} lg={1} >
            <label id='asientoC10' class="checkeable">
              <input className='seats' id='C10' value='C10' type="checkbox" name="cap1" />
              <img id='imgAsiento' src="recursos\seat.png" alt='asiento' />
            </label>
          </Col>
          <Col id='filas' xs={1} sm={1} md={1} lg={1} >
            <h2>C</h2>
          </Col>
        </Row>

        <Row  >
          <Col id='colSala' xs={1} sm={1} md={1} lg={1} >
            <label id='asientoD1' class="checkeable">
              <input className='seats' id='D1' value='D1' type="checkbox" name="cap1" />
              <img id='imgAsiento' src="recursos\seat.png" alt='asiento' />
            </label>
          </Col>
          <Col id='colSala' xs={1} sm={1} md={1} lg={1} >
            <label id='asientoD2' class="checkeable">
              <input className='seats' id='D2' value='D2' type="checkbox" name="cap1" />
              <img id='imgAsiento' src="recursos\seat.png" alt='asiento' />
            </label>
          </Col>
          <Col id='colSala' xs={1} sm={1} md={1} lg={1} >
            <label id='asientoD3' class="checkeable">
              <input className='seats' id='D3' value='D3' type="checkbox" name="cap1" />
              <img id='imgAsiento' src="recursos\seat.png" alt='asiento' />
            </label>
          </Col>
          <Col id='colSala' xs={1} sm={1} md={1} lg={1} >
            <label id='asientoD4' class="checkeable">
              <input className='seats' id='D4' value='D4' type="checkbox" name="cap1" />
              <img id='imgAsiento' src="recursos\seat.png" alt='asiento' />
            </label>
          </Col>
          <Col id='colSala' xs={1} sm={1} md={1} lg={1} >
            <label id='asientoD5' class="checkeable">
              <input className='seats' id='D5' value='D5' type="checkbox" name="cap1" />
              <img id='imgAsiento' src="recursos\seat.png" alt='asiento' />
            </label>
          </Col>
          <Col id='colSala' xs={1} sm={1} md={1} lg={1} >
            <label id='asientoD6' class="checkeable">
              <input className='seats' id='D6' value='D6' type="checkbox" name="cap1" />
              <img id='imgAsiento' src="recursos\seat.png" alt='asiento' />
            </label>
          </Col>
          <Col id='colSala' xs={1} sm={1} md={1} lg={1} >
            <label id='asientoD7' class="checkeable">
              <input className='seats' id='D7' value='D7' type="checkbox" name="cap1" />
              <img id='imgAsiento' src="recursos\seat.png" alt='asiento' />
            </label>
          </Col>
          <Col id='colSala' xs={1} sm={1} md={1} lg={1} >
            <label id='asientoD8' class="checkeable">
              <input className='seats' id='D8' value='D8' type="checkbox" name="cap1" />
              <img id='imgAsiento' src="recursos\seat.png" alt='asiento' />
            </label>
          </Col>
          <Col id='colSala' xs={1} sm={1} md={1} lg={1} >
            <label id='asientoD9' class="checkeable">
              <input className='seats' id='D9' value='D9' type="checkbox" name="cap1" />
              <img id='imgAsiento' src="recursos\seat.png" alt='asiento' />
            </label>
          </Col>
          <Col id='colSala' xs={1} sm={1} md={1} lg={1} >
            <label id='asientoD10' class="checkeable">
              <input className='seats' id='D10' value='D10' type="checkbox" name="cap1" />
              <img id='imgAsiento' src="recursos\seat.png" alt='asiento' />
            </label>
          </Col>

          <Col id='filas' xs={1} sm={1} md={1} lg={1} >
            <h2>D</h2>
          </Col>
        </Row>

        <Row  >
          <Col id='colSala' xs={1} sm={1} md={1} lg={1} >
            <label id='asientoE1' class="checkeable">
              <input className='seats' id='E1' value='E1' type="checkbox" name="cap1" />
              <img id='imgAsiento' src="recursos\seat.png" alt='asiento' />
            </label>
          </Col>
          <Col id='colSala' xs={1} sm={1} md={1} lg={1} >
            <label id='asientoE2' class="checkeable">
              <input className='seats' id='E2' value='E2' type="checkbox" name="cap1" />
              <img id='imgAsiento' src="recursos\seat.png" alt='asiento' />
            </label>
          </Col>
          <Col id='colSala' xs={1} sm={1} md={1} lg={1} >
            <label id='asientoE3' class="checkeable">
              <input className='seats' id='E3' value='E3' type="checkbox" name="cap1" />
              <img id='imgAsiento' src="recursos\seat.png" alt='asiento' />
            </label>
          </Col>
          <Col id='colSala' xs={1} sm={1} md={1} lg={1} >
            <label id='asientoE4' class="checkeable">
              <input className='seats' id='E4' value='E4' type="checkbox" name="cap1" />
              <img id='imgAsiento' src="recursos\seat.png" alt='asiento' />
            </label>
          </Col>
          <Col id='colSala' xs={1} sm={1} md={1} lg={1} >
            <label id='asientoE5' class="checkeable">
              <input className='seats' id='E5' value='E5' type="checkbox" name="cap1" />
              <img id='imgAsiento' src="recursos\seat.png" alt='asiento' />
            </label>
          </Col>
          <Col id='colSala' xs={1} sm={1} md={1} lg={1} >
            <label id='asientoE6' class="checkeable">
              <input className='seats' id='E6' value='E6' type="checkbox" name="cap1" />
              <img id='imgAsiento' src="recursos\seat.png" alt='asiento' />
            </label>
          </Col>
          <Col id='colSala' xs={1} sm={1} md={1} lg={1} >
            <label id='asientoE7' class="checkeable">
              <input className='seats' id='E7' value='E7' type="checkbox" name="cap1" />
              <img id='imgAsiento' src="recursos\seat.png" alt='asiento' />
            </label>
          </Col>
          <Col id='colSala' xs={1} sm={1} md={1} lg={1} >
            <label id='asientoE8' class="checkeable">
              <input className='seats' id='E8' value='E8' type="checkbox" name="cap1" />
              <img id='imgAsiento' src="recursos\seat.png" alt='asiento' />
            </label>
          </Col>
          <Col id='colSala' xs={1} sm={1} md={1} lg={1} >
            <label id='asientoE9' class="checkeable">
              <input className='seats' id='E9' value='E9' type="checkbox" name="cap1" />
              <img id='imgAsiento' src="recursos\seat.png" alt='asiento' />
            </label>
          </Col>
          <Col id='colSala' xs={1} sm={1} md={1} lg={1} >
            <label id='asientoE10' class="checkeable">
              <input  className='seats' id='E10' value='E10' type="checkbox" name="cap1" />
              <img id='imgAsiento' src="recursos\seat.png" alt='asiento' />
            </label>
          </Col>
          <Col id='filas' xs={1} sm={1} md={1} lg={1} >
            <h2>E</h2>
          </Col>
        </Row>
        <Row className='botones'>
          <Col className='botonReservar' xs={6} sm={6} md={6} lg={6} >
            <ModalSeat  totalCompra={total} onClick={{reservar,asientosReservados}} />
          </Col>

          <Col className='selectHorario' xs={6} sm={6} md={6} lg={6} >
            <Form.Select onChange={asientosReservados} id='Horario' aria-label="Default select example">
            <option >Horario</option>
              <option value="1">13:30</option>
              <option value="2">16:30</option>
              <option value="3">20:30</option>
            </Form.Select>
            <Link to="/Noticias">
                        <button className="learn-more">
                            <span className="circle" aria-hidden="true">
                                <span className="icon arrow"></span>
                            </span>
                            <span id='noticias' className="button-text">Noticias</span>
                        </button>
                    </Link>


                    <Link to="/salaCine">
                        <button className="learn-more">
                            <span className="circle" aria-hidden="true">
                                <span className="icon arrow"></span>
                            </span>
                            <span id='noticias' className="button-text">salaCine</span>
                        </button>
                    </Link>
                    <Link to="/Cinene">
                        <button className="learn-more">
                            <span className="circle" aria-hidden="true">
                                <span className="icon arrow"></span>
                            </span>
                            <span id='noticias' className="button-text">Cinene</span>
                        </button>
                    </Link>
                   
          </Col>
        </Row>

      </Container>
    </div>



  );
}


export default Lalo;





