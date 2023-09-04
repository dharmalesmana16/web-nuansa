import AuthLayout from '@/Layouts/AuthLayout'
import React, { useState } from 'react'
import Logo from '../../../assets/image/logonuansa.png'
import axios from 'axios';
import { Link } from '@inertiajs/react';
import LogoNuansa from '@/Components/LogoNuansa';
export default function Signin() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = { username: username, password: password };
        try {

            await axios.post('/signin', data).then((response) => {
                if (response.data.login == "1") {
                    $(".loginAlert").hide().html(response.data.msg).fadeIn('slow');
                    $('.loginAlert').attr('class', 'alert alert-success loginAlert');
                    setTimeout(function () {
                        window.location.replace('/dashboard');
                    }, 2000);
                } else if (response.data.login == "0") {
                    $(".loginAlert").hide().html(response.data.msg).fadeIn('slow');
                    $('.loginAlert').attr('class', 'alert alert-danger loginAlert');
                    setTimeout(function () {
                        $('.loginAlert').fadeOut();
                    }, 4000);
                }
                console.log(response);
            }).catch((response) => {
                console.log(response);
            })
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <AuthLayout>

            <div className="text-center">
                <LogoNuansa width={200} height={75} />
            </div>

            <form method="POST" id="formLogin" className="formLogin" onSubmit={handleSubmit}>
                <p className="text-center"></p>
                <div className="text-center">

                    <div className="alert alert-danger loginAlert" style={{ display: 'none' }}>
                    </div>

                </div>

                <div className="form-outline mb-4">
                    <input type="text" id="username" name="username" className="form-control"
                        placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
                    <label className="form-label" htmlFor="username">Username</label>
                </div>

                <div className="form-outline mb-4">
                    <input type="password" id="password" name="password" className="form-control" onChange={(e) => setPassword(e.target.value)} />
                    <label className="form-label" for="password">Password</label>
                </div>

                <div className="text-center pt-1 mb-5 pb-1">
                    <button type="submit" className="form-control btn btn-primary submit px-3 font-weight-bolder btnSubmit">Sign
                        In</button>
                </div>


            </form>
            <div className="d-flex align-items-center justify-content-start pb-4">
                <p className="mb-0 me-2">Belum Mempunyai Akun ?</p>
                <a href={route('signup')} className='btn btn-warning btn-sm fw-bolder text-dark text-2xl'>Register</a>
            </div>
            <div className="d-flex align-items-center justify-content-start pb-4">
                <Link href={'/'} className='  text-2xl'>Back to Home</Link>
            </div>

        </AuthLayout>
    )
}
