import React from 'react'
import TitleCard from '../../Home/Pages/TitleCard'
import CreateCard from '../../Home/Pages/CreateCard'
import { titleCard, cardItem } from '../../Datas/Home & PlaceToVisit/YercaudData'

const Yercaud = () => {
  return (
    <section id="yercaud">
        <TitleCard titleCard={titleCard}/>
        <CreateCard titleCard={titleCard} cardItem={cardItem}/>
    </section>
  )
}

export default Yercaud