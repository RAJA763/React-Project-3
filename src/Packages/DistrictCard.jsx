import {Row, Container, Button, Card, OverlayTrigger, Tooltip, Carousel} from 'react-bootstrap';
import {FaInfoCircle} from 'react-icons/fa'
import Navigation from '../Home/Pages/Navigation';
import { useEffect } from 'react';

function DistrictCard({ districtContent, packageContent ,defaultPackages}) {
    useEffect(() => {
        window.scrollTo(0,0);
    },[])
  return (
    <>
    <Navigation/>
        <Container>
        <Row>
            <h2 style={{textAlign:'center', padding:'30px 0 15px 0'}}>{districtContent.heading}</h2>
            <h2 style={{textAlign:'center', paddingBottom:'40px'}}>Packages</h2>
            {defaultPackages.map((item) => (
                <div className="col-lg-6" key={item.id} style={{paddingBottom:'60px'}}>
                    <Card>
                        <Carousel>
                            {item.imgSrc.map((i) => (
                                <Carousel.Item key={i.id} interval={1000}>
                                    <Card.Img 
                                        src={i.imgs}
                                        alt="" 
                                        style={{
                                            height:'355px'
                                        }}    
                                    />
                                    <Carousel.Caption>
                                        <h5>{i.imgalt}</h5>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            ))}
                        </Carousel>
                        <Card.Body>
                            <Card.Text style={{textAlign:'justify', height:'150px'}}><span style={{paddingRight:'80px'}}></span>{item.content}</Card.Text>
                            <Button variant="primary" style={{float:'right'}}>Book Now</Button>
                            <OverlayTrigger
                                placement='top'
                                overlay={
                                    <Tooltip>
                                        <h6>Package Details</h6>
                                        <p>Travelling Distance: {item.distance}</p>
                                        <p>Travel Duration: {item.duration}</p>
                                        <p>Amount: {item.amount}</p>
                                    </Tooltip>
                                }
                                >
                                <button
                                    style={{
                                        background:'none',
                                        border:'none',
                                        paddingTop:'4px'
                                    }}
                                >
                                    <FaInfoCircle/>
                                </button>
                            </OverlayTrigger>
                        </Card.Body>
                    </Card>
                </div>
            ))}
        </Row>
        <Row>
            <h2 style={{
                textAlign:'center', 
                paddingBottom:'40px'
            }}>
                Famous Places
            </h2>
            {packageContent.map((item) => (
                <div className='col-lg-3' style={{paddingBottom:'20px'}} key={item.id}>   
                    <Card style={{ width: '16rem', transform:'0.8s all ease'}} className='package-card'>
                        <Card.Img 
                            variant="top" 
                            src={item.imgSrc} 
                            alt={item.heading}
                            style={{
                                height:'185px'
                            }}
                        />
                        <Card.Body>
                            <Card.Title
                                style={{
                                    height:'48px'
                                }}
                            >
                                {item.heading}
                            </Card.Title>
                            <Card.Text style={{
                                textAlign:'justify',
                                height:'158px'
                            }}>
                                <span style={{paddingRight:'40px'}}></span>{item.content}
                            </Card.Text>
                            <Button variant="primary" style={{float:'right'}}>Book Now</Button>
                            <OverlayTrigger
                                placement='top'
                                overlay={
                                    <Tooltip>
                                        <h6>Package Details</h6>
                                        <p>Travelling Distance: {item.distance}</p>
                                        <p>Travel Duration: {item.duration}</p>
                                        <p>Amount: {item.amount}</p>
                                    </Tooltip>
                                }
                                >
                                <button
                                    style={{
                                        background:'none',
                                        border:'none',
                                        paddingTop:'4px',
                                    }}
                                >
                                    <FaInfoCircle/>
                                </button>
                            </OverlayTrigger>
                        </Card.Body>
                    </Card>
                </div>
            ))}
        </Row>
        </Container>
    </>
  );
}

export default DistrictCard;