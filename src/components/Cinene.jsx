import './Cinene.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Cinene = () => {
    return (

        <div id='backGround'>

            <Container class="d-flex justify-content-end align-items-center" id="titulo">
                <Row >
                    <Col>
                       
                            <h1 class="title" className="frase">CINENE</h1>
                            <button id='iniciar' onClick={apartar} data-text="Awesome" class="button animate__animated animate__rubberBand">
                                <span class="actual-text">&nbsp;Iniciar&nbsp;</span>
                                <span id='iniciar' class="hover-text" aria-hidden="true">&nbsp;Iniciar&nbsp;</span>
                            </button>
                        
                    </Col>
                </Row>
            </Container>
           

        </div>
    );
}

function apartar() {
    window.scrollTo({
        behavior: 'smooth',
        top: 730
    })

}

export default Cinene;