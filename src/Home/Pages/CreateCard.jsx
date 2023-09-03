import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CardGroup } from 'react-bootstrap';
import "../Pages/Home.css"

function CreateCard({titleCard, cardItem}) {
  return (
    <>
        <h4 className='place-h4'>Must Visit Place in {titleCard.Heading}</h4>
        <CardGroup className="card-group">
            {cardItem.map((item) => (
                <Card className="card-item" key={item.id}>
                    <Card.Img variant="top" style={{borderRadius:"8px 8px 0 0"}} height="200" src={item.img} alt={item.placeName}/>
                    <Card.Body>
                        <Card.Title><h5>{item.placeName}</h5></Card.Title>
                        <Card.Text style={{textAlign:'justify'}}>{item.description}</Card.Text>
                        <Button variant="primary">Read More</Button>
                    </Card.Body>
                </Card>
            ))}
        </CardGroup>
    </>
  );
}

export default CreateCard;