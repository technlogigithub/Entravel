import React, { useState } from 'react';
import { Button } from '../ui/button'; // Adjust the import path for your Button component
import { Separator } from '../ui/separator';

interface Room {
  adults: number;
  children: number;
}

const GuestSelector: React.FC = () => {
  const [rooms, setRooms] = useState<Room[]>([{ adults: 2, children: 0 }]);

  const incrementAdults = (index: number) => {
    const updatedRooms = [...rooms];
    updatedRooms[index].adults += 1;
    setRooms(updatedRooms);
  };

  const decrementAdults = (index: number) => {
    const updatedRooms = [...rooms];
    if (updatedRooms[index].adults > 0) {
      updatedRooms[index].adults -= 1;
      setRooms(updatedRooms);
    }
  };

  const incrementChildren = (index: number) => {
    const updatedRooms = [...rooms];
    updatedRooms[index].children += 1;
    setRooms(updatedRooms);
  };

  const decrementChildren = (index: number) => {
    const updatedRooms = [...rooms];
    if (updatedRooms[index].children > 0) {
      updatedRooms[index].children -= 1;
      setRooms(updatedRooms);
    }
  };

  const addRoom = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent default behavior
    setRooms([...rooms, { adults: 2, children: 0 }]);
  };

  return (
    <div>
      {rooms.map((room, index) => (
        <div key={index}>
            <h6 className="uppercase text-gray-500 text-xs">Room 1</h6>{" "}
          <div className="flex justify-between items-center mt-2 mb-4 text-[17px] text-black font-medium">
            <span>Adults</span>
            <div className="flex items-center justify-between min-w-36">
              <Button type='button' onClick={() => decrementAdults(index)} className="border rounded-full p-1 w-8 h-8 text-xl">−</Button>
              <span className="mx-2">{room.adults}</span>
              <Button type='button' onClick={() => incrementAdults(index)} className="border rounded-full p-1 w-8 h-8 text-xl">+</Button>
            </div>
          </div>

          <div className="flex justify-between items-center  mt-2 mb-4 text-[17px] text-black font-medium">
            <span>Children</span>
            <div className="flex items-center justify-between min-w-36">
              <Button type='button' onClick={() => decrementChildren(index)} className="border rounded-full p-1 w-8 h-8 text-xl">−</Button>
              <span className="mx-2">{room.children}</span>
              <Button type='button' onClick={() => incrementChildren(index)} className="border rounded-full p-1 w-8 h-8 text-xl">+</Button>
            </div>
          </div>
        </div>
      ))}
      <Separator className='my-5'/>
      <Button variant="link" onClick={addRoom} className='text-blue hover:text-black px-0'>+ Add a room</Button>
    </div>
  );
};

export default GuestSelector;
