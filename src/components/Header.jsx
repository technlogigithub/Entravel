import React from 'react'
import { IconCheckedCircle, IconDollor } from './iocns/Icons'
import { Link } from "react-router-dom";
import {Button} from "./shared";
import {  faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
  return (
    <div>
        <div className='flex gap-4 fixed w-full h-20 px-20 items-center justify-between border-b border-solid border-primary-light top-0 z-30'>
            <Link to="/"><IconCheckedCircle/></Link>
            <ul  className='flex gap-5 items-center'>
                <li>
                   <Button label="English" variant='link' icon={<FontAwesomeIcon icon={faGlobe} />}/>
                </li>
                <li>
                   <Button label="USD" variant='link' icon={<IconDollor/>}/>
                </li>
                <li className='h-8 bg-primary-light w-[1px]'></li>
                <li>
                   <Button label="Blog" variant='link'/>
                </li>
                <li>
                   <Button label="Sign in" variant='link' className="uppercase font-semibold"/>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Header