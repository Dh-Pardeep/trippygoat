import React from 'react'
import MyNav from './common/MyNav'
const HeroSection = () => {
    return (
        <div className="bg_img_hero">
            <MyNav />
            <div classNme="container mx-auto  max-w-[1140px]">
                <div className="flex justify-center flex-col items-center absolute -bottom-28 left-2/4 -translate-x-2/4 w-full px-5">
                    <h1 className="font-Black_Sans text-white text-[45px] sm:text-[50px] md:text-[58px] lg:text-xl leading-normal">Trippy Goat</h1>
                    <p className="text-white font-m_plus text-base leading-normal max-w-[520px] text-center mt-4">Trippy Goats is a limited collection of 5656 Psychedelic goats, randomly generated from over 40 hand drawn traits. Each goat comes with ownership and commercial usage rights.</p>
                    <div className="border   border-solid p-[6px] rounded-sm mt-8 "><button className='px-[10.5px] pt-[5.2px] pb-[4px] bg-[#FF7D01] text-white  rounded-sm  font-Black_Sans leading-[150%]  common_btn hover:bg-transparent inline-block ' >Connect Wallet</button></div>
                </div>

            </div>
        </div>
    )
}

export default HeroSection