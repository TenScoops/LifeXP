import { useState } from "react"
import CheckinParent from "./Components/DashboardPage/CheckinPage/CheckinParent"
import Home from "./Components/DashboardPage/Homepage/Home"
import Navbar from "./Components/DashboardPage/Navbar/Navbar"
import Quests from "./Components/DashboardPage/Questpage/Quests"
import Welcomepage from "./Components/DashboardPage/SkillTree/Welcomepage"
import LandingPage from "./Components/LandingPage/LandingPage"
import Loading from "./Components/LoadingScreen/index"
import Register from "./Components/Login-Register/Register"

import './index.css'

import { Route, Routes, useNavigate } from "react-router-dom"



const App = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleLoginClick = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            navigate('/home');
        }, 1000); 
    };

    return (
        <div className="bg-white font-source-code-pro">
            {isLoading ? <Loading /> : (
                <Routes>
                    {/* landing page */}
                    <Route path="/" element={<LandingPage handleLoginClick={handleLoginClick} />} />
                    {/* <Route path="/" element={<LandingPageT handleLoginClick={handleLoginClick}/>} /> */}
                    {/* TODO: login/register route */}
                    <Route path="/register" element={<Register />} />

                    {/* main content */}
                    <Route element={<Navbar />}>
                        <Route path="/home" element={<Home />} />
                        <Route path="/quests" element={<Quests />} />
                        <Route path="/checkin" element={<CheckinParent />} />
                        <Route path="/skilltree" element={<Welcomepage />} />
                    </Route>
                </Routes>
            )}
        </div>
    );
}

export default App
