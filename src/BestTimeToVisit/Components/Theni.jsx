import React from 'react'
import CreateContent from '../CreateContent'
import { district, listOfSeasons } from '../../Datas/BestTimeToVisit/TheniData'

const Theni = () => {
  return (
    <div>
        <CreateContent district={district} listOfSeasons={listOfSeasons}/>
    </div>
  )
}

export default Theni