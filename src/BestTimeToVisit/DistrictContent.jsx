import React from 'react'

const DistrictContent = ({district}) => {
  const showStyle= {
    display:'block',
    paddingTop:'40px'
  }
  const hideStyle = {}
  return (
    <>
        <div className="col-lg-6">
          <h3 
            style={{
              padding:'20px 0 40px',
              display:district.id % 2 !== 0 ? "block" : "none"
            }}
          >
            {district.ids+ ". " +district.heading}
          </h3>
          <div style={district.id % 2 === 0 ? showStyle : hideStyle}>
            <h5 
              style={{
                paddingBottom:'10px'
              }}
            > 
              What is the best time to Visit :
            </h5>
            <p style={{textAlign:'justify'}}>
              <span style={{marginLeft:'270px'}}></span>
              {district.content.content1}<br/><br/>
              <span style={{marginLeft:'270px'}}></span>
              {district.content.content2}<br/><br/>
            </p>
          </div>
        </div>
    </>
  )
}

export default DistrictContent