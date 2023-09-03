import React from 'react'
import CreateContent from '../CreateContent'
import { district, listOfSeasons } from '../../Datas/BestTimeToVisit/MaduraiData'

const Madurai = () => {
  return (
    <div>
        <CreateContent district={district} listOfSeasons={listOfSeasons}/>
    </div>
  )
}

export default Madurai