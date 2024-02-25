import React, { useEffect, useState } from 'react'
import Input from '../../elements/input/Input';
import Dropdown from '../../elements/input/Dropdown';
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { CgDanger } from 'react-icons/cg';


const Fisik = ({riwayat, handleChange, handleSukses}) => {
    const [showNotification, setShowNotification] = useState(false);
    const [showNotificationGagal, setShowNotificationGagal] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    const [redirecting, setRedirecting] = useState(false);

    const handleTidakLogin = () => {
        setShowNotificationGagal(true);
        setRedirecting(true);
    };

    const handleSaveChange = async () => {
        setShowNotification(true);
        // setRedirecting(true);
        await handleSukses()
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
            <div className="relative z-40 my-6 mx-auto">
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
                            <div className="grid gap-4 md:grid-cols-2 mb-4 px-6 pt-6">
                                <Dropdown id='SCC' title='Proses Defisit Kalori' name="SCC" onChange={handleChange}>
                                    <option selected disabled >Pilih disini</option>
                                    <option value="0">no</option>
                                    <option value="1">yes</option>
                                </Dropdown>
                                <Dropdown id='FAF' title='Aktifitas Fisik' onChange={handleChange} name="FAF">
                                    <option selected disabled >Pilih disini</option>
                                    <option value="0">Tidak pernah</option>
                                    <option value="1">1 - 2 hari per minggu</option>
                                    <option value="2">2 - 4 hari per minggu</option>
                                    <option value="3">4 - 5 hari per minggu</option>
                                </Dropdown>
                                <Dropdown id='TUE' title='Durasi Penggunaan Elektronik' onChange={handleChange} name="TUE">
                                    <option selected disabled >Pilih disini</option>
                                    <option value="0">0 - 2 jam</option>
                                    <option value="1">3 - 5 jam</option>
                                    <option value="2">lebih dari 5 jam</option>
                                </Dropdown>
                                <Dropdown id='MTRANS' title='Transportasi Harian' onChange={handleChange} name="MTRANS">
                                    <option selected disabled >Pilih disini</option>
                                    <option value="0">Mobil</option>
                                    <option value="1">Motor</option>
                                    <option value="2">Sepeda</option>
                                    <option value="3">Jalan kaki</option>
                                    <option value="4">Transportasi Umum</option>
                                </Dropdown>


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