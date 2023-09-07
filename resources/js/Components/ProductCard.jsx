import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import ConvertHTML from './ConvertHTML';
import { Button, CardActionArea, CardActions, Link, Typography, Box, Container, Grid } from '@mui/material';
export default function Cards({ key, judul, deskripsi, meta, photo, link, className, children, catalog, linkDownload }) {
    let newDeskripsi;
    if (deskripsi.length > 100) {
        newDeskripsi = deskripsi.substring(0, 99) + " ..."
    } else {
        newDeskripsi = deskripsi
    }

    return (
        <>
            <Link href={link} className="text-decoration-none ">

                <Card key={key} className={className} style={{ borderRadius: "15px" }}>
                    <CardMedia
                        sx={{ padding: "10px", borderRadius: "20px" }}
                        component="img"
                        height="225"
                        alt="green iguana"
                        image={photo}
                    />
                    <CardContent sx={{ minHeight: 125 }} className='text-center' >
                        <Typography gutterBottom variant="body1" component="div" className='fw-bold' >
                            {/* {res.nama} */}
                            {judul}
                        </Typography>

                        <Typography variant="body1" className='text-dark '>
                            <ConvertHTML name={newDeskripsi} />
                        </Typography>
                    </CardContent>
                    <CardActions className='d-flex justify-content-center'>
                        {children}
                        {catalog == "Paket" ? (
                            <Button variant='outlined' color='primary' href={linkDownload} className='text-capitalize text-center' >
                                Download
                            </Button>

                        ) : ""}
                    </CardActions>

                </Card>
            </Link>
        </>
    )
}
