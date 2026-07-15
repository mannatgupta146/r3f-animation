import { useControls } from 'leva'
import React from 'react'

const Experience = () => {

    const { x, y, z } = useControls("box position ", {
        x: {value: 0, min: -4, max: 4, step: 0.01, label: "x - pos"},
        y: {value: 0, min: -4, max: 4, step: 0.01},
        z: {value: 0, min: -4, max: 4, step: 0.01}
    })

  return (
    <>
     <mesh position={[x, y, z]}>
        <boxGeometry />
        <meshBasicMaterial color={"red"}/>
     </mesh>
    </>
  )
}

export default Experience