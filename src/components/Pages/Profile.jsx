import React, { useEffect, useState } from 'react'
import Navbar from '../Fragments/Navbar'
import { GiChickenOven } from 'react-icons/gi';
import EditProfile from '../Fragments/EditProfile';
import PotoProfile from '../Fragments/PotoMenu';
import { useMutation, useQuery } from 'react-query';

const getProfile = async (id) => {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/user/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const data = await response.json();
    return data;
}

const Profile = () => {
    const [user, setUser] = useState({})

    const id = localStorage.getItem('id')
    const { isLoading, isError, data } = useQuery({
        queryKey: ["profile"],
        queryFn: () => getProfile(id),

    });
    console.log(user)

    useEffect(() => {
        if (!isLoading) {
            setUser(data.data);
        }
    }, [data, isLoading]);

    return (
        <>
            <div className="flex bg-primary h-auto overflow-x-hidden">
                <Navbar />
                <div className="flex-grow bg-white relative ml-20 mt-[17px] mx-4 mb-[17px] pb-4 pt-4 rounded-2xl">
                    <div className="bg-white p-3 rounded-4xl flex-col justify-center">
                        <h1 className="font-bold text-2xl ml-6">User Profile</h1>
                        {/* <div className="w-[calc(100%-4rem)] h-full bg-transparent border-[21px] border-primary fixed z-20 top-0 right-0"></div>
                        <div className="w-[calc(100%-6rem)] h-[95%] bg-transparent border-[16px] border-white fixed z-20 top-4 right-4 rounded-2xl"></div> */}
                        <div className='ml-8'>
                            <p className='text-base font-bold ml-12 mt-8'>Monitoring</p>
                            <div className='flex'>
                                <div>
                                    <div className='flex items-center bg-blue-200 rounded-3xl w-36 h-24 ml-14 mt-4 justify-center gap-2'>
                                        <div className='bg-primary rounded-full w-10 h-10 flex items-center justify-center'><GiChickenOven color='white' size={25} /></div>
                                        <div className='flex flex-col justify-center items-center w-[50%]'>
                                            <p className='text-non-aktif font-bold text-sm'>Kalori</p>
                                            <p className='font-bold text-xl mx-auto'>{user ? user.kaloriHarian : "0"}</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='flex items-center bg-blue-200 rounded-3xl w-36 h-24 ml-14 mt-4 justify-center gap-2'>
                                        <div className='bg-primary rounded-full w-10 h-10 flex items-center justify-center'><GiChickenOven color='white' size={25} /></div>
                                        <div className='flex flex-col justify-center items-center w-[50%]'>
                                            <p className='text-non-aktif font-bold text-sm'>Usia</p>
                                            <p className='font-bold text-xl mx-auto'>{user ? user.usia : "-"}</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='flex items-center bg-blue-200 rounded-3xl w-36 h-24 ml-14 mt-4 justify-center gap-2'>
                                        <div className='bg-primary rounded-full w-10 h-10 flex items-center justify-center'><GiChickenOven color='white' size={25} /></div>
                                        <div className='flex flex-col justify-center items-center w-[50%]'>
                                            <p className='text-non-aktif font-bold text-sm'>Tinggi</p>
                                            <p className='font-bold text-xl mx-auto'>{user ? user.tinggiBadan : "-"}</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='flex items-center bg-blue-200 rounded-3xl w-36 h-24 ml-14 mt-4 justify-center gap-2'>
                                        <div className='bg-primary rounded-full w-10 h-10 flex items-center justify-center'><GiChickenOven color='white' size={25} /></div>
                                        <div className='flex flex-col justify-center items-center w-[50%]'>
                                            <p className='text-non-aktif font-bold text-sm'>Berat</p>
                                            <p className='font-bold text-xl mx-auto'>{user ? user.beratBadan : "-"}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mb-[7px] mt-10'>
                            <p className='text-lg font-bold ml-44'>Biodata</p>
                            <div className='flex justify-center gap-20 mt-6'>
                                <div>
                                    <PotoProfile  data={user}/>
                                    <img src={user ? user.avatar : 'https://i.stack.imgur.com/l60Hf.png'} alt="" className=' w-48 h-48 rounded-2xl' />
                                </div>
                                <div className='bg-[#6a87e585] w-[535px] rounded-2xl pt-6 pl-8 h-64'>
                                    <div className='flex justify-center'>
                                        <div className='w-1/2'>
                                            <p className='font-bold text-lg mt-4'>Nama :</p>
                                            <p className='font-medium text-lg '>{user ? user.nama : ""}</p>
                                        </div>
                                        <div className='w-1/2'>
                                            <p className='font-bold text-lg mt-4'>Email :</p>
                                            <p className='font-medium text-lg '>{user ? user.email : ""}</p>
                                        </div>
                                    </div>
                                    <div className='flex justify-center'>
                                        <div className='w-1/2'>
                                            <p className='font-bold text-lg mt-4'>No. Handphone :</p>
                                            <p className='font-medium text-lg '>{user ? user.telepon : "-"}</p>
                                        </div>
                                        <div className='w-1/2'>
                                            <p className='font-bold text-lg mt-4'>Alamat :</p>
                                            <p className='font-medium text-lg '>{user ? user.alamat : "-"}</p>
                                        </div>
                                    </div>
                                    <div className='flex justify-end w-[90%] mt-6'>
                                        <EditProfile data={user} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Profile