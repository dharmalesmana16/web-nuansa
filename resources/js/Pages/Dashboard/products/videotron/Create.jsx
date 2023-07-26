import DashboardLayout from '@/Layouts/DashboardLayout';
import React from 'react'
import TextInput from '@/Components/TextInput'
import InputLabel from '@/Components/InputLabel';
import { useState } from 'react';
import BtnLink from '@/Components/BtnLink';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import gambarDummy from '../../../../../assets/image/dummy200.png';
import Swal from 'sweetalert2';

export default function Create(props) {
    const [nama, setNama] = useState("");
    const [harga, setHarga] = useState("");
    const [deskripsi, setDeskripsi] = useState("");
    const [kode, setKode] = useState("");
    const [jumlah, setJumlah] = useState("");
    const [katalog, setKatalog] = useState("");
    const [gambar, setGambar] = useState(null);
    const [previewImg, setPreview] = useState(null);
    function preview(e) {
        setPreview(URL.createObjectURL(e.target.files[0]));
        setGambar(e.target.files[0]);
    }

    const handleCreate = async (e) => {
        e.preventDefault();
        const data = { "nama": nama, "harga": harga, "deskripsi": deskripsi, "kode": kode, "jumlah": jumlah, "katalog": katalog, "photo": gambar };
        try {
            await axios.post('/dashboard/product/videotron/store', data, {
                headers: { 'Content-Type': "multipart/form-data" },
            }).then((response) => {
                console.log(response);
                Swal.fire({
                    icon: 'success',
                    text: response.message,
                    showConfirmButton: false,
                    timer: 2000,
                })

                // window.location.replace('/dashboard/product/cctv');
            });
            setNama("");
            setDeskripsi("");
            setGambar(null);
            setJumlah("");
            setKatalog("");
            setKode("");
            setHarga("");

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
                <div className="card">
                    <div className="card-body">

                        <form className="row g-3" encType="multipart/form-data" onSubmit={handleCreate} >
                            <div className="col-md-6">
                                <InputLabel htmlFor="nama" value="Nama Produk" />
                                <input type="text" id="nama" name="nama" className="form-control" onChange={(e) => setNama(e.target.value)} />

                            </div>
                            <div className="col-md-6">
                                <InputLabel htmlFor="kode" value="Kode Produk" />
                                <input type="text" id="kode" name="kode" className="form-control" onChange={(e) => setKode(e.target.value)} />
                            </div>
                            <div className="col-12">
                                <InputLabel htmlFor="deskripsi" value="Deskripsi Produk" />
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

                            <div className="col-md-6">
                                <InputLabel htmlFor="kode" value="Harga Produk" />
                                <input type="text" name="harga" className="form-control" id="harga" onChange={(e) => setHarga(e.target.value)} />
                            </div>
                            <div className="col-md-4">
                                <InputLabel htmlFor="kode" value="Katalog Produk" />
                                <select id="inputState" name="katalog" className="form-select" onChange={(e) => setKatalog(e.target.value)}>
                                    <option value="Modul">Modul Running Text </option>
                                    <option value="Cable">Cable</option>
                                </select>
                            </div>
                            <div className="col-md-2">
                                <InputLabel htmlFor="jumlah" value="Jumlah Produk" />
                                <input type="text" name="jumlah" className="form-control" id="jumlah" onChange={(e) => setJumlah(e.target.value)} />
                            </div>
                            <div className="col-md-6 text-center">

                                <img src={previewImg ? previewImg : gambarDummy}
                                    className="img-thumbnail border-1 rounded" alt="..." />
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
