import { useTexture } from '@react-three/drei'
import React, { useMemo } from 'react'
import * as THREE from 'three'

const ImagePlane = ({ url, position, rotation, planeWidth, planeHeight }) => {

    const geometry = useMemo(() => {
        const geo = new THREE.PlaneGeometry(planeWidth, planeHeight)
        geo.translate(2, planeHeight / 2, 0)

        return geo
    },[planeWidth, planeHeight])

    const texture = useTexture(url)

  return (
    <>
     <mesh geometry={geometry} position={position} rotation={rotation}>
        <meshStandardMaterial map={texture} side={THREE.DoubleSide} />

     </mesh>
    </>
  )
}

export default ImagePlane