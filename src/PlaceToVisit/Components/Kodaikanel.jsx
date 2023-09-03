import React from 'react'
import { cardItem, titleCard } from '../../Datas/Home & PlaceToVisit/KodaikanalData'
import Overview from '../Overview'

const Kodaikanel = () => {
  return (
    <>
      <Overview titleCard={titleCard} cardItem={cardItem}/>
    </>
  )
}

export default Kodaikanel