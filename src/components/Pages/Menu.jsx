import React, { useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { PiBowlFoodFill } from "react-icons/pi";
import Navbar from '../Fragments/Navbar';
import { GiChickenOven } from "react-icons/gi";
import { GiShinyApple } from "react-icons/gi";
import { GiBroccoli } from "react-icons/gi";
import PilihMenu from '../Fragments/PilihMenu';
import { Link } from 'react-router-dom';
import { FaBowlRice } from "react-icons/fa6";


const Menu = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedOptionsMakananPokok, setSelectedOptionsMakananPokok] = useState([]);
  const [selectedOptionsLauk, setSelectedOptionsLauk] = useState([]);
  const [selectedOptionsSayuran, setSelectedOptionsSayuran] = useState([]);
  const [selectedOptionsBuah, setSelectedOptionsBuah] = useState([]);

  const handleSelectedOptionsChange = (options) => {
    setSelectedOptions(options);
  };
  const handleMakananPokok = (options) => {
    setSelectedOptionsMakananPokok(options);
  };
  const handleLauk = (options) => {
    setSelectedOptionsLauk(options);
  };
  const handleSayuran = (options) => {
    setSelectedOptionsSayuran(options);
  };
  const handleBuah = (options) => {
    setSelectedOptionsBuah(options);
  };

  return (
    <div className="flex bg-primary h-auto overflow-x-hidden">
      <Navbar />
      <div className="flex-grow bg-white relative ml-20 mt-[17px] mx-4 mb-[17px] pb-4 pt-4 rounded-2xl">
        <div className="bg-white p-3 rounded-4xl flex-col justify-center">
          <h1 className="font-bold text-2xl ml-6">Meal-Planning</h1>
          <div className="w-[calc(100%-4rem)] h-full bg-transparent border-[21px] border-primary fixed z-20 top-0 right-0"></div>
          <div className="w-[calc(100%-6rem)] h-[95%] bg-transparent border-[16px] border-white fixed z-20 top-4 right-4 rounded-2xl"></div>
          <div className='flex justify-end gap-3 mr-16 mt-4 mb-6'>
            <button className='font-bold border-2 border-primary rounded-3xl py-2 px-5 text-primary'>Random</button>
            <Link to='/meal' className='z-30'>
              <button type='button' className='font-bold bg-primary rounded-3xl py-3 px-5 text-white'>
                Set Menu
              </button>
            </Link>
          </div>
          <div className='flex gap-4 ml-10 mb-7'>
            <PilihMenu id="makanan-pokok" onSelectedOptionsChange={handleMakananPokok} title='Makanan Pokok' >
              <FaBowlRice color='white' />
            </PilihMenu>
            <PilihMenu id="lauk-pauk" onSelectedOptionsChange={handleLauk} title='Lauk Pauk' >
              <GiChickenOven color='white' />
            </PilihMenu>
            <PilihMenu id="sayuran" onSelectedOptionsChange={handleSayuran} title='Sayuran'>
              <GiBroccoli color='white' />
            </PilihMenu>
            <PilihMenu id="buah" onSelectedOptionsChange={handleBuah} title='Buah'>
              <GiShinyApple color='white' />
            </PilihMenu>
          </div>
          <h1 className="font-bold text-lg ml-14 mb-4">List Menu Makanan</h1>
          <div className="container ml-[50px] bg-blue-300 w-[92%] px-5 flex justify-center rounded-3xl">
            <div className=' border-x-[10px] w-[25%] border-blue-300 flex-col my-6 justify-center'>
              <div className='bg-white max-h-auto min-h-[270px] rounded-3xl p-6'>
                <div className='p-2'>
                  <h3 className='ml-2 font-bold'>Makanan Pokok :</h3>
                  {selectedOptionsMakananPokok.length > 0 && (
                    <div className="">
                      <ul className='ml-2 p-2'>
                        {selectedOptionsMakananPokok.map((option, index) => (
                          <li key={index} className='flex items-center gap-3 font-medium'>
                            <p className='w-4 h-4 rounded-xl bg-primary ' />
                            {option}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className=' border-x-[10px] w-[25%] border-blue-300 flex-col my-6 justify-center'>
              <div className='bg-white max-h-auto min-h-[270px] rounded-3xl p-6'>
                <div className='p-2'>
                  <h3 className='ml-2 font-bold'>Lauk Pauk :</h3>
                  {selectedOptionsLauk.length > 0 && (
                    <div className="">
                      <ul className='ml-2 p-2'>
                        {selectedOptionsLauk.map((option, index) => (
                          <li key={index} className='flex items-center gap-3 font-medium'>
                            <p className='w-4 h-4 rounded-xl bg-primary ' />
                            {option}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className=' border-x-[10px] w-[25%] border-blue-300 flex-col my-6 justify-center'>
              <div className='bg-white max-h-auto min-h-[270px] rounded-3xl p-6'>
                <div className='p-2'>
                  <h3 className='ml-2 font-bold'>Sayuran :</h3>
                  {selectedOptionsSayuran.length > 0 && (
                    <div className="">
                      <ul className='ml-2 p-2'>
                        {selectedOptionsSayuran.map((option, index) => (
                          <li key={index} className='flex items-center gap-3 font-medium'>
                            <p className='w-4 h-4 rounded-xl bg-primary ' />
                            {option}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className=' border-x-[10px] w-[25%] border-blue-300 flex-col my-6 justify-center'>
            <div className='bg-white max-h-auto min-h-[270px] rounded-3xl p-6'>
                <div className='p-2'>
                  <h3 className='ml-2 font-bold'>Buah :</h3>
                  {selectedOptionsBuah.length > 0 && (
                    <div className="">
                      <ul className='ml-2 p-2'>
                        {selectedOptionsBuah.map((option, index) => (
                          <li key={index} className='flex items-center gap-3 font-medium'>
                            <p className='w-4 h-4 rounded-xl bg-primary ' />
                            {option}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;