import './QuestionsList.scss'
import { FormControl, FormFloating, Card, AccordionButton, Accordion, Row } from 'react-bootstrap';
import AccordionBody from 'react-bootstrap/esm/AccordionBody';
import AccordionHeader from 'react-bootstrap/esm/AccordionHeader';

function QuestionsList(props) {
  return (
    <div className="QuestionsList">
      <Accordion>
        <Card className='cardQ'>
          
          <Card.Body /*style={{ display: 'flex'}}*/>
            <Card.Title>{props.user}</Card.Title>
            <Card.Subtitle style={{  fontSize: '16px' }}>{props.date}</Card.Subtitle>         
            <br></br>
            <Card.Text>{props.content}</Card.Text>   
            <AccordionButton className = 'acord'><strong>Ver respuestas</strong></AccordionButton>
          </Card.Body>
          <br></br>
          </Card>
              <AccordionBody>
              <br></br>
                <Card className='cardA' style={{
                    width: '100%',
                    borderRadius: '24px',
                    height: 'auto',
                    verticalAlign: 'center',
                    backgroundColor: 'rgba(224, 154, 39, 0.35)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid #fff',
                }}>
                  <Card.Body /*style={{ display: 'flex'}}*/>
                  <Card.Title>{props.user}</Card.Title>
                  <Card.Subtitle style={{  fontSize: '16px' }}>{props.date}</Card.Subtitle>         
                  <br></br>
                  <Card.Text>{props.content}</Card.Text>   
                  </Card.Body>
                  </Card>
              </AccordionBody>
            </Accordion>  
            <br></br>
            <FormFloating>
              <FormControl className = "responder" placeholder= {props.placeholder} style = {{height: "100px"}} ></FormControl>
              <label for="floatingTextarea2">Responder...</label>
            </FormFloating>
            <div className = "div-1">
              <Row>
              <button className="btn-publ" >PUBLICAR</button>
              </Row>
            </div>
          <br></br>
    </div>
  );
}

export default QuestionsList;

