import React from 'react'
import { cardItem, titleCard } from '../../Datas/Home & PlaceToVisit/HogenakkalData'
import Overview from '../Overview'

const Hogenakkal = () => {
  return (
    <>
      <Overview titleCard={titleCard} cardItem={cardItem}/>
    </>
  )
}

export default Hogenakkal