import DashboardLayout from '@/Layouts/DashboardLayout';
import React from 'react'
import InputLabel from '@/Components/InputLabel';
import { useState } from 'react';
import Swal from 'sweetalert2';

export default function CreateCategory(props) {
    const [nama, setNama] = useState("");
    const [photo, setPhoto] = useState(null);
    const [previewImg, setPreview] = useState(null);
    const [show, setShow] = useState(null);
    function preview(e) {
        var fileInput = false;
        let dataImage = e.target.files[0]
        if (dataImage) {
            fileInput = true;
            setPreview(URL.createObjectURL(dataImage));
            setPhoto(dataImage);
        }


    }
    const handleCreate = async (e) => {
        e.preventDefault();

        const data =
        {
            "nama": nama,
            "showonhome": show,
            "photo": photo,
        };

        try {
            await axios.post('/dashboard/products/category/store', data, {
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
                window.location.replace('/dashboard/products/category');
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
                            <div className="col-md-12">
                                <InputLabel htmlFor="nama" value="Nama Kategori Produk" />
                                <input type="text" id="nama" name="nama" className="form-control" onChange={(e) => setNama(e.target.value)} />
                            </div>
                            <div className="col-md-5">
                                <InputLabel htmlFor="kode" value="Showed on Home ?" />
                                <select id="inputState" name="katalog" className="form-select" onChange={(e) => setShow(e.target.value)} required>
                                    <option value="-">-</option>
                                    <option value="TRUE">IYA</option>
                                    <option value="FALSE">TIDAK</option>


                                </select>
                            </div>
                            <div className="col-md-6 text-center">

                                <img src={previewImg}
                                    style={{
                                        objectFit: 'fill', width: "250px",
                                        height: "250px",
                                        border: "1px solid black",
                                    }} className="" alt="..." />
                            </div>
                            <div className="col-md-6">
                                <input
                                    type="file"
                                    className="w-full px-4 py-2"
                                    label="photo"
                                    name="photo"
                                    onChange={preview}

                                />
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
