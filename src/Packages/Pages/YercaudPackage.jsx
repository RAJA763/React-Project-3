import React from 'react'
import DistrictCard from '../DistrictCard'
import { defaultPackages, districtContent, packageContent } from '../../Datas/Packages/Yercaud'

const YercaudPackage = () => {
  return (
    <>
        <DistrictCard districtContent={districtContent} packageContent={packageContent} defaultPackages={defaultPackages}/>
    </>
  )
}

export default YercaudPackage
