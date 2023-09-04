import DashboardLayout from '@/Layouts/DashboardLayout'
import { Card, TextField } from '@mui/material'
import React from 'react'
import { useState } from 'react';
import InputLabel from '@/Components/InputLabel';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Swal from 'sweetalert2';
import { usePage } from '@inertiajs/react';
export default function CreateNews() {
    const [nama, setNama] = useState("");
    const [description, setDescription] = useState("");
    const [gambar, setGambar] = useState(null);
    const [previewImg, setPreview] = useState(null);
    let datas = usePage().props;
    console.log(datas.auth.user.id);
    // setuserID(datas.auth.user.id);
    function preview(e) {
        var fileInput = false;
        let dataImage = e.target.files[0]
        if (dataImage) {
            fileInput = true;
            setGambar(dataImage);
            setPreview(URL.createObjectURL(dataImage));
        }

    }

    const handleCreate = async (e) => {
        e.preventDefault();
        const data = { "nama": nama, "description": description, "photo": gambar };
        try {
            await axios.post('/dashboard/carousel/store', data, {
                headers: { 'Content-Type': "multipart/form-data" },
            }).then((response) => {
                Swal.fire({
                    icon: 'success',
                    text: response.message,
                    showConfirmButton: false,
                    timer: 2000,
                })
            });
            setNama("");
            setDescription("");
            setGambar(null);
            setTimeout(() => {
                window.location.replace("/dashboard/carousel");
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
        <DashboardLayout>
            <div className='container'>
                <div className="card bg-white">
                    <div className="card-body p-5">

                        <form className="row g-3" encType="multipart/form-data" onSubmit={handleCreate} >



                            <div className="mb-3 row">
                                <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Judul</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="inputPassword" onChange={(e) => setNama(e.target.value)} />
                                </div>
                            </div>

                            <div className="mb-3 row">
                                <label for="staticEmail" className="col-sm-2 col-form-label">Deskripsi</label>
                                <div className="col-sm-10">
                                    <CKEditor
                                        editor={ClassicEditor}
                                        config={{ entities: true }}
                                        onChange={(event, editor) => {
                                            setDescription(editor.getData())
                                        }}
                                    />
                                </div>
                            </div>


                            <div className="row ">
                                <label for="staticEmail" className="col-sm-2 col-form-label">Gambar Carousel</label>

                                <div className="col-sm-7">

                                    <input
                                        type="file"
                                        className="w-full px-4 py-2 form-control"
                                        label="photo"
                                        name="photo"
                                        onChange={preview
                                        }
                                    />
                                </div>

                            </div>
                            <div className="row">
                                {/* <label for="staticEmail" className="col-sm-2 col-form-label">Gambar Carousel</label> */}
                                <div className="col-sm-2 col-md-2">

                                </div>
                                <div className="col-sm-12 col-md-7 col">
                                    <div className="firstImage" style={{
                                        border: "1px solid black", width: "", height: "", borderStyle: "dashed", cursor: "pointer"
                                    }}>

                                        <img src={previewImg}
                                            className="" alt="..." style={{
                                                objectFit: 'cover', maxWidth: "900px",
                                                maxHeight: "400px",
                                                border: "1px solid black",
                                            }} />
                                    </div>
                                </div>
                            </div>




                            <hr />
                            <div className="text-end">
                                <button type="submit" className=" btn btn-primary px-3 font-weight-bolder btnSubmit">Create New Project
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        </DashboardLayout >
    )
}
