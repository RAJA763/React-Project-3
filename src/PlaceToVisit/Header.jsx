import React from 'react'
import { Figure } from 'react-bootstrap'

const Header = ({PlaceToVisitTitle}) => {
  return (
    <>
        <div className="body" style={{margin:"40px 0"}}>
            <Figure  style={{float:"right",marginLeft:"40px"}}>
                <Figure.Image 
                    src={PlaceToVisitTitle.img} 
                    alt={PlaceToVisitTitle.Heading} 
                    style={
                        { 
                            width:"540px",
                            height:"430px",
                        }
                    }     
                />
                <Figure.Caption style={{textAlign:"center", fontSize:"1rem"}}>{PlaceToVisitTitle.Heading}</Figure.Caption>
            </Figure>
            <h4 style={{marginBottom:"40px"}}>{PlaceToVisitTitle.Heading}</h4>
            <p style={{textAlign:"justify"}}>
                <span style={{marginLeft:'80px'}}></span>
                {PlaceToVisitTitle.content.p1}
                <br/><br/>
                <span style={{marginLeft:'80px'}}></span>
                {PlaceToVisitTitle.content.p2}
                <br/><br/>
                <span style={{marginLeft:'80px'}}></span>
                {PlaceToVisitTitle.content.p3}
                <br/><br/>
                <span style={{marginLeft:'80px'}}></span>
                {PlaceToVisitTitle.content.p4}
                <br/><br/>
            </p>
        </div>
    </>
  )
}

export default Header