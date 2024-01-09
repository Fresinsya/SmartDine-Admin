import React from 'react'

import Navbar from '../components/Navbar';
import { Button, Carousel } from 'flowbite-react';


const Menu = () => {
  return (
    <div className="flex bg-primary h-screen ">
      <Navbar />
      <div className="flex-grow bg-white relative ml-20 mt-[17px] mx-4 mb-[17px] pb-4 pt-4 rounded-2xl">
        <div className="bg-white p-3 rounded-4xl">
          <h1 className="font-bold text-2xl ml-6">Menu Makanan</h1>
          <div class="w-[calc(100%-4rem)] h-full bg-transparent border-[21px] border-primary fixed z-20 top-0 right-0 rounded-2xl"></div>
          <div class="w-[calc(100%-6rem)] h-[95%] bg-transparent border-[16px] border-white fixed z-20 top-4 right-4 rounded-2xl"></div>
        </div>
        <div className="h-40 z-50 sm:h-34 xl:h-30 2xl:h-30">
          <Carousel >
            <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
            <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
            <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
            <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
            <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
          </Carousel>
        </div>
        <Button>Click me</Button>
      </div>
    </div>

  )
}

export default Menu