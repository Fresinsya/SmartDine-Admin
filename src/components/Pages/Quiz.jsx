import React, { useState } from 'react'
import Navbar from '../Fragments/Navbar'
import Makan from '../Fragments/quiz/makan';
import EditProfile from '../Fragments/EditProfile';
import Fisik from '../Fragments/quiz/Fisik';
import Lainnya from '../Fragments/quiz/Lainnya';
import Button from '../elements/button/button';

const Quiz = () => {
    const [modalSize, setModalSize] = useState('md');
    return (
        <>
            <div className="flex bg-primary h-auto overflow-x-hidden overflow-y-hidden">
                <Navbar />
                <div className="flex-grow bg-white relative ml-20 mt-[17px] mx-4 mb-[17px] pb-4 pt-4 rounded-2xl">
                    <div className="bg-white p-3 rounded-4xl flex-col justify-center">
                        <h1 className="font-bold text-2xl ml-6">User Profile</h1>
                        <div className="w-[calc(100%-4rem)] h-full bg-transparent border-[21px] border-primary fixed z-20 top-0 right-0"></div>
                        <div className="w-[calc(100%-6rem)] h-[95%] bg-transparent border-[16px] border-white fixed z-20 top-4 right-4 rounded-2xl"></div>
                        {/* <div className='mt-6 mx-10 justify-center'>
                            <h3 className='flex'>Untuk melengkapi proses, harap mengisi semua data yang diperlukan dengan cermat. 
                            <br /> Data yang lengkap akan membantu kami 
                            memberikan klasifikasi dan meal-planning untuk kebutuhan Anda. <br />
                            Terima kasih atas kerjasama Anda!</h3>
                            <div className='flex bg-blue-200 w-1/3 justify-center rounded-2xl mt-6'>
                                <Makan />
                            </div>
                            <div className='flex justify-center py-16 rounded-2xl mt-6 gap-10'>
                                <Makan />
                                <Fisik />
                                <Lainnya />
                            </div>
                        </div> */}

                        <div className='flex gap-8 justify-center mt-1'>
                            {/* <div className='flex-col w-[50%]'> */}
                            <div className='bg-[#6a87e5bc] rounded-2xl h-[370px] mt-8 mx-3 px-3 py-1'>
                                <Fisik />
                            </div>
                            {/* </div> */}
                            <div className='bg-[#6a87e5bc] rounded-2xl mt-8 mx-2 mb-[23px] px-5 py-1'>
                                <Makan />
                            </div>
                        </div>

                    </div>


                </div>






            </div>
        {/* </div > */}
        </>
    )
}

export default Quiz