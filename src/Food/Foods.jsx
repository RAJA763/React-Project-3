import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import {title, cardItem} from "../Datas/Food"

const Food = () => {
  return (
    <div className="body">
      <Container style={{padding:'5.5% 0', paddingRight:'0'}}>
        <Row>
          <div className='col-lg-6' style={{paddingRight:'2.5%'}}>
            <h4 style={{paddingBottom:'3%'}}>{title.heading}</h4>
            <p style={{textAlign:'justify'}}>
              <span style={{paddingLeft:'10%'}}></span>
              {title.content}</p>            
          </div>
          <div className='col-lg-6' style={{padding:'3% 0 0 2%', paddingRight:'0'}}>
            {title.foodImages.map((item) => (
              <img key={item.id}
                style={{
                  height: '41%',
                  width: '50%',
                  padding: '1.3% 2%'
                }}
                src={item.foodImgSrc} alt="Food" 
              />
            ))}
          </div>
        </Row>
        <h4 style={{textAlign:'center'}}>TAMILNADU</h4>
        <h4 style={{textAlign:'center', marginBottom:'6%'}}>FAMOUS AND LOCAL FOODS</h4>
        <Row>
          {cardItem.map((item) => (
            <Col lg={5}
              style={{
                margin: item.id % 2 ===0 ? '2% 3% 2% 5%' : '2% 5% 2% 3%' ,
                borderRadius: "7%",
                boxShadow: "0 0 10px 0 black"
              }}
            >
              <h5
                style={{
                  textAlign:'center',
                  padding:'6% 0 3%'
                }}
              >{item.districtName}</h5>
              <p 
                style={{
                  textAlign:'justify',
                  padding:'1.5%',
                  fontFamily:'unset'
                }}
              ><span style={{marginLeft:'12%'}}></span>
                {item.content}
              </p>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default Food