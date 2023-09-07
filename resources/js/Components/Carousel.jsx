import React from 'react'
import gambarItem from '../../assets/image/contract.jpeg';
// import react-sl
import ReactImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import { Typography, Box } from '@mui/material';

export default function Carousel({ data, children }) {
    const carouselStyle = {
        width: "100%",
        height: "auto",
        // maxHeight: "80vh",
        objectFit: "fit",
        overflow: "hidden",
        objectPosition: "center",
    }
    const images = [
        {
            original: "https://picsum.photos/id/1018/1000/600/",
            originalTitle: "test"
        },
        {
            original: "https://picsum.photos/id/1015/1000/600/",
        },
        {
            original: "https://picsum.photos/id/1019/1000/600/",
        },
    ];
    let image = [];
    return (
        <>
            <Box sx={{ minHeight: "100%", pt: 8 }}>


                <ReactImageGallery items={data ? data.map((res, i) => {
                    return (
                        {

                            original: `/storage/carousel/${res.photo}`,
                        }
                    )
                }) : images}
                    showFullscreenButton={false}
                    showBullets={true}
                    autoPlay={true}
                    showPlayButton={false}
                    additionalClass={carouselStyle}

                >
                </ReactImageGallery>
                {/* {data ? data.map((res, i) => {
                    return (
                        <Box sx={{ position: "absolute", bottom: "50px", zIndex: 10, margin: "0px auto", width: "100%", backgroundColor: "transparent" }}>
                            <Typography variant='h3' className='text-center fw-bold'>
                                {res.nama}
                            </Typography>
                            <Typography variant='body1' className='text-center'>
                                {res.description}

                            </Typography>

                        </Box>
                    )
                }) : ""} */}

            </Box>
        </>
    )
}
