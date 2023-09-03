import React from 'react'
import CreateContent from '../CreateContent'
import { district, listOfSeasons } from '../../Datas/BestTimeToVisit/YercaudData'

const Yercaud = () => {
  return (
    <div>
        <CreateContent district={district} listOfSeasons={listOfSeasons}/>
    </div>
  )
}

export default Yercaud