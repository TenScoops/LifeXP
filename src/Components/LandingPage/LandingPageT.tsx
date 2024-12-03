import { BsQuestionCircle } from "react-icons/bs";
import { CiMobile2 } from "react-icons/ci";
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
    const [reviewIndex, setReviewIndex] = useState<number>(0)
    const reviews = [
        {
            image : <img src={profile1} width={150} className="rounded-full"/>,
            review: "“A phenomenal concept, clean and simple, with potential to be very impactful” -John" 
        },
        {
            image : <img src={profile2} width={150} className="rounded-full"/>,
            review: "“A very intriguing concept which has potential to change lives” -Mary" 
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
                        <li>About</li>
                        <li>Mobile</li>
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
          
        
            
              
            <div className="flex flex-col items-center space-y-10 mt-14 slide-down">
                <div className="flex flex-col items-center">
                    <GameIcon width={"47"} height={"47"} />
                    <h1 className="text-[36px] tracking-wider mt-3 text-gray-900">
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
            <div className="my-24 space-y-7">
                <div className="flex flex-col items-center space-y-3">
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

             {/* see what others say */}
             <div className="space-y-4 my-20 flex flex-col">
                <div className="flex flex-col items-center justify-center">
                    <FaUserGroup size={35}/>
                    <h1 className="text-3xl">See what others say</h1>
                    <h3>Real opinions</h3>
                </div>
                <div className="bg-gray-100 flex flex-row items-center p-8 space-x-5 h-80">
                    {reviews[reviewIndex].image}
                    
                    <div className="flex flex-col items-center space-y-5">
                        <h1 className="text-2xl max-w-4xl">{reviews[reviewIndex].review} </h1>
                        <div className="flex flex-row space-x-4 mr-16">
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
            <div className="max-w-[1000px] flex flex-col items-center my-20 space-y-7">
                <div className="flex flex-col items-center">
                    <CiMobile2 size={45}/>                   
                    <h1 className="text-3xl">Also coming to mobile</h1>
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
