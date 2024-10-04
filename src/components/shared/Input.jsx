import React from 'react'

const Input = ({label, type="text", classNames, labelClass, ...props}) => {
  return (
    <div className='flex flex-col gap-1'>
        {label && <label className={`text-xs font-semibold text-gray-light ${labelClass}`}>{label}</label>}
        <input type={type} className={`text-primary font-medium focus-visible:outline-none ${classNames}`} {...props}/>
    </div>
  )
}

export default Input