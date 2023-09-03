import React from 'react'
import { cardItem, titleCard } from '../../Datas/Home & PlaceToVisit/MaduraiData'
import Overview from '../Overview'

const Madurai = () => {
  return (
    <>
      <Overview titleCard={titleCard} cardItem={cardItem}/>
    </>
  )
}

export default Madurai