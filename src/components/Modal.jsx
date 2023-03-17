import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './salaCine'


function ModalSeat(props) {
  const [show, setShow] = useState(false);

  
  

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function insertarCliente() {
    const totalStorage = JSON.parse(localStorage.getItem("comprar"));
    totalStorage.forEach(element => {
      
      var c={};
      c.Nombre =  document.getElementById('Nombre').value;
      c.Correo = document.getElementById('Correo').value;
      c.Telefono = document.getElementById('Telefono').value; 
      c.Total = element.total;
      c.Asiento = element.id;
      c.idFuncion = element.funcion;
      console.log(c);

      axios.post('http://localhost:3100/InsertarBoleto', c)
      .then((response)=>{
        
       console.log(response);
        
      })
      .catch((error =>{
        console.log(error);
      }))
    });
  

       
  }

  function comprar () {
    insertarCliente();
    handleClose();
    alert("Reserva confirmada")
    for (const checkbox of document.querySelectorAll('.seats')) {    
      // checkbox.checked = true //for selection
      checkbox.checked = false //for unselection
      }
    props.onClick.asientosReservados()
      
    
        
  }
  

  function preReserva () {
    props.onClick.reservar();
    if (localStorage.getItem("comprar").length === 0 ) {
      alert("seleccione un asiento")
    }else{
      handleShow();
    }
    
   
    
    
        
  }

  return (
    <>
      <Button variant="dark" onClick={preReserva}>
      Reservar
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Reservar Asiento</Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
        <Container>
          <Row>

            <Col xs={12} md={12}>
            <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                id='Nombre'
                type="text"
                placeholder="Name"
                autoFocus
              />  
            </Form.Group>
          </Form>
            </Col>
          </Row>

          <Row>
            <Col xs={12} md={12}>
            <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                id='Correo'
                type="email"
                placeholder="name@example.com"
                autoFocus
              />  
            </Form.Group>
          </Form>
            </Col>
            <Col xs={6} md={6}>
            <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>phone number</Form.Label>
              <Form.Control
                id='Telefono' 
                type="number"
                autoFocus
              />  
            </Form.Group>
          </Form>
            </Col>
            <Col xs={6} md={6}>
            <Form>
          <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
              <Form.Label>Total</Form.Label>
              <Form.Control
                value={props.totalCompra}
                readOnly={true}  
                type="number"
                autoFocus
              />  
            </Form.Group>
          </Form>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={comprar}>
            Reservar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


export default ModalSeat;