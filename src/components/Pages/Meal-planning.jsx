import React, { useState, useEffect } from 'react';
// import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navbar from '../Fragments/Navbar';
import { Link } from 'react-router-dom';
import { useMutation, useQuery } from 'react-query';
import Dropdown from '../elements/input/Dropdown';

// const postRandom = async (bahan) => {
//     const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/search/generate?search=${bahan}`, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//     });
//     const data = await response.json();
//     return data;
// };

const delMenu = async (id) => {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/menu/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const data = await response.json();
    return data;
};


const getMenu = async () => {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/menu/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const data = await response.json();
    return data;
}

const Meal = () => {
    const [rows, setRows] = useState([{ id: 1 }]);
    const [selectedDay, setSelectedDay] = useState("1");
    const [menu, setMenu] = useState([]);
    // const [filteredMenu, setFilteredMenu] = useState([]);
    const [isLogin, setIsLogin] = useState("false");
    const [searchTerm, setSearchTerm] = useState('');

    // tabel
    // const handleChange = (event) => {
    //     setText(event.target.value);
    // };

    useEffect(() => {
        const login = localStorage.getItem('isLogin');
        setIsLogin(login);
    }, [isLogin]);


    const handleAddRow = () => {
        // const newRow = { id: rows.length + 1 };
        // setRows([...rows, newRow]);
        if (isLogin === "true") {
        window.location.href = '/menu';
        } else {
            window.location.href = '/login';
        }


        // Tambahkan objek bahan baru ke dalam state bahan
        // setBahan([...bahan, { nama: '', jenis: '', jumlah: '' }]);
    };


    // off tabel

    const id = localStorage.getItem('id');
    const { isLoading, isError, data } = useQuery({
        queryKey: ["menu"],
        queryFn: () => getMenu(),
    });



    useEffect(() => {
        if (!isLoading) {
            setMenu(data.data);
        }
    }, [data, isLoading]);

    console.log(menu)

    // const { isLoading: lodingBahan, data: bahan, refetch } = useQuery({
    //     queryKey: ["bahan", id],
    //     queryFn: () => getBahan(id),
    //     refetchIntervalInBackground: 1000,

    // });

    // useEffect(() => {
    //     if (!lodingBahan) {
    //         const dataBahan = bahan.data.bahan.map(bahan => bahan.nama).join(', ');
    //         console.log(dataBahan)
    //     }
    // }, [bahan, lodingBahan]);




    // console.log(filteredMenu)
    // console.log(random)
    // console.log(selectedDay)

    // useEffect(() => {
    //     if (data) {
    //         const filterData = data.data;
    //         const bahanPokok = filterData.flatMap(menu => menu.menus.filter(menus => menus.day === "1"));
    //         setFilteredMenu(bahanPokok);
    //     }
    // }, [data]);

    // useEffect(() => {
    //     if (data) {
    //         const filterData = data.data;
    //         const bahanPokok = filterData.flatMap(menu => menu.menus.filter(menus => menus.day.includes(selectedDay)));
    //         setFilteredMenu(bahanPokok);
    //         console.log(filteredMenu)
    //     }
    // }, [data, selectedDay]);


    // const idMenu = menu.map(item => item._id);
    // console.log(idMenu)
    const mutation = useMutation(delMenu);

    const handleDelete = async (id) => {
        await mutation.mutateAsync(id);
        setTimeout(() => {
            window.location.reload();
        }, 100);
    };

    const handleDetailMenu = async (id) => {
        try {
            if (isLogin === "true") {
                window.location.href = `/detail/${id}`;
            } else {
                window.location.href = '/login';
            }
        } catch (error) {
            // Tangani kesalahan jika diperlukan
            console.error('Terjadi kesalahan saat melakukan read menu:', error);
        }
    };

    const handleEditMenu = async (id) => {
        try {
            if (isLogin === "true") {
                window.location.href = `/editMenu/${id}`;
            } else {
                window.location.href = '/login';
            }
        } catch (error) {
            // Tangani kesalahan jika diperlukan
            console.error('Terjadi kesalahan saat melakukan read menu:', error);
        }
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredMenu = menu.filter((item) =>
        item.menu.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="flex bg-primary h-screen overflow-x-hidden overflow-y-auto min-h-[750px]">
            <Navbar />
            <div className="flex-grow bg-white h-fit min-h-full relative ml-20  mt-[17px] mx-4 mb-[17px] pb-4 pt-4 rounded-2xl">
                <div className=" p-3 rounded-4xl flex-col justify-center">
                    <h1 className="font-bold text-2xl md:ml-6 ml-1 ">Daftar Menu</h1>
                    {/* <div className="w-[calc(100%-4rem)] h-full bg-transparent border-[21px] border-primary fixed z-20 top-0 right-0"></div> */}
                    {/* <div className="w-[calc(100%-6rem)] h-[95%] bg-transparent border-[16px] border-white fixed -z-10 top-4 right-4 rounded-2xl"></div> */}
                    <div className='flex justify-end gap-3 md:mr-16 mt-4 mb-6'>
                        <button type="button" onClick={() => handleAddRow()} className='bg-primary flex items-center gap-2 hover:border-blue-400 active:border border-4 text-white z-30 font-bold text-sm px-8 py-3 rounded-3xl shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'>
                            Create Menu
                        </button>
                    </div>
                    <div className='flex md:ml-32 ml-2'>
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={handleSearchChange}
                            placeholder="Search menu..."
                            className="block md:w-1/4 w-2/4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                    <div className='flex justify-center my-10'>
                        <table className="table-auto w-[80%] text-center z-20">
                            <thead>
                                <tr className='bg-blue-300'>
                                    <th>Menu</th>
                                    <th>Kalori</th>
                                    <th>Porsi</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredMenu.map((item, index) => (
                                    <tr key={index}>
                                        <td id='' className=' flex items-center z-20 justify-center my-4 '>
                                            <button type='button' className='hover:border-b-primary hover:rounded-lg hover:px-3 hover:border-x-transparent hover:border-t-transparent hover:border' onClick={() => handleDetailMenu(item._id)}>{item.menu || ''}</button>
                                        </td>
                                        <td className='my-4 w-2/4 md:w-1/4  mx-1'>
                                            {item.kalori_makanan + " Kkal" || ''}
                                        </td>
                                        <td className='my-4 w-2/4 md:w-1/4 mx-1'>
                                            {item.berat_makanan + " gram" || ''}
                                        </td>
                                        <td className='z-20 w-1/5'>
                                            <div className='md:flex grid justify-center items-center md:mx-6 mx-1'>
                                                <button className=' text-white p-2 rounded-lg ' type='button' onClick={() => handleDelete(item._id)}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-primary z-50">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                                    </svg>
                                                </button>
                                                <button type="button" onClick={() => handleEditMenu(item._id)} className=' text-white p-2 rounded-lg'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-primary z-50">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    {/* </div>
                    </div> */}
                    {/* <h1 className='mt-7 ml-64'>Detail Menu Harian</h1>
                    <div className='border-primary border-4 rounded-2xl mt-5 ml-[220px] w-[60%] h-[259px]'>
                        <p className='border-2 w-32 rounded-3xl p-2 m-9 border-b-primary border-l-primary font-bold flex item-center justify-center bg-white'>
                            {selectedDay ? `Day ${selectedDay}` : 'Select Day'}
                        </p>
                        {selectedDay && (
                            <div className='flex justify-center gap-10 z-auto mx-8'>
                                <div className='flex-col items-center justify-center z-30 w-full '>
                                    <p className='ml-8'>Sarapan</p>
                                    <Link to={`/detail/${filteredMenu ? filteredMenu[0]?.id_menu : ""}`}>
                                        <button type='button' className='border-2 w-full rounded-3xl p-4 border-primary bg-primary flex item-center justify-center text-white'>{filteredMenu ? filteredMenu[0]?.menu : ''}</button>
                                    </Link>
                                </div>
                                <div className='z-30 w-full'>
                                    <p className='ml-8'>Makan Siang</p>
                                    <Link to={`/detail/${filteredMenu ? filteredMenu[1]?.id_menu : ""}`}>
                                        <button type='button' className='border-2 w-full rounded-3xl p-4 border-primary bg-primary flex item-center justify-center text-white'>{filteredMenu ? filteredMenu[1]?.menu : ''}</button>
                                    </Link>
                                </div>
                                <div className='z-30 w-full'>
                                    <p className='ml-8'>Makan Malam</p>
                                    <Link to={`/detail/${filteredMenu ? filteredMenu[2]?.id_menu : ""}`}>
                                        <button type='button' className='border-2 w-full rounded-3xl p-4 border-primary bg-primary flex item-center justify-center text-white'>{filteredMenu ? filteredMenu[2]?.menu : ''}</button>
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div> */}
                </div>
            </div>
        </div>
        // </div >

    );
};

export default Meal;
