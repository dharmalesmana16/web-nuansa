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

export default function Update(props) {
    const [nama, setNama] = useState(props.dataservice.nama);
    const [description, setDescription] = useState(props.dataservice.description);
    function preview(e) {
        setPreview(URL.createObjectURL(e.target.files[0]));
        setGambar(e.target.files[0]);
    }

    const handleUpdate = async (e) => {
        e.preventDefault();
        const data = { "nama": nama, "description": description };
        try {
            await axios.put('/dashboard/services/update/' + props.dataservice.slug, data).then((response) => {
                console.log(response);
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

        } catch (error) {
            console.log(error)
            Swal.fire({
                icon: 'error',
                text: "Gagal",
                showConfirmButton: false,
                timer: 2000,
            })
        }
    }

    return (
        <DashboardLayout >
            <div className='container'>
                <div className="card">
                    <div className="card-body">

                        <form className="row g-3" encType="multipart/form-data" onSubmit={handleUpdate} >
                            <div className="col-md-6">
                                <InputLabel htmlFor="nama" value="Nama Service" />
                                <input type="text" id="nama" name="nama" className="form-control" value={nama} onChange={(e) => setNama(e.target.value)} />

                            </div>
                            <div className="col-md-6">
                                <InputLabel htmlFor="deskripsi" value="Deskripsi Service" />
                                <CKEditor
                                    editor={ClassicEditor}
                                    config={{
                                        removePlugins: [],

                                    }}
                                    data={description}
                                    onChange={(event, editor) => {
                                        setDescription(editor.getData())
                                    }}
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
