import React from 'react'
import {Container,Row} from 'react-bootstrap'
import DistrictContent from './DistrictContent'
import DistrictSeasonContent from './DistrictSeasonContent'

const CreateContent = ({district, listOfSeasons}) => {
  return (
    <>
        <Container style={{padding:'40px 0'}}>
            <Row>
              {district.id % 2 === 0 ?
                <DistrictSeasonContent district={district} listOfSeasons={listOfSeasons}/>:
                <DistrictContent district={district}/>
              }
                
              {district.id % 2 !== 0 ?
                <DistrictSeasonContent district={district} listOfSeasons={listOfSeasons}/>:
                <DistrictContent district={district}/>
              }
            </Row>
        </Container>
    </>
  )
}

export default CreateContent