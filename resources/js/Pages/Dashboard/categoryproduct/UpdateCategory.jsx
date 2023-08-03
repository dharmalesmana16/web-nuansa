import DashboardLayout from '@/Layouts/DashboardLayout';
import React from 'react'
import InputLabel from '@/Components/InputLabel';
import { useState } from 'react';
import Swal from 'sweetalert2';

export default function UpdateCategory(props) {
    const [nama, setNama] = useState(props.data.nama);
    const handleCreate = async (e) => {
        e.preventDefault();
        const data =
        {
            "nama": nama,
        };
        try {
            await axios.post(`/dashboard/products/category/update/${props.data.id}`, data, {
                headers: { 'Content-Type': "multipart/form-data" },
            }).then((response) => {
                Swal.fire({
                    icon: 'success',
                    text: response.data.msg,
                    showConfirmButton: false,
                    timer: 2000,
                })
            });
            setNama("");
            setTimeout(() => {
                window.location.replace('/dashboard/products/category');
            }, 2000);
        } catch (error) {
            Swal.fire({
                icon: 'error',
                text: error.response.data.msg,
                showConfirmButton: false,
                timer: 2000,
            })
        }
    }

    return (
        <DashboardLayout >
            <div className='container d-flex justify-content-center'>
                <div className="card ">
                    <div className="card-body bg-white">
                        <form className="row g-3 " encType="multipart/form-data" onSubmit={handleCreate} >
                            <div className="col-md-12">
                                <InputLabel htmlFor="nama" value="Nama Kategori Produk" />
                                <input type="text" id="nama" name="nama" value={nama} className="form-control" onChange={(e) => setNama(e.target.value)} />

                            </div>

                            <hr />
                            <div className="text-end">
                                <button type="submit" className=" btn btn-primary px-3 font-weight-bolder btnSubmit">Update Category Product
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}
