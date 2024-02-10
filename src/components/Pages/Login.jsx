import React from 'react';
import Input from '../elements/input/Input';
import Sukses from '../elements/button/Sukses';

const Login = () => {
    const handleLogin = (event) => {
        event.preventDefault();
        
        // Mengambil data dari localStorage
        const storedUsername = localStorage.getItem("username");
        const storedPassword = localStorage.getItem("password");
        
        // Jika data ditemukan, lakukan pengecekan
        if (storedUsername && storedPassword) {
            // Melakukan proses pengecekan
            const enteredUsername = event.target.elements.username.value;
            const enteredPassword = event.target.elements.password.value;
            
            // Jika data yang dimasukkan sesuai dengan yang tersimpan, redirect ke halaman utama
            if (enteredUsername === storedUsername && enteredPassword === storedPassword) {
                window.location.href = "/";
            } else {
                alert("Username atau password salah.");
            }
        } else {
            alert("Data login belum tersimpan.");
        }
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
                        <Input tipe="text" id="username" placeholder="anastasia@gmail.com" title="Username" />
                        <Input tipe="password" id="password" placeholder="********" title="Password" />
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
