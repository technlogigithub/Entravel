import React, { useState } from 'react'
import Button from './Button'

const RoomDropdown = () => {
    const [count, setCount] = useState(0)
    const handleIncrease = () => {
        setCount((count) =>  count+1)
    }
  return (
    <div>
        <p className='text-xs text-gray-extra-light'>Room 1</p>
        <div className='text-base text-black font-medium'>
            <h6>Adults</h6>
            <div>
                <Button label="-" className="w-8 h-8 rounded-full bg-black flex items-center justify-center" onClick={handleIncrease}/>
                    <p>{count}</p>
                <Button label="-" className="w-8 h-8 rounded-full bg-black flex items-center justify-center"/>
            </div>
        </div>
    </div>
  )
}

export default RoomDropdown