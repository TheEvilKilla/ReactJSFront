import './QuestionCard.css'
import { FormControl, FormFloating, Card, AccordionButton, Accordion, Row } from 'react-bootstrap';
import AccordionBody from 'react-bootstrap/esm/AccordionBody';
import AccordionHeader from 'react-bootstrap/esm/AccordionHeader';
import { useEffect, useState } from 'react';
import AnswerCard from '../AnswerCard/AnswerCard';
import { FormattedDate, FormattedMessage } from 'react-intl';

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
            <Card.Title>{props.question.user.name}</Card.Title>
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
            <AccordionButton className = 'acord'><strong><FormattedMessage id = "viewAnswers"/></strong></AccordionButton>
          </Card.Body>
          </Card>
              <AccordionBody>
              <br></br>
               {answers.map(answer => <AnswerCard answer={answer} key={answer.id}/>)}  
              </AccordionBody>
            </Accordion>  
            <br></br>
            <FormFloating>
              <FormControl className = "form-control" placeholder= {props.placeholder} style = {{height: "100px"}} id = "floatingTextarea2" ></FormControl>
              <label htmlFor="floatingTextarea2">
              <FormattedMessage id = "answer"/></label>
            </FormFloating>
            <div className = "div-1">
              <Row>
              <button className="btn-publ" ><FormattedMessage id = "publish"/></button>
              </Row>
            </div>
    </div>
  );
}

export default QuestionCard;

