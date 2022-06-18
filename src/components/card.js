import Card from 'react-bootstrap/Card'
import "./courses.css";

function Carde (props){
    
    return(
        <div className='card-space'>
        <Card style={{ width: '21rem' }}>
        <Card.Img variant="top" src={props.img} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            {props.content}
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
    );

}
export default Carde;