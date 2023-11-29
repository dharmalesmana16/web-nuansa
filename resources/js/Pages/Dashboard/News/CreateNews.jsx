import ButtonCreate from '@/Components/ButtonCreate'
import DashboardLayout from '@/Layouts/DashboardLayout'
import { Card, CardContent, FormControl, TextField, Grid, Typography, Container, Box, Paper } from '@mui/material'
import React, { useState } from 'react'
import Swal from 'sweetalert2'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { usePage } from '@inertiajs/react'
export default function CreateNews() {
    const [nama, setNama] = useState("");
    const [description, setDescription] = useState("");
    const [gambar, setGambar] = useState(null);
    const [userID, setuserID] = useState("");
    const [previewImg, setPreview] = useState(null);
    const [loading, setLoading] = useState(false);

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
    const handleModelChange = (e, editor, images) => {
        setDescription(e)
        console.log(e);
    }
    const handleCreate = async (e) => {
        e.preventDefault();
        const data = { "nama": nama, "description": description, "photo": gambar, "user_id": datas.auth.user.id };
        setLoading(true);

        try {
            await axios.post('/dashboard/news/store', data, {
                headers: { 'Content-Type': "multipart/form-data" },
            }).then((response) => {
                setLoading(false);
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
            <Container maxWidth="md">


                <Card>
                    <CardContent >
                        <div className="d-flex mb-3">
                            <Typography fontWeight={"700"} sx={{ ml: 1 }}>
                                Tambah Berita
                            </Typography>
                        </div>
                        <form onSubmit={handleCreate}>
                            <div className="mb-3">

                                <label htmlFor="secondImage">
                                    {/* <div className="container-fluid"> */}
                                    {/* {previewImg !== null ? => } */}
                                    {previewImg == null ? (
                                        <Box className="secondImage container-fluid" sx={{ border: "1px solid black", width: "820px", p: 15, borderStyle: "dashed", cursor: "pointer" }}>
                                            <Typography variant='h4' color={"text.secondary"} className='d-flex justify-content-center'>
                                                + Gambar
                                            </Typography>
                                        </Box>

                                    ) : (
                                        <Box className="secondImage container-fluid" src={previewImg} component={"img"} sx={{ objectFit: "fill", width: "820px", height: "400px", borderRadius: "20px" }} >

                                        </Box>
                                    )}
                                    {/* <Box className="secondImage container-fluid" sx={{ border: "1px solid black", width: "820px", p: 0, borderStyle: "dashed", cursor: "pointer" }}>
                                    {previewImg == null ? (

                                        <Typography variant='h4' color={"text.secondary"} className='d-flex justify-content-center'>
                                            + Gambar
                                        </Typography>
                                    ) : (
                                        <img src={previewImg} style={{ objectFit: "fill", width: "820px" }} alt="" srcset="" />
                                    )}
                                </Box> */}
                                    {/* </div> */}
                                    {/* <Container maxWidth="lg">
                                <Box sx={{ border: "1px solid black", borderStyle: "dashed", p: 5 }}>

                                </Box>
                            </Container> */}
                                </label>
                                <input type="file" name='previewImg1' id='secondImage' style={{ display: "none", visibility: "none" }} onChange={preview
                                } />
                            </div>

                            <div className="mb-3 row">
                                <label className="col-md-3 col-sm-4 col-form-label">
                                    <Typography variant='body2' fontWeight={"500"} >
                                        Judul Berita
                                    </Typography>
                                </label>
                                <div className="col-md-9 col-sm-8">
                                    <div class="input-group input-group-sm ">
                                        <input type="text" className="form-control" id="inputPassword" placeholder='Masukkan Judul Berita' onChange={(e) => setNama(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label className="col-md-3 col-sm-4 col-form-label">
                                    <Typography variant='body2' fontWeight={"500"} >
                                        Deskripsi Berita
                                    </Typography>
                                </label>
                                <div className="col-md-9 col-sm-8">
                                    <div class="input-group input-group-sm ">
                                        <CKEditor
                                            editor={ClassicEditor}
                                            // data="<p>Hello from CKEditor 5!</p>"
                                            // onReady={(editor) => {
                                            //     console.log("CKEditor5 React Component is ready to use!", editor);
                                            // }}

                                            onChange={(event, editor) => {
                                                setDescription(editor.getData())
                                            }}
                                        />                                    </div>
                                </div>
                            </div>

                            <ButtonCreate />

                        </form>
                        <Backdrop
                            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                            open={loading == true ? true : ""}

                        >
                            <CircularProgress color="inherit" />
                        </Backdrop>
                    </CardContent>
                </Card>
            </Container>
        </DashboardLayout >
    )
}
