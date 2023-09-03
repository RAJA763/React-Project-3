import React from 'react';
import {Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home/Pages/Home.css'
import Home from './Main/Home';
import PlaceToVisit from './Main/PlaceToVisit';
import BestTimeToVisit from './Main/BestTimeToVisit';
import Package from './Main/Package';
import Food from './Main/Food';
import ChennaiPackage from './Packages/Pages/ChennaiPackage';
import RameshwaramPackage from './Packages/Pages/RameshwaramPackage';
import KodaikanalPackage from './Packages/Pages/KodaikanalPackage';
import OotyPackage from './Packages/Pages/OotyPackage';
import KanyakumariPackage from './Packages/Pages/KanyakumariPackage';
import KumbakonamPackage from './Packages/Pages/KumbakonamPackage';
import MaduraiPackage from './Packages/Pages/MaduraiPackage';
import YercaudPackage from './Packages/Pages/YercaudPackage';
import TheniPackage from './Packages/Pages/TheniPackage';
import HogenakkalPackage from './Packages/Pages/HogenakkalPackage';

const App = () => {
    return(
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/place-to-visit' element={<PlaceToVisit/>} />
            <Route path='/best-time-to-visit' element={<BestTimeToVisit />} />
            <Route path='/packages' element={<Package />}/>
            <Route path='/packages/Chennai' element={<ChennaiPackage/>}/>    
            <Route path='/packages/Rameshwaram' element={<RameshwaramPackage/>}/>    
            <Route path='/packages/Kodaikanal' element={<KodaikanalPackage/>}/>    
            <Route path='/packages/Ooty' element={<OotyPackage/>}/>    
            <Route path='/packages/Kanyakumari' element={<KanyakumariPackage/>}/>    
            <Route path='/packages/Kumbakonam' element={<KumbakonamPackage/>}/>    
            <Route path='/packages/Madurai' element={<MaduraiPackage/>}/>    
            <Route path='/packages/Yercaud' element={<YercaudPackage/>}/>    
            <Route path='/packages/Theni' element={<TheniPackage/>}/>    
            <Route path='/packages/Hogenakkal' element={<HogenakkalPackage/>}/>    
            <Route path='/food' element={<Food/>} />
        </Routes>
    )
}

export default App