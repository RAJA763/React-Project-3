import React from 'react';
import Navigation from "../Home/Pages/Navigation"
import Header from '../PlaceToVisit/Header';
import Place_To_Visit_Title from '../Datas/Home & PlaceToVisit/Place_To_Visit_Title'
import Chennai from '../PlaceToVisit/Components/Chennai';
import Rameshwaram from '../PlaceToVisit/Components/Rameshwaram'
import Kodaikanal from '../PlaceToVisit/Components/Kodaikanel'
import Ooty from '../PlaceToVisit/Components/Ooty'
import Kanyakumari from '../PlaceToVisit/Components/Kanyakumari'
import Kumbakonam from '../PlaceToVisit/Components/Kumbakonam'
import Madurai from '../PlaceToVisit/Components/Madurai'
import Yercaud from '../PlaceToVisit/Components/Yercaud'
import Theni from '../PlaceToVisit/Components/Theni'
import Hogenakkal from '../PlaceToVisit/Components/Hogenakkal'

const PlaceToVisit = () => {
  return (
    <>
        <Navigation />
        <Header PlaceToVisitTitle={Place_To_Visit_Title}/>
        <Chennai />
        <Rameshwaram/>
        <Kodaikanal/>
        <Ooty/>
        <Kanyakumari/>
        <Kumbakonam/>
        <Madurai/>
        <Yercaud/>
        <Theni/>
        <Hogenakkal/>
    </>
  )
}

export default PlaceToVisit