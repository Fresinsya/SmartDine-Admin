// PilihMenu.js
import React, { useState } from 'react';
import SearchDropdown from '../elements/input/SearchDropdown';
import Sukses from '../elements/button/Sukses';

const PilihMenu = ({ onSelectedOptionsChange, title, children, id }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setShowModal(true);
  };

  const handleTampilOption = (selectedFood) => {
    setSelectedOptions([...selectedOptions, selectedFood]);
  }


  const handleRemoveOption = (index) => {
    const updatedOptions = selectedOptions.filter((_, i) => i !== index);
    setSelectedOptions(updatedOptions);
  }

  const handleSelectedOptionsChange = () => {
    onSelectedOptionsChange(selectedOptions);
  };


  return (
    <>
      <button
        id={id}
        className={`bg-primary flex items-center gap-2  hover:border-blue-400 active:border border-4 text-white z-30 font-bold text-sm px-4 py-3 rounded-3xl shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 ${isClicked ? 'border-red-500 border-x-transparent border-t-transparent' : ''}`}
        type="button"
        onClick={handleClick}
      >
        {children}
        {title}
      </button>
      {showModal ? (
        <div className='z-50'>
          <div
            className="justify-center z-50 items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 outline-none focus:outline-none"
          >
            <div className="relative w-2/3 my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Modal Title</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                <div className="w-11/12 mt-3 mx-auto z-30">
                  <SearchDropdown onSelectedFoodChange={handleTampilOption} />
                  <div className='p-2'>
                    {selectedOptions.length > 0 && (
                      <div className="mt-4">
                        <h3 className='ml-2 font-bold'>Makanan Pokok :</h3>
                        <ul className='ml-2 p-2 grid md:grid-cols-3'>
                          {selectedOptions.map((option, index) => (
                            <li key={index} className='flex items-center gap-3 font-medium'>
                              <p className='w-4 h-4 rounded-xl bg-primary' />
                              {option}
                              <button
                                className="text-red-500 "
                                type="button"
                                onClick={() => handleRemoveOption(index)}
                              > x </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex items-center justify-end p-3 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)} // Tutup modal tanpa melakukan apa pun
                  >
                    Close
                  </button>
                  <div className='flex items-center gap-6 mr-4'>
                    {/* Mengirim handleSelectedOptionsChange sebagai properti onClick */}
                    <Sukses title='Save Change' onClick={handleSelectedOptionsChange} selectedOptions={selectedOptions} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </div>
      ) : null}
    </>
  );
};

export default PilihMenu;
