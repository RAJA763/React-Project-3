import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Button} from 'react-bootstrap';
import { FaGreaterThan } from 'react-icons/fa';

const DistrictContent = ({ districtContent }) => {
    const CardContent = () => {
        return (
            <div className="col-lg-6" style={{padding:'1% 0'}}>
                <h3 style={{padding:'0.5% 0'}}>{districtContent.title}</h3>
                {districtContent.contents.map(item => (
                    <p style={{textAlign:'justify'}} key={item.id}>
                        <span style={{marginLeft:'80px'}}></span>
                        {item.content}
                    </p>
                ))}
                <p>More About Packages &emsp;
                    <Link to={`/packages/${districtContent.heading}`}>
                        <Button variant='primary'>Know More <FaGreaterThan /> </Button>
                    </Link>
                </p>
            </div>
        );
    }

    const CardImage = () => {
        return (
            <div className="col-lg-6" style={{paddingLeft : districtContent.id % 2 === 0 ? "0" : "4%" }}>
                <img src={districtContent.imgSrc} style={{width:'530px', height:'350px'}} alt={districtContent.heading} />
            </div>
        )
    }

  return (
    <>
        <Container>
            <Row style={{padding:'3% 0'}}>
                <h3 style={{padding:'0.5% 0'}}>{districtContent.ids + ". " + districtContent.heading}</h3>
                {districtContent.id % 2 === 0 ? <CardImage /> : <CardContent />}
                {districtContent.id % 2 !== 0 ? <CardImage /> : <CardContent />}
            </Row>
        </Container>
    </>
  )
}

export default DistrictContent;