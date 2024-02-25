import React, { useState } from 'react';
import Input from '../elements/input/Input';
import Sukses from '../elements/button/Sukses';
import { useMutation } from 'react-query';

const postLogin = async (user) => {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    });
    const data = await response.json();
    return data;
}

const Login = () => {
    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    });

    const { mutate, isError, isLoading } = useMutation({
        mutationKey: 'login',
        mutationFn: () => postLogin(loginData),
        onError: (error) => {
            console.log(error)
        },
        onSuccess: (data) => {
            console.log('login berhasil!' + data)
            localStorage.setItem('token', data.token)
            localStorage.setItem('id', data.id)
            window.location.href = '/'
        }
    })

    const handleChange = (event) => {
        setLoginData({
            ...loginData,
            [event.target.name]: event.target.value,
        });
    }

    const handleLogin = async (event) => {
        event.preventDefault();

        mutate(loginData);
        console.log(loginData)
    }
    return (
        <div className=" bg-primary w-full h-screen overflow-x-hidden">
            <div className="absolute z-20 bg-white w-[35%] h-[85%] ml-48 my-12 mx-4 pb-4 pt-4 rounded-2xl">
                <form onSubmit={handleLogin}>
                    <h1 className="text-4xl font-bold text-center mt-10">Login</h1>
                    <div className='flex-col text-center mt-3'>
                        <h3>Selamat datang kembali!</h3>
                        <h3>Silakan masukkan detail akun Anda.</h3>
                    </div>
                    <div className="grid md:grid-cols-1 items-center mx-16 mb-16 mt-8 gap-12">
                        <Input tipe="text" onChange={handleChange} name="email" id="email" placeholder="anastasia@gmail.com" title="email" />
                        <Input tipe="password" onChange={handleChange} name="password" id="password" placeholder="********" title="Password" />
                        <div className='flex items-center gap-6 ml-16 mt-2 justify-end'>
                            <button type="submit"> <Sukses title='Register Akun' /> </button>
                        </div>
                    </div>
                </form>
            </div>
            <div className='absolute w-[8%] mt-[68px] flex justify-center ml-[1030px]'>
                <img src="sudut.png" alt="" className=' rounded-3xl' />
            </div>
            <img src="login.jpg" alt="" className='w-[65%] my-20 mx-auto rounded-3xl h-[75%]' />
        </div>
    )
}

export default Login;
