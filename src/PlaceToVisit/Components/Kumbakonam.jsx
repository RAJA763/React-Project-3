import React from 'react'
import { cardItem, titleCard } from '../../Datas/Home & PlaceToVisit/KumbakonamData'
import Overview from '../Overview'

const Kumbakonam = () => {
  return (
    <>
      <Overview titleCard={titleCard} cardItem={cardItem}/>
    </>
  )
}

export default Kumbakonam