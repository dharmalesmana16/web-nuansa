import DashboardLayout from '@/Layouts/DashboardLayout';
import React from 'react'
import InputLabel from '@/Components/InputLabel';
import { useState } from 'react';
import Swal from 'sweetalert2';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { CKEditor } from '@ckeditor/ckeditor5-react';
export default function CreateClients(props) {
    const [nama, setNama] = useState("");
    const [year, setYear] = useState("");
    const [photo, setPhoto] = useState(null);
    const [home, setHome] = useState("");
    const [deskripsi, setDeskripsi] = useState("");
    const [previewImg, setPreview] = useState(null);

    function preview(e) {
        var fileInput = false;
        let dataImage = e.target.files[0]
        if (dataImage) {
            fileInput = true;
            setPhoto(dataImage);
            setPreview(URL.createObjectURL(dataImage));
        }
        // setPreview(URL.createObjectURL(dataImage));

        // if (fileInput) {
        //     try {
        //         FileResizer.imageFileResizer(
        //             dataImage,
        //             500,
        //             500,
        //             ["JPEG", "PNG"],
        //             100,
        //             0,
        //             (uri) => {
        //                 setPreview(URL.createObjectURL(uri));
        //                 setPhoto(uri);
        //             },
        //             "file",
        //             200,
        //             200
        //         );

        //     } catch (err) {
        //         console.log(err);
        //     }
        // }

    }
    const handleCreate = async (e) => {
        e.preventDefault();
        const data =
        {
            "nama": nama,
            "from_year": year,
            "deskripsi": deskripsi,
            "showonhome": home,
            "photo": photo,
        };
        try {
            await axios.post('/dashboard/clients/store', data, {
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
                                <InputLabel htmlFor="nama" value="Nama Mitra Kerja / Client" />
                                <input type="text" id="nama" name="nama" className="form-control" onChange={(e) => setNama(e.target.value)} />
                            </div>
                            <div className="col-md-7">
                                <InputLabel htmlFor="from_year" value="Mitra Kerja dari tahun" />
                                <input type="date" id="from_year" name="from_year" className="form-control" onChange={(e) => setYear(e.target.value)} />
                            </div>
                            <div className="col-md-5">
                                <InputLabel htmlFor="kode" value="Showed on Home ?" />
                                <select id="inputState" name="katalog" className="form-select" onChange={(e) => setHome(e.target.value)} required>
                                    <option value="-">-</option>
                                    <option value="TRUE">IYA</option>
                                    <option value="FALSE">TIDAK</option>


                                </select>
                            </div>
                            <div className="col-12">
                                <InputLabel htmlFor="deskripsi" value="Deskripsi Pekerjaan" />
                                <CKEditor
                                    editor={ClassicEditor}
                                    config={{
                                        removePlugins: [],

                                    }}
                                    onChange={(event, editor) => {
                                        setDeskripsi(editor.getData())
                                    }}
                                />
                            </div>

                            <div className="col-md-6 text-center">

                                <img src={previewImg}
                                    className="" alt="..." style={{
                                        objectFit: 'cover', width: "250px",
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
