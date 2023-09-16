import DashboardLayout from '@/Layouts/DashboardLayout';
import React from 'react'
import InputLabel from '@/Components/InputLabel';
import { useState } from 'react';
import Swal from 'sweetalert2';
import FileResizer from 'react-image-file-resizer';
export default function EditClients(props) {
    const [nama, setNama] = useState(props.data.nama);
    const [year, setYear] = useState(props.data.from_year);
    const [photo, setPhoto] = useState(null);
    const [previewImg, setPreview] = useState(null);

    function preview(e) {
        var fileInput = false;
        let dataImage = e.target.files[0]
        if (dataImage) {
            fileInput = true;
            setPreview(URL.createObjectURL(uri));
            setPhoto(uri);
        }

    }
    const handleCreate = async (e) => {
        e.preventDefault();
        const data =
        {
            "nama": nama,
            "from_year": year,
        };
        if (photo !== null) {
            data["photo"] = photo
        }
        try {
            await axios.post(`/dashboard/clients/update/${props.data.id}`, data, {
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
            setPhoto("");
            setPreview("");
            setYear("");
            setTimeout(() => {
                window.location.replace('/dashboard/clients');
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
                                <InputLabel htmlFor="nama" value="Nama Client" />
                                <input type="text" id="nama" name="nama" className="form-control" value={nama} onChange={(e) => setNama(e.target.value)} />
                            </div>
                            <div className="col-md-12">
                                <InputLabel htmlFor="from_year" value="Dari Tahun" />
                                <input type="date" id="from_year" name="from_year" className="form-control" value={year} onChange={(e) => setYear(e.target.value)} />
                            </div>
                            <div className="col-md-6 text-center">

                                <img src={previewImg ? previewImg : `/storage/${props.data.photo}`}
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
                                    onChange={preview
                                    }

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
