import React from 'react'
import CreateContent from '../CreateContent'
import { district, listOfSeasons } from '../../Datas/BestTimeToVisit/KanyakumariData'

const Kanyakumari = () => {
  return (
    <div>
        <CreateContent district={district} listOfSeasons={listOfSeasons}/>
    </div>
  )
}

export default Kanyakumari