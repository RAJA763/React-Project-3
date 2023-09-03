import React from 'react'
import { cardItem, titleCard } from '../../Datas/Home & PlaceToVisit/ChennaiData'
import Overview from '../Overview'

const Chennai= () => {
  return (
    <>
      <Overview titleCard={titleCard} cardItem={cardItem}/>
    </>
  )
}

export default Chennai