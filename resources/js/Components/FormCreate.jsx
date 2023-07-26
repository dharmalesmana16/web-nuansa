import React from 'react'
import InputLabel from './InputLabel'
export default function FormCreate() {
    return (
        <div>
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
                                    <option value="Camera">Camera</option>
                                    <option value="DVR">DVR</option>
                                    <option value="NVR">NVR</option>
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
        </div>
    )
}
