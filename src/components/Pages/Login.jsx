import React, { useEffect, useState } from 'react';
import Input from '../elements/input/Input';
import Sukses from '../elements/button/Sukses';
import { useMutation } from 'react-query';
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { CgDanger } from 'react-icons/cg';
import Loading from '../Fragments/Loading';

const postLogin = async (admin) => {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/loginAdmin`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(admin),
    });
    const data = await response.json();
    return data;
}


const Login = () => {
    // const [showNotification, setShowNotification] = useState(false);
    // const [showNotificationGagal, setShowNotificationGagal] = useState(false);
    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    });

    const [showModal, setShowModal] = useState(false);
    const [showNotification, setShowNotification] = useState(false);

    const handleSaveChange = () => {
        if (loginData.email !== null && loginData.password !== null) {
            setShowNotification(true);
            setShowModal(true);
            mutate(loginData);
            console.log(loginData)
        }else{
            console.log('gagal')
        }
        
    };

    useEffect(() => {
        let timeout;
        if (showNotification) {
            timeout = setTimeout(() => {
                setShowNotification(false);
                setTimeout(() => {

                    window.location.href = '/'
                }, 1000);
            }, 1000); // 5000 milidetik = 5 detik
        }
        return () => clearTimeout(timeout);
    }, [showNotification]);

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
            localStorage.setItem('isLogin', true)
            // window.location.href = '/'
        }
    })
    
    useEffect(() => {
        if (isLoading  ) {
            <Loading />
        }
    }, [isLoading]);


    const handleChange = (event) => {
        setLoginData({
            ...loginData,
            [event.target.name]: event.target.value,
        });
    }

    
    return (
        <div className=" bg-primary w-full h-screen flex justify-center overflow-x-hidden">
            <div className=" z-20 bg-white lg:w-[35%] w-[80%] lg:h-[85%] h-fit lg:ml-48 lg:my-12 my-auto pb-4 pt-4 lg:rounded-l-2xl">
                <form >
                    <h1 className="text-4xl font-bold text-center mt-10">Login</h1>
                    <div className='flex-col text-center mt-3'>
                        <h3>Selamat datang kembali!</h3>
                        <h3>Silakan masukkan detail akun Anda.</h3>
                    </div>
                    <div className="grid md:grid-cols-1 items-center lg:mx-16 mx-6 mb-16 mt-8 gap-12">
                        <Input tipe="text" onChange={handleChange} name="email" id="email" placeholder="anastasia@gmail.com" title="email" />
                        <Input tipe="password" onChange={handleChange} name="password" id="password" placeholder="********" title="Password" />
                        <div className='flex items-center gap-6 lg:ml-16 mt-2 justify-end'>
                            <button type="button" onClick={() => handleSaveChange()} className='bg-primary flex items-center gap-2 hover:border-blue-400 active:border border-4 text-white z-30 font-bold text-sm px-8 py-3 rounded-3xl shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'>
                                Login Akun
                            </button>
                        </div>
                        {/* <div className='flex items-center gap-6 md:ml-16 mt-2 justify-end'>
                            <button type="submit"> <Sukses title='Login Akun' /> </button>
                        </div> */}
                    </div>
                    {/* <div className='font-semibold md:text-base text-xs mx-10 my-4'>sudah memiliki akun? <a href="/registrasi" className='text-primary font-bold'>Register</a></div> */}
                </form>
            </div>
            {/* <div className='absolute w-[8%] mt-[68px] flex justify-center ml-[1030px]'>
                <img src="sudut.png" alt="" className=' rounded-3xl' />
            </div> */}
            <img src="https://res.cloudinary.com/dd8tyaph2/image/upload/v1716123501/k6z5lfpkyyvg4rvmquwc.jpg" alt="" className='w-[30%]  my-auto mr-48 rounded-r-3xl h-[85%] hidden lg:block' />
            <div>
                {showModal ? (
                    <div className='absolute z-50'>
                        {showNotification && (
                            <div className="flex fixed z-50  top-5 overla right-[400px] p-4 mb-4 text-sm text-white border border-green-500 rounded-full bg-green-500 dark:bg-gray-800 dark:text-white dark:border-green-500" role="alert">
                                <svg className="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                                </svg>
                                <span className="sr-only">Info</span>
                                <div>
                                    <span className="font-medium">Success alert!</span> Change a few things up and try submitting again.
                                </div>
                            </div>
                        )}
                    </div>
                ) : null}
            </div>
        </div>
    )
}

export default Login;
