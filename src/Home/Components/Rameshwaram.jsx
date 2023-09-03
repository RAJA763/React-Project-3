import React from 'react'
import TitleCard from '../Pages/TitleCard'
import CreateCard from '../Pages/CreateCard'
import { titleCard, cardItem } from '../../Datas/Home & PlaceToVisit/RameshwaramData'

const Rameshwaram = () => {
  return (
    <section id="rameshwaram">
        <TitleCard titleCard={titleCard}/>
        <CreateCard titleCard={titleCard} cardItem={cardItem}/>
    </section>
  )
}

export default Rameshwaram