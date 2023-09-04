import DashboardLayout from '@/Layouts/DashboardLayout'
import { Link } from '@inertiajs/react';
import React, { useState, useEffect } from 'react'
import Pagination from '@/Components/Pagination';
import DataTable from 'react-data-table-component';
// import { DataTable } from 'primereact/datatable';
import Swal from 'sweetalert2';
import ProductCard from '@/Components/ProductCard';
import { Grid, Box, Button } from '@mui/material';
export default function Page(props) {
    // const [products, setProducts] = useState([]);
    // console.log(props.datavideotron);
    // useEffect(() => {
    // setProducts(props.datavideotron);
    // })
    const rupiah = (number) => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR"
        }).format(number);
    }
    console.log(props);
    function handleDelete(e) {
        e.preventDefault();
        const slug = e.currentTarget.id;
        Swal.fire({
            title: 'Apakah Anda Yakin ?',
            text: e.currentTarget.id,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Hapus Data',
            closeOnConfirm: false,
            closeOnCancel: false
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete("/dashboard/products/" + slug).then((response) => {
                    Swal.fire({
                        icon: "success",
                        title: "Success",
                        timer: 3000
                    })
                    window.location.replace('/dashboard/products');
                });
            }
        })
    }
    let no = 0



    return (
        <DashboardLayout user={props.user}>
            <div className="text-end py-2">
                <a href="/dashboard/products/new" className='btn btn-md btn-success'>Add New Data</a>
            </div>
            <Box sx={{ width: '100%' }}>
                <Grid container spacing={{ xs: 2, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }} columnSpacing={{ md: 2 }}>

                    {props.datas.data.map((res, i) => {
                        return (

                            <Grid item xs={4} sm={4} md={2} key={i}>
                                <ProductCard photo={`/storage/public/${res.mainphoto}`} judul={res.nama} deskripsi={rupiah(res.harga)} link={`/product/show/${res.slug}`} className={"cardShowProduct"}>
                                    <div className='d-flex'>
                                        <div className="px-2">

                                            <Link href={`/dashboard/products/edit/${res.slug}`} className='btn btn-sm btn-primary text-white'>Edit</Link>
                                        </div>
                                        <div className="">

                                            <Link href={`/dashboard/products/${res.slug}`} className='btn btn-sm btn-danger text-white' onClick={handleDelete} id={res.slug}>Delete</Link>
                                        </div>

                                    </div>
                                </ProductCard>

                            </Grid>
                        )
                    })}
                </Grid>
                <div className="d-flex justify-content-center">

                    <Pagination links={props.datas.links} />
                </div>
            </Box>
        </DashboardLayout>
    )
}
