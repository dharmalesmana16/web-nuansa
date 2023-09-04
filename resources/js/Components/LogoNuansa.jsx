import React from 'react'
import logo from '../../assets/image/nuansa-logo-white-new.png'
import logoColor from '../../assets/image/nuansa-logo-color.png'
export default function LogoNuansa({ width, height, color = true }) {
    return (
        <img src={color ? logoColor : logo} alt="" style={{ width: width, height: height ? height : 50 }} />
    )
}
