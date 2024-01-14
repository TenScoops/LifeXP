// import { GiBiceps } from "react-icons/gi";
import { FaStar } from "react-icons/fa";
import PropTypes from 'prop-types'


interface QuestcardProps {
    Title: string
    Reward: string
}
const icons = {
   "work":<svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M40.0043 21.4529C38.1151 20.2569 31.4986 17.7828 25.9936 15.9317L29.9896 11.1695L30.4231 11.6879L31.3778 10.5508L30.9443 10.0315L33.7073 6.73702L33.1786 6.10529L35.9416 2.8125L33.5836 0L30.8198 3.29365L30.2881 2.66192L27.5228 5.95558L26.4878 4.72327L20.1045 12.3404L20.9093 13.3036L26.3251 6.8426L26.5621 7.10221L20.7158 14.0694C15.4395 11.2777 13.44 14.3593 10.7063 18.617C9.21002 20.9466 7.34702 23.8474 4.44826 26.672C3.50026 27.5937 2.52901 29.1808 2.64826 30.8717C2.70676 31.7112 3.07876 32.9002 4.41526 33.9438L1.56975 40.0336L0 41.908L0.777002 42.8348L2.35426 40.9561L6.00901 38.5356C6.69077 39.5853 7.74227 40.3304 8.81552 40.4524C11.3963 40.7501 13.5833 41.8587 15.699 42.9309C17.7968 43.9953 19.7775 45 21.8461 45C24.5738 45 26.7038 44.5734 28.9576 44.1208C31.8833 43.5349 35.1998 42.8712 40.8008 42.8712C42.8843 42.8712 44.3529 40.9067 44.8299 37.485C45.6721 31.4654 43.2811 23.5246 40.0043 21.4529ZM18.0053 30.6164C17.286 30.2339 16.602 29.8713 16.038 29.6325C15.9968 29.6152 15.951 29.6005 15.9098 29.5832C16.2338 28.9973 16.8923 28.0047 18.1913 26.6028C18.093 28.2626 18.0338 29.7969 18.0053 30.6164ZM30.2888 4.21529L32.4053 6.73702L30.2933 9.25356L28.1768 6.73183L30.2888 4.21529ZM27.2206 7.87154L29.3371 10.3933L13.6613 29.0752C11.6025 28.9237 9.13052 29.5711 7.00277 31.9682L27.2206 7.87154ZM5.42701 28.0099C8.49077 25.0953 10.3815 22.0638 11.925 19.6615C14.583 15.5224 15.972 13.1123 19.908 15.0335L6.01051 31.5978C5.32276 31.1296 3.69301 29.6593 5.42701 28.0099ZM2.97376 39.2928L5.19301 34.5262L5.38426 34.7538C5.14476 35.6669 5.18744 36.6475 5.50501 37.5283L2.97376 39.2928ZM43.7596 36.971C43.5564 38.4317 42.0278 40.4204 40.3006 40.4204C34.5683 40.4204 31.6831 41.3948 28.6906 41.9538C22.8976 43.0347 18.5978 41.6596 16.7258 40.2828C12.0338 36.8334 9.47552 38.6126 7.31927 36.6958C6.62551 36.0788 6.68777 34.5713 7.36652 33.6288C10.3665 29.4733 14.2725 30.1699 15.54 30.8639C19.1888 32.863 22.5068 33.1572 23.3941 32.9339C24.2828 32.7245 25.0688 32.1672 25.6823 31.4688C24.9848 32.0599 24.1703 32.4493 23.3393 32.5004C22.5106 32.567 20.124 31.7077 19.7198 31.5078C19.5735 30.6796 19.338 29.2033 19.3163 28.1207C20.8118 29.88 22.4558 30.3265 22.4558 30.3265L19.257 25.4596C19.257 25.4596 23.9371 19.5136 27.0511 17.6885C32.2936 19.4642 37.8031 21.4563 39.3886 22.4602C42.0871 24.1659 44.4871 31.7683 43.7596 36.971Z" fill="black"/>
            </svg>,
    "personal":<svg width="40" height="47" viewBox="0 0 40 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.60736 16.4282L5.59468 16.5323L5.54122 16.6226L0.614986 24.939C0.512337 25.1125 0.475796 25.3245 0.51609 25.5068C0.552914 25.6734 0.656418 25.8343 0.886986 25.9413C0.887138 25.9413 0.887295 25.9414 0.887447 25.9415L5.17515 27.9101L5.46652 28.0439V28.3645V35.25C5.46652 36.3749 5.88318 37.4472 6.61492 38.2326C7.34554 39.0167 8.32859 39.45 9.34549 39.45H13.7223H14.2221L14.2223 39.9498L14.2243 46.5H32.9298V38.3191C32.9298 35.4251 33.9276 32.6973 35.755 30.2533C37.763 27.5623 39.0243 24.3135 39.3896 20.8809C39.755 17.4482 39.2091 13.9756 37.8166 10.8641C36.4241 7.75283 34.2434 5.13221 31.53 3.30048C28.8171 1.46903 25.6808 0.499656 22.4824 0.5C18.3612 0.500288 14.3748 2.10933 11.2679 5.03673C8.16008 7.96498 6.14501 12.0128 5.60736 16.4282ZM23.277 13.2022L23.2769 13.2022L23.2829 13.196C24.0968 12.3518 25.1948 11.8778 26.3423 11.8882C27.4897 11.8987 28.5796 12.3926 29.3798 13.2511C30.1788 14.1084 30.6267 15.2612 30.6366 16.4598C30.6466 17.6584 30.2179 18.8193 29.4335 19.6913L29.4336 19.6914L29.4277 19.6977L22.8483 26.7618L22.4824 27.1547L22.1165 26.7618L15.5399 19.7008C15.1295 19.2743 14.8039 18.7664 14.5803 18.2076C14.3562 17.6473 14.2388 17.046 14.234 16.4383C14.2292 15.8306 14.3371 15.2273 14.5522 14.6632C14.7674 14.0991 15.0859 13.5844 15.4908 13.15C15.8958 12.7155 16.3794 12.3698 16.9143 12.135C17.4493 11.9002 18.0239 11.7816 18.6042 11.7871C19.1846 11.7927 19.757 11.9223 20.2879 12.1671C20.8172 12.4114 21.2937 12.7649 21.6907 13.2053L22.4824 14.0551L23.277 13.2022Z" fill="black" stroke="black"/>
                </svg>
}
const Questcard: React.FC<QuestcardProps> = ({ Title, Reward }) =>{
    return(
        <div className="flex flex-col space-y-5 items-center justify-center rounded-xl border-black w-[256px] h-[420px] border-1 shadow-sharp-sm 
                        icon-hover4 mb-10 mr-10 ml-10 shadow-transition duration-200 hover:shadow-sharp-lg cursor-pointer">
            <h1 className="tracking-widest text-sm mb-1">
                {Title}
            </h1> 

            {/* <GiBiceps size={55}/> */}
            {icons.work}
        
            <div className="flex items-center justify-center h-[58px] w-5/6 mt-2 mb-2 bg-quest-gray1">
                <p className=" text-md text-center font-mono tracking-wide">
                    Bench 20 lbs
                </p>
            </div>
            
            <div className="flex flex-col items-center">
                <h1 className="text-sm">
                    Difficulty
                </h1>
                <div className="flex flex-row mt-2">
                    <FaStar className="text-quest-gray3" size={20}/>
                    <FaStar className="text-quest-gray3" size={20}/>
                    <FaStar className="text-quest-gray3" size={20}/>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <h1 className="text-sm mb-1">
                    Reward
                </h1>
                <h1 className="text-sm tracking-normal font-bold">
                    {Reward}
                </h1>
            </div>
            <button className="bg-quest-gray2 border-[1.5px] border-black text-white 
                                w-7/12 h-10 rounded-md text-xs hover:bg-quest-gray4">
                Accept
            </button>
        </div>
    )
}

Questcard.propTypes = {
    Reward: PropTypes.string.isRequired,
    Title: PropTypes.string.isRequired
};
export default Questcard