import React from 'react'
import DistrictCard from '../DistrictCard'
import { defaultPackages, districtContent, packageContent } from '../../Datas/Packages/Rameshwaram'

const RameshwaramPackage = () => {
  return (
    <>
        <DistrictCard districtContent={districtContent} packageContent={packageContent} defaultPackages={defaultPackages}/>
    </>
  )
}

export default RameshwaramPackage