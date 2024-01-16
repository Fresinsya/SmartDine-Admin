import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { PiBowlFoodFill } from "react-icons/pi";
import Navbar from '../components/Navbar';
import { GiChickenOven } from "react-icons/gi";
import { GiShinyApple } from "react-icons/gi";
import { GiBroccoli } from "react-icons/gi";
import Quiz from './quiz';
import { Link } from 'react-router-dom';
import meal from './Meal-planning';

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

                        <div className="container ml-[50px] bg-blue-300 mt-20 w-[85%] h-40 flex justify-center rounded-3xl">
                            <Slider {...settings} className='z-20 w-[90%] h-40 flex justify-center items-center'>
                                <div className='border-x-[30px] border-transparent'>
                                    <button type='button' className='border-2 w-32 rounded-3xl p-4 border-primary flex item-center justify-center bg-white'>Senin</button>
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
                        <div className='border-primary border-4 rounded-2xl mt-20 ml-[90px] w-[80%] h-80'>
                            <p className='bg-primary px-4 py-3 w-10'>senin</p>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Meal