import React from 'react'
import TitleCard from '../Pages/TitleCard'
import CreateCard from '../Pages/CreateCard'
import {titleCard, cardItem} from "../Datas/ChennaiData"

const Chennai = () => {
  return (
    <section id="chennai">
        <TitleCard titleCard={titleCard}/>
        <CreateCard titleCard={titleCard} cardItem={cardItem}/>
    </section>
  )
}

export default Chennai