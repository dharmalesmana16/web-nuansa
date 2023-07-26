import AuthLayout from '@/Layouts/AuthLayout'
import React, { useState } from 'react'
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import TextInput from '@/Components/TextInput';
// import { useNavigate } from 'react-router-dom'
export default function Signup() {
    const [firstName, setFirstname] = useState("");
    const [lastName, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [handphone, setHandphone] = useState("");
    const [username, setUsername] = useState("");
    // const navigate = useNavigate();
    // const navigate = useNavigate();
    const handleRegister = async (e) => {
        e.preventDefault();
        const data = { "first_name": firstName, "last_name": lastName, "email": email, "password": password, "handphone": handphone, "username": username };
        try {
            console.log(firstName);
            await axios.post('/signup', data).then((response) => {
                Swal.fire({
                    icon: 'success',
                    text: "Your Registration is successfully",
                    showConfirmButton: false,
                    timer: 2000,
                })
                window.location.replace('/signin');
            });
            setFirstname("");
            setEmail("");
            setHandphone("");
            setLastname("");
            setPassword("");
            setUsername("");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <AuthLayout>
            <div>
                <form method="POST" id="register" className="formRegister" onSubmit={handleRegister}>
                    <p className="text-center"></p>


                    <div className="form-outline mb-4">
                        {/* <input type="text" id="first_name" name="first_name" className="form-control"
                            placeholder="Masukkan Nama Depan" onChange={(e) => setFirstname(e.target.value)} /> */}
                        <TextInput type='text' id="first_name" name="first_name" placeholder="Masukkan Nama Depan" onChange={(e) => setFirstname(e.target.value)} />
                        <label className="form-label" htmlFor="first_name">First Name</label>
                    </div>
                    <div className="form-outline mb-4">
                        <TextInput type="text" id="last_name" name="last_name"
                            placeholder="Masukkan Nama Belakang" onChange={(e) => setLastname(e.target.value)} />
                        <label className="form-label" htmlFor="last_name">Last Name</label>
                    </div>

                    <div className="form-outline mb-4">
                        <input type="email" id="email" name="email" className="form-control" onChange={(e) => setEmail(e.target.value)} />
                        <label className="form-label" htmlFor="email">E-mail</label>
                    </div>
                    <div className="form-outline mb-4">
                        <input type="handphone" id="handphone" name="handphone" className="form-control" onChange={(e) => setHandphone(e.target.value)} />
                        <label className="form-label" htmlFor="handphone">Handphone</label>
                    </div>

                    <div className="form-outline mb-4">
                        <input type="username" id="username" name="username" className="form-control" onChange={(e) => setUsername(e.target.value)} />
                        <label className="form-label" htmlFor="username">Username</label>
                    </div>

                    <div className="form-outline mb-4">
                        <input type="password" id="password" name="password" className="form-control" onChange={(e) => setPassword(e.target.value)} />
                        <label className="form-label" htmlFor="password">Password</label>
                    </div>


                    <div className="text-center pt-1 mb-5 pb-1">
                        <button type="submit" className="form-control btn btn-primary px-3 font-weight-bolder btnSubmit">Sign
                            Up</button>
                    </div>


                </form>
                <div className="d-flex align-items-center justify-content-center pb-4">
                    <p className="mb-0 me-2">Sudah Mempunyai Akun ?</p>
                    <a href="/signin" className="btn btn-warning text-dark btn-md w-50"
                    >Login</a>
                </div>
            </div>
        </AuthLayout>
    )
}
