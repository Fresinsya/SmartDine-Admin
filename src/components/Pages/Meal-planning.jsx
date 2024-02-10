import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navbar from '../Fragments/Navbar';
import { Link } from 'react-router-dom';


class Meal extends Component {
    render() {
        const settings = {
            // dots: true,
            // slickprev: false,
            autoplay: true,
            infinite: true,
            slidesToShow: 5,
            // nextArrow: <SampleNextArrow />,
            // left: '50px',
            slidesToScroll: 1,
            // wight: '80%',
        };
        return (
            <div className="flex bg-primary h-auto overflow-x-hidden">
                <Navbar />
                <div className="flex-grow bg-white relative ml-20 mt-[17px] mx-4 mb-[17px] pb-4 pt-4 rounded-2xl">
                    <div className="bg-white p-3 rounded-4xl flex-col justify-center">
                        <h1 className="font-bold text-2xl ml-6 ">Meal-Planning</h1>
                        <div className="w-[calc(100%-4rem)] h-full bg-transparent border-[21px] border-primary fixed z-20 top-0 right-0"></div>
                        <div className="w-[calc(100%-6rem)] h-[95%] bg-transparent border-[16px] border-white fixed z-20 top-4 right-4 rounded-2xl"></div>
                        {/* <h1 className="font-bold text-lg ml-14 mb-4">List Menu Makanan</h1> */}

                        <div className="container ml-[50px] bg-blue-300 mt-8 w-[85%] h-40 flex justify-center rounded-3xl">
                            <Slider {...settings} className='z-20 w-[90%] h-40 flex justify-center items-center'>
                                <div className='border-x-[30px] border-transparent'>
                                    <button type='button' className='border-2 w-32 rounded-3xl p-4 border-primary active:bg-primary active:text-white flex item-center justify-center bg-white'>Senin</button>
                                </div>
                                <div className='border-x-[30px] border-transparent'>
                                    <button type='button' className='border-2 w-32 rounded-3xl p-4 border-primary flex item-center justify-center bg-white'>Selasa</button>
                                </div>
                                <div className='border-x-[30px] border-transparent'>
                                    <button type='button' className='border-2 w-32 rounded-3xl p-4 border-primary flex item-center justify-center bg-white'>Rabu</button>
                                </div>
                                <div className='border-x-[30px] border-transparent'>
                                    <button type='button' className='border-2 w-32 rounded-3xl p-4 border-primary flex item-center justify-center bg-white'>Kamis</button>
                                </div>
                                <div className='border-x-[30px] border-transparent'>
                                    <button type='button' className='border-2 w-32 rounded-3xl p-4 border-primary flex item-center justify-center bg-white'>Jumat</button>
                                </div>
                                <div className='border-x-[30px] border-transparent'>
                                    <button type='button' className='border-2 w-32 rounded-3xl p-4 border-primary flex item-center justify-center bg-white'>Sabtu</button>
                                </div>
                                <div className='border-x-[30px] border-transparent'>
                                    <button type='button' className='border-2 w-32 rounded-3xl p-4 border-primary flex item-center justify-center bg-white'>Minggu</button>
                                </div>
                            </Slider>

                        </div>
                        {/*body*/}
                        <h1 className='mt-7 ml-44'>Detail Menu Harian</h1>
                        <div className='border-primary border-4 rounded-2xl mt-5 ml-[180px] w-[60%] h-72'>
                            <p className='border-2 w-32 rounded-3xl p-2 m-9 border-b-primary border-l-primary font-bold flex item-center justify-center bg-white'>senin</p>
                            <div className='flex justify-center gap-10 z-auto'>
                                <div className='z-30'>
                                    <p className='ml-8'>Breakfast</p>
                                    <Link to='/detail' >
                                        <button type='button' className='border-2 w-32 rounded-3xl p-4 border-primary bg-primary flex item-center justify-center text-white'>Oatmeal</button>
                                    </Link>
                                </div>
                                <div className='z-30'>
                                    <p className='ml-8'>Breakfast</p>
                                    <Link to='/detail' >
                                        <button type='button' className='border-2 w-32 rounded-3xl p-4 border-primary bg-primary flex item-center justify-center text-white'>Oatmeal</button>
                                    </Link>
                                </div>
                                <div className='z-30'>
                                    <p className='ml-8'>Breakfast</p>
                                    <Link to='/detail' >
                                        <button type='button' className='border-2 w-32 rounded-3xl p-4 border-primary bg-primary flex item-center justify-center text-white'>Oatmeal</button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Meal