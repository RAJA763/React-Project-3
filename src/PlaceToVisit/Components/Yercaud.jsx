import React from 'react'
import { cardItem, titleCard } from '../../Datas/Home & PlaceToVisit/YercaudData'
import Overview from '../Overview'

const Yercaud = () => {
  return (
    <>
      <Overview titleCard={titleCard} cardItem={cardItem}/>
    </>
  )
}

export default Yercaud