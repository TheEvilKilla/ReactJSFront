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
        const URL = `http://localhost:3000/api/v1/reviews/${props.review.id}`;
        fetch(URL).then(data => data.json()).then(data => {
            setAnswers(data);
        })
    }, []);
    
  return (
    <div className='review-card'>
            <Element.Col style={{
                paddingTop: '46px'
            }}>
                <Element.Card style={{
                    width: '100%',
                    borderRadius: '24px',
                    height: '300px',
                    verticalAlign: 'center',
                    backgroundColor: 'rgba(255,255,255, 0.25)',
                    backdropFilter: 'blur(20px)',
                    border: '4px solid #fff'
                }}>
                    <Element.Card.Body style={{
                        display: 'flex',     
                    }}>
                        <Element.Row>
                            <Element.Col style={{
                                display: 'flex',
                                maxWidth: '252px',
                                maxHeight: '252px',
                                alignContent: 'center'
                            }}>
                                <img src={props.image} style={{
                                    borderRadius: '50%',
                                    maxWidth: '252px',
                                    maxHeight: '252px'
                                }} />
                            </Element.Col>
                            <Element.Col style={{
                                paddingLeft: '45px'
                            }}>
                                <Element.Row>
                                    <Element.Card.Title style={{
                                        fontSize: '24px'
                                    }}>{props.userName}</Element.Card.Title>
                                    <Element.Card.Text style={{
                                        fontSize: '15px'
                                    }}>{props.date}</Element.Card.Text>
                                </Element.Row>
                                <br></br>
                                <Element.Row>
                                    <Element.Card.Text style={{
                                        fontSize: '20px'
                                    }}>{props.description}</Element.Card.Text>
                                </Element.Row>
                                <br></br>
                                <Element.Row>
                                    <Element.Card.Text style={{
                                        fontSize: '24px'
                                    }}>{props.rating}</Element.Card.Text>
                                </Element.Row>
                                
                            </Element.Col>
                        </Element.Row>
                    </Element.Card.Body>
                </Element.Card>
            </Element.Col>
        </div>
  );
}

export default ReviewCard;

