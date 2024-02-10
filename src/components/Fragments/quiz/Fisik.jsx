import React, { useEffect, useState } from 'react'
import Input from '../../elements/input/Input';
import Dropdown from '../../elements/input/Dropdown';
import Button from '../../elements/button/button';



const Fisik = () => {
    const [showNotification, setShowNotification] = useState(false);

    const handleSaveChange = () => {
        setShowNotification(true);
        // Tambahkan logika atau fungsi lainnya setelah menampilkan pemberitahuan
    };

    useEffect(() => {
        let timeout;
        if (showNotification) {
            // Setelah 5 detik, sembunyikan pemberitahuan
            timeout = setTimeout(() => {
                setShowNotification(false);
            }, 1000); // 5000 milidetik = 5 detik
        }

        // Membersihkan timer jika komponen di-unmount atau pemberitahuan disembunyikan
        return () => clearTimeout(timeout);
    }, [showNotification]);


    return (
        <div>
            <div className="relative z-40 my-6 mx-auto">
                {/*content*/}
                <div className=" rounded-lg  relative flex flex-col w-full outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-4  rounded-t">
                        <h3 className="text-xl flex justify-center w-full font-bold">
                            Kebiasaan Fisik
                        </h3>
                    </div>
                    <div>
                        <form>
                            <div className="grid gap-4 md:grid-cols-2 mb-4 px-6 pt-6">

                                <Dropdown id='SCC' title='Sedang Defisit Kalori'>
                                    <option value="0">no</option>
                                    <option value="1">yes</option>
                                </Dropdown>
                                <Dropdown id='FAF' title='Aktifitas Fisik'>
                                    <option value="0">Tidak pernah</option>
                                    <option value="1">1 - 2 hari per minggu</option>
                                    <option value="2">2 - 4 hari per minggu</option>
                                    <option value="3">4 - 5 hari per minggu</option>
                                </Dropdown>
                                <Dropdown id='TUE' title='Durasi Penggunaan Elektronik'>
                                    <option value="0">0 - 2 jam</option>
                                    <option value="1">3 - 5 jam</option>
                                    <option value="2">lebih dari 5 jam</option>
                                </Dropdown>
                                <Dropdown id='MTRANS' title='Transportasi Harian'>
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
                            type="submit" className="text-white w-full bg-primary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"

                            onClick={handleSaveChange}
                        >
                            Save Changes
                        </button>



                    </div>
                </div>
            </div>


            {showNotification && (

<div class="flex absolute z-50 items-center top-2 right-[400px] p-4 mb-4 text-sm text-white border border-green-500 rounded-lg bg-green-500 dark:bg-gray-800 dark:text-white dark:border-green-500" role="alert">
                    <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                    </svg>
                    <span class="sr-only">Info</span>
                    <div>
                        <span class="font-medium">Success alert!</span> Change a few things up and try submitting again.
                    </div>
                </div>

            )}
        </div>
    )
}

export default Fisik