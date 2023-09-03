import React from 'react'
import { cardItem, titleCard } from '../../Datas/Home & PlaceToVisit/RameshwaramData'
import Overview from '../Overview'

const Rameshwaram = () => {
  return (
    <>
      <Overview titleCard={titleCard} cardItem={cardItem}/>
    </>
  )
}

export default Rameshwaram