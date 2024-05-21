import { FaTree } from "react-icons/fa";
import { GiAchievement, GiScrollUnfurled } from "react-icons/gi";
import { HiCheckBadge } from "react-icons/hi2";
import { MdHome } from "react-icons/md";
import { PiCoinsFill, PiSmileyFill } from "react-icons/pi";

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional for styling

import { NavLink } from "react-router-dom";

const MdScreenNavPlus = () => {
    return (<nav className='hidden md:block'>
        <ul className='flex flex-row items-center space-x-9'>
            <li>
                <NavLink
                    to="/home"
                    className={({isActive}) => isActive ? 'active-link' : ''}>
                    <div className='flex items-center cursor-pointer icon-hover2 space-x-2'>
                        <MdHome size={30} />
                        <span className='tracking-wide text-sm'>
                            Home
                        </span>
                    </div>
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/quests"
                    className={({isActive}) => isActive ? 'active-link' : ''}
                >
                    <div className='flex items-center icon-hover2 space-x-2 cursor-pointer'>
                        <GiScrollUnfurled size={25} />
                        <span className='text-sm'>
                            Quests
                        </span>
                    </div>
                </NavLink>
            </li>
            <li >
                <NavLink
                    to="/skilltree"
                    className={({isActive}) => isActive ? 'active-link' : ''}
                >
                    <div className='flex items-center icon-hover2 space-x-2 cursor-pointer'>
                        <FaTree size={25} />
                        <span className='text-sm'>
                            Skill Tree
                        </span>
                    </div>
                </NavLink>
            </li>
            <li >
                <NavLink
                    to="/checkin"
                    className={({isActive}) => isActive ? 'active-link' : ''}
                >
                    <div className='flex items-center icon-hover2 space-x-2 cursor-pointer'>
                        <PiSmileyFill size={25} />
                        <span className='text-sm'>
                            Check-in
                        </span>
                    </div>
                </NavLink>
            </li>
            <li >
                <Tippy
                    delay={100}
                    placement="bottom"
                    content="in progress"
                >
                    <div className='flex items-center icon-hover2 space-x-1 cursor-pointer'>
                        <GiAchievement size={29} />
                        <span className='text-sm'>
                            Achievements
                        </span>
                    </div>
                </Tippy>
            </li>
            <li >
                <Tippy
                        delay={100}
                        placement="bottom"
                        content="in progress"
                    >
                    <div className='flex items-center icon-hover2 space-x-2 cursor-pointer'>
                        <HiCheckBadge size={25} />
                        <span className='text-sm'>
                            Badges
                        </span>
                    </div>
                </Tippy>
            </li>
            <li >
                <Tippy
                        delay={100}
                        placement="bottom"
                        content="in progress"
                    >
                    <div className='flex items-center icon-hover2 space-x-2 cursor-pointer'>
                        <PiCoinsFill size={23} />
                        <span className='text-sm'>
                            Store
                        </span>
                    </div>
                </Tippy>
            </li>

        </ul>
    </nav>)
}

export default MdScreenNavPlus
