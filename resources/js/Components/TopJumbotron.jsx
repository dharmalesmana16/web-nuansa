import React from 'react'
import { Typography } from '@mui/material'
import imgExample from '../../assets/image/fo.jpg'

export default function TopJumbotron({ children }) {
    // var bgPatt = document.querySelector('#bgJumbotron')
    // window.addEventListener("scroll", function () {
    //     bgPatt.style.backgroundPositionY = +window.pageYOffset + "px";
    // })
    return (
        <div className="p-5 mt-5 " id="bgJumbotron" style={{ backgroundImage: `url(${imgExample})`, backgroundSize: 'cover', height: "10rem", backgroundPositionY: "35rem" }}>
            <div className="container px-4 px-lg-5 " >
                <div className=" text-white">
                    <Typography variant='h5' className=' text-white text-uppercase' fontWeight={"800"}>
                        {children}
                    </Typography>
                </div>
            </div>
        </div>
    )
}
