import React from 'react'
import { GoHomeFill } from "react-icons/go";
import { TiThMenu } from "react-icons/ti";
import { MdRestaurant } from "react-icons/md";
import { MdQuiz } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";

import { Line, Chart } from 'react-chartjs-2';




const Home = () => {
  // Data untuk Line Chart
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Monthly Progress',
        data: [5, 10, 8, 15, 12],
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  // Konfigurasi Chart dengan chart.js

  const options = {
    scales: {
      x: {
        type: 'linear',
      },
      y: {
        type: 'linear',
      },
    },
  };
  return (
    <div className='bg-primary h-screen flex'>
      <div className='w-20 h-screen text-white fixed flex flex-col justify-evenly items-center'>
        <div className='h-[15%] flex flex-col justify-center'>
          <TiThMenu size={20} />
        </div>
        <div className='h-[50%] flex flex-col justify-center gap-12'>
          <GoHomeFill size={20} />
          <MdRestaurant size={20} />
          <MdQuiz size={20} />
        </div>
        <div className='h-[40%] flex flex-col justify-center gap-7'>
          <FaUser size={20} />
          <LuLogOut size={20} />
        </div>
      </div>
      <div className="flex-grow bg-white relative ml-20 m-4 rounded-2xl">
        <div className="bg-white p-5 rounded-2xl">
          <h1 className="font-bold text-2xl">DASHBOARD</h1>
          <div className='flex justify-between'>
            <div className='ml-28 mt-[-49px]'>
              <img src="download.jpg" alt="" className='-rotate-90 w-56 ml-12 rounded-2xl' />
              <p className='bg-white ml-[-55px] mt-[-148px] font-bold absolute text-center rounded-3xl shadow-lg w-fit py-2 px-4' style={{ boxShadow: '0.5px 3px 5px 4px rgba(0,0,0,0.4)', }}>
                "Tubuh Anda layak mendapatkan perawatan terbaik, <br />
                mulailah dari makanan sehat. "
              </p>
            </div>
            <div className='mr-8' >
              <div className="p-4 m-5 w-[240px] bg-[#B5D5FE] shadow-gray-300 rounded-xl border border-[#0F2650]" style={{ boxShadow: '18px 19px 14px -3px rgba(0,0,0,0.1)', }}>
                <picture className="flex justify-center rounded">
                  <img className='rounded-full aspect-square mx-3 my-2 w-20 h-[78px] border border-[#0F2650]' src="https://picsum.photos/360/240" />
                </picture>
                <h1 className="flex justify-center mt-4 mb-2 mx-3 font-bold text-xl">Olivia Davis, Psy.D.</h1>

              </div>
            </div>
            <div className="">
              <Line data={data} options={options} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home