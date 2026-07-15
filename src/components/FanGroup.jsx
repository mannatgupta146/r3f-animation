import { useControls } from 'leva'
import React, { useMemo } from 'react'
import { images } from '../data/images'
import ImagePlane from './ImagePlane'

const FanGroup = () => {

    const { numPlanes, spreadAngle, planeWidth, planeHeight, positionY } = useControls("Book Fan Controls", {
        numPlanes: {
            value: 8,
            min: 2, 
            max: 40,
            step: 1,
            label: "No of planes"
        },
        spreadAngle: {
            value: 120,
            min: 30,
            max: 360,
            step: 1,
            label: "Spread Angle"
        },
        planeWidth: {
            value: 2.5,
            min: 0.5,
            max: 6,
            step: 0.01,
            label: "Plane Width"
        },

        planeHeight: {
            value: 3.3,
            min: 1,
            max: 8,
            step: 0.01,
            label: "Plane Height"
        },

        positionY: {
            value: -1.5,
            min: -6,
            max: 6,
            step: 0.05,
            label: "Y Position"
        }
    })

    const planes = useMemo(() => {
        const count = numPlanes
        const totalArcRad = (spreadAngle * Math.PI / 180)
        const stepAngle = totalArcRad / (count - 1)
        const startingAngle = - (totalArcRad / 2)

        return Array.from({length: count}, (_, i) => {
            const angle = startingAngle + i * stepAngle

            return {
                key: i,
                url: images[i % images.length],
                position: [0, 0, 0],
                rotation: [0, angle, 0]
            }
        })
    }, [numPlanes, spreadAngle])

  return (
    <group position={[0, positionY, 0]}>
        {planes.map((plane) => (
            <ImagePlane 
                key={plane.key} 
                url={plane.url} 
                position={plane.position} 
                rotation={plane.rotation} 
                planeWidth={planeWidth} 
                planeHeight={planeHeight} 
            />
        ))}
    </group>
  )
}

export default FanGroup