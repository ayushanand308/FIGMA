import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faPen, faUserCheck, faEye, faUserGroup, faLocationDot, faCoins, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-regular-svg-icons';
import { faAtlassian } from '@fortawesome/free-brands-svg-icons';
import figma1 from './figma1.png';
import illustrator from './illustrator.png';
import xd from './xd.png';

function MainSection() {
  const [showRightSection, setShowRightSection] = useState(false);

  const toggleRightSection = () => {
    setShowRightSection(!showRightSection);
  };

  return (
    <div className="h-full relative">
      <div className={`lg:hidden ${showRightSection ? 'fixed top-4 right-4' : 'absolute top-4 right-4'} z-30 transition-all duration-300`}>
        <button onClick={toggleRightSection} className="text-2xl bg-white p-2 rounded-full shadow-md">
          <FontAwesomeIcon icon={showRightSection ? faTimes : faBars} />
        </button>
      </div>
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-9/12 border-r border-gray-200">
          <div className="h-auto border-b mt-4 p-4">
            <div className='flex flex-col sm:flex-row sm:items-center sm:space-x-4'>
              <div className='mx-4 sm:mx-12'>
                <h1 className='text-xl sm:text-2xl font-bold'>Senior Product Designer</h1>
              </div>
              <div className='mt-2 text-xs text-[#888888]'>
                <h3>Posted 2 days ago</h3>
              </div>
              <div className='flex items-center text-sm bg-[#ECFDF3] rounded-full border-[#ABEFC6] border-2 px-2 py-1 mt-2 sm:mt-0'>
                <span className="text-green-600">● Open</span>
              </div>
            </div>
            <div className='mx-4 sm:mx-12 mt-4 text-[#5D5D5D] text-sm flex flex-col sm:flex-row sm:space-x-4'>
              <div className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faLocationDot} />
                <h1>Delaware, USA</h1>
              </div>
              <span className="hidden sm:inline">●</span>
              <div className="flex items-center space-x-2 mt-2 sm:mt-0">
                <FontAwesomeIcon icon={faCoins} />
                <h1>$300-400k</h1>
              </div>
            </div>
          </div>
          <div className="h-auto border-b text-left p-4">
            <div className='mx-4 sm:mx-12 flex flex-col sm:flex-row sm:space-x-8 space-y-4 sm:space-y-0'>
              <div className='text-sm text-[#6E6D6D]'>
                <h1>Skills Required</h1>
                <ul className='mt-2'>
                  <li className='flex space-x-1 items-center'>
                    <div className='flex items-center border border-black rounded px-2 py-1'>
                      <img src={figma1} alt="" className='h-[17px] w-[17px] mr-1' />
                      <span>Figma</span>
                    </div>
                  </li>
                  <li className='flex space-x-1 items-center mt-2'>
                    <div className='flex items-center border border-black rounded px-2 py-1'>
                      <img src={illustrator} alt="" className='h-[17px] w-[17px] mr-1' />
                      <span>Adobe Illustrator</span>
                    </div>
                  </li>
                  <li className='flex space-x-1 items-center mt-2'>
                    <div className='flex items-center border border-black rounded px-2 py-1'>
                      <img src={xd} alt="" className='h-[17px] w-[17px] mr-1' />
                      <span>Adobe XD</span>
                    </div>
                  </li>
              </ul>


              </div>
              <div>
                <h1 className='text-[#6E6D6D] text-sm'>Preferred Language</h1>
                <h3 className='font-bold mt-2'>English</h3>
              </div>
              <div>
                <h1 className='text-[#6E6D6D] text-sm'>Type</h1>
                <h3 className='font-bold mt-2'>Full time</h3>
              </div>
              <div>
                <h1 className='text-[#6E6D6D] text-sm'>Years of Experience</h1>
                <h3 className='font-bold mt-2'>3+ Years of Experience</h3>
              </div>
            </div>
          </div>
          <div className="h-auto pb-8 text-left text-sm border-b p-4 mt-4">
            <h3 className="mx-4 sm:mx-12 text-xs font-semibold text-[#6E6D6D]">About the job</h3>
            <ol className="mx-4 sm:mx-12 text-[#3D3D3D] list-decimal list-inside">
              <li>Handle the UI/UX research design</li>
              <li>Work on researching on latest web applications designs & trends</li>
              <li>Work on conceptualizing and visualizing</li>
              <li>Work on creating graphics content and other graphic related works</li>
            </ol>
            <div className='text-[#3D3D3D] mx-4 sm:mx-12'>
              <h3 className="mt-4">Benefits:</h3>
              <ul className="list-disc list-inside mx-2">
                <li>Health insurance</li>
                <li>Provident Fund</li>
              </ul>
              <h3 className="mt-4">Schedule:</h3>
              <ul className="list-disc list-inside mx-2">
                <li>Day shift</li>
              </ul>
              <h3 className="mt-4">Supplemental pay types:</h3>
              <ul className="list-disc list-inside mb-2 mx-2">
                <li>Performance bonus</li>
                <li>Yearly bonus</li>
              </ul>
              <div className='text-[#3D3D3D] mt-4'>
                Work Location: In person
              </div>
            </div>
          </div>
          <div className="h-auto border-b text-sm text-left p-4">
            <div className='flex space-x-4 mx-4 sm:mx-10'>
              <div className="flex items-center p-2">
                <FontAwesomeIcon icon={faAtlassian} className="text-white bg-blue-500 p-2 rounded" />
                <span className="text-black ml-2">Atlassian</span>
              </div>
            </div>
            <div className='mx-4 sm:mx-12 flex flex-col sm:flex-row sm:space-x-20 space-y-4 sm:space-y-0'>
              <div className='flex-col space-y-4'>
                <div>
                  <h1 className='text-[#6E6D6D]'>Company size</h1>
                  <h3>1k - 2k Employees</h3>
                </div>
                <div>
                  <h1 className='text-[#6E6D6D]'>Sector</h1>
                  <h3>Information Technology, Infrastructure</h3>
                </div>
                <div>
                  <h1 className='text-[#6E6D6D]'>Founded In</h1>
                  <h3>2019</h3>
                </div>
              </div>
              <div className='flex-col space-y-4'>
                <div>
                  <h1 className='text-[#6E6D6D]'>Type</h1>
                  <h3>Private</h3>
                </div>
                <div>
                  <h1 className='text-[#6E6D6D]'>Funding</h1>
                  <h3>Bootstrapped</h3>
                </div>
                <div className=''>
                  <h1 className='text-[#6E6D6D]'>Founded By</h1>
                  <h3>Scott Farquhar, Mike Cannon-Brookes</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div 
          className={`w-full sm:w-3/4 lg:w-3/12 p-2 xl:p-6 text-sm mb-16 bg-white fixed top-0 bottom-0 right-0 transition-transform duration-300 ease-in-out transform lg:relative lg:translate-x-0 ${
            showRightSection ? 'translate-x-0' : 'translate-x-full'
          } lg:block z-20 overflow-y-auto`}
        >
          <div className="flex flex-col mx-4 space-y-2 mb-4 mt-4 px-4 3xl:flex-row 3xl:space-y-0 3xl:space-x-2">
            <div className="w-full 3xl:w-1/2">
              <button className="flex text-nowrap items-center justify-center space-x-2 bg-red-100 text-red-500 px-4 py-2 rounded border border-red-500 w-full">
                <FontAwesomeIcon icon={faTrashCan} />
                <span>Delete Job</span>
              </button>
            </div>
            <div className="w-full 3xl:w-1/2">
              <button className="flex items-center justify-center space-x-2 bg-red-500 text-white px-4 py-2 rounded w-full">
                <FontAwesomeIcon icon={faPen} />
                <span>Edit Job</span>
              </button>
            </div>
          </div>
          <div className='px-4'>
            <ul className="space-y-2">
              <li className="flex justify-between items-center border-b border-gray-200 py-4">
                <div className="flex items-center space-x-2">
                  <FontAwesomeIcon icon={faUserGroup} />
                  <span className='text-[#4F4F4F]'>Applicants</span>
                </div>
                <span className='font-bold'>400</span>
              </li>
              <li className="flex justify-between items-center border-b border-gray-200 py-4">
                <div className="flex items-center space-x-2">
                  <FontAwesomeIcon icon={faUserCheck} />
                  <span className='text-[#4F4F4F]'>Matches</span>
                </div>
                <span className='font-bold'>100</span>
              </li>
              <li className="flex justify-between items-center border-b border-gray-200 py-4">
                <div className="flex items-center space-x-2">
                  <FontAwesomeIcon icon={faMessage} />
                  <span className='text-[#4F4F4F]'>Messages</span>
                </div>
                <span className='font-bold'>147</span>
              </li>
              <li className="flex justify-between items-center py-4">
                <div className="flex items-center space-x-2">
                  <FontAwesomeIcon icon={faEye} />
                  <span className='text-[#4F4F4F]'>views</span>
                </div>
                <span className='font-bold'>800</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {showRightSection && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-10" onClick={toggleRightSection}></div>
      )}
    </div>
  );
}

export default MainSection;