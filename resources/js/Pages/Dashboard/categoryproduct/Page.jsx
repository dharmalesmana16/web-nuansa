import DashboardLayout from '@/Layouts/DashboardLayout'
import React, { useState, useEffect } from 'react'
import DataTable from 'react-data-table-component';
import Swal from 'sweetalert2';
// import { DataTable } from 'primereact/datatable';
export default function Page(props) {
    // const [products, setProducts] = useState([]);
    // console.log(props.datavideotron);
    // useEffect(() => {
    // setProducts(props.datavideotron);
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
                axios.delete("/dashboard/products/category/" + slug).then((response) => {
                    Swal.fire({
                        icon: "success",
                        title: "Success",
                        timer: 3000
                    })
                    window.location.replace('/dashboard/products/category');
                });
            }
        })
    }
    let no = 0
    const columns = [
        {
            name: 'No',
            selector: row => no += 1,
        },
        {
            name: 'Nama Kategori Produk',
            selector: row => row.nama,
        },
        {
            name: 'Show On Home',
            selector: row => row.showonhome,
        },

        {
            name: 'Action',
            selector: row => <div className='d-flex '>
                <a href={`/dashboard/products/category/edit/${row.slug}`} className='btn btn-sm btn-primary p-2'>Edit</a>
                <button className='btn btn-sm btn-danger' onClick={handleDelete} id={row.slug} type='button'>Delete</button>

            </div>,

        },


    ];


    return (
        <DashboardLayout user={props.user}>
            <div className="text-end py-2">
                <a href="/dashboard/products/category/new" className='btn btn-md btn-success'>Add New Data</a>
            </div>
            <DataTable columns={columns}
                data={props.data ? props.data : props.datas}
                pagination
                responsive
            />

        </DashboardLayout>
    )
}
