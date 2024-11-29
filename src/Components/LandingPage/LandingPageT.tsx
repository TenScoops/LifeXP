import Controller from "../../assets/controller.png";
import Laptop1 from "../../assets/Laptop.png";
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
                className="flex flex-row items-center justify-center h-10 w-32 mr-3 sm:mr-6 mt-1 border custom-gray 
                            border-black rounded-xl icon-hover4 
                            cursor-pointer">
                <h1 className="mr-2 text-lg">Login</h1>
                <Enter />
            </button>
            
            
        </div>
        <div className="flex flex-col items-center justify-center mt-12">
          
            <div className="flex flex-row bg-gray-200 rounded-[70px] h-80">
                {/* intro pres */}
                <div className="flex justify-center flex-col space-y-10">
                    <div className="flex flex-row items-center space-x-3">
                        <GameIcon width={"47"} height={"47"} />
                        <h1 className="text-[36px] tracking-wider text-gray-900">
                            Your Life Into XP!
                        </h1>
                    </div>
                    <h1 className="text-2xl">Gain experience points from your day to day tasks</h1>
                    <button
                        className="flex flex-row items-center bg-white justify-center h-9 w-32 mr-3 sm:mr-6 mt-1 border custom-gray 
                                border-black rounded-xl icon-hover4 
                                cursor-pointer">
                        <h1 className="mr-2">Login</h1>
                    
                    </button>
                </div>
                {/* controller image */}
                <img src={Controller} width={500} className="rounded-full"/>
                
            </div>
            {/* laptops */}
            <div>
                <img src={Laptop1}/>
                <div>
                    <button>1</button>
                    <button>2</button>
                </div>
            </div>
        </div>
    </div>)
}
export default LandingPageT