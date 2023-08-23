import React from 'react';
import './Pages/pages.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Pages/Navigation';
import Carousel from './Pages/Carousels';
import Places from './Pages/Places';
import Chennai from './Components/Chennai';
import Kanyakumari from './Components/Kanyakumari';
import Kodaikanal from './Components/Kodaikanal';
import Ooty from './Components/Ooty';
import Rameshwaram from './Components/Rameshwaram';
import Kumbakonam from './Components/Kumbakonam';
import Madurai from './Components/Madurai';
import Yercaud from './Components/Yercaud';
import Theni from './Components/Theni';
import Hogenakkal from './Components/Hogenakkal';


const App = () => {
    return(
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

export default App