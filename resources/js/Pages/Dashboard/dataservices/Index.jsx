import DashboardLayout from '@/Layouts/DashboardLayout'
import axios from 'axios';
import { Button } from 'bootstrap';
import { data } from 'jquery'
import React, { useState } from 'react'
import DataTable from 'react-data-table-component'
import Swal from 'sweetalert2';
export default function Index(props) {
    const [slug, setSlug] = useState("");
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
                axios.delete("/dashboard/services/" + slug).then((response) => {
                    Swal.fire({
                        icon: "success",
                        title: "Success",
                        timer: 3000
                    })
                    window.location.replace('/dashboard/services');
                });
            }
        })
    }
    let no = 0;
    const columns = [
        {
            name: 'id',
            selector: row => no += 1,
            width: "80px"                       // added line here

        },
        {
            name: 'Nama Service',
            selector: row => row.nama,
        },
        {
            name: 'Deskripsi',
            selector: row => <div dangerouslySetInnerHTML={{ __html: row.description }}></div>,
        },


        {
            name: 'Action',
            selector: row => <div className='d-flex '>
                <a href={`/dashboard/services/edit/${row.slug}`} className='btn btn-sm btn-primary p-2'>Edit</a>
                <button className='btn btn-sm btn-danger' onClick={handleDelete} id={row.slug} type='button'>Delete</button>
            </div>,
            // added line here
        },


    ];
    return (
        <DashboardLayout>

            <div>
                <div className="text-end py-2">

                    <a href="/dashboard/services/new" className='btn btn-md btn-success'>Add New Data</a>
                </div>
                <DataTable
                    columns={columns}
                    data={props.dataservice}
                    pagination
                    responsive="true"
                />
            </div>
        </DashboardLayout>
    )
}
