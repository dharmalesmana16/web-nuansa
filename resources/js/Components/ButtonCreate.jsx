import React from 'react'
import { Button, CardActionArea, CardActions, Link, Typography, Box, Container, Grid } from '@mui/material';

export default function ButtonCreate({ linkUpdate, linkDelete, linkDownload, idData, download = false, name }) {
    return (
        <Grid display={"flex"} justifyContent={"end"} className='mt-2'>

            <Button type='submit' variant='contained' color='primary' size='large' className='text-capitalize' >
                {name ? name : "Tambah Data"}
            </Button>

        </Grid>
    )
}
