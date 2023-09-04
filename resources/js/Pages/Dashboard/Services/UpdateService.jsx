import DashboardLayout from '@/Layouts/DashboardLayout'
import { Card, TextField } from '@mui/material'
import React from 'react'
import { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Swal from 'sweetalert2';
import { usePage } from '@inertiajs/react';
export default function UpdateNews(props) {
    const [nama, setNama] = useState(props.data.nama);
    const [description, setDescription] = useState(props.data.description);
    const [gambar, setGambar] = useState(null);
    const [userID, setuserID] = useState("");
    const [previewImg, setPreview] = useState(null);
    let datas = usePage().props;

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
        const data = { "nama": nama, "description": description };
        if (gambar !== null) {
            data["photo"] = gambar
        }
        try {
            await axios.post(`/dashboard/services/update/${props.data.id}`, data, {
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
                window.location.replace("/dashboard/services");
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

                            <div class="mb-3 row">
                                <label for="inputPassword" class="col-sm-2 col-form-label">Nama Berita</label>
                                <div class="col-sm-10">
                                    <input type="text" class="form-control" id="inputPassword" value={nama} onChange={(e) => setNama(e.target.value)} />
                                </div>
                            </div>

                            <div class="mb-3 row">
                                <label for="staticEmail" class="col-sm-2 col-form-label">Deskripsi</label>
                                <div class="col-sm-10">
                                    <CKEditor
                                        editor={ClassicEditor}
                                        config={{ entities: true }}
                                        onChange={(event, editor) => {
                                            setDescription(editor.getData())
                                        }}
                                        data={description}
                                    />
                                </div>
                            </div>



                            <div className="row ">
                                <label for="staticEmail" class="col-sm-2 col-form-label">Gambar Berita</label>

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
                                <div class="col-sm-3">

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
