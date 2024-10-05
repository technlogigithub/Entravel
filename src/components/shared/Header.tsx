import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GlobeIcon } from '@radix-ui/react-icons';
import { IconCurrencyDollar } from '@tabler/icons-react';
import { Button } from '../ui/button';
import { IconCheckedCircle } from '../iocns/Icons';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div className={`flex gap-4 fixed w-full h-20 px-20 items-center justify-between top-0 z-30 transition-colors duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
        <Link to="/"><IconCheckedCircle/></Link>
        <ul className='flex gap-5 items-center'>
          <li>
            <Button variant='link' className='gap-2.5 text-black'><GlobeIcon className='w-4 h-4'/>English</Button>
          </li>
          <li>
            <Button variant='link' className='gap-2.5 text-black'><IconCurrencyDollar className='size-4'/>USD</Button>
          </li>
          <li className='h-8 bg-lightBorder w-[1px]'></li>
          <li>
            <Button variant='link' className='text-black'>Blog</Button>
          </li>
          <li>
            <Button variant='link' className="uppercase font-semibold text-black">Sign in</Button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
