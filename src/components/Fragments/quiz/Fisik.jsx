import React, { useEffect, useState } from 'react'
import Input from '../../elements/input/Input';
import Dropdown from '../../elements/input/Dropdown';
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { CgDanger } from 'react-icons/cg';
import { useMutation, useQuery } from 'react-query';


const postKalori = async (id) => {
    const response = await fetch(`http://localhost:3000/user/process-data/${id}`, {
        method: 'POST',
        // body: JSON.stringify(),
        // headers: {
        //     'Content-Type': 'application/json',
        // },
    });

    const data = await response.json();
    return data;
}

const getRiwayat = async (id) => {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/riwayat/user/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const data = await response.json();
    return data;
}


const Fisik = ({ riwayat, handleChange, handleSukses }) => {
    const [showNotification, setShowNotification] = useState(false);
    const [showNotificationGagal, setShowNotificationGagal] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    const [redirecting, setRedirecting] = useState(false);
    const [dataRiwayat, setDataRiwayat] = useState([{}]);
    // const [kalori, setKalori] = useState(0);



    const id = localStorage.getItem('id');

    useEffect(() => {
        if (riwayat && riwayat.data) {
            setDataRiwayat(riwayat.data)
        }
    }, [riwayat]);

    console.log("riwayat:", dataRiwayat)


    const { mutate, data } = useMutation({
        mutationKey: "postKalori",
        mutationFn: () => postKalori(id),

        onError: (error) => {
            console.log(error)
        },
        onSuccess: (data) => {
            console.log("kalori :", data)
        }
    });

    // console.log("riwayat:" ,riwayat.data.SCC)

    const handleTidakLogin = () => {
        setShowNotificationGagal(true);
        setRedirecting(true);
    };

    const handleSaveChange = async () => {
        setShowNotification(true);
        mutate()
        // setRedirecting(true);
        await handleSukses()
        // console.log(data)
    };

    useEffect(() => {
        let timeout;
        if (showNotification) {
            timeout = setTimeout(() => {
                setShowNotification(false);
            }, 2000); // 5000 milidetik = 5 detik
        }
        return () => clearTimeout(timeout);
    }, [showNotification]);

    useEffect(() => {
        let timeout;
        if (showNotificationGagal) {
            timeout = setTimeout(() => {
                setShowNotificationGagal(false);
                setTimeout(() => {
                    if (redirecting) {
                        window.location.href = "/login";
                    }
                }, 1000);
            }, 2000); // 5000 milidetik = 5 detik
        }

        // Membersihkan timer jika komponen di-unmount atau pemberitahuan disembunyikan
        return () => clearTimeout(timeout);
    }, [showNotificationGagal]);

    useEffect(() => {
        const loginStatus = localStorage.getItem("isLogin");
        setIsLogin(loginStatus === "true");
    }, []);


    return (
        <div>
            <div className="relative z-40 my-6 mx-auto ">
                {/*content*/}
                <div className=" rounded-lg  relative flex flex-col w-full outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-3 rounded-t">
                        <h3 className="text-xl flex justify-center w-full font-bold">
                            Kebiasaan Fisik
                        </h3>
                    </div>
                    <div>
                        <form>
                            <div className=''>
                                <div className="grid gap-4 md:grid-cols-4 mb-4 px-6 pt-6">
                                    <Dropdown id='SCC' title='Proses Defisit Kalori' name="SCC" onChange={handleChange} value={dataRiwayat ? dataRiwayat.SCC : ""}>
                                        <option value="" >Pilih disini</option>
                                        <option value="0">no</option>
                                        <option value="1">yes</option>
                                    </Dropdown>
                                    <Dropdown id='FAF' title='Aktifitas Fisik' onChange={handleChange} name="FAF" value={dataRiwayat ? dataRiwayat.FAF : ""} >
                                        <option value="" selected >Pilih disini</option>
                                        <option value="0">Tidak pernah</option>
                                        <option value="1">1 - 2 hari per minggu</option>
                                        <option value="2">2 - 4 hari per minggu</option>
                                        <option value="3">4 - 5 hari per minggu</option>
                                    </Dropdown>
                                    <Dropdown id='TUE' title='Durasi Penggunaan Elektronik' onChange={handleChange} value={dataRiwayat ? dataRiwayat.SCC : ""} name="TUE">
                                        <option value="" selected >Pilih disini</option>
                                        <option value="0">0 - 2 jam</option>
                                        <option value="1">3 - 5 jam</option>
                                        <option value="2">lebih dari 5 jam</option>
                                    </Dropdown>
                                    <Dropdown id='MTRANS' title='Transportasi Harian' onChange={handleChange} value={dataRiwayat ? dataRiwayat.SCC : ""} name="MTRANS">
                                        <option value="" selected >Pilih disini</option>
                                        <option value="0">Mobil</option>
                                        <option value="1">Motor</option>
                                        <option value="2">Sepeda</option>
                                        <option value="3">Jalan kaki</option>
                                        <option value="4">Transportasi Umum</option>
                                    </Dropdown>
                                    {/* </div> */}
                                    {/* <div className="grid gap-6 mb-6 md:grid-cols-2 px-6 pt-6"> */}
                                    <Dropdown id='FACV' title='Konsumsi Kalori Tinggi' required name="FACV" onChange={handleChange} value={dataRiwayat ? dataRiwayat.SCC : ""}>
                                        <option value="" selected >Pilih disini</option>
                                        <option value="0">no</option>
                                        <option value="1">yes</option>
                                    </Dropdown>
                                    <Dropdown id='FCVC' title='Konsumsi Sayuran' required onChange={handleChange} value={dataRiwayat ? dataRiwayat.FCVC : ""} name="FCVC">
                                        <option value="" selected >Pilih disini</option>
                                        <option value="1">Tidak pernah</option>
                                        <option value="2">Kadang - kadang</option>
                                        <option value="3">Selalu mengkonsumsi</option>
                                    </Dropdown>
                                    <Dropdown id='NCP' title='Total Makan Utama' required onChange={handleChange} value={dataRiwayat ? dataRiwayat.NCP : ""} name="NCP">
                                        <option value="" selected >Pilih disini</option>
                                        <option value="1">1 x makan</option>
                                        <option value="2">2 x makan</option>
                                        <option value="3">3 x makan</option>
                                        <option value="4">4 x makan</option>
                                    </Dropdown>
                                    <Dropdown id='CAEC' title='Konsumsi Camilan' required onChange={handleChange} value={dataRiwayat ? dataRiwayat.CAEC : ""} name="CAEC">
                                        <option value="" selected >Pilih disini</option>
                                        <option value="0">Tidak Pernah</option>
                                        <option value="1">Sering mengkonsumsi</option>
                                        <option value="2">Kadang - kadang</option>
                                        <option value="3">Selalu mengkonsumsi</option>
                                    </Dropdown>
                                    <Dropdown id='CH20' title='Konsumsi Air Harian' required onChange={handleChange} value={dataRiwayat ? dataRiwayat.CH20 : ""} name="CH20">
                                        <option value="" selected >Pilih disini</option>
                                        <option value="1">1 liter</option>
                                        <option value="2">2 liter</option>
                                        <option value="3">3 liter</option>
                                    </Dropdown>
                                    <Dropdown id='CALC' title='Konsumsi Alkohol' required onChange={handleChange} value={dataRiwayat ? dataRiwayat.CALC : ""} name="CALC">
                                        <option value="" selected >Pilih disini</option>
                                        <option value="0">Tidak Pernah</option>
                                        <option value="1">Sering mengkonsumsi</option>
                                        <option value="2">Kadang - kadang</option>
                                        <option value="3">Selalu mengkonsumsi</option>
                                    </Dropdown>
                                </div>
                            </div>
                        </form>
                    </div>

                    {/*footer*/}
                    <div className="flex items-center justify-end py-3 px-5  rounded-b">
                        <button
                            // type="submit"
                            className='bg-primary flex items-center gap-2 hover:border-blue-400 active:border border-4 text-white z-30 font-bold text-sm px-4 py-3 rounded-3xl shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                            onClick={!isLogin ? handleTidakLogin : handleSaveChange}
                        >
                            Save Changes
                        </button>
                    </div>
                </div>
            </div>

            {showNotification && (

                <div class="flex fixed z-50 item-center top-5 right-[400px] p-4 mb-4 text-sm text-white border border-green-500 rounded-full bg-green-500 dark:bg-gray-800 dark:text-white dark:border-green-500" role="alert">
                    <IoCheckmarkDoneCircle className='text-2xl m-1.5' />
                    <div>
                        <span class="flex items-center h-auto m-2 font-medium">Data yang Anda lakukan telah berhasil disimpan ke dalam sistem.</span>
                    </div>
                </div>

            )}
            {showNotificationGagal && (
                <div class="flex fixed items-center z-50 top-5 right-[400px] p-4 mb-4 text-sm text-white border border-red-500 rounded-full bg-red-500 dark:bg-gray-800 dark:text-white dark:border-red-500" role="alert">
                    <CgDanger className='text-2xl m-2' />
                    <div>
                        <span class="font-medium m-2">Silahkan login terlebih dahulu untuk melanjutkan.</span>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Fisik