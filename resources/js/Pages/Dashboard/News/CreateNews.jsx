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
    const [userID, setuserID] = useState("");
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
        const data = { "nama": nama, "description": description, "photo": gambar, "user_id": datas.auth.user.id };
        try {
            await axios.post('/dashboard/news/store', data, {
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
            setDescription("");
            setGambar(null);
            setTimeout(() => {
                window.location.replace("/dashboard/news");
            }, 2000);
        } catch (error) {
            Swal.fire({
                icon: 'error',
                text: error.data.msg,
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
                                <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Nama Berita</label>
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
                                <label for="staticEmail" className="col-sm-2 col-form-label">Gambar Berita</label>

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
                                <div className="col-sm-3">

                                    <img src={previewImg}
                                        className="" alt="..." style={{
                                            objectFit: 'fill', width: "250px",
                                            height: "250px",
                                            border: "1px solid black",
                                        }} />
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
            </div>
        </DashboardLayout>
    )
}
