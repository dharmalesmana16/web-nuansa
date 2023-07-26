import DashboardLayout from '@/Layouts/DashboardLayout';
import React from 'react'
import TextInput from '@/Components/TextInput'
import InputLabel from '@/Components/InputLabel';
import { useState, useEffect } from 'react';
import BtnLink from '@/Components/BtnLink';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import gambarDummy from '../../../../../assets/image/dummy200.png';
import Swal from 'sweetalert2';

export default function Update(props) {
    const [nama, setNama] = useState(props.data.nama);
    const [harga, setHarga] = useState(props.data.harga);
    const [deskripsi, setDeskripsi] = useState(props.data.deskripsi);
    const [kode, setKode] = useState(props.data.kode);
    const [jumlah, setJumlah] = useState(props.data.jumlah);
    const [katalog, setKatalog] = useState(props.data.katalog);
    const [gambar, setGambar] = useState(null);
    const [previewImg, setPreview] = useState(null);
    // useEffect(() => {
    //     setNama(props.data.nama)
    //     setHarga(props.data.harga)
    //     setDeskripsi(props.data.deskripsi)
    //     setJumlah(props.data.jumlah)
    //     setKode(props.data.kode)
    //     setKatalog(props.data.katalog)
    // }, [])
    function preview(e) {
        setPreview(URL.createObjectURL(e.target.files[0]));
        setGambar(e.target.files[0]);
    }

    const handleCreate = async (e) => {
        e.preventDefault();
        const datas = new FormData();
        datas.append('nama', nama)
        datas.append('deskripsi', deskripsi)
        datas.append('harga', harga)
        datas.append('jumlah', jumlah)
        datas.append('katalog', katalog)
        datas.append('kode', kode)
        // const data = { "nama": nama, "harga": harga, "deskripsi": deskripsi, "kode": kode, "jumlah": jumlah, "katalog": "asda", "photo": gambar };
        try {
            await axios.put(`/dashboard/product/cctv/update/${props.data.slug}`, datas
            ).then((response) => {
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
            console.log(error);
            Swal.fire({
                icon: 'error',
                // text: error.response.data.message,
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
                                <input type="text" id="nama" name="nama" className="form-control" value={nama} onChange={(e) => setNama(e.target.value)} />

                            </div>
                            <div className="col-md-6">
                                <InputLabel htmlFor="kode" value="Kode Produk" />
                                <input type="text" id="kode" name="kode" className="form-control" value={kode} onChange={(e) => setKode(e.target.value)} />
                            </div>
                            <div className="col-12">
                                <InputLabel htmlFor="deskripsi" />
                                <CKEditor
                                    editor={ClassicEditor}
                                    config={{
                                        removePlugins: [],

                                    }}
                                    data={deskripsi}
                                    onChange={(event, editor) => {
                                        setDeskripsi(editor.getData())
                                    }}
                                />
                            </div>

                            <div className="col-md-6">
                                <InputLabel htmlFor="kode" value="Harga Produk" />
                                <input type="text" name="harga" className="form-control" id="harga" value={harga} onChange={(e) => setHarga(e.target.value)} />
                            </div>
                            <div className="col-md-4">
                                <InputLabel htmlFor="kode" value="Katalog Produk" />
                                <select id="inputState" name="katalog" className="form-select" onChange={(e) => setKatalog(e.target.value)}>
                                    {/* <option selected={props.data.katalog}>{props.data.katalog}</option> */}
                                    <option value="Camera">Camera</option>
                                    <option value="DVR">DVR</option>
                                    <option value="NVR">NVR</option>
                                </select>
                            </div>
                            <div className="col-md-2">
                                <InputLabel htmlFor="jumlah" value="Jumlah Produk" />
                                <input type="text" name="jumlah" className="form-control" id="jumlah" value={jumlah} onChange={(e) => setJumlah(e.target.value)} />
                            </div>
                            <div className="col-md-6 text-center">

                                <img src={`/uploads/${props.data.photo}`}
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
                                <button type="submit" className=" btn btn-primary px-3 font-weight-bolder btnSubmit">Update Product
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}
