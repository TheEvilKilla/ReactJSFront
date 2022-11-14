import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import './PostPet.css'
import dog from "../assets/perro.jpg"


function PostPet(props) {
  return (
    <div className="PostPet">
      <Col>
        <Card style={{ width: "16rem" }}>
          
          <Card.Body className="card">

            <Card.Title>{props.name}</Card.Title>         
            <Card.Text>{props.species}</Card.Text>          
            <img src ={dog} alt = "perro"/>
          </Card.Body>
        </Card>
      </Col>
      </div>
  );
}

export default PostPet;

