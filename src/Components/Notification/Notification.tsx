import PropTypes from 'prop-types';
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { MdCheck } from "react-icons/md";
// import { PiCoins } from "react-icons/pi";

interface NotificationProps {
    setAccepted:Dispatch<SetStateAction<boolean>>
}

const Notification:React.FC<NotificationProps> = ({setAccepted}) =>{
    const [isVisible, setIsVisible] = useState<boolean>(true)
    
    useEffect(()=>{
        const timer = setTimeout(() => {
            setIsVisible(false);
            setAccepted(false)
          }, 2000); 
          
          return () => {clearTimeout(timer)}//cleanup
    }, [setAccepted]) //run once on component mount

    //dont run code below this conditional, if false
    // if(!isVisible) return null 

    return (
    <div className={`flex flex-row items-center justify-center absolute border space-x-2 border-black rounded-md top-[100px] w-48 h-10 fade ${!isVisible && 'hide'}`}>
        {/* <div className="flex flex-row items-center">
            
            <PiCoins size={21}/>
            <h1 className="text-sm ">+35</h1>
        </div>
       
        <h1 className="text-sm">Checking in</h1> */}

        <div className="flex flex-row items-center">
            {/* <h1 className="text-sm mr-1">+35</h1> */}
            <MdCheck size={21}/>
        </div>
        
        <h1 className="text-sm">Quest Accepted</h1>
    </div>)
}

Notification.propTypes = {
    setAccepted: PropTypes.func.isRequired
}

export default Notification