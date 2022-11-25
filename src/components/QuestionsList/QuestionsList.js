import './QuestionsList.scss'
import QuestionCard from '../QuestionCard/QuestionCard';
import { FormControl, FormFloating, Card, AccordionButton, Accordion, Row, Col } from 'react-bootstrap';
import { useEffect, useState } from 'react';

function QuestionsList(props) {

  const [questions, setQuestions] = useState([]);
   useEffect(()=>{
       const URL = "http://localhost:3000/api/v1/q&as";
       fetch(URL).then(data => data.json()).then(data => {
           setQuestions(data.filter(m=>m.question === null));
       })
   }, []);

  return (
    <div className="QuestionsList">
      <Row>
               {questions.map(question => <Row><QuestionCard question={question} key={question.id}/></Row>)}               
      </Row>
    </div>
  );
}

export default QuestionsList;

