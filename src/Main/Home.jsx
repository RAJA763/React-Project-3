import React from 'react'
import Carousel from '../Home/Pages/Carousels';
import Places from '../Home/Pages/Places';
import Chennai from '../Home/Components/Chennai';
import Kanyakumari from '../Home/Components/Kanyakumari';
import Kodaikanal from '../Home/Components/Kodaikanal';
import Ooty from '../Home/Components/Ooty';
import Rameshwaram from '../Home/Components/Rameshwaram';
import Kumbakonam from '../Home/Components/Kumbakonam';
import Madurai from '../Home/Components/Madurai';
import Yercaud from '../Home/Components/Yercaud';
import Theni from '../Home/Components/Theni';
import Hogenakkal from '../Home/Components/Hogenakkal';
import Navigation from '../Home/Pages/Navigation';

const Home = () => {
  return (
    <>
        <Navigation/>
        <Carousel/>
        <Places/>
        <Chennai/>
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

export default Home