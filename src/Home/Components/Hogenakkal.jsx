import React from 'react'
import TitleCard from '../Pages/TitleCard'
import CreateCard from '../Pages/CreateCard'
import { titleCard, cardItem } from '../../Datas/Home & PlaceToVisit/HogenakkalData'

const Hogenakkal = () => {
  return (
    <section id="hogenakkal">
        <TitleCard titleCard={titleCard}/>
        <CreateCard titleCard={titleCard} cardItem={cardItem}/>
    </section>
  )
}

export default Hogenakkal