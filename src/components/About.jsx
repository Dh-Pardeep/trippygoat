import React from 'react'
import About_img from '../assets/webp/about_section.webp'
const About = () => {
    return (
        <div className="relative">
            <div className="w-[304px] h-[304px] bg-yellow-200 rounded-full blur-[280px] absolute top-1/4 right-0" />
            <div className="container mx-auto px-5 max-w-[1140px]">
                <div className="flex flex-col md:flex-row justify-between pt-28 lg:pt-40">
                    <div className="md:2/4 lg:w-2/5 ">
                        <img className="mx-auto" src={About_img} alt="About_img" />
                    </div>
                    <div className="md:w-2/4 md:ps-10">
                        <h2 className="text-white font-Black_Sans text-[36px] md:text-[42px] lg:text-lg leading-normal">About Us</h2>
                        <p className="text-[#BCBCB9] font-m_plus leading-normal pt-3">Hi goaties call me legion with a pen. From an early age I was influenced by my selfless loving mother who inspired  me to become a pet and art lover. As young as I was then, My mother would read goat story to me even though I didn't understand it. During the course of time I have played countless video games, watched movies and read books on pets particularly on goat.I made this art to portray my illustration of the psychedelic goats and I hope you can appreciate that everyone has a history. With regards to why non-fungibles.</p>
                        <div className="border border-solid p-[6px] rounded-sm mt-8 lg:mt-11  inline-block"><button className='px-[10.5px] pt-[5.2px] pb-[4px] bg-[#FF7D01] text-white rounded-sm  font-Black_Sans leading-[150%]  common_btn hover:bg-transparent inline-block ' >Read More</button></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About