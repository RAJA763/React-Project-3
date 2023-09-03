import React from 'react'
import { cardItem, titleCard } from '../../Datas/Home & PlaceToVisit/TheniData'
import Overview from '../Overview'

const Theni = () => {
  return (
    <>
      <Overview titleCard={titleCard} cardItem={cardItem}/>
    </>
  )
}

export default Theni