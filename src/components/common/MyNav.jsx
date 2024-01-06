import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { NavDiscordIcons, NavIcons, NavInstagramIcons, NavTwitterIcons } from './Icons';
const MyNav = () => {
    const [showNavbar, setShowNavbar] = useState(true);
    if (showNavbar) {
        document.body.classList.remove('overflow-hidden');
    } else {
        document.body.classList.add('overflow-hidden')
    }

    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        // Function to handle scroll events
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        // Add the scroll event listener when the component mounts
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>
            <section className='fixed top-0 w-full z-[1000]'>
                <nav className={`navbar ${scrolling ? 'scrolling' : ''}`}>
                    <div className='container max-w-[1140px] mx-auto px-4 '>
                        <nav className='flex justify-between items-center py-2'>
                            <ul className="flex justify-between items-center w-[90%] md:w-0">
                                <li className="flex items-center flex-col">  <NavIcons />
                                    <h2 className="text-white font-Black_Sans text-[10px] leading-normal w-16 mt-1"> Trippy Goat</h2></li>
                                <li className="border hidden sm:block md:hidden border-solid p-[6px] rounded-sm me-7 h-full"><Link onClick={() => setShowNavbar(true)} className='px-[8.5px]  pt-[5.2px] pb-[4px] bg-[#FF7D01] text-white  rounded-sm  font-Black_Sans  md:me-0 hidden sm:block md:hidden common_btn hover:bg-transparent ' to="/Touch">Connect Wallet</Link></li>
                            </ul>
                            <ul className={`${showNavbar ? 'flex items-center justify-between mb-0 nav_sm p-0' : 'flex items-center mb-0 nav_sm nav_show p-0'} `}>
                                <li><Link onClick={() => setShowNavbar(true)} className='text-[#FF7D01] mt-5 md:mt-0 font-m_plus text-[5vw] sm:text-[3vw] md:text-base hover:text-[#FF7D01] leading-normal inline-block  relative  after:w-0 after:h-[2px] after:rounded-sm after:transition-all transition-all  after:ease-in-out ease-in-out after:duration-300 duration-300 after:bg-[#FF7D01] after:absolute after:bottom-0 hover:after:w-full hover:after:left-0 after:left-[50%]  ' to="/">Home</Link></li>
                                <li><Link onClick={() => setShowNavbar(true)} className='md:ms-5 mt-5 md:mt-0 font-m_plus text-[5vw] sm:text-[3vw] md:text-base hover:text-[#FF7D01] leading-normal inline-block  relative  after:w-0 after:h-[2px] after:rounded-sm after:transition-all transition-all  after:ease-in-out ease-in-out after:duration-300 duration-300 after:bg-[#FF7D01] after:absolute after:bottom-0 hover:after:w-full hover:after:left-0 after:left-[50%]  text-white' to="/about">About</Link></li>
                                <li><Link onClick={() => setShowNavbar(true)} className='md:ms-5 mt-5 md:mt-0 font-m_plus text-[5vw] sm:text-[3vw] md:text-base hover:text-[#FF7D01] leading-normal inline-block  relative  after:w-0 after:h-[2px] after:rounded-sm after:transition-all transition-all  after:ease-in-out ease-in-out after:duration-300 duration-300 after:bg-[#FF7D01] after:absolute after:bottom-0 hover:after:w-full hover:after:left-0 after:left-[50%]  text-white' to="/Team">Team</Link></li>
                                <li><Link onClick={() => setShowNavbar(true)} className='md:ms-5 mt-5 md:mt-0 font-m_plus text-[5vw] sm:text-[3vw] md:text-base hover:text-[#FF7D01] leading-normal inline-block  relative  after:w-0 after:h-[2px] after:rounded-sm after:transition-all transition-all  after:ease-in-out ease-in-out after:duration-300 duration-300 after:bg-[#FF7D01] after:absolute after:bottom-0 hover:after:w-full hover:after:left-0 after:left-[50%]  text-white' to="/RoadMap">RoadMap</Link></li>
                                <li><Link onClick={() => setShowNavbar(true)} className='md:ms-5 md:me-12 my-5 md:my-0 font-m_plus text-[5vw] sm:text-[3vw] md:text-base hover:text-[#FF7D01] leading-normal inline-block  relative  after:w-0 after:h-[2px] after:rounded-sm after:transition-all transition-all  after:ease-in-out ease-in-out after:duration-300 duration-300 after:bg-[#FF7D01] after:absolute after:bottom-0 hover:after:w-full hover:after:left-0 after:left-[50%]  text-white' to="/FAQ ">FAQ </Link></li>
                                <li className="flex items-center gap-[10px]"><a href="" className="hover:scale-110 transition-all ease-linear duration-300"><NavInstagramIcons /></a> <a href="" className=" inline-block hover:scale-110 transition-all ease-linear duration-300" ><NavDiscordIcons /></a> <a href="" className="hover:scale-110 transition-all ease-linear duration-300"><NavTwitterIcons /></a></li>
                                <li className="border sm:hidden md:block  border-solid p-[6px] rounded-sm mt-5 md:mt-0 md:ms-7"><Link onClick={() => setShowNavbar(true)} className='px-[10.5px] pt-[5.2px] pb-[4px] bg-[#FF7D01] text-white  rounded-sm  font-Black_Sans  md:me-0 sm:hidden   md:block common_btn hover:bg-transparent inline-block    ' to="/Touch">Connect Wallet</Link></li>
                                <span title="close" className="ms-4 close_nav text-white fw-bold md:hidden" onClick={() => setShowNavbar(true)} ><RxCross2 fontSize={40} color='#FF7D01' /></span>
                            </ul>
                            <span title="open"
                                className="inline-block md:hidden fw-bold text-white"
                                onClick={() => setShowNavbar(false)}>
                                <RxHamburgerMenu fontSize={40} color='#FF7D01' /></span>
                        </nav>
                    </div>
                </nav>
            </section>
        </>
    )
}

export default MyNav