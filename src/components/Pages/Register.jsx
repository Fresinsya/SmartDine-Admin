import React, { useState, useEffect } from 'react';
import Input from '../elements/input/Input';
import { CgDanger } from "react-icons/cg";
import { useMutation } from 'react-query';

const postRegister = async (user) => {
  const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  const data = await response.json();
  return data;
}

const Register = () => {
  const [redirecting, setRedirecting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showModalGagal, setShowModalGagal] = useState(false);
  const [showNotificationSukses, setShowNotificationSukses] = useState(false);
  const [showNotificationGagal, setShowNotificationGagal] = useState(false);
  const [user, setUser] = useState({
    nama: '',
    username: '',
    password: '',
    confirmPassword: '',
  });

  const { mutate, isError, isLoading } = useMutation({
    mutationKey: 'register',
    mutationFn: (user) => postRegister(user),
    onError: (error) => {
      alert('Registrasi gagal. Silakan coba lagi.' + error);
    },
    onSuccess: () => {
      alert('Registrasi berhasil. Silakan login.');
    }
  })

  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  }

  const handleSukses = async (event) => {
    event.preventDefault();
    if (event.target.nama.value !== null && event.target.username.value !== null && event.target.password.value !== null) {
      setShowNotificationSukses(true);
      setShowModal(true);
      setRedirecting(true);
      localStorage.setItem("isLogin", true);
      event.target.reset('');
      mutate(user)
    } else {
      setShowNotificationGagal(true);
      setShowModalGagal(true);
      setRedirecting(false);
    }
  };

  useEffect(() => {
    let timeout;
    if (showNotificationSukses) {
      timeout = setTimeout(() => {
        setShowNotificationSukses(false);
        setTimeout(() => {
          if (redirecting) {
            window.location.href = "/login";
          }
        }, 1000);
      }, 2000);
    }

    return () => clearTimeout(timeout);
  }, [showNotificationSukses, redirecting]);

  useEffect(() => {
    let timeout;
    if (showNotificationGagal) {
      timeout = setTimeout(() => {
        setShowNotificationGagal(false);
      }, 1000);
    }

    return () => clearTimeout(timeout);
  }, [showNotificationGagal]);

  return (
    <div className="bg-primary w-full h-screen overflow-x-hidden">
      <div className="absolute z-20 bg-white w-[35%] h-[85%] ml-[660px] my-12 mx-4 pb-4 pt-4 rounded-2xl">
        <form action="" onSubmit={handleSukses}>
          <h1 className="text-4xl font-bold text-center mt-8">Register</h1>
          <div className='flex-col text-center mt-3'>
            <h3>Silakan isi detail Anda untuk membuat akun.</h3>
          </div>
          <div className="items-center">
            <div className='grid md:grid-cols-1 items-center mx-16 mb-8 mt-6 gap-7'>
              <Input onChange={handleChange} tipe="text" name="nama" id="nama" placeholder="Anastasia" title="Nama" required />
              <Input onChange={handleChange} tipe="text" name="username" id="username" placeholder="anastasia@gmail.com" title="Username" required />
            </div>
            <div className='grid md:grid-cols-2 items-center mx-16 mb-9 mt-2 gap-7'>
              <Input onChange={handleChange} tipe="password" name="password" id="password" placeholder="********" title="Password" required />
              <Input onChange={handleChange} tipe="password" name="confirmPassword" id="confirm-password" placeholder="********" title="Confirm Password" required />
            </div>
            <div className='flex items-center gap-6 mr-16 mt-2 justify-end'>
              <button
                className='bg-primary flex items-center gap-2 hover:border-blue-400 active:border border-2 text-white z-20 font-bold text-sm px-4 py-3 rounded-3xl shadow hover:shadow-lg outline-none focus:outline-none'
                type="submit"
              >
                Registrasi Akun
              </button>
              
              {showModal && (
                <div className='absolute z-50'>
                  {showNotificationSukses && (
                    <div className="flex fixed z-50 top-5 overlay right-[500px] p-4 mb-4 text-sm text-white border border-green-500 rounded-full bg-green-500 dark:bg-gray-800 dark:text-white dark:border-green-500" role="alert">
                      <svg className="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                      </svg>
                      <span className="sr-only">Registrasi berhasil!</span>
                      <div>
                        <span className="font-medium">Anda dapat melanjutkan ke halaman login sekarang.</span>
                      </div>
                    </div>
                  )}
                </div>
              )}
              {showModalGagal && (
                <div className='absolute z-50'>
                  {showNotificationGagal && (
                    <div class="flex fixed z-50 top-5 overlay right-0 p-4 mb-4 text-sm text-white border border-green-500 rounded-full bg-green-500 dark:bg-gray-800 dark:text-white dark:border-green-500" role="alert">
                      <CgDanger className='text-2xl' />
                      <div>
                        <span class="font-medium">Harap isi kolom email dan password sebelum melanjutkan.</span>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </form>
      </div>
      <div className='absolute w-[8%] mt-[68px] -rotate-90 flex justify-center ml-[226px]'>
        <img src="sudut.png" alt="" className='rounded-3xl' />
      </div>
      <img src="login.jpg" alt="" className='w-[65%] my-20 mx-auto rounded-3xl h-[75%]' />
    </div>
  )
}

export default Register;
