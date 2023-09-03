import React from 'react'
import CreateContent from '../CreateContent'
import { district, listOfSeasons } from '../../Datas/BestTimeToVisit/OotyData'

const Ooty = () => {
  return (
    <div>
      <CreateContent district={district} listOfSeasons={listOfSeasons}/>
    </div>
  )
}

export default Ooty