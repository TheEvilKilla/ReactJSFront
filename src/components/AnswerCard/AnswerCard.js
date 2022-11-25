import './AnswerCard.css'
import { FormControl, FormFloating, Card, AccordionButton, Accordion, Row } from 'react-bootstrap';
import AccordionBody from 'react-bootstrap/esm/AccordionBody';
import AccordionHeader from 'react-bootstrap/esm/AccordionHeader';

function AnswerCard(props) {
    return (

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
                <Card.Title>{props.answer.user}</Card.Title>
                <Card.Subtitle style={{ fontSize: '16px' }}>{props.answer.date}</Card.Subtitle>
                <br></br>
                <Card.Text>{props.answer.description}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default AnswerCard;

