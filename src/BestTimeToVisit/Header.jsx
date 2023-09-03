import React from 'react'
import { Accordion, Figure, Row ,Container} from 'react-bootstrap'
import { title, dropDownItem } from '../Datas/BestTimeToVisit/BestTimeToVisit'

const Header = () => {
  return (
    <div className='body'>
      <h4 style={{padding: "40px 30px 0"}}>TAMILNADU TOURISM</h4>
      <h2 style={{padding: "0 30px 40px"}}>{title.heading}</h2>
      <Container>
        <Row>
          <div className="col-lg-6">
            <Figure>
              <Figure.Image 
                src={title.imageSrc}
              />
              <Figure.Caption 
                style={{
                  textAlign:'center',
                  fontWeight:'700'
                }}>
                {title.placeHolder}
              </Figure.Caption>
            </Figure>
          </div>
          <div className="col-lg-6">
            <h5 style={{textAlign:'center', paddingBottom:'40px'}}>More about Best Time to Travel to Tamil Nadu</h5>
            {dropDownItem.map((item) => (
              <Accordion key={item.id}>
                <Accordion.Item eventKey={item.id}>
                  <Accordion.Header>{item.season}</Accordion.Header>
                  <Accordion.Body>
                    <p 
                      style={{textAlign:'justify'}}>
                      <span style={{marginLeft:'60px'}}></span>
                      {item.content}
                    </p>
                    <Figure>
                      <Figure.Image 
                        src={item.imageSrc}
                      />
                      <Figure.Caption 
                        style={{
                          textAlign:'center',
                          fontWeight:'700'
                        }}>
                        {item.placeHolder}
                      </Figure.Caption>
                    </Figure>  
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            ))}
          </div>
          <div style={{textAlign:'justify'}}>
            <span style={{marginLeft:'80px'}}>{title.content}</span>
          </div>
        </Row>
      </Container>
      <div style={{paddingTop:'140px'}}>
        <h3 style={{textAlign:'center', paddingBottom:'10px'}}>TAMILNADU TOURISM</h3>
        <h6 style={{textAlign:'center', fontWeight:'700'}}>Best Time To Visit</h6>
      </div>
    </div>
  )
}

export default Header