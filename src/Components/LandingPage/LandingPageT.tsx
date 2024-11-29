import Controller from "../../assets/controller.png";
import Laptop1 from "../../assets/Laptop.png";
import Person from "../../assets/Person.png";
import Mobile from "../../assets/Phones.png";
import { Enter, GameIcon } from "../Icons";
const LandingPageT = ({handleLoginClick}) =>{
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
                className="flex flex-row items-center justify-center h-10 w-40 mr-3 sm:mr-6 mt-1 border custom-gray 
                            border-black rounded-xl icon-hover4 
                            cursor-pointer">
                <h1 className="mr-4 text-lg">Login</h1>
                <Enter />
            </button>
            
            
        </div>
        <div className="flex flex-col items-center justify-center mt-12">
          
          {/* intro */}
            <div className="flex flex-row bg-gray-100 rounded-full h-80 px-20">
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
                <img src={Laptop1}/>
                {/* buttons to change laptops */}
                <div>
                    <button
                        className=" h-10 w-40 bg-white mr-3 sm:mr-6 mt-1 border custom-gray 
                                    border-black rounded-xl icon-hover4 cursor-pointer">
                        <h1 className="mr-4 text-lg">Tasks</h1>
                    
                    </button>
                    <button
                        className=" h-10 w-40 bg-white mr-3 sm:mr-6 mt-1 border custom-gray 
                                    border-black rounded-xl icon-hover4 cursor-pointer">
                        <h1 className="mr-4 text-lg">Quests</h1>
                    
                    </button>
                </div>
            </div>

            {/* Features */}
            <div className="flex flex-col">
                <div>
                    <GameIcon width="22" height="22"/>
                    <h1 className="text-3xl">Features</h1>
                </div>
                <div className="grid grid-cols-3">
                    <div className="flex flex-col justify-center">
                        <GameIcon width="22" height="22"/>
                        <h1 className="text-2xl">Questing</h1>
                        <p className="max-w-sm text-lg">Accept quests and gain experience</p>
                    </div>
                    <div className="flex flex-col justify-center">
                        <GameIcon width="22" height="22"/>
                        <h1 className="text-2xl">Leveling</h1>
                        <p className="max-w-sm text-lg">Level feature categorized into fitness, work, and personal</p>
                    </div>
                        <img src={Person} width={300}/>
                    <div>
                        <GameIcon width="22" height="22"/>
                        <h1 className="text-2xl">Tasking</h1>
                        <p className="max-w-sm text-lg">Create and complete day to day tasks to gain exp</p>
                    </div>
                    <div>
                        <GameIcon width="22" height="22"/>
                        <h1 className="text-2xl">Check-in</h1>
                        <p className="max-w-sm text-lg">Check-in daily and view your mood trend on a graph</p>
                    </div>
                    <div>
                        <GameIcon width="22" height="22"/>
                        <h1 className="text-2xl">Journaling</h1>
                        <p className="max-w-sm text-lg">Journaling feature to journal and manage your mental health</p>
                    </div>
                </div>
            </div>

            {/* see what others say */}
            <div>
                <div>
                    <h1>See what others say</h1>
                </div>
                <div>
                    <h1>“A phenomenal concept, and I love the simplicity of it”</h1>
                </div>
            </div>

            {/* What exactly is LifeXP */}
            <div>
                <div>
                    <GameIcon width="22" height="22"/>
                    <h1>what exactly is lifeXP?</h1>    
                </div>
                <p className="max-w-[1400px] text-2xl leading-10">
                Life XP is a gamified productivity app designed to cater to a broader range of needs 
                beyond task management. Life XP integrates features that focus on emotional well-being, 
                personal development, and highly customizable user engagement models. Life XP aims to be 
                a holistic tool for life management. This innovative blend makes Life XP a comprehensive 
                solution for boosting productivity and emotional health.
                </p>
            </div>
            {/* mobile */}
            <div>
                <div>
                    <GameIcon width="22" height="22"/>
                    <h1 className="text-3xl">Also coming to mobile</h1>
                </div>
                <img src={Mobile} width={1450}/>
            </div>
        </div>
    </div>)
}
export default LandingPageT