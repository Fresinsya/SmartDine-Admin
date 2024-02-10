import React, { useEffect, useState } from 'react'
import Input from '../../elements/input/Input';
import Dropdown from '../../elements/input/Dropdown';
import Button from '../../elements/button/button';



const Makanan = () => {
    const [showNotification, setShowNotification] = useState(false);

    const handleSaveChange = () => {
        setShowNotification(true);
    };

    useEffect(() => {
        let timeout;
        if (showNotification) {
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
                            Kebiasaan Makan
                        </h3>
                    </div>
                    <div>
                        <form>
                            <div className="grid gap-6 mb-6 md:grid-cols-2 px-6 pt-6">

                                <Dropdown id='FAVC' title='Konsumsi Kalori Tinggi' required>
                                    <option value="0">no</option>
                                    <option value="1">yes</option>
                                </Dropdown>
                                <Dropdown id='FCVC' title='Konsumsi Sayuran' required>
                                    <option value="1">Tidak pernah</option>
                                    <option value="2">Kadang - kadang</option>
                                    <option value="3">Selalu mengkonsumsi</option>
                                </Dropdown>
                                <Dropdown id='NCP' title='Total Makan Utama' required>
                                    <option value="1">1 x makan</option>
                                    <option value="2">2 x makan</option>
                                    <option value="3">3 x makan</option>
                                    <option value="4">4 x makan</option>
                                </Dropdown>
                                <Dropdown id='CAEC' title='Konsumsi Camilan' required>
                                    <option value="0">Tidak Pernah</option>
                                    <option value="1">Sering mengkonsumsi</option>
                                    <option value="2">Kadang - kadang</option>
                                    <option value="3">Selalu mengkonsumsi</option>
                                </Dropdown>
                                <Dropdown id='CH2O' title='Konsumsi Air Harian' required>
                                    <option value="1">1 liter</option>
                                    <option value="2">2 liter</option>
                                    <option value="3">3 liter</option>
                                </Dropdown>
                                <Dropdown id='CALC' title='Konsumsi Alkohol' required>
                                    <option value="0">Tidak Pernah</option>
                                    <option value="1">Sering mengkonsumsi</option>
                                    <option value="2">Kadang - kadang</option>
                                    <option value="3">Selalu mengkonsumsi</option>
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

export default Makanan