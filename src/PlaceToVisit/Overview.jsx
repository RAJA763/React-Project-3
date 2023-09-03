import React from 'react'
import {Container, Row} from 'react-bootstrap'

const Overview = ({ titleCard, cardItem}) => {
    function imgContainer(item){
        return(
            <div className="col-lg-2" style={{padding:"0"}}>
                <img 
                    src={item.img}
                    alt={item.placeName} 
                    style={{
                        width:"130%",
                        height:"100%",
                        paddingLeft: item.id % 2 !== 0 ? "0" : "10px",
                        paddingRight: item.id % 2 === 0 ? "0" : "10px"
                    }}
                    />
            </div>
        )
    }
    function textContainer(item){
        return (
            <div 
                className="col-lg-9" 
                style={{
                    padding:'0',
                    marginLeft : item.id % 2 !== 0 ? "92px" : "0",
                    marginRight : item.id % 2 === 0 ? "35px" : "0",
                }}
            >
                <h6 style={{marginTop:'8px',fontWeight:"750"}}>{item.placeName}, Overview</h6>
                <p style={{textAlign:"justify", margin:"0"}}>
                    <span style={{marginLeft:'80px'}}></span>
                    {item.overview.p1}
                    <br/><br/>
                    <span style={{marginLeft:'80px'}}></span>
                    {item.overview.p2}
                    <br/><br/>
                </p>
            </div>
        )
    }
    return (
    <div className='body'>
        <h2 style={{textAlign:"center"}}>{titleCard.Heading}</h2>
        <h3 style={{textAlign:"center"}}>Tourist Places visit</h3>
        <Container style={{margin:'0', padding:'0'}}>
            {cardItem.map((item) => {
                return(
                    <Row style={{margin:"60px 0"}} key={item.id}>
                        {item.id %2 === 0 ? textContainer(item) : imgContainer(item)}
                        {item.id %2 !== 0 ? textContainer(item) : imgContainer(item)}
                    </Row>
                )
            })}
        </Container>
    </div>
  )
}

export default Overview