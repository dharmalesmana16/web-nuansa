import DashboardLayout from '@/Layouts/DashboardLayout';
import React from 'react'
import InputLabel from '@/Components/InputLabel';
import { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Swal from 'sweetalert2';
import FileResizer from 'react-image-file-resizer';
export default function CreateProduct(props) {
    const [nama, setNama] = useState("");
    const [harga, setHarga] = useState("");
    const [deskripsi, setDeskripsi] = useState("");
    const [kode, setKode] = useState("");
    const [jumlah, setJumlah] = useState("");
    const [katalog, setKatalog] = useState("");
    const [kategori, setKategori] = useState("");
    const [gambar, setGambar] = useState(null);
    const [previewImg, setPreview] = useState(null);
    const [dataKatalog, setDataKatalog] = useState([]);
    async function getCatalog(e) {
        e.preventDefault();
        const category = e.target.value;
        setKategori(category);
        let data = { "category_product_id": category };
        // await request = axios.post('/data/getcatalog', data).then((response) => { setDataKatalog(response) });
        await axios.post('/data/getcatalog', data).then((response) => {
            setDataKatalog(response);
        });
    }
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
    const handleNumber = (e) => {
        const regex = /^[0-9\b]+$/;
        if (e.target.value === "" || regex.test(e.target.value)) {
            setHarga(e.target.value);
        }
    };

    const handleCreate = async (e) => {
        e.preventDefault();
        const data =
        {
            "nama": nama, "harga": harga, "deskripsi": deskripsi, "kode": kode,
            "jumlah": jumlah, "katalog": katalog,
            "category_id": kategori, "photo": gambar
        };
        try {
            await axios.post('/dashboard/products/store', data, {
                headers: { 'Content-Type': "multipart/form-data" },
            }).then((response) => {
                console.log(response);
                Swal.fire({
                    icon: 'success',
                    text: response.msg,
                    showConfirmButton: false,
                    timer: 2000,
                })
                setTimeout(() => {
                    window.location.replace('/dashboard/products')
                }, 2000);
            });
            setNama("");
            setDeskripsi("");
            setGambar(null);
            setJumlah("");
            setKatalog("");
            setKategori("");
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
                    <div className="card-body bg-white">
                        <form className="row g-3" encType="multipart/form-data" onSubmit={handleCreate} >
                            <div className="col-md-4">
                                <InputLabel htmlFor="nama" value="Nama Produk" />
                                <input type="text" id="nama" name="nama" className="form-control" onChange={(e) => setNama(e.target.value)} />

                            </div>
                            <div className="col-md-4">
                                <InputLabel htmlFor="kode" value="Kode Produk" />
                                <input type="text" id="kode" name="kode" className="form-control" style={{ textTransform: "uppercase" }} onChange={(e) => setKode(e.target.value)} />
                            </div>
                            <div className="col-md-4">
                                <InputLabel htmlFor="category_product_id" value="Kategori Produk" />
                                <select id="category_product_id" name="category_product_id" className="form-select" onChange={getCatalog} required>
                                    <option value="-">-</option>
                                    {props.data_cat.map((res, i) => {
                                        return (

                                            <option key={i} value={res.id}  >{res.nama}</option>
                                        )
                                    })}
                                </select>
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
                                <InputLabel htmlFor="harga" value="Harga Produk" />
                                <input type="number" name="harga" className="form-control" id="harga" onChange={(e) => setHarga(e.target.value)} />
                            </div>
                            <div className="col-md-4">
                                <InputLabel htmlFor="kode" value="Katalog Produk" />
                                <select id="inputState" name="katalog" className="form-select" onChange={(e) => setKatalog(e.target.value)} required>
                                    <option value="-">-</option>
                                    {dataKatalog.data ? dataKatalog.data.map((katalogs, k) => {
                                        return (

                                            <option key={k} value={katalogs.id}>{katalogs.nama}</option>
                                        )
                                    }) : ""}

                                </select>
                            </div>
                            <div className="col-md-2">
                                <InputLabel htmlFor="jumlah" value="Stok Produk" />
                                <input type="text" name="jumlah" className="form-control" id="jumlah" onChange={(e) => setJumlah(e.target.value)} />
                            </div>
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
