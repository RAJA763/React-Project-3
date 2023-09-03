import React from 'react'
import CreateContent from '../CreateContent'
import { district, listOfSeasons } from '../../Datas/BestTimeToVisit/KumbakonamData'

const Kumbakonam = () => {
  return (
    <div>
        <CreateContent district={district} listOfSeasons={listOfSeasons}/>
    </div>
  )
}

export default Kumbakonam