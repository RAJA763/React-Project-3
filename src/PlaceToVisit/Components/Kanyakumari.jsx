import React from 'react'
import { cardItem, titleCard } from '../../Datas/Home & PlaceToVisit/KanyakumariData'
import Overview from '../Overview'

const Kanyakumari = () => {
  return (
    <>
      <Overview titleCard={titleCard} cardItem={cardItem}/>
    </>
  )
}

export default Kanyakumari