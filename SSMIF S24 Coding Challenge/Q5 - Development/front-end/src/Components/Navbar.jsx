import React from 'react'
import image from './images.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping} from '@fortawesome/free-solid-svg-icons'
//<FontAwesomeIcon icon={faCartShopping} size='sm'/>
const Navbar = () => {

  return (
    <nav className='sticky top-0 z-20'>
      
        <div className='w-screen flex justify-center items-center bg-blue-600 opacity-75 h-10 '>
        
          <button className="mx-2 text-white">Home</button>
          <button className="mx-2 text-white">Items</button>
          <button className="mx-2 text-white">Saved</button>
        </div>
    </nav>
  );
};

export default Navbar;
