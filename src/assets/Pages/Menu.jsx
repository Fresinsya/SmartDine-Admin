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

class Menu extends Component {
  render() {
    const settings = {
      // dots: true,
      autoplay: true,
      infinite: true,
      slidesToShow: 3,
      // left: '50px',
      slidesToScroll: 1,
      // wight: '80%',
    };
    return (
      <div className="flex bg-primary h-auto overflow-x-hidden">
        <Navbar />
        <div className="flex-grow bg-white relative ml-20 mt-[17px] mx-4 mb-[17px] pb-4 pt-4 rounded-2xl">
          <div className="bg-white p-3 rounded-4xl flex-col justify-center">
            <h1 className="font-bold text-2xl ml-6">Meal-Planning</h1>
            <div className="w-[calc(100%-4rem)] h-full bg-transparent border-[21px] border-primary fixed z-20 top-0 right-0"></div>
            <div className="w-[calc(100%-6rem)] h-[95%] bg-transparent border-[16px] border-white fixed z-20 top-4 right-4 rounded-2xl"></div>
            <div className='flex justify-end gap-3 mr-40 mb-8 mt-8'>
              <button className='font-bold border-2 border-primary rounded-3xl py-2 px-5 text-primary'>Random</button>
              <Link to='/meal' className='z-30'>
                <button type='button' className='font-bold bg-primary rounded-3xl py-3 px-5 text-white'>
                  Set Menu
                </button>
              </Link>
            </div>
            <div className='flex gap-4 ml-10 mb-8'>
              <Quiz />
              <button className='flex items-center bg-gray-300 rounded-3xl w-40 justify-center gap-2'>
                <GiChickenOven color='gray' />
                <p className='text-non-aktif font-bold text-sm'>Lauk Pauk</p>
              </button>
              <button className='flex items-center bg-gray-300 rounded-3xl w-40 justify-center gap-2'>
                <GiBroccoli color='gray' />
                <p className='text-non-aktif font-bold text-sm'>Sayuran</p>
              </button>
              <button className='flex items-center bg-gray-300 rounded-3xl w-40 justify-center gap-2'>
                <GiShinyApple color='gray' />
                <p className='text-non-aktif font-bold text-sm'>Buah</p>
              </button>
            </div>
            <h1 className="font-bold text-lg ml-14 mb-4">List Menu Makanan</h1>
            <div className="container ml-[50px] bg-blue-300 w-[85%] h-80 flex justify-center rounded-3xl">
              <Slider {...settings} className='z-20 w-[90%] h-80 flex justify-center items-center'>
                <div className=' border-x-[30px] border-blue-300 flex-col justify-center'>
                  <div className='bg-white rounded-3xl p-6 h-64'>
                    <h3 className='ml-2 font-bold'>Makanan Pokok</h3>
                    <ul className='ml-2 p-2'>
                      <li className='flex items-center gap-3 font-medium'>
                        <p className='w-4 h-4 rounded-xl bg-primary' />
                        Nasi merah</li>
                      <li className='flex items-center gap-3 font-medium'>
                        <p className='w-4 h-4 rounded-xl bg-primary' />
                        Nasi putih biasa</li>
                      <li className='flex items-center gap-3 font-medium'>
                        <p className='w-4 h-4 rounded-xl bg-primary' />
                        Nasi uduk</li>
                    </ul>
                  </div>
                </div>
                <div className=' border-x-[30px] border-blue-300 flex-col justify-center'>
                  <div className='bg-white rounded-3xl p-6'>
                    <h3 className='ml-2 font-bold'>Lauk Pauk</h3>
                    <ul className='ml-2 p-2'>
                      <li className='flex items-center gap-3 font-medium'>
                        <p className='w-4 h-4 rounded-xl bg-primary' />
                        Nasi merah</li>
                      <li className='flex items-center gap-3 font-medium'>
                        <p className='w-4 h-4 rounded-xl bg-primary' />
                        Nasi putih biasa</li>
                      <li className='flex items-center gap-3 font-medium'>
                        <p className='w-4 h-4 rounded-xl bg-primary' />
                        Nasi uduk</li>
                    </ul>
                  </div>
                </div>
                <div className=' border-x-[30px] border-blue-300 flex-col justify-center'>
                  <div className='bg-white rounded-3xl p-6'>
                    <h3 className='ml-2 font-bold'>Sayuran</h3>
                    <ul className='ml-2 p-2'>
                      <li className='flex items-center gap-3 font-medium'>
                        <p className='w-4 h-4 rounded-xl bg-primary' />
                        Nasi merah</li>
                      <li className='flex items-center gap-3 font-medium'>
                        <p className='w-4 h-4 rounded-xl bg-primary' />
                        Nasi putih biasa</li>
                      <li className='flex items-center gap-3 font-medium'>
                        <p className='w-4 h-4 rounded-xl bg-primary' />
                        Nasi uduk</li>
                    </ul>
                  </div>
                </div>
                <div className=' border-x-[30px] border-blue-300 flex-col justify-center'>
                  <div className='bg-white rounded-3xl p-6'>
                    <h3 className='ml-2 font-bold'>Buah</h3>
                    <ul className='ml-2 p-2'>
                      <li className='flex items-center gap-3 font-medium'>
                        <p className='w-4 h-4 rounded-xl bg-primary' />
                        Nasi merah</li>
                      <li className='flex items-center gap-3 font-medium'>
                        <p className='w-4 h-4 rounded-xl bg-primary' />
                        Nasi putih biasa</li>
                      <li className='flex items-center gap-3 font-medium'>
                        <p className='w-4 h-4 rounded-xl bg-primary' />
                        Nasi uduk</li>
                    </ul>
                  </div>
                </div>




              </Slider>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;