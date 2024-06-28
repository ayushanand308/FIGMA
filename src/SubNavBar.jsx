import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

function SubNavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = ['Job preview', 'Applicants', 'Match', 'Messages'];
  const [activeItem, setActiveItem] = useState('Job preview');

  return (
    <div className='border-b border-gray-200'>
      {/* Mobile dropdown */}
      <div className='sm:hidden px-4 py-2'>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='flex items-center justify-between w-full text-left text-gray-700 hover:text-gray-900 focus:outline-none'
        >
          <span className='font-medium'>{activeItem}</span>
          <FontAwesomeIcon icon={faChevronDown} className={`ml-2 h-5 w-5 transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>
        {isOpen && (
          <div className='mt-2 py-2 bg-white rounded-md shadow-lg'>
            {menuItems.map((item) => (
              <button
                key={item}
                className={`block w-full text-left px-4 py-2 text-sm ${
                  item === activeItem ? 'text-red-500 font-bold' : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => {
                  setActiveItem(item);
                  setIsOpen(false);
                }}
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Desktop menu */}
      <div className='hidden sm:flex justify-start mx-auto mt-2 pt-0.5 pb-2'>
        <nav className='mx-4 lg:mx-16 flex gap-4 lg:gap-16 pb-2'>
          {menuItems.map((item) => (
            <div key={item} className='relative'>
              <button
                className={`${
                  item === activeItem
                    ? 'text-red-500 font-bold'
                    : 'text-[#888888] hover:text-gray-700'
                }`}
                onClick={() => setActiveItem(item)}
              >
                {item}
              </button>
              {item === activeItem && (
                <span className='absolute top-9 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-red-500'></span>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}

export default SubNavBar;