import DashboardLayout from '@/Layouts/DashboardLayout'
import React, { useState, useEffect } from 'react'
import DataTable from 'react-data-table-component';
// import { DataTable } from 'primereact/datatable';
import Swal from 'sweetalert2';
export default function Page(props) {
    // const [products, setProducts] = useState([]);
    // console.log(props.datacctv);
    // useEffect(() => {
    // setProducts(props.datacctv);
    // })
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
                axios.delete("/dashboard/product/cctv/" + slug).then((response) => {
                    Swal.fire({
                        icon: "success",
                        title: "Success",
                        timer: 3000
                    })
                    window.location.replace('/dashboard/product/cctv');
                });
            }
        })
    }
    let no = 0;
    const columns = [
        {
            name: 'id',
            selector: row => no += 1,
        },
        {
            name: 'Nama Produk',
            selector: row => row.nama,

        },
        {
            name: 'Deskripsi',
            selector: row => <div dangerouslySetInnerHTML={{ __html: row.deskripsi }}></div>
            ,
            //
        },
        {
            name: 'Harga',
            selector: row => row.harga,

        },
        {
            name: 'Jumlah',
            selector: row => row.jumlah,

        },
        {
            name: 'Gambar',
            selector: row => <img src={`/uploads/${row.photo}`} className="w-50" />,

        },
        {
            name: 'Action',
            selector: row => <div className='d-flex '>
                <a href={`/dashboard/product/cctv/edit/${row.slug}`} className='btn btn-sm btn-primary p-2'>Edit</a>
                <button className='btn btn-sm btn-danger' onClick={handleDelete} id={row.slug} type='button'>Delete</button>

            </div>,

        },


    ];


    return (
        <DashboardLayout user={props.user}>
            <div className="text-end py-2">

                <a href="/dashboard/product/cctv/new" className='btn btn-md btn-success'>Add New Data</a>
            </div>
            <DataTable columns={columns}
                data={props.datacctv}
                pagination

            />


        </DashboardLayout>
    )
}
