import Layout from '@/Layouts/Layout'
import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions, Link, Typography, Box, Container, Grid, Paper, Avatar } from '@mui/material';
import Pagination from '@/Components/Pagination';
import ConvertHTML from '@/Components/ConvertHTML';
import { styled } from '@mui/material/styles';
// import imgExample
import TopJumbotron from '@/Components/TopJumbotron';
export default function NewsPage(props) {
    console.log(props);
    const dataNews = [
        { "nama": "Berita 1", "deskripsi": "Ini Berita Sebagai Contoh Untuk Prototype Website Jasamarga Bali Tol", },
        { "nama": "Berita 2", "deskripsi": "Ini Berita Sebagai Contoh Untuk Prototype Website Jasamarga Bali Tol", },
        { "nama": "Berita 3", "deskripsi": "Ini Berita Sebagai Contoh Untuk Prototype Website Jasamarga Bali Tol", },
        { "nama": "Berita 4", "deskripsi": "Ini Berita Sebagai Contoh Untuk Prototype Website Jasamarga Bali Tol", },
        { "nama": "Berita 5", "deskripsi": "Ini Berita Sebagai Contoh Untuk Prototype Website Jasamarga Bali Tol", },
        { "nama": "Berita 5", "deskripsi": "Ini Berita Sebagai Contoh Untuk Prototype Website Jasamarga Bali Tol", }
    ]
    const StyledPaper = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(2),
        maxWidth: 400,
        color: theme.palette.text.primary,
    }));
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));
    const newDate = (data) => {
        let init = new Date()

    }
    return (
        <>

            <Layout>
                <TopJumbotron>
                    News
                </TopJumbotron>
                <div className="container  py-5">
                    <Grid container spacing={{ xs: 2, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }} columnSpacing={{ md: 2 }}>

                        {/* Start Code */}

                        {props.news.data != 0 ? props.news.data.map((data, i) => {
                            let newDeskripsi;
                            if (data.description.length > 100) {
                                newDeskripsi = data.description.substring(0, 99) + " ..."
                            } else {
                                newDeskripsi = data.description
                            }

                            return (
                                <>



                                    <Grid item xs={4} sm={4} md={3} key={i} sx={{ padding: "20px" }}>

                                        <Box
                                            component="img"
                                            sx={{
                                                width: "100%",
                                                height: 200,
                                                borderRadius: "15px"
                                            }}
                                            src={`/storage/news/${data.photo}`}
                                        >
                                        </Box>

                                    </Grid>

                                    <Grid item xs={4} sm={4} md={3} key={i}>

                                        <Typography variant='h6' fontWeight={"700"}>
                                            {data.nama}
                                        </Typography>
                                        <Typography variant='caption' color={"text.secondary"}>
                                            {data.tanggal}
                                        </Typography>
                                        <Typography variant='body2' color={"text.secondary"}>
                                            <ConvertHTML name={newDeskripsi} />
                                        </Typography>
                                        <div className="text-end">

                                            <Button >
                                                <Link href={`/news/${data.slug}`} className='text-decoration-none text-capitalize'>
                                                    Selengkapnya
                                                </Link>
                                            </Button>
                                        </div>

                                    </Grid>

                                </>
                            )

                        }) : (<p className='text-center'>Berita Belum Tersedia</p>)}
                        {/* End Code */}

                    </Grid>
                </div>
                <div className="d-flex justify-content-center">

                    <Pagination links={props.news.links} />
                </div>
            </Layout >
        </>
    )
}
