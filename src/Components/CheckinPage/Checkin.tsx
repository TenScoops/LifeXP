// import { HiEmojiHappy } from "react-icons/hi";
import Moodcard from "./Moodcard";

const Checkin = () => {

   
    const face: Record<string, React.ReactElement> = {
        
        "Happy" : <svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M31 0C13.875 0 0 13.875 0 31C0 48.125 13.875 62 31 62C48.125 62 62 48.125 62 31C62 13.875 48.125 0 31 0ZM41 21C43.2125 21 45 22.7875 45 25C45 27.2125 43.2125 29 41 29C38.7875 29 37 27.2125 37 25C37 22.7875 38.7875 21 41 21ZM21 21C23.2125 21 25 22.7875 25 25C25 27.2125 23.2125 29 21 29C18.7875 29 17 27.2125 17 25C17 22.7875 18.7875 21 21 21ZM45.35 42.275C41.7875 46.55 36.5625 49 31 49C25.4375 49 20.2125 46.55 16.65 42.275C14.95 40.2375 18.025 37.6875 19.725 39.7125C22.525 43.075 26.625 44.9875 31 44.9875C35.375 44.9875 39.475 43.0625 42.275 39.7125C43.95 37.6875 47.0375 40.2375 45.35 42.275Z" fill="black"/>
            </svg>,
        "Ok" : <svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M31 62C22.7783 62 14.8933 58.7339 9.07969 52.9203C3.26606 47.1067 0 39.2217 0 31C0 22.7783 3.26606 14.8933 9.07969 9.07969C14.8933 3.26606 22.7783 0 31 0C39.2217 0 47.1067 3.26606 52.9203 9.07969C58.7339 14.8933 62 22.7783 62 31C62 39.2217 58.7339 47.1067 52.9203 52.9203C47.1067 58.7339 39.2217 62 31 62ZM34.875 25.1875C34.875 28.396 36.611 31 38.75 31C40.889 31 42.625 28.396 42.625 25.1875C42.625 21.979 40.889 19.375 38.75 19.375C36.611 19.375 34.875 21.979 34.875 25.1875ZM46.5 40.6875C46.5 40.1736 46.2959 39.6808 45.9325 39.3175C45.5692 38.9541 45.0764 38.75 44.5625 38.75H17.4375C16.9236 38.75 16.4308 38.9541 16.0675 39.3175C15.7041 39.6808 15.5 40.1736 15.5 40.6875C15.5 41.2014 15.7041 41.6942 16.0675 42.0575C16.4308 42.4209 16.9236 42.625 17.4375 42.625H44.5625C45.0764 42.625 45.5692 42.4209 45.9325 42.0575C46.2959 41.6942 46.5 41.2014 46.5 40.6875ZM23.25 31C25.389 31 27.125 28.396 27.125 25.1875C27.125 21.979 25.389 19.375 23.25 19.375C21.111 19.375 19.375 21.979 19.375 25.1875C19.375 28.396 21.111 31 23.25 31Z" fill="black"/>
                </svg>,
        "Angry" : <svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M31 0C48.125 0 62 13.875 62 31C62 48.125 48.125 62 31 62C13.875 62 0 48.125 0 31C0 13.875 13.875 0 31 0ZM45 29C45 27.8375 44.4875 26.8125 43.6875 26.075L47.5625 24.9125C48.625 24.6 49.225 23.475 48.9 22.425C48.5875 21.3625 47.475 20.775 46.4125 21.0875L36.4125 24.0875C35.35 24.4 34.75 25.525 35.075 26.575C35.3375 27.4375 36.125 28 36.9875 28C37.05 28 37.125 27.975 37.2 27.975C37.1125 28.3125 36.9875 28.6375 36.9875 29C36.9875 31.2125 38.775 33 40.9875 33C43.2 33 45 31.2125 45 29ZM24 48.275C27.475 44.1 34.525 44.1 38.0125 48.275C39.7 50.3125 42.7875 47.75 41.0875 45.7125C38.5875 42.7125 34.9125 40.9875 31.0125 40.9875C27.1125 40.9875 23.4375 42.7125 20.9375 45.7125C19.2125 47.775 22.325 50.2875 24 48.275ZM14.425 24.9125L18.3 26.075C17.5125 26.8 16.9875 27.8375 16.9875 29C16.9875 31.2125 18.775 33 20.9875 33C23.2 33 24.9875 31.2125 24.9875 29C24.9875 28.6375 24.875 28.3 24.775 27.975C24.85 27.9875 24.9125 28 24.9875 28C25.85 28 26.6375 27.4375 26.9 26.575C27.2125 25.5125 26.6125 24.4 25.5625 24.0875L15.5625 21.0875C14.5125 20.775 13.3875 21.375 13.075 22.425C12.7625 23.4875 13.3625 24.6 14.425 24.9125Z" fill="black"/>
                </svg>
        ,
        "Sad" : <svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M31 0C24.8688 0 18.8753 1.81812 13.7773 5.22444C8.67941 8.63076 4.70606 13.4723 2.35975 19.1368C0.0134317 24.8013 -0.600471 31.0344 0.59567 37.0478C1.79181 43.0612 4.74428 48.5849 9.0797 52.9203C13.4151 57.2557 18.9388 60.2082 24.9522 61.4043C30.9656 62.6005 37.1987 61.9866 42.8632 59.6403C48.5277 57.2939 53.3692 53.3206 56.7756 48.2227C60.1819 43.1247 62 37.1312 62 31C62 22.7783 58.7339 14.8933 52.9203 9.07969C47.1067 3.26606 39.2217 0 31 0ZM48.4375 23.7925C48.4375 24.4823 48.233 25.1565 47.8498 25.73C47.4665 26.3036 46.9219 26.7506 46.2846 27.0145C45.6474 27.2785 44.9461 27.3475 44.2696 27.213C43.5931 27.0784 42.9717 26.7463 42.484 26.2585C41.9962 25.7708 41.6641 25.1494 41.5295 24.4729C41.3949 23.7964 41.464 23.0951 41.728 22.4579C41.9919 21.8206 42.4389 21.276 43.0125 20.8927C43.586 20.5095 44.2602 20.305 44.95 20.305C45.8749 20.305 46.762 20.6724 47.416 21.3265C48.0701 21.9805 48.4375 22.8676 48.4375 23.7925ZM18.3094 27.28C17.6196 27.28 16.9454 27.0755 16.3718 26.6922C15.7983 26.309 15.3513 25.7644 15.0874 25.1271C14.8234 24.4898 14.7543 23.7886 14.8889 23.1121C15.0235 22.4356 15.3556 21.8142 15.8434 21.3265C16.3311 20.8387 16.9525 20.5066 17.629 20.372C18.3055 20.2374 19.0067 20.3065 19.644 20.5705C20.2812 20.8344 20.8259 21.2814 21.2091 21.8549C21.5923 22.4285 21.7969 23.1027 21.7969 23.7925C21.797 24.2571 21.7043 24.717 21.5242 25.1452C21.3441 25.5735 21.0803 25.9615 20.7482 26.2863C20.4161 26.6112 20.0224 26.8665 19.5903 27.0371C19.1582 27.2077 18.6964 27.2903 18.2319 27.28H18.3094ZM45.4344 41.8694C45.7427 42.2805 45.8751 42.7972 45.8024 43.3059C45.7297 43.8146 45.458 44.2736 45.0469 44.5819C44.6358 44.8902 44.1191 45.0226 43.6104 44.9499C43.1017 44.8772 42.6427 44.6054 42.3344 44.1944C41.0559 42.4833 39.3913 41.0983 37.4762 40.1523C35.5611 39.2063 33.4497 38.7261 31.3138 38.7506C29.1779 38.7752 27.0781 39.3039 25.1852 40.2936C23.2924 41.2834 21.6601 42.7062 20.4213 44.4462C20.1232 44.865 19.671 45.1483 19.1642 45.2337C18.6573 45.3191 18.1372 45.1996 17.7184 44.9016C17.2997 44.6035 17.0164 44.1513 16.931 43.6444C16.8456 43.1376 16.9651 42.6175 17.2631 42.1987C18.8556 39.9618 20.9537 38.1324 23.3869 36.8598C25.82 35.5871 28.5194 34.907 31.2651 34.8749C34.0108 34.8428 36.7252 35.4596 39.1875 36.675C41.6497 37.8905 43.7901 39.6702 45.4344 41.8694Z" fill="black"/>
                </svg>
        ,
        "Reallysad" : <svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M31 0C13.875 0 0 13.875 0 31C0 48.125 13.875 62 31 62C48.125 62 62 48.125 62 31C62 13.875 48.125 0 31 0ZM41 21C43.2125 21 45 22.7875 45 25C45 27.2125 43.2125 29 41 29C38.7875 29 37 27.2125 37 25C37 22.7875 38.7875 21 41 21ZM19 51C15.6875 51 13 48.375 13 45.125C13 42.625 16.5625 37.575 18.2 35.4C18.6 34.8625 19.4 34.8625 19.8 35.4C21.4375 37.575 25 42.625 25 45.125C25 48.375 22.3125 51 19 51ZM21 29C18.7875 29 17 27.2125 17 25C17 22.7875 18.7875 21 21 21C23.2125 21 25 22.7875 25 25C25 27.2125 23.2125 29 21 29ZM42.275 48.275C39.475 44.925 35.3625 43 31 43C28.35 43 28.35 39 31 39C36.55 39 41.7875 41.45 45.3375 45.725C47.0625 47.775 43.9375 50.2875 42.275 48.275Z" fill="black"/>
                        </svg>
        ,
        "Depressed" : <svg width="58" height="78" viewBox="0 0 58 97" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M30 63C20.6089 63 13 70.6089 13 80C13 89.3911 20.6089 97 30 97C39.3911 97 47 89.3911 47 80C47 70.6089 39.3911 63 30 63ZM35.4839 74.5161C36.6972 74.5161 37.6774 75.4964 37.6774 76.7097C37.6774 77.923 36.6972 78.9032 35.4839 78.9032C34.2706 78.9032 33.2903 77.923 33.2903 76.7097C33.2903 75.4964 34.2706 74.5161 35.4839 74.5161ZM23.4194 90.9677C21.6028 90.9677 20.129 89.5282 20.129 87.746C20.129 86.375 22.0827 83.6056 22.9806 82.4129C23.2 82.1181 23.6387 82.1181 23.8581 82.4129C24.756 83.6056 26.7097 86.375 26.7097 87.746C26.7097 89.5282 25.2359 90.9677 23.4194 90.9677ZM24.5161 78.9032C23.3028 78.9032 22.3226 77.923 22.3226 76.7097C22.3226 75.4964 23.3028 74.5161 24.5161 74.5161C25.7294 74.5161 26.7097 75.4964 26.7097 76.7097C26.7097 77.923 25.7294 78.9032 24.5161 78.9032ZM36.1831 89.4734C34.6476 87.6363 32.3923 86.5806 30 86.5806C28.5468 86.5806 28.5468 84.3871 30 84.3871C33.0435 84.3871 35.9157 85.7306 37.8625 88.075C38.8085 89.1992 37.0948 90.577 36.1831 89.4734Z" fill="black"/>
                        <path d="M10.2487 48.4933C9.92279 48.4931 9.60231 48.4096 9.3177 48.2508C9.0331 48.0919 8.79382 47.863 8.62258 47.5856C8.45134 47.3083 8.35383 46.9918 8.3393 46.6662C8.32477 46.3406 8.39371 46.0166 8.53957 45.7252L11.4081 39.9881C11.6351 39.5345 12.0329 39.1896 12.5142 39.0294C12.9954 38.8691 13.5206 38.9066 13.9742 39.1335C14.4278 39.3605 14.7727 39.7584 14.933 40.2396C15.0932 40.7209 15.0558 41.2461 14.8288 41.6997L11.9603 47.4367C11.8013 47.7544 11.5569 48.0216 11.2546 48.2082C10.9523 48.3948 10.604 48.4935 10.2487 48.4933ZM13.1173 56.1427C12.7913 56.1425 12.4708 56.059 12.1862 55.9002C11.9016 55.7413 11.6623 55.5124 11.4911 55.235C11.3199 54.9577 11.2224 54.6412 11.2078 54.3156C11.1933 53.99 11.2622 53.666 11.4081 53.3746L13.3204 49.5499C13.5474 49.0962 13.9453 48.7514 14.4265 48.5911C14.6648 48.5118 14.9164 48.4801 15.1669 48.498C15.4174 48.5159 15.662 48.5829 15.8866 48.6953C16.1112 48.8077 16.3114 48.9632 16.476 49.153C16.6405 49.3427 16.766 49.5631 16.8453 49.8014C16.9247 50.0396 16.9563 50.2912 16.9384 50.5417C16.9206 50.7923 16.8535 51.0368 16.7412 51.2614L14.8288 55.0861C14.6698 55.4038 14.4255 55.671 14.1232 55.8576C13.8208 56.0442 13.4725 56.1429 13.1173 56.1427ZM43.7148 48.4933C43.3889 48.4931 43.0684 48.4096 42.7838 48.2508C42.4992 48.0919 42.2599 47.863 42.0887 47.5856C41.9174 47.3083 41.8199 46.9918 41.8054 46.6662C41.7909 46.3406 41.8598 46.0166 42.0057 45.7252L44.8742 39.9881C45.1011 39.5345 45.499 39.1896 45.9803 39.0294C46.4615 38.8691 46.9867 38.9066 47.4403 39.1335C47.8939 39.3605 48.2388 39.7584 48.3991 40.2396C48.5593 40.7209 48.5219 41.2461 48.2949 41.6997L45.4264 47.4367C45.2674 47.7544 45.023 48.0216 44.7207 48.2082C44.4184 48.3948 44.0701 48.4935 43.7148 48.4933ZM46.5833 56.1427C46.2574 56.1425 45.9369 56.059 45.6523 55.9002C45.3677 55.7413 45.1284 55.5124 44.9572 55.235C44.7859 54.9577 44.6884 54.6412 44.6739 54.3156C44.6594 53.99 44.7283 53.666 44.8742 53.3746L46.7865 49.5499C47.0135 49.0962 47.4114 48.7514 47.8926 48.5911C48.3738 48.4308 48.899 48.4683 49.3527 48.6953C49.8063 48.9222 50.1511 49.3201 50.3114 49.8014C50.4717 50.2826 50.4342 50.8078 50.2072 51.2614L48.2949 55.0861C48.1359 55.4038 47.8916 55.671 47.5892 55.8576C47.2869 56.0442 46.9386 56.1429 46.5833 56.1427Z" fill="black"/>
                        <path d="M47.2811 15.1348C46.4818 11.3469 44.4875 7.91558 41.5919 5.34599C39.4443 3.42476 36.8731 2.03824 34.0878 1.29946C31.3026 0.560683 28.3822 0.490563 25.5647 1.09482C22.7472 1.69907 20.1124 2.96059 17.8751 4.77654C15.6378 6.59249 13.8612 8.91145 12.6903 11.5444C6.00549 11.9388 0.686768 17.4954 0.686768 24.2699C0.686768 31.3001 6.41305 37.0192 13.4517 37.0192H21.3772L19.8365 46.2666C19.7909 46.5406 19.8055 46.8212 19.8792 47.0889C19.953 47.3566 20.0842 47.6051 20.2636 47.817C20.4431 48.0289 20.6666 48.1992 20.9186 48.316C21.1705 48.4328 21.4449 48.4933 21.7226 48.4933H25.5473V56.1427C25.548 56.5473 25.6769 56.9412 25.9156 57.2678C26.1543 57.5944 26.4904 57.8369 26.8757 57.9605C27.2609 58.084 27.6753 58.0822 28.0595 57.9553C28.4436 57.8284 28.7776 57.583 29.0134 57.2543L38.5752 43.8678C38.7793 43.5821 38.9008 43.2456 38.9263 42.8954C38.9519 42.5452 38.8805 42.1946 38.72 41.8823C38.5595 41.5699 38.3161 41.3078 38.0164 41.1247C37.7168 40.9415 37.3725 40.8444 37.0214 40.8439H33.7333L34.6895 37.0192H47.1006C49.9797 37.0077 52.7383 35.862 54.7785 33.8304C56.8186 31.7989 57.976 29.0452 57.9997 26.1662C58.0234 23.2871 56.9117 20.5147 54.9053 18.4498C52.8989 16.3849 50.1596 15.1939 47.2811 15.1348Z" fill="black"/>
                        </svg>
        
    }

    return(
    <div className="border-[1.5px] border-black h-screen md:w-[99%]">
       
       <div className="mt-16">
            <button>
                {">"}
            </button>
            <div className="flex flex-col items-center">
                <h1 className="mb-4">
                    Hows your mood today?
                </h1>
                {/* Mood cards */}
                <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row md:space-x-12 mt-4">
                    <Moodcard Title="Happy" Mood = {face.Happy} />
                    <Moodcard Title="Ok" Mood = {face.Ok} />
                    <Moodcard Title="Angry" Mood = {face.Angry} />
                    <Moodcard Title="Sad" Mood = {face.Sad} />
                    <Moodcard Title="Really sad" Mood = {face.Reallysad} />
                    <Moodcard Title="Depressed" Mood = {face.Depressed} />
                </div>
                <h1 className="text-sm md:text-base mt-10 mb-2">
                    Here you can journal your thoughts and how you're feeling
                </h1>
                <div className="w-10/12 space-y-3 flex flex-col justify-center items-center">
                    <input 
                        className="border border-black text-sm py-1 w-11/12 md:w-10/12"
                        placeholder="Title of entry"
                    />
                    <input 
                        className="border border-black text-sm py-1 w-11/12 md:w-10/12 h-64 "
                        placeholder="Journal your thoughts here"
                    />
                </div>
            </div>
        </div>
    </div>)
}
export default Checkin