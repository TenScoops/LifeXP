import { BsQuestionCircle } from "react-icons/bs";
import { CiMobile2 } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import Mobile12 from "../../assets/mobile12.png";

import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import { FaUserGroup } from "react-icons/fa6";
import Explosion from "../../assets/Explosion.png";
import profile1 from "../../assets/profile1.png";
import profile2 from "../../assets/profile2.png";
import { Enter, GameIcon, Star } from "../Icons";

interface landingpageprops{
    handleLoginClick: ()=>void
}
const LandingPageT:React.FC<landingpageprops> = ({handleLoginClick}) =>{
    const [nav, setNav] = useState(false)
    const [reviewIndex, setReviewIndex] = useState<number>(0)
    const reviews = [
        {
            name: "John",
            image : <img src={profile1} width={150} className="rounded-full"/>,
            review: "“A phenomenal concept, clean and simple, with potential to be very impactful” " 
        },
        {
            name: "Mary",
            image : <img src={profile2} width={150} className="rounded-full"/>,
            review: "“A very intriguing concept which has potential to change lives” " 
        }
    ]
    // function to move to the next review
    const nextReview = () => {
        setReviewIndex((prevIndex)=>(prevIndex + 1) % reviews.length)
    }
    useEffect(()=>{
        const intervalId = setInterval(nextReview, 3700)
        return ()=>{
            clearInterval(intervalId)
        }
    }, [])

    const onClickNav =(nav:string)=>{
        document.getElementById(nav)?.scrollIntoView({ behavior: "smooth" })
        setNav(false)
    }
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
                {/* big nav */}
                <nav className="hidden sm:block">
                    <ul className="flex flex-row space-x-12 text-xl ml-10">
                        <li 
                            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })} 
                            className="cursor-pointer hover:underline">
                            About
                        </li>
                        <li 
                            onClick={() => document.getElementById("mobile")?.scrollIntoView({ behavior: "smooth" })} 
                            className="cursor-pointer hover:underline">
                            Mobile
                        </li>
                    </ul>
                </nav>

                
               

            </div>
            {/* CTA - login button */}
            <button
                onClick={handleLoginClick}
                className=" hidden sm:flex flex-row items-center justify-center h-10 w-40 mr-3 sm:mr-6 mt-1 border custom-gray 
                            border-black rounded-xl icon-hover4 
                            cursor-pointer">
                <h1 className="mr-4 text-lg">Login</h1>
                <Enter />
            </button>

            <button className="block sm:hidden mr-2"
                    onClick={()=>{setNav(true)}}>
                <RxHamburgerMenu size={30}/>
            </button>
            
            
        </div>

        {/* small nav - for mobile */}
        <div className={`${nav?'block':'hidden'}`}>
            <nav className="inset-0 fixed flex items-center justify-center bg-white z-50 h-full w-full">
                <ul className="flex flex-col items-start justify-center space-y-8">
                    <li 
                        onClick={()=>{onClickNav("about")}} 
                        className="cursor-pointer hover:underline text-xl">
                        About
                    </li>
                    <li 
                        onClick={()=>{onClickNav("mobile")}} 
                        className="cursor-pointer hover:underline text-xl">
                        Mobile
                    </li>
                </ul>
                <button 
                    onClick={()=>{setNav(false)}}
                    className="absolute right-2 top-3">
                    <RxHamburgerMenu size={30}/>
                </button>
            </nav>
        </div>

        {/* main content */}
        <div className="flex flex-col items-center justify-center mt-12">
          
        
            
              
            <div className="flex flex-col items-center space-y-10 mt-14 slide-down">
                <div className="flex flex-col items-center">
                    <GameIcon width={"57"} height={"57"} />
                    <h1 className="text-center  text-[22px] sm:text-[26px] lg:text-[36px] px-4 tracking-wider mt-3 text-gray-900">
                        Your one app to manage all aspects of your life
                    </h1>
                </div>
                
                <button
                    onClick={handleLoginClick}
                    className=" flex items-center justify-center h-10 w-40 bg-white mr-3 sm:mr-6 mt-1 border custom-gray 
                                border-black rounded-xl icon-hover4 
                                cursor-pointer">
                                    
                    <h1 className="mr-4 text-lg">Level Up</h1>
                    <GameIcon width={"22"} height={"22"} />
                </button>
            </div>
                
                
                
          
        
            <div className="flex flex-col items-center mt-4 slide-up">
               <img src={Explosion} width={1000}/>
            </div>

           

           
            {/* What exactly is LifeXP */}
            <div className="my-24 space-y-7" id="about">
                <div className="flex flex-col items-center space-y-3">
                    <BsQuestionCircle size={40} />
                    <h1 className="text-center text-[22px] sm:text-[26px] lg:text-[32px] ">What exactly is lifeXP?</h1>    
                </div>
                <p className="max-w-[1220px] text-center text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] px-4 xl:text-start leading-loose">
                Life XP is a gamified productivity app designed to cater to a broader range of needs 
                beyond task management. Life XP integrates features that focus on emotional well-being, 
                personal development, and highly customizable user engagement models. Life XP aims to be 
                a holistic tool for life management. This innovative blend makes Life XP a comprehensive 
                solution for boosting productivity and emotional health.
                </p>
            </div>

             {/* see what others say */}
             <div className="space-y-4 my-20 flex flex-col">
                <div className="flex flex-col items-center justify-center">
                    <FaUserGroup size={35}/>
                    <h1 className="text-center text-[22px] sm:text-[26px] lg:text-[32px] ">See what others say</h1>
                    <h3>Real opinions</h3>
                </div>

                <div className="bg-gray-100 flex flex-col sm:flex-row items-center p-8 md:space-x-5 h-96 md:h-80">
                    {reviews[reviewIndex].image}
                    
                    <div className="flex flex-col items-center space-y-5">
                        <h1 className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] text-center max-w-4xl">{reviews[reviewIndex].review}<span className="text-xl">-{reviews[reviewIndex].name}</span> </h1>
                        <div className="flex flex-row space-x-4 md:mr-16">
                            <Star />
                            <Star />
                            <Star />
                            <Star />
                            <Star />
                        </div>
                    </div>
                </div>
                
            </div>

            {/* mobile */}
            <div className="max-w-[1000px] flex flex-col items-center my-20 space-y-7" id="mobile">
                <div className="flex flex-col items-center">
                    <CiMobile2 size={45}/>                   
                    <h1 className="text-center text-[22px] sm:text-[26px] lg:text-[32px]">Also coming to mobile</h1>
                </div>
                <img src={Mobile12} width={1250}/>
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
            <footer className={`border-t border-black h-[80px] sm:h-[110px] mt-40 lg:mt-10 transition-opacity ease-in duration-300 w-full`}>
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
                        <h2 className="hover:underline cursor-pointer text-sm sm:text-lg">Privacy Policy</h2>
                        <h2 className="hover:underline cursor-pointer text-sm sm:text-lg">Terms of Use</h2>
                    </div>
                    <div className="mr-6 cursor-default">
                        <h1 className="text-sm sm:text-lg">
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
