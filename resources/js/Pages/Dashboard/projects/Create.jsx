import DashboardLayout from '@/Layouts/DashboardLayout';
import React from 'react'
import InputLabel from '@/Components/InputLabel';
import { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import gambarDummy from '../../../../assets/image/dummy200.png';
import Swal from 'sweetalert2';
import FileResizer from 'react-image-file-resizer';

export default function Create(props) {
    const [nama, setNama] = useState("");
    const [description, setDescription] = useState("");
    const [gambar, setGambar] = useState(null);
    const [previewImg, setPreview] = useState(null);
    function preview(e) {
        var fileInput = false;
        let dataImage = e.target.files[0]
        if (dataImage) {
            fileInput = true;
        }
        if (fileInput) {
            try {
                FileResizer.imageFileResizer(
                    dataImage,
                    250,
                    250,
                    "JPEG",
                    100,
                    0,
                    (uri) => {
                        setPreview(URL.createObjectURL(uri));
                        setGambar(uri);
                    },
                    "file",
                    250,
                    250
                );

            } catch (err) {
                console.log(err);
            }
        }
    }

    const handleCreate = async (e) => {
        e.preventDefault();
        const data = { "nama": nama, "description": description, "photo": gambar };
        try {
            await axios.post('/dashboard/projects/store', data, {
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
                window.location.replace("/dashboard/projects");
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
            <div className='container'>
                <div className="card bg-white">
                    <div className="card-body">

                        <form className="row g-3" encType="multipart/form-data" onSubmit={handleCreate} >
                            <div className="col-md-6 text-center">

                                <img src={previewImg}
                                    className="" alt="..." style={{
                                        objectFit: 'fill', width: "250px",
                                        height: "250px",
                                        border: "1px solid black",
                                    }} />
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
                            <div className="col-md-12">
                                <InputLabel htmlFor="nama" value="Nama Berita" />
                                <input type="text" id="nama" name="nama" className="form-control" onChange={(e) => setNama(e.target.value)} />

                            </div>

                            <div className="col-12">
                                <InputLabel htmlFor="deskripsi" value="Deskripsi Berita" />
                                <CKEditor
                                    editor={ClassicEditor}
                                    config={{ entities: true }}
                                    onChange={(event, editor) => {
                                        setDescription(editor.getData())
                                    }}
                                />
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
