import { useRef, useState } from 'react';
import { PiCoins } from "react-icons/pi";
import { useOutsideClick } from '../../../Hooks';

import { NavLink } from "react-router-dom";

const ProfileAndMenu = () => {
    const [openProfileOptions, setOpenProfileOptions] = useState<boolean>(false)

    const ProfileOptionsRef: React.MutableRefObject<null> = useRef(null)
    useOutsideClick({ref: ProfileOptionsRef, callback: () => {setOpenProfileOptions(false)}});


    return (<div className='hidden md:flex relative'>
        {/* profile circle icon */}
        <div
            onClick={() => {setOpenProfileOptions(!openProfileOptions)}}
            className='flex items-center cursor-pointer icon-hover3'
            >
                <div className='hidden md:flex border border-black rounded-full justify-center w-[16px] h-[16px] mr-3 cursor-pointer'>
                    
                </div>
                <h1 className='mr-5'>Guest</h1>
        </div>

        {/* menu */}
        {openProfileOptions &&
            <div ref={ProfileOptionsRef} className='absolute right-3 top-11 hidden md:block'>
                <div className='flex flex-col items  w-32  border border-b-2 border-black bg-white'>
                    
                    <div className='flex items-center flex-row lg:hidden mt-2 h-6 hover:bg-gray-200 cursor-pointer'>
                        <h1 className='text-sm ml-2 '>
                            Achievements
                        </h1>
                    </div>
                    <div className='flex items-center flex-row xl:hidden mt-2 h-6 hover:bg-gray-200 cursor-pointer'>
                        <h1 className='text-sm ml-2 '>
                            Badges
                        </h1>
                    </div>
                    <div className='flex items-center flex-row xl:hidden mt-2 h-6 hover:bg-gray-200 cursor-pointer'>
                        <h1 className='text-sm ml-2 '>
                            Store
                        </h1>
                    </div>

                    <div className='flex items-center space-x-1 flex-row mt-2 h-6 hover:bg-gray-200 cursor-pointer'>

                        <h1 className='text-sm ml-2'>
                            Settings
                        </h1>
                    </div>

                    
                    <NavLink to={"/"}>
                        <div className='flex items-center space-x-1 flex-row hover:bg-gray-200 mt-2 h-6 cursor-pointer'>
                            <h1 className='text-sm ml-2'>
                                Logout
                            </h1>
                        </div>
                    </NavLink>
                    <div className='flex flex-row items-center ml-2 mt-9 mb-1 space-x-1'>
                        <PiCoins size={17}/><h1 className='text-sm'>35 coins</h1>
                    </div>
                </div>
                
                
            </div>
        }
    </div>)
}
export default ProfileAndMenu
