import * as React from 'react';

import DashboardLayout from '@/Layouts/DashboardLayout';
import Pagination from '@/Components/Pagination';
import { Link } from '@inertiajs/react';
import Swal from 'sweetalert2';
import { Button, CardActionArea, CardActions, Typography, Box, Container, Grid, CardContent } from '@mui/material';
import ConvertHTML from '@/Components/ConvertHTML';
import ButtonUpdateDelete from '@/Components/ButtonUpdateDelete';
export default function DashboardServicePage(props) {
    console.log(props);
    let no = 0;
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
                axios.delete("/dashboard/services/" + slug).then((response) => {
                    Swal.fire({
                        icon: "success",
                        title: "Success",
                        timer: 3000,
                        showConfirmButton: false,

                    })
                    setTimeout(() => {

                        window.location.replace('/dashboard/services');
                    }, 2000);
                });
            }
        })
    }
    return (
        <DashboardLayout>
            <div className="container">
                <div className="text-end py-2">
                    <a href="/dashboard/services/new" className='btn btn-md btn-success'>Add New Data</a>
                </div>

                <div className="bg-white p-2">



                    {props.data.data != 0 ? props.data.data.map((data, i) => {
                        if (data.description == null) {
                            data.description = "";
                        }
                        let newDeskripsi;
                        if (data.description.length > 300) {
                            newDeskripsi = data.description.substring(0, 299) + " ..."
                        } else {
                            newDeskripsi = data.description
                        }
                        return (
                            <>
                                <div className="row">
                                    <div className="col-md-4">
                                        <Box sx={{
                                            width: "100%",
                                            height: "100%",
                                            // backgroundColor: 'primary.dark',
                                            borderRadius: "20px",
                                            '&:hover': {
                                                backgroundColor: 'primary.main',
                                                opacity: [0.9, 0.8, 0.7],
                                            },


                                        }}>
                                            <img src={`/storage/service/${data.photo}`} className="img-fluid rounded-4 " style={{
                                                objectFit: 'fill',
                                                width: "100%",
                                                height: "100%",
                                            }} alt="..." />
                                        </Box>
                                    </div>
                                    <div className="col-md-8">

                                        {/* <Card sx={{ minWidth: 275 }} className=''> */}
                                        <CardContent >
                                            <Typography variant='h5' color="text.dark" className='fw-bold' gutterBottom>
                                                {data.nama}
                                            </Typography>

                                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                                <ConvertHTML name={newDeskripsi} />
                                            </Typography>

                                        </CardContent>
                                        <div className='d-flex justify-content-end'>
                                            <ButtonUpdateDelete linkDelete={handleDelete} idData={data.slug} linkUpdate={`/dashboard/services/edit/${data.slug}`} />
                                        </div>
                                        {/* <CardActions> */}
                                        {/* </CardActions> */}
                                        {/* </Card> */}
                                    </div>
                                </div>
                                <hr />
                            </>
                        )

                    }) : (<p className='text-center'>Berita Belum Tersedia</p>)}
                    {/* End Code */}
                </div>
            </div>
            <div className="d-flex justify-content-center">

                <Pagination links={props.data.links} />
            </div>

        </DashboardLayout >
    );
}
