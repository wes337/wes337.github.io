import React, { useEffect, useRef } from 'react'
import Shader from '../shaders/Shader.js'
import vertexShader from '../shaders/vertex.js'
import fragmentShader from '../shaders/fragment.js' 
import './waves.scss'

function Waves() {
    const wavesContainer = useRef()
    const pointSize = 2.5

    useEffect(() => {
        new Shader(wavesContainer.current, {
            texture: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAb1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8v0wLRAAAAJHRSTlMAC/goGvDhmwcExrVjWzrm29TRqqSKenRXVklANSIUE8mRkGpv+HOfAAABCElEQVQ4y4VT13LDMAwLrUHteO+R9f/fWMfO6dLaPeKVEECRxOULWsEGpS9nULDwia2Y+ALqUNbAWeg775zv+sA4/FFRMxt8U2FZFCVWjR/YrH4/H9sarclSKdPMWKzb8VsEeHB3m0shkhVCyNzeXeAQ9Xl4opEieX2QCGnwGbj6GMyjw9t1K0fK9YZunPXeAGsfJtYjwzxaBnozGGorYz0ypK2HzQSYx1y8DgSRo2ewOiyh2QWOEk1Y9OrQV0a8TiBM1a8eMHWYnRMy7CZ4t1CmyRkhSUvP3gRXyHOCLBxNoC3IJv//ZrJ/kxxUHPUB+6jJZZHrpg6GOjnqaOmzp4NDR48OLxn/H27SRQ08S0ZJAAAAAElFTkSuQmCC',
            uniforms: {
                size: { type: 'float', value: pointSize },
                field: { type: 'vec3', value: [ 0, 0, 0 ] },
                speed: { type: 'float', value: 5 },
            },
            vertex: vertexShader(),
            fragment: fragmentShader(),
            onResize( w, h, dpi ) {
                const position = [], color = []
                const width = 400 * ( w / h )
                const depth = 400
                const height = 3
                const distance = 5
                for ( let x = 0; x < width; x += distance ) {
                    for ( let z = 0; z < depth; z+= distance ) {
                        position.push( - width / 2 + x, -30, -depth / 2 + z )
                        color.push( 0, 1 - ( x / width ) * 1, 0.5 + x / width * 0.5, z / depth )
                    }
                }
                this.uniforms.field = [ width, height, depth ]
                this.buffers.position = position
                this.buffers.color = color
                this.uniforms.size = ( h / 400) * pointSize * dpi
            },
        })
    })

  return (
    <div className="waves__container" ref={wavesContainer} />
  )
}

export default Waves
