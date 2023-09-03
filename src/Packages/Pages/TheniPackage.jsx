import React from 'react'
import DistrictCard from '../DistrictCard'
import { defaultPackages, districtContent, packageContent } from '../../Datas/Packages/Theni'

const TheniPackage = () => {
  return (
    <>
        <DistrictCard districtContent={districtContent} packageContent={packageContent} defaultPackages={defaultPackages}/>
    </>
  )
}

export default TheniPackage