import React from 'react'

const Input = (props) => {
    const { tipe, id, placeholder, title,name, onChange } = props
    return (
        <div>
            <label for={id} className="block text-sm font-medium text-gray-900 dark:text-white">{title}</label>
            <input type={tipe} name={name} onChange={onChange} id={id} className="bg-white border-x-transparent border-t-transparent border-b-blue-700 border-2 text-gray-900 text-sm rounded-lg w-full p-2.5 focus:bg-blue-50 focus:border-b-primary focus:border-x-transparent focus:border-t-transparent focus:ring-transparent" placeholder={placeholder} required />
        </div>
    )
}


export default Input