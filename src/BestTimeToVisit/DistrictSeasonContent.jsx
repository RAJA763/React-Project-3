import {React, useState} from 'react'
import { Col,Figure, Modal ,Row, Button, Offcanvas} from 'react-bootstrap'
import "./BestTimeToVisit.css"

const DistrictSeasonContent = ({district, listOfSeasons}) => {
    const [show, setShow] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const handleIndex = () => (
        district.id %2 === 0 ? setIsActive(false) : setIsActive(true)
    )
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const showStyle = {
        display: "block",
        paddingLeft: "15px"
    }
    const hideStyle = {
        display: 'none'
    }
    return (
        <>
            <h3
                style={district.id % 2 === 0 ? showStyle : hideStyle}
            >
                {district.ids + ". " + district.heading}
            </h3>
            <div className="col-lg-6">
                <div className={`modal show ${isActive ? 'active' : null}`}
                    style={{ 
                        display: 'block', 
                        position: 'initial'
                    }}>
                    <Modal.Dialog style={{right : district.id % 2 === 0 ? '20px': '-20px'}}>
                        <Modal.Header closeButton>
                            <Modal.Title 
                                style={{
                                    textAlign:'center',
                                    paddingRight:'50px',
                                    fontWeight:'700',
                                    fontSize:'1.45rem'
                                }}>
                                More About Best Time to Travel To {district.heading}
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Row style={{margin:'0 50px'}}>
                                {listOfSeasons.map((item) => (
                                    <Col key={item.id}>
                                        <Figure>
                                            <Figure.Image 
                                                src={item.imageSrc}
                                                style={{
                                                    height:'150px',
                                                    width:'96px'
                                                }}
                                            />
                                            <Figure.Caption 
                                                style={{
                                                    textAlign:'center',
                                                    fontWeight:'500', 
                                                    fontSize:'14px',
                                                    width:'96px'
                                                }}>
                                                {item.placeHolder}
                                            </Figure.Caption>
                                        </Figure>
                                    </Col>
                                ))}
                            </Row>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button 
                                variant="secondary" 
                                style={{fontWeight:'600'}} 
                                onClick={() => {handleClose()
                                    setIsActive(false)
                                }}>
                                Close
                            </Button>
                            <Button 
                                variant="primary" 
                                style={{fontWeight:'600'}} 
                                onClick={() => {handleShow()
                                    handleIndex()
                                }}>
                                Save changes
                            </Button>
                            <Offcanvas 
                                show={show} 
                                onHide={() => {handleClose()
                                    setIsActive(false)
                                }}
                                placement={district.id % 2 === 0 ? 'end' : 'start'}
                            >
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title
                                        style={{
                                            padding:'0 40px 0 80px',
                                            textAlign:'center'
                                        }}
                                    >
                                        Best Time To Visit In {district.heading}
                                    </Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    {listOfSeasons.map((item) => (
                                        <div key={item.id}>
                                            <h6 style={{fontWeight:'700', padding:'10px 0'}}>{item.season}</h6>
                                            <p 
                                                style={{
                                                    textAlign:'justify',
                                                    paddingBottom:'10px'
                                                }}>
                                                <span style={{marginLeft:'80px'}}></span>
                                                {item.content}
                                            </p>
                                        </div>
                                    ))}
                                </Offcanvas.Body>
                            </Offcanvas>
                        </Modal.Footer>
                    </Modal.Dialog>
                </div>                                        
            </div>
        </>
  )
}

export default DistrictSeasonContent