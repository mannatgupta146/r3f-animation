import { useControls } from 'leva'
import React from 'react'
import FanGroup from './FanGroup'
import { AmbientLight } from 'three'

const Experience = () => {
  return (
    <>
     <ambientLight intensity={3} color={"#ffffff"} />
     <FanGroup />
    </>
  )
}

export default Experience