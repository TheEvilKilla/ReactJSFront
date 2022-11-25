import './QuestionCard.css'
import { FormControl, FormFloating, Card, AccordionButton, Accordion, Row } from 'react-bootstrap';
import AccordionBody from 'react-bootstrap/esm/AccordionBody';
import AccordionHeader from 'react-bootstrap/esm/AccordionHeader';
import { useEffect, useState } from 'react';
import AnswerCard from '../AnswerCard/AnswerCard';
import { FormattedDate } from 'react-intl';

function QuestionCard(props) {


    const [answers, setAnswers] = useState([]);
    useEffect(()=>{
        const URL = `http://localhost:3000/api/v1/q&as/${props.question.id}/q&as`;
        fetch(URL).then(data => data.json()).then(data => {
            setAnswers(data);
        })
    }, []);
    
  return (
    <div className="QuestionsList">
      <Accordion>
        <Card className='cardQ'> 
          <Card.Body /*style={{ display: 'flex'}}*/>
            <Card.Title>{props.question.user}</Card.Title>
            <Card.Subtitle style={{  fontSize: '16px' }}>
            <FormattedDate
            value={new Date(props.question.date)}
            year='numeric'
            month='long'
            day='numeric'
            weekday='long'
          />  
            </Card.Subtitle>         
            <br></br>
            <Card.Text>{props.question.description}</Card.Text>   
            <AccordionButton className = 'acord'><strong>Ver respuestas</strong></AccordionButton>
          </Card.Body>
          </Card>
              <AccordionBody>
              <br></br>
               {answers.map(answer => <AnswerCard answer={answer} key={answer.id}/>)}  
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
    </div>
  );
}

export default QuestionCard;

