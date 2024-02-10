import React, { useEffect, useState } from 'react';
import Input from '../elements/input/Input';
import Sukses from '../elements/button/Sukses';
import { Link, Navigate, useNavigate } from 'react-router-dom';

const Register = () => {
  const [nama, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [redirecting, setRedirecting] = useState(false);
  const navigate = useNavigate();

  const handleSukses = (event) => {
    // event.preventDefault();
    localStorage.setItem("nama", event.target.nama.value);
    localStorage.setItem("username", event.target.username.value);
    localStorage.setItem("password", event.target.password.value);
    resetInputValues();
    setRedirecting(true);
    navigate('/login');
  };

  const resetInputValues = () => {
    setName('');
    setUsername('');
    setPassword('');
  };

  useEffect(() => {
    if (redirecting) {
      const redirectTimer = setTimeout(() => {
        // Navigate('/login');
        window.location.href = "/login";
      }, 2000);
      return () => clearTimeout(redirectTimer);
    }
  }, [redirecting]);

  return (
    <div className="bg-primary w-full h-screen overflow-x-hidden">
      <div className="absolute z-20 bg-white w-[35%] h-[85%] ml-[660px] my-12 mx-4 pb-4 pt-4 rounded-2xl">
        <form action="" onSubmit={handleSukses}>
          <h1 className="text-4xl font-bold text-center mt-10">Register</h1>
          <div className='flex-col text-center mt-3'>
            <h3>Silakan isi detail Anda untuk membuat akun.</h3>
          </div>
          <div className="grid md:grid-cols-1 items-center mx-16 mb-16 mt-7 gap-7">
            <Input tipe="text" id="nama" placeholder="Anastasia" title="Nama" required value={nama} onChange={(e) => setName(e.target.value)} />
            <Input tipe="text" id="username" placeholder="anastasia@gmail.com" title="Username" required value={username} onChange={(e) => setUsername(e.target.value)} />
            <Input tipe="password" id="password" placeholder="********" title="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
            <div className='flex items-center gap-6 ml-16 mt-2 justify-end'>
              <button type="submit"> <Sukses title='Register Akun' /></button>
            </div>
          </div>
        </form>
      </div>
      <div className='absolute w-[8%] mt-[68px] -rotate-90 flex justify-center ml-[226px]'>
        <img src="sudut.png" alt="" className=' rounded-3xl' />
      </div>
      <img src="login.jpg" alt="" className='w-[65%] my-20 mx-auto  rounded-3xl h-[75%]' />
    </div>
  )
}

export default Register;
