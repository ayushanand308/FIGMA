import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faHandHoldingDollar, faChevronDown, faBars } from '@fortawesome/free-solid-svg-icons';
import { faMessage, faBell } from '@fortawesome/free-regular-svg-icons';

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 mt-4 mb-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <div className="text-[#DC4A2D] bg-customGray px-4 py-2 rounded lg:ml-4">
              Logo
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#DC4A2D]"
            >
              <FontAwesomeIcon icon={faBars} className="h-6 w-6" />
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden sm:flex-grow sm:flex sm:justify-center">
            <div className="flex justify-center space-x-4 bg-gray-100 px-4 py-2 rounded-full border border-gray-300">
              <div className="bg-[#DC4A2D] border-2 border-[#FCB4A5] px-4 py-2 rounded-full text-white flex items-center">
                <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
                Jobs
              </div>
              <div className="flex items-center text-[#B0B0B0] relative">
                <FontAwesomeIcon icon={faMessage} className="mr-2" />
                <span className="absolute top-4 -left-0.5 transform translate-x-4 -translate-y-1 w-1 h-1 bg-red-500 rounded-full"></span>
                Messages
              </div>
              <div className="flex items-center text-[#B0B0B0]">
                <FontAwesomeIcon icon={faHandHoldingDollar} className="mr-2" />
                Payments
              </div>
            </div>
          </div>

          <div className="hidden sm:flex items-center space-x-4 lg:mr-4">
            <div className="relative">
              <FontAwesomeIcon icon={faBell} className="text-gray-600" />
              <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-red-500 rounded-full"></span>
            </div>
            <div className="flex items-center">
              <svg className="w-6 h-6" enableBackground="new 0 0 1024 1024" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                <circle cx="512" cy="512" fill="#0052cc" r="512"/>
                <g fill="#fff">
                  <path d="m413.7 462.6c-4.6-6-13.2-7.2-19.3-2.6-1.8 1.3-3.2 3.1-4.1 5.1l-118.3 236.8c-3.5 7-.7 15.5 6.3 19 2 1 4.1 1.5 6.3 1.5h164.9c5.4.1 10.4-2.9 12.7-7.8 35.5-73.6 14-185.3-48.5-252z"/>
                  <path d="m500.6 247.2c-60 92.4-67 209.5-18.2 308.3l79.5 159c2.4 4.8 7.3 7.8 12.7 7.8h164.9c7.8 0 14.2-6.3 14.2-14.2 0-2.2-.5-4.4-1.5-6.3 0 0-221.8-443.7-227.4-454.8-3.2-6.6-11.2-9.4-17.9-6.2-2.8 1.5-5 3.7-6.3 6.4z"/>
                </g>
              </svg>
            </div>
            <FontAwesomeIcon icon={faChevronDown} className="text-gray-600" />
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`sm:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a href="#" className="bg-[#DC4A2D] text-white block px-3 py-2 rounded-md text-base font-medium">Jobs</a>
          <a href="#" className="text-gray-700 hover:bg-gray-50 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">Messages</a>
          <a href="#" className="text-gray-700 hover:bg-gray-50 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">Payments</a>
        </div>
        <div className="pt-4 pb-3 border-t border-gray-200">
          <div className="flex items-center px-4">
            <div className="flex-shrink-0">
              <svg className="w-10 h-10" enableBackground="new 0 0 1024 1024" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                <circle cx="512" cy="512" fill="#0052cc" r="512"/>
                <g fill="#fff">
                  <path d="m413.7 462.6c-4.6-6-13.2-7.2-19.3-2.6-1.8 1.3-3.2 3.1-4.1 5.1l-118.3 236.8c-3.5 7-.7 15.5 6.3 19 2 1 4.1 1.5 6.3 1.5h164.9c5.4.1 10.4-2.9 12.7-7.8 35.5-73.6 14-185.3-48.5-252z"/>
                  <path d="m500.6 247.2c-60 92.4-67 209.5-18.2 308.3l79.5 159c2.4 4.8 7.3 7.8 12.7 7.8h164.9c7.8 0 14.2-6.3 14.2-14.2 0-2.2-.5-4.4-1.5-6.3 0 0-221.8-443.7-227.4-454.8-3.2-6.6-11.2-9.4-17.9-6.2-2.8 1.5-5 3.7-6.3 6.4z"/>
                </g>
              </svg>
            </div>
            <div className="ml-3">
              <div className="text-base font-medium text-gray-800">User Name</div>
              <div className="text-sm font-medium text-gray-500">user@example.com</div>
            </div>
            <button className="ml-auto flex-shrink-0 bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#DC4A2D]">
              <FontAwesomeIcon icon={faBell} className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;