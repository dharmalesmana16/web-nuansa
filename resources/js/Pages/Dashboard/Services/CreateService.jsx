import DashboardLayout from '@/Layouts/DashboardLayout';
import React from 'react'
import TextInput from '@/Components/TextInput'
import InputLabel from '@/Components/InputLabel';
import { useState } from 'react';
import BtnLink from '@/Components/BtnLink';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import gambarDummy from '../../../../assets/image/dummy200.png';
import Swal from 'sweetalert2';

export default function Create(props) {
    const [nama, setNama] = useState("");
    const [previewImg, setPreview] = useState(null);
    const [gambar, setGambar] = useState(null);
    const [description, setDescription] = useState("");
    function preview(e) {
        setPreview(URL.createObjectURL(e.target.files[0]));
        setGambar(e.target.files[0]);
    }

    const handleCreate = async (e) => {
        e.preventDefault();
        const data = { "nama": nama, "description": description, "photo": gambar };
        try {
            await axios.post('/dashboard/services/store', data, {
                headers: { 'Content-Type': "multipart/form-data" },
            }).then((response) => {
                Swal.fire({
                    icon: 'success',
                    text: response.message,
                    showConfirmButton: false,
                    timer: 2000,
                })

                window.location.replace('/dashboard/services');
            });
            setNama("");
            setDescription("");
            setGambar(null);
            setPreview(null);

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

                        <form className="" encType="multipart/form-data" onSubmit={handleCreate} >
                            <div className="col-md-12 mb-3">
                                <InputLabel htmlFor="nama" value="Nama Service" />
                                <input type="text" id="nama" name="nama" className="form-control" onChange={(e) => setNama(e.target.value)} />

                            </div>
                            <div className="col-md-12 mb-3">
                                <InputLabel htmlFor="deskripsi" value="Deskripsi Service" />
                                <CKEditor
                                    editor={ClassicEditor}
                                    config={{
                                        removePlugins: [],

                                    }}
                                    onChange={(event, editor) => {
                                        setDescription(editor.getData())
                                    }}
                                />
                            </div>
                            <div className="row ">
                                <InputLabel htmlFor="deskripsi" value="Gambar Utama" />

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
