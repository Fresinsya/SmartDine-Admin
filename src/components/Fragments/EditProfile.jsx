import { Label, Select } from 'flowbite-react';
import React, { useState } from 'react'
import { FaPencilAlt } from 'react-icons/fa';
import Input from '../elements/input/Input';
import Dropdown from '../elements/input/Dropdown';

const EditProfile = () => {
    const [showModal, setShowModal] = useState(false);
    const [modalSize, setModalSize] = useState('md');
    return (
        <>
            <button className='flex items-center bg-primary px-4 py-2 z-40 rounded-xl text-white gap-2'
                type="button"
                onClick={() => setShowModal(true)}
            >
                <FaPencilAlt color='white' size={15} />
                Edit Profile
            </button>
            {showModal ? (
                <div className=''>
                    <div
                        className="justify-center z-50 items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 outline-none focus:outline-none"
                    >

                        <div className="relative w-2/3 my-6 mx-auto">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-4 border-b border-solid border-gray-400 rounded-t">
                                    <h3 className="text-xl flex justify-center w-full font-bold">
                                        Edit Profile
                                    </h3>
                                </div>
                                <div>
                                    <form>
                                        <div className="grid gap-6 mb-3 md:grid-cols-4 px-6 pt-4">
                                            <Input title='Nama' type='text' id='nama' placeholder='Anastasia' />
                                            <Input title='Usia' type='number' id='usia' placeholder='34' />
                                            <Input title='No. Handphone' type='tel' id='phone' placeholder='089525272397' />
                                            <Input title='Tinggi Badan' type='text' id='tinggi' placeholder='164' />
                                            <Input title='Berat Badan' type='text' id='berat' placeholder='78' />
                                            <div>
                                                <label for="jenisKelamin" className="block text-sm font-medium text-gray-900 dark:text-white">Gender</label>
                                                <select defaultValue="0"
                                                    className="bg-white border-x-transparent border-t-transparent border-b-blue-700 border-2 text-gray-900 text-sm rounded-lg w-full p-2.5 focus:bg-white focus:border-b-primary focus:border-x-transparent focus:border-t-transparent focus:ring-transparent"
                                                    onChange={(event) => setModalSize(event.target.value)}
                                                    id='jenisKelamin'
                                                >
                                                    <option value="0">perempuan</option>
                                                    <option value="1">Laki-laki</option>
                                                </select>
                                            </div>

                                            <Dropdown id='Family_history' title='Histori Keluarga Obesitas'>
                                                <option value="0">no</option>
                                                <option value="1">yes</option>
                                            </Dropdown>
                                            <Dropdown id='smoke' title='Perokok'>
                                                <option value="0">no</option>
                                                <option value="1">yes</option>
                                            </Dropdown>
                                        </div>
                                        <div className="grid gap-6 mb-1 md:grid-cols-2 p-4">
                                            <div className="mb-2 px-6">
                                            </div>
                                            <div className="mb-2 px-6">
                                            </div>
                                        </div>
                                        <div className="grid gap-6 mb-1 md:grid-cols-2 p-4">
                                            <div className="mb-2 px-6">
                                                <label for="website" className="block text-sm font-medium text-gray-900 dark:text-white">Address</label>
                                                <input type="url" id="website" className="bg-white border-x-transparent border-t-transparent border-b-blue-700 border-2 text-gray-900 text-sm rounded-lg w-full p-2.5 focus:bg-blue-50 focus:border-b-primary focus:border-x-transparent focus:border-t-transparent focus:ring-transparent" placeholder="Surabaya, Jawa Timur" required />
                                            </div>
                                            <div className="mb-2 px-6">
                                                <label for="email" className="block text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                                <input type="email" id="email" className="bg-white border-x-transparent border-t-transparent border-b-blue-700 border-2 text-gray-900 text-sm rounded-lg w-full p-2.5 focus:bg-blue-50 focus:border-b-primary focus:border-x-transparent focus:border-t-transparent focus:ring-transparent" placeholder="john.doe@company.com" required />
                                            </div>
                                        </div>
                                        <div className="grid gap-6 mb-2 md:grid-cols-2 px-4">
                                            <div className="mb-2 px-6">
                                                <label for="password" className="block text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                                <input type="password" id="password" className="bg-white border-x-transparent border-t-transparent border-b-blue-700 border-2 text-gray-900 text-sm rounded-lg w-full p-2.5 focus:bg-blue-50 focus:border-b-primary focus:border-x-transparent focus:border-t-transparent focus:ring-transparent" placeholder="•••••••••" required />
                                            </div>
                                            <div className="mb-2 px-6">
                                                <label for="confirm_password" className="block text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                                                <input type="password" id="confirm_password" className="bg-white border-x-transparent border-t-transparent border-b-blue-700 border-2 text-gray-900 text-sm rounded-lg w-full p-2.5 focus:bg-blue-50 focus:border-b-primary focus:border-x-transparent focus:border-t-transparent focus:ring-transparent" placeholder="•••••••••" required />
                                            </div>
                                        </div>
                                        <div className="flex items-start mb-4 px-6 ml-4">
                                            <div className="flex items-center h-5">
                                                <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                                            </div>
                                            <label for="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
                                        </div>
                                    </form>
                                </div>

                                {/*footer*/}
                                <div className="flex items-center justify-end py-3 px-5 border-t border-solid border-gray-400 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                    <button
                                        type="submit" className="text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"

                                        onClick={() => setShowModal(false)}
                                    >
                                        Save Changes
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </div>
            ) : null}
        </>
    )
}

export default EditProfile