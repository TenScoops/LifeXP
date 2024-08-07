

import { FaDoorOpen, FaTree } from "react-icons/fa";
import { GiAchievement, GiScrollUnfurled } from "react-icons/gi";
import { HiCheckBadge } from "react-icons/hi2";
import { IoMdSettings } from "react-icons/io";
import { MdHome } from "react-icons/md";
import { PiCoins, PiCoinsFill, PiSmileyFill } from "react-icons/pi";
import { RxHamburgerMenu } from 'react-icons/rx';

import { Dispatch, SetStateAction } from 'react';

import { NavLink } from "react-router-dom";

import PropTypes from 'prop-types';

interface SmallScreenNavProps {
    hamburgerOption: boolean
    setHamburgerOption: Dispatch<SetStateAction<boolean>>
}

const SmallScreenNav: React.FC<SmallScreenNavProps> = ({hamburgerOption, setHamburgerOption}) => {
    return (
        <div className={`${hamburgerOption ? 'block' : 'hidden'} md:hidden flex flex-col items-center justify-center fixed inset-0 bg-white z-50`}>

            <div className='absolute top-[11.8px] right-[24.9px]'>
                <RxHamburgerMenu
                    size={25}
                    className='cursor-pointer icon-hover2'
                    onClick={() => {setHamburgerOption(!hamburgerOption)}}
                />
            </div>

            {/* profile circle icon */}
            <div className="flex flex-col items-center mb-[50px] mr-5 space-y-4">
                
                <h1 className="text-lg">
                    Hi, Guest
                </h1>
                <div className='flex flex-row  items-center space-x-1'>
                    <PiCoins size={20}/><h1 className='text-sm'>35 coins</h1>
                </div>
            </div>

            {/* navbar options */}
            <nav>
                <ul className='flex flex-col items-start space-y-12'>
                    <li >
                        <NavLink
                            to="/home"
                            className={({isActive}) => isActive ? 'active-link2' : ''}
                        >

                            <div
                                className='flex items-center space-x-2 icon-hover2 cursor-pointer hover:underline'
                                onClick={() => {setHamburgerOption(!hamburgerOption)}}
                            >
                                <MdHome size={30} />
                                <span className='tracking-wide hover:underline'>
                                    Home
                                </span>
                            </div>
                        </NavLink>
                    </li>
                    <li >
                        <NavLink
                            to="/quests"
                            className={({isActive}) => isActive ? 'active-link2' : ''}>
                            <div
                                className='flex items-center space-x-3 icon-hover2 cursor-pointer hover:underline'
                                onClick={() => {setHamburgerOption(!hamburgerOption)}}
                            >
                                <GiScrollUnfurled size={24} />
                                <span className='hover:underline'>
                                    Quests
                                </span>
                            </div>
                        </NavLink>
                    </li>
                    
                    <li>
                        <NavLink
                            to="/checkin"
                            className={({isActive}) => isActive ? 'active-link2' : ''}>
                            <div
                                className='flex items-center space-x-2 icon-hover2 cursor-pointer hover:underline'
                                onClick={() => {setHamburgerOption(!hamburgerOption)}}
                            >
                                <PiSmileyFill size={27} />
                                <span className='hover:underline'>
                                    Check-in
                                </span>
                            </div>
                        </NavLink>
                    </li>
                    <li >
                       
                        <div
                            className='flex items-center space-x-2 icon-hover2 cursor-pointer hover:underline'
                            
                        >

                            <FaTree size={26} />
                            <span>
                                Skill Tree
                            </span>
                        </div>
                       
                    </li>
                    <li>
                        
                        <div
                            className='flex items-center space-x-2 icon-hover2 cursor-pointer hover:underline'
                           
                        >
                            <GiAchievement size={27} />
                            <span className='hover:underline'>
                                Achievements
                            </span>
                        </div>
                    
                    </li>
                    <li>
                        <div
                            className='flex items-center space-x-2 icon-hover2 cursor-pointer hover:underline'
                            
                        >
                            <HiCheckBadge size={27} />
                            <span className='hover:underline'>
                                Badges
                            </span>
                        </div>
                    
                    </li>
                    <li>
                        
                        <div
                            className='flex items-center space-x-2 icon-hover2 cursor-pointer hover:underline'
                            
                        >
                            <PiCoinsFill size={27} />
                            <span className='hover:underline'>
                                Store
                            </span>
                        </div>
                        
                    </li>

                </ul>
            </nav>

            {/* settings */}
            <div className='text-sm absolute bottom-4 left-4 flex flex-row items-center space-x-2 cursor-pointer'>
                <IoMdSettings size={23} /> <h1>Settings</h1>
            </div>
            
            
            <NavLink
                to={"/"}>
                <div
                    onClick={() => {setHamburgerOption(!hamburgerOption)}}
                    className='text-sm absolute bottom-4 right-4 flex flex-row items-center space-x-2 cursor-pointer'>
                    <h1>Logout</h1> <FaDoorOpen size={23} />
                </div>
            </NavLink>
        </div>
    )
}

export default SmallScreenNav

SmallScreenNav.propTypes = {
    hamburgerOption: PropTypes.bool.isRequired,
    setHamburgerOption: PropTypes.func.isRequired
}
