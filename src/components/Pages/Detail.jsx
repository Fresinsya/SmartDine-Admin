import React, { useEffect, useState } from 'react';
import Navbar from '../Fragments/Navbar';
import { IoIosArrowBack } from "react-icons/io";
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

const getMenu = async (idDetail) => {
  const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/menu/${idDetail}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  return data;
};

const Detail = () => {
  const { idDetail } = useParams();
  const [filteredMenu, setFilteredMenu] = useState(null);
  const [bahan, setBahan] = useState([]);

  


  const { isLoading, isError, data } = useQuery(
    ["menu", idDetail],
    () => getMenu(idDetail),
    { enabled: !!idDetail }
  );

  useEffect(() => {
    if (data) {
      const filterData = data.data;
      setFilteredMenu(filterData);
    }
  }, [data]);

  useEffect(() => {
    if (filteredMenu) {
      const bahanPokok = filteredMenu.bahan.map(bahan => bahan.nama);
      setBahan(bahanPokok);
    }
  }, [filteredMenu]);

  // Ensure filteredMenu is not null before accessing its properties
  const avatarUrl = filteredMenu ? filteredMenu.avatar : null;

  return (
    <>
      <div className="flex bg-primary h-auto overflow-x-hidden">
        <Navbar />
        <div className="flex-grow bg-white relative ml-20 mt-[17px] mx-4 mb-[17px] pb-4 pt-4 rounded-2xl">
          <div className="bg-white p-3 rounded-4xl flex-col justify-center min-h-screen">
            <div className="w-[calc(100%-4rem)] h-full bg-transparent border-[21px] border-primary fixed z-20 top-0 right-0"></div>
            <div className="w-[calc(100%-6rem)] h-[95%] bg-transparent border-[16px] border-white fixed z-20 top-4 right-4 rounded-2xl"></div>
            <div className='flex'>
              <a href="/meal" className='z-20 flex'><IoIosArrowBack className="flex text-3xl text-primary ml-3 mt-3" />
                <p className="font-bold text-sm flex justify-center mt-4 text-primary">back</p>
              </a>
            </div>
            <h1 className='flex justify-center font-bold text-2xl mb-8'>{filteredMenu ? filteredMenu.menu : ''}</h1>
            <div className='flex gap-5 mt-6 '>
              {avatarUrl && <img src={avatarUrl} alt="" className='w-[30%] min-h-[500px] rounded-l-3xl ml-3 ' />}
              {/* <img src='nasgor.jpg' alt="" className='w-[30%] h-auto rounded-l-3xl ml-3' /> */}
              <div className='mx-4'>
                <p className='font-bold text-lg border border-primary w-fit px-3 rounded-lg mb-3'>{filteredMenu ? "Kalori : " + filteredMenu.kalori_makanan + " kkal" : ''}</p>
                <p className='font-bold text-lg'>Bahan:</p>
                <ul style={{ listStyleType: 'disc' }} className='grid md:grid-cols-2 ml-8'>
                  {bahan.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <p className='font-bold text-lg mt-3'>Langkah:</p>
                <ul style={{ listStyleType: 'discimal' }} className='ml-8'>
                  {filteredMenu ? filteredMenu.cara_masak.map((item, index) => (
                    <li key={index}>{item}</li>
                  )) : ''}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
