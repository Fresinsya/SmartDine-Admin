import React from 'react'

const Dropdown = (props) => {
    const { children, id, title , onChange, name, value} = props
    // const { children, id, title , onChange, name, value} = props
    return (
        <div>
            <label for={id} className="block md:text-sm text-xs font-medium text-gray-900 dark:text-white">{title}</label>
            <select defaultValue="" value={value}
                className="px-3 flex justify-center items-center mx-auto text-gray-900 md:text-sm text-xs rounded-lg w-[100%] p-2.5  "
                onChange={onChange} name={name}
                id={id}
                >
                {children}
            </select>
        </div>
    )
}


export default Dropdown