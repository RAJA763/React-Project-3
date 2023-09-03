import React from 'react'
import TitleCard from '../Pages/TitleCard'
import CreateCard from '../Pages/CreateCard'
import { titleCard, cardItem } from '../../Datas/Home & PlaceToVisit/MaduraiData'

const Madurai = () => {
  return (
    <section id="madurai">
        <TitleCard titleCard={titleCard}/>
        <CreateCard titleCard={titleCard} cardItem={cardItem}/>
    </section>
  )
}

export default Madurai