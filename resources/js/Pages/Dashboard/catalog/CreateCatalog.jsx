import DashboardLayout from '@/Layouts/DashboardLayout';
import React from 'react'
import InputLabel from '@/Components/InputLabel';
import { useState } from 'react';
import Swal from 'sweetalert2';

export default function CreateCatalog(props) {
    const [nama, setNama] = useState("");
    const [category_product, setCategory] = useState("");
    const handleCreate = async (e) => {
        e.preventDefault();
        const data =
        {
            "nama": nama,
            "category_product_id": category_product,
        };
        try {
            await axios.post('/dashboard/catalog/store', data, {
                headers: { 'Content-Type': "multipart/form-data" },
            }).then((response) => {
                console.log(response);
                Swal.fire({
                    icon: 'success',
                    text: response.message,
                    showConfirmButton: false,
                    timer: 2000,
                })
            });
            setNama("");
            setTimeout(() => {
                window.location.replace('/dashboard/catalog');
            }, 2000);
        } catch (error) {
            Swal.fire({
                icon: 'error',
                text: error.response.data.message,
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
                            <div className="col-md-7">
                                <InputLabel htmlFor="nama" value="Nama Kategori Produk" />
                                <input type="text" id="nama" name="nama" className="form-control" onChange={(e) => setNama(e.target.value)} />
                            </div>
                            <div className="col-md-5">
                                <InputLabel htmlFor="category_product_id" value="Kategori Produk" />
                                <select id="category_product_id" name="category_product_id" className="form-select" onChange={(e) => setCategory(e.target.value)} required>
                                    <option value="-">-</option>
                                    {props.data_cat.map((res, i) => {
                                        return (

                                            <option key={i} value={res.id}  >{res.nama}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <hr />
                            <div className="text-end">
                                <button type="submit" className=" btn btn-primary px-3 font-weight-bolder btnSubmit">Create Product
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}
