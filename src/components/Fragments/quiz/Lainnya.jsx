import React, { useState } from 'react'
import Input from '../../elements/input/Input';
import Dropdown from '../../elements/input/Dropdown';



const Lainnya = () => {
    const [showModal, setShowModal] = useState(false);
    const [modalSize, setModalSize] = useState('md');
    return (
        <>
            <div className="relative z-40 my-3">
                {/*content*/}
                <div className="rounded-lg  relative flex flex-col w-full  outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-2 mt-2 rounded-t">
                        <h3 className="text-xl flex justify-center w-full font-bold">
                            Faktor Lain
                        </h3>
                    </div>
                    <div>
                        <form>
                            <div className="grid md:grid-cols-2 gap-4 mb-4 px-6 pt-6">

                                <Dropdown id='FAVC' title='Konsumsi Kalori Tinggi'>
                                    <option value="0">no</option>
                                    <option value="1">yes</option>
                                </Dropdown>
                                <Dropdown id='FAVC' title='Konsumsi Kalori Tinggi'>
                                    <option value="0">no</option>
                                    <option value="1">yes</option>
                                </Dropdown>

                            </div>
                            {/* <div className="grid gap-6 mb-1 md:grid-cols-2 p-4">
                                            <div className="mb-2 px-6">
                                                <Input title='Address' type='url' id='website' placeholder='Surabaya, Jawa Timur' />
                                            </div>
                                            <div className="mb-2 px-6">
                                                <Input title='Email' type='email' id='email' placeholder='anastasia@gmail.com' />
                                            </div>
                                        </div>
                                        <div className="grid gap-6 mb-2 md:grid-cols-2 px-4">
                                            <div className="mb-2 px-6">
                                                <Input title='Password' type='password' id='password' placeholder='•••••••••' />
                                            </div>
                                            <div className="mb-2 px-6">
                                                <Input title='Confirm Password' type='password' id='confirm_password' placeholder='•••••••••' />
                                            </div>
                                        </div> */}
                        </form>
                    </div>

                    {/*footer*/}
                    <div className="flex items-center justify-end py-3 px-5 rounded-b">

                        <button
                            type="submit" className="text-white w-full bg-primary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"

                            onClick={() => setShowModal(false)}
                        >
                            Save Changes
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Lainnya