import React from 'react'
import Navigation from '../Home/Pages/Navigation'
import Header from '../Packages/Header'
import Chennai from '../Packages/Components/Chennai'
import Rameshwaram from '../Packages/Components/Rameshwaram'
import Kodaikanal from '../Packages/Components/Kodaikanal'
import Ooty from '../Packages/Components/Ooty'
import Kanyakumari from '../Packages/Components/Kanyakumari'
import Kumbakonam from '../Packages/Components/Kumbakonam'
import Madurai from '../Packages/Components/Madurai'
import Yercaud from '../Packages/Components/Yercaud'
import Theni from '../Packages/Components/Theni'
import Hogenakkal from '../Packages/Components/Hogenakkal'
<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital@1&display=swap');
</style>

const Package = () => {
  return (
    <div style={{fontFamily:'Roboto'}}>
        <Navigation/>
        <Header/>
        <Chennai/>
        <Rameshwaram/>
        <Kodaikanal/>
        <Ooty/>
        <Kanyakumari/>
        <Kumbakonam />
        <Madurai/>
        <Yercaud/>
        <Theni/>
        <Hogenakkal/>
    </div>
  )
}

export default Package