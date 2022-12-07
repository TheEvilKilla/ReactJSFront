import React from "react";
import * as Element from "react-bootstrap";
import { alignPropType } from "react-bootstrap/esm/types";
import './review-list.css';

function ReviewsList(props) {

    const [reviews, setReviews] = useState([]);
     useEffect(()=>{
         const URL = "http://localhost:3000/api/v1/reviews";
         fetch(URL).then(data => data.json()).then(data => {
             setReviews(data.filter(m=>m.review === null));
         })
     }, []);
  
    return (
      <div className="ReviewsList">
        <Row>
                 {reviews.map(review => <Row><ReviewCard review={review} key={review.id}/></Row>)}               
        </Row>
      </div>
    );
  }
  
  export default ReviewsList;
  