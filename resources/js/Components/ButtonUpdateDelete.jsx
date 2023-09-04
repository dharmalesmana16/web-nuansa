import React from 'react'
import { Button, CardActionArea, CardActions, Link, Typography, Box, Container, Grid } from '@mui/material';

export default function ButtonUpdateDelete({ linkUpdate, linkDelete, linkDownload, idData, download = false }) {
    return (
        <Grid display={"flex"} className='mt-2'>

            <Button variant='contained' color='primary' >
                <Link href={linkUpdate} className='text-white text-decoration-none'>
                    Edit
                </Link>
            </Button>
            {linkDelete ?
                (

                    <Grid className='px-2'>
                        <Button variant='contained' color='error' >
                            <Link onClick={linkDelete} id={idData} className='text-white text-decoration-none'>
                                Delete
                            </Link>
                        </Button>
                    </Grid>
                ) : ""}
            {download ? (
                <Button variant='contained' color='secondary' >
                    <a href={linkDownload} className='text-white text-decoration-none'>
                        Download
                    </a>
                </Button>
            ) : ""}
        </Grid>
    )
}
