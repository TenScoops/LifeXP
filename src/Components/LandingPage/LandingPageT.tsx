import { BiSolidCategory } from "react-icons/bi";
import { BsQuestionCircle } from "react-icons/bs";
import { CiMobile2 } from "react-icons/ci";
import { FaSmile } from "react-icons/fa";
import { GiBroadsword, GiScrollQuill, GiScrollUnfurled } from "react-icons/gi";
import { IoMdJournal } from "react-icons/io";
import Controller from "../../assets/controller.png";
import Laptop1 from "../../assets/Laptop.png";
import Laptop2 from "../../assets/laptop2.png";
import Mobile from "../../assets/mobile2.png";
import Person from "../../assets/Person.png";
// import profile1 from "../../assets/profile1.png";
import PropTypes from 'prop-types';
import { useState } from "react";
import { Enter, GameIcon } from "../Icons";

interface landingpageprops{
    handleLoginClick: ()=>void
}
const LandingPageT:React.FC<landingpageprops> = ({handleLoginClick}) =>{
    const [option, setOption] = useState<string>("tasks")

    return(<div>
        {/* nav */}
        <div  className={`flex flex-row items-center justify-between h-14 w-full transition-opacity ease-in duration-300 `}>
            <div className="flex flex-row items-center justify-center mt-1 space-x-6">
                {/* logo */}
                <div className='flex flex-row cursor-pointer items-center ml-6 '>
                    <GameIcon height={"30"} width={"30"} />
                    <h1 className='text-2xl ml-2' >
                        Life XP
                    </h1>
                </div>
                {/* nav */}
                <nav>
                    <ul className="flex flex-row space-x-12 text-xl ml-10">
                        <li>Features</li>
                        <li>About</li>
                    </ul>
                </nav>
            </div>
            {/* CTA - login button */}
            <button
                onClick={handleLoginClick}
                className="flex flex-row items-center justify-center h-10 w-40 mr-3 sm:mr-6 mt-1 border custom-gray 
                            border-black rounded-xl icon-hover4 
                            cursor-pointer">
                <h1 className="mr-4 text-lg">Login</h1>
                <Enter />
            </button>
            
            
        </div>
        <div className="flex flex-col items-center justify-center mt-12">
          
          {/* intro */}
            <div className="flex flex-row bg-gray-100 rounded-full h-80 px-20 slide-left">
                {/* intro pres */}
                <div className="flex justify-center flex-col space-y-10">
                    <div className="flex flex-row items-center space-x-3">
                        <GameIcon width={"47"} height={"47"} />
                        <h1 className="text-[36px] tracking-wider text-gray-900">
                            Your Life Into XP!
                        </h1>
                    </div>
                    <h1 className="text-2xl max-w-2xl">Gain experience points from your day to day tasks</h1>
                    <button
                        onClick={handleLoginClick}
                        className=" flex items-center justify-center h-10 w-40 bg-white mr-3 sm:mr-6 mt-1 border custom-gray 
                                    border-black rounded-xl icon-hover4 
                                    cursor-pointer">
                                        
                        <h1 className="mr-4 text-lg">Level Up</h1>
                        <GameIcon width={"22"} height={"22"} />
                    </button>
                </div>
                {/* controller image */}
                <img src={Controller} width={500} className="rounded-full p-6"/>
                
            </div>
            {/* laptops */}
            <div className="flex flex-col items-center mt-4">
                {/* laptops */}
                {option==="tasks"?<img width={1400} src={Laptop1} alt="laptop-home" className="slide-up"/>
                :
                <img width={1400} src={Laptop2} alt="laptop-quests" className="slide-up"/>}
                {/* buttons to change laptops */}
                <div className="flex flex-row">
                    <button
                        onClick={()=>{setOption("tasks")}}
                        className={`flex flex-row items-center justify-center h-10 w-40 mr-3 sm:mr-6 mt-1 border custom-gray 
                            border-black rounded-xl icon-hover4 cursor-pointer ${option==="tasks"?'bg-black text-white':'bg-white text-black'}` }>
                        <h1 className="mr-4 text-lg">Tasks</h1>
                        <GiScrollQuill size={25}/>
                    </button>
                    <button
                        onClick={()=>{setOption("quests")}}
                        className={`flex flex-row items-center justify-center h-10 w-40 mr-3 sm:mr-6 mt-1 border custom-gray 
                                    border-black rounded-xl icon-hover4 cursor-pointer ${option==="quests"?'bg-black text-white':'bg-white text-black'}` }>
                        <h1 className="mr-4 text-lg">Quests</h1>
                        <GiScrollUnfurled size={20}/>
                    </button>
                </div>
            </div>

            {/* Features */}
            <div className="flex flex-col my-20">
                <div className="flex flex-row items-center space-x-3">
                    <BiSolidCategory size={35}/>
                    <h1 className="text-3xl">Features</h1>
                </div>
                <div className="grid grid-cols-3 gap-6">
                    <div className="flex flex-col justify-center items-center bg-gray-100 rounded-3xl">
                        <GiScrollUnfurled size={55}/>
                        <h1 className="text-2xl">Questing</h1>
                        <p className="max-w-xs text-center text-lg">Accept quests and gain experience</p>
                    </div>
                    <div className="flex flex-col items-center justify-center ">
                        <GiBroadsword size={55}/>
                        <h1 className="text-2xl">Leveling</h1>
                        <p className="max-w-sm text-center text-lg">Level feature categorized into fitness, work, and personal</p>
                    </div>
                        <img src={Person} width={300}/>
                    <div>
                        <GiScrollQuill size={55}/>
                        <h1 className="text-2xl">Tasking</h1>
                        <p className="max-w-sm text-lg">Create and complete day to day tasks to gain exp</p>
                    </div>
                    <div>
                        <FaSmile size={55}/>
                        <h1 className="text-2xl">Check-in</h1>
                        <p className="max-w-sm text-lg">Check-in daily and view your mood trend on a graph</p>
                    </div>
                    <div>
                        <IoMdJournal size={55}/>
                        <h1 className="text-2xl">Journaling</h1>
                        <p className="max-w-sm text-lg">Journaling feature to journal and manage your mental health</p>
                    </div>
                </div>
            </div>

            {/* see what others say */}
            {/* <div className="space-y-4 my-20">
                <div className="flex flex-row space-x-3">
                    <FaUser size={35}/>
                    <h1 className="text-3xl">See what others say</h1>
                </div>
                <div className="bg-gray-100 flex flex-row items-center p-6 space-x-3 h-96">
                    <img src={profile1} width={150} className="rounded-full"/>
                    <h1 className="text-2xl">“A phenomenal concept, and I love the simplicity of it”</h1>
                </div>
            </div> */}

            {/* What exactly is LifeXP */}
            <div className="my-20 space-y-7">
                <div className="flex items-center space-x-3">
                    <BsQuestionCircle size={40} />
                    <h1 className="text-3xl">What exactly is lifeXP?</h1>    
                </div>
                <p className="max-w-[1220px] text-2xl leading-loose">
                Life XP is a gamified productivity app designed to cater to a broader range of needs 
                beyond task management. Life XP integrates features that focus on emotional well-being, 
                personal development, and highly customizable user engagement models. Life XP aims to be 
                a holistic tool for life management. This innovative blend makes Life XP a comprehensive 
                solution for boosting productivity and emotional health.
                </p>
            </div>
            {/* mobile */}
            <div className="max-w-[1220px] my-20 space-y-7">
                <div className="flex flex-row items-center">
                    <CiMobile2 size={45}/>                   
                    <h1 className="text-3xl">Also coming to mobile</h1>
                </div>
                <img src={Mobile} width={1450}/>
            </div>

            {/* last button */}
            <div className="mb-10">
                 <button
                        onClick={handleLoginClick}
                        className=" flex items-center justify-center h-10 w-40 bg-white mr-3 sm:mr-6 mt-1 border custom-gray 
                                    border-black rounded-xl icon-hover4 
                                    cursor-pointer">
                                        
                        <h1 className="mr-4 text-lg">Sign up</h1>
                        <GameIcon width={"22"} height={"22"} />
                    </button>
            </div>

                {/* footer */}
            <footer className={`border-t border-black h-[130px] mt-40 lg:mt-10 transition-opacity ease-in duration-300 w-full`}>
                <div className="flex justify-center items-center cursor-default mt-3">
                    <h1 className="text-2xl border-r border-black px-2 mr-2">
                        Life XP
                    </h1>
                    <h2>
                        Your life into XP
                    </h2>
                </div>
                <div className="flex justify-between mt-12">
                    <div className="flex flex-row space-x-4 lg:space-x-12 ml-6">
                        <h2 className="hover:underline cursor-pointer">Privacy Policy</h2>
                        <h2 className="hover:underline cursor-pointer">Terms of Use</h2>
                    </div>
                    <div className="mr-6 cursor-default">
                        <h1>
                            {"@2024 Lifexponline.com"}
                        </h1>
                    </div>
                </div>
            </footer>
        </div>
    </div>)
    
}
LandingPageT.propTypes = {
    handleLoginClick: PropTypes.func.isRequired,
}
export default LandingPageT
