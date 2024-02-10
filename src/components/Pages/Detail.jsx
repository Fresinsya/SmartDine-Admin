import React from 'react'
import Navbar from '../Fragments/Navbar'
import { IoIosArrowBack } from "react-icons/io";

const Detail = () => {
  return (
    <>
      <div className="flex bg-primary h-auto overflow-x-hidden">
        <Navbar />
        <div className="flex-grow bg-white relative ml-20 mt-[17px] mx-4 mb-[17px] pb-4 pt-4 rounded-2xl">
          <div className="bg-white p-3 rounded-4xl flex-col justify-center">
            {/* <h1 className="font-bold text-2xl flex justify-center ">Meal-Planning</h1> */}
            <div className="w-[calc(100%-4rem)] h-full bg-transparent border-[21px] border-primary fixed z-20 top-0 right-0"></div>
            <div className="w-[calc(100%-6rem)] h-[95%] bg-transparent border-[16px] border-white fixed z-20 top-4 right-4 rounded-2xl"></div>
            <div className='flex'>
              <a href="/meal" className='z-20'><IoIosArrowBack className="text-3xl text-primary ml-3 mt-3" /></a>
              <p className="font-bold text-sm flex justify-center mt-4 text-primary">back</p>
            </div>
            <div className='flex gap-5 mt-6'>
              <img src="nasgor.jpg" alt="" className='w-[30%] h-auto rounded-l-3xl ml-3' />
              <div>
                <h1 className='flex justify-center font-bold text-2xl mb-4'>Nasi Goreng</h1>
                  <p className='font-bold text-lg'>Bahan:</p>
                  <ul style={{ listStyleType: 'disc' }} className='ml-8'>
                    <li>Nasi putih yang sudah dimasak (sebaiknya nasi yang sudah dingin atau satu hari sebelumnya)</li>
                    <li>Minyak goreng</li>
                    <li>Bawang merah, cincang halus</li>
                    <li>Bawang putih, cincang halus</li>
                    <li>Pasta asam jawa</li>
                    <li>Kecap manis</li>
                    <li>Garam dan merica secukupnya</li>
                    <li>Opsional: Sayuran (wortel, kacang polong, paprika), protein(ayam, udang, daging sapi, atau tahu), telur goreng sebagai topping</li>
                    <li>Opsional: Sambal (saus cabai) untuk pedas ekstra</li>
                  </ul>
                  <p className='font-bold text-lg mt-3'>Langkah:</p>
                  <ul style={{ listStyleType: 'discimal' }} className='ml-8'>
                    <li>Panaskan wajan atau penggorengan besar dengan api sedang-tinggi dan tambahkan minyak goreng.</li>
                    <li>Tambahkan bawang merah cincang dan bawang putih cincang ke dalam minyak panas. Tumis hingga harum dan berwarna kecokelatan.</li>
                    <li>Tambahkan protein pilihan (ayam, udang, daging sapi, atau tahu) dan masak hingga matang sepenuhnya.</li>
                    <li>Jika menggunakan sayuran, tambahkan ke wajan dan aduk rata hingga sayuran lunak.</li>
                    <li>Dorong bahan ke sisi wajan, tambahkan sedikit minyak lagi jika perlu, dan pecahkan telur ke dalam ruang kosong. Kocok telur hingga matang.</li>
                    <li>Tambahkan nasi yang sudah dimasak ke dalam wajan, memecahkan gumpalan nasi. Campur rata dengan bahan lainnya.</li>
                    <li>Dalam mangkuk kecil, campurkan pasta asam jawa dengan kecap manis untuk membuat saus. Tuangkan saus ke atas nasi dan aduk rata.</li>
                    <li>Bumbui dengan garam dan merica secukupnya. Jika suka pedas, tambahkan sambal atau cabai cincang pada saat ini.</li>
                    <li>Lanjutkan menggoreng hingga semuanya tercampur dan panas.</li>
                    <li>Sajikan nasi goreng panas, opsional dengan telur goreng di atasnya dan hias dengan irisan mentimun atau tomat.</li>
                  </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Detail