import React from 'react'
import { cardItem, titleCard } from '../../Datas/Home & PlaceToVisit/OotyData'
import Overview from '../Overview'

const Ooty = () => {
  return (
    <>
      <Overview titleCard={titleCard} cardItem={cardItem}/>
    </>
  )
}

export default Ooty