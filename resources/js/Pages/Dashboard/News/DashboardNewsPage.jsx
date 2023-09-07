import DashboardLayout from '@/Layouts/DashboardLayout'
import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions, Link, Typography, Box, Container, Grid } from '@mui/material';
import Pagination from '@/Components/Pagination';
import Swal from 'sweetalert2';
import ConvertHTML from '@/Components/ConvertHTML';
export default function DashboardNewsPage(props) {
    const dataNews = [
        { "nama": "Berita 1", "deskripsi": "Ini Berita Sebagai Contoh Untuk Prototype Website Jasamarga Bali Tol", },
        { "nama": "Berita 2", "deskripsi": "Ini Berita Sebagai Contoh Untuk Prototype Website Jasamarga Bali Tol", },
        { "nama": "Berita 3", "deskripsi": "Ini Berita Sebagai Contoh Untuk Prototype Website Jasamarga Bali Tol", },
        { "nama": "Berita 4", "deskripsi": "Ini Berita Sebagai Contoh Untuk Prototype Website Jasamarga Bali Tol", },
        { "nama": "Berita 5", "deskripsi": "Ini Berita Sebagai Contoh Untuk Prototype Website Jasamarga Bali Tol", },
        { "nama": "Berita 5", "deskripsi": "Ini Berita Sebagai Contoh Untuk Prototype Website Jasamarga Bali Tol", },
        { "nama": "Berita 5", "deskripsi": "Ini Berita Sebagai Contoh Untuk Prototype Website Jasamarga Bali Tol", },
        { "nama": "Berita 5", "deskripsi": "Ini Berita Sebagai Contoh Untuk Prototype Website Jasamarga Bali Tol", },
        { "nama": "Berita 5", "deskripsi": "Ini Berita Sebagai Contoh Untuk Prototype Website Jasamarga Bali Tol", }

    ]
    function handleDelete(e) {
        e.preventDefault();
        const slug = e.currentTarget.id;
        Swal.fire({
            title: 'Apakah Anda Yakin ?',
            text: "Data yang akan dihapus tidak dapat dikembalikan lagi !",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Hapus Data',
            closeOnConfirm: false,
            closeOnCancel: false
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete("/dashboard/news/" + slug).then((response) => {
                    Swal.fire({
                        icon: "success",
                        title: "Success",
                        timer: 3000,
                        showConfirmButton: false,

                    })
                    setTimeout(() => {

                        window.location.replace('/dashboard/news');
                    }, 2000);
                });
            }
        })
    }
    return (
        <DashboardLayout>
            <div className="container ">
                <div className="text-end  ">
                    <a href="/dashboard/news/new" className='btn btn-md btn-success'>Add New Data</a>
                </div>
                <div className="bg-white p-2">

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

                                    <Grid item xs={4} sm={4} md={2} key={i}>
                                        <Box
                                            sx={{
                                                width: 200,
                                                height: 200,
                                                backgroundColor: 'primary.dark',
                                                '&:hover': {
                                                    backgroundColor: 'primary.main',
                                                    opacity: [0.9, 0.8, 0.7],
                                                },
                                            }}
                                        >
                                            <img src={`/storage/news/${data.photo}`} alt="" srcSet="" style={{ width: "200px", height: "200px" }} />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={4} sm={4} md={4} >

                                        <Typography variant='h5' className='fw-bold'>
                                            {data.nama}
                                        </Typography>
                                        <Typography variant='body2' color={"text.secondary"}>
                                            <ConvertHTML name={newDeskripsi} />
                                        </Typography>
                                        <div className='d-flex p-2 '>
                                            <div className="px-2">

                                                <Link href={`/dashboard/news/edit/${data.slug}`} className='btn btn-sm btn-primary text-white'>Edit</Link>
                                            </div>
                                            <div className="">

                                                <Link href={`/dashboard/news/${data.slug}`} className='btn btn-sm btn-danger text-white' onClick={handleDelete} id={data.slug}>Delete</Link>
                                            </div>

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

            </div>
        </DashboardLayout>
    )
}
