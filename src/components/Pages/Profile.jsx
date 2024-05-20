import React, { useEffect, useState } from 'react'
import Navbar from '../Fragments/Navbar'
import { GiChickenOven } from 'react-icons/gi';
import EditProfile from '../Fragments/EditProfile';
import PotoProfile from '../Fragments/PotoProfile';
import { useMutation, useQuery } from 'react-query';

const getProfile = async (id) => {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/admin/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const data = await response.json();
    return data;
}

const Profile = () => {
    const [admin, setAdmin] = useState({})

    const id = localStorage.getItem('id')
    const { isLoading, isError, data } = useQuery({
        queryKey: ["profile"],
        queryFn: () => getProfile(id),

    });

    useEffect(() => {
        if (!isLoading) {
            setAdmin(data.data);
        }
    }, [data, isLoading]);

    return (
        <>
            <div className="flex bg-primary h-screen overflow-x-hidden min-h-[645px]">
                <Navbar />
                <div className=" bg-white h-fit min-h-screen w-screen relative lg:ml-20 ml-14 mt-[17px] mx-4 mb-[17px] pb-4 pt-4 rounded-2xl">
                    <div className="p-3 rounded-4xl flex-col justify-center">
                        {/* <div className="w-[calc(100%-4rem)] h-full bg-transparent border-[21px] border-primary fixed z-20 top-0 right-0"></div>
                        <div className="w-[calc(100%-6rem)] h-[95%] bg-transparent border-[16px] border-white fixed z-20 top-4 right-4 rounded-2xl"></div> */}
                        <h1 className="font-bold text-2xl lg:ml-44 mb-8 mt-16 ml-10">Admin Profile</h1>
                        <div className=''>
                            <div className='md:flex grid md:mx-7 mx-2 w-full md:gap-2 gap-10 mt-6'>
                                <div className=''>
                                    <img src={admin ? admin.avatar : 'https://res.cloudinary.com/dd8tyaph2/image/upload/v1716126670/profilr_zwq5dq.png'} alt="" className=' w-48 h-48 rounded-2xl' />
                                    <PotoProfile data={admin} />
                                </div>
                                <div className='bg-[#6a87e585] rounded-2xl p-4 md:mx-10 mx-2 md:w-[70%]'>
                                    <div className='grid lg:grid-cols-2 grid-cols-1 justify-center '>
                                        <div className=' mx-2'>
                                            <div className='border w-full px-4 rounded-xl py-3 my-3 bg-white'>
                                                <p className='text-primary font-bold'>Nama :</p>
                                                <p className='font-medium lg:text-lg text-xs '>{admin ? admin.nama : ""}</p>
                                            </div>
                                        </div>
                                        <div className=' mx-2'>
                                            <div className='border w-full px-4 rounded-xl py-3 my-3 bg-white'>
                                                <p className='text-primary font-bold'>Email :</p>
                                                <p className='font-medium lg:text-lg text-xs '>{admin ? admin.email : ""}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='grid lg:grid-cols-2 grid-cols-1 justify-center'>
                                        <div className=' mx-2'>
                                            <div className='border w-full px-4 rounded-xl py-3 my-3 bg-white'>
                                                <p className='text-primary font-bold'>No. Handphone :</p>
                                                <p className='font-medium lg:text-lg text-xs '>{admin ? admin.telepon : "-"}</p>
                                            </div>
                                        </div>
                                        <div className=' mx-2'>
                                            <div className='border w-full px-4 rounded-xl py-3 my-3 bg-white'>
                                                <p className='text-primary font-bold'>Alamat :</p>
                                                <p className='font-medium lg:text-lg text-xs '>{admin ? admin.alamat : "-"}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex justify-end w-[90%] mt-6'>
                                        <EditProfile data={admin} />
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