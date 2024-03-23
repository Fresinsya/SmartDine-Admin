import React from 'react'

const Input = (props) => {
    const { tipe, id, placeholder, title, name, onChange, value } = props
    return (
        <div>
            <label for={id} className="block text-sm font-medium text-gray-900 dark:text-white">{title}</label>
            <input type={tipe} name={name} value={value} onChange={onChange} id={id} className="bg-white  border-blue-700 border text-gray-900 text-sm rounded-lg w-full p-2.5 focus:border-none " placeholder={placeholder} required />
            <div className="relative mt-2 rounded-md shadow-sm">
                <input
                    type={tipe}
                    name={name}
                    id={id}
                    value={value} onChange={onChange}
                    className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder={placeholder} required
                />
            </div>
            <div className="relative mt-2 rounded-md shadow-sm">
                <input
                    type={tipe}
                    name={name}
                    id={id}
                    value={value} onChange={onChange}
                    className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder={placeholder} required
                />
            </div>
            <div>
                <div className="relative mt-2 rounded-md shadow-sm">
                    <input
                        type="text"
                        name="price"
                        id="price"
                        className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="0.00"
                    />
                </div>
            </div>
        </div >
    )
}


export default Input