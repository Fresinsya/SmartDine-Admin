import React from 'react'

const Button = (props) => {
    const { title } = props
    return (
        <>
            <button className='flex items-center bg-primary px-4 py-2 z-40 rounded-xl text-white gap-2'
                type="button"
            >
                <p>{title}</p>
            </button>
        </>

    )
}

export default Button