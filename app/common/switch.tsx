import React from 'react'

interface ISwitchProps {
    isChecked: boolean
    onChange: (isChecked: boolean) => void;
    children?: string
}

function Switch(props: ISwitchProps) {

    const handleCheckboxChange = () => {
        props.onChange(!props.isChecked)
    }

    return (
        <label className='flex cursor-pointer select-none items-center'>
            <div className='relative'>
                <input
                    type='checkbox'
                    checked={props.isChecked}
                    onChange={handleCheckboxChange}
                    className='sr-only'
                />
                <div
                    className={`box block h-8 w-14 rounded-full ${props.isChecked ? 'bg-blue-500' : 'bg-gray-50 dark:bg-gray-700'}`}
                ></div>
                <div
                    className={`absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-gray-700 dark:bg-white  transition ${props.isChecked ? 'translate-x-full' : ''}`}
                ></div>
            </div>
            <span className='ml-2'>
                {props.children}
            </span>
        </label>
    )
}

export default Switch