import React from 'react'
import TitleCard from '../Pages/TitleCard'
import CreateCard from '../Pages/CreateCard'
import { titleCard, cardItem } from '../../Datas/Home & PlaceToVisit/OotyData'

const Ooty = () => {
  return (
    <section id="ooty">
        <TitleCard titleCard={titleCard}/>
        <CreateCard titleCard={titleCard} cardItem={cardItem}/>
    </section>
  )
}

export default Ooty