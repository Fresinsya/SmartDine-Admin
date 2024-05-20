import React from 'react'

const Input = (props) => {
    const { tipe, id, placeholder, title, name, onChange, value } = props
    return (
        <div>
            <label for={id} className="block text-sm font-medium text-gray-900 dark:text-white">{title}</label>
            <input type={tipe} name={name} value={value} onChange={onChange} id={id} className="bg-white  border-blue-700 border text-gray-900 text-sm rounded-lg w-full p-2.5 focus:border-none " placeholder={placeholder} required />
        </div >
    )
}


export default Input