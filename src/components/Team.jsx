import React from 'react'
import Vilar from '../assets/webp/Vilar.webp'
import Arwen from '../assets/webp/Arwen.webp'
import John from '../assets/webp/John.webp'
const Team = () => {
    return (
        <div className="container max-w-[1140px] mx-auto px-5 py-10 ">
            <h2 className="text-white font-Black_Sans text-[36px] md:text-[42px] lg:text-lg leading-normal text-center pb-12 md:pb-[60px] ">Team</h2>
            <div className="flex md:flex-row flex-col justify-center items-center md:justify-between max-w-[960px] mx-auto">
                <div className='w-full sm:w-3/4'>
                    <img className="w-full" src={Vilar} alt="Vilar" />
                    <div className="bg-[#FF7D01] md:rounded-bl-[60px] py-4">
                        <h2 className="text-center text-white font-Black_Sans text-xsm uppercase leading-normal">Vilar</h2>
                        <p className=" text-[#FFE5CC] font-m_plus text-center text-base leading-[160%]"> Founder & Developer</p>
                    </div>
                </div>
                <div className="md:mx-4 w-full sm:w-3/4 my-8 md:my-0">
                    <img className="w-full" src={Arwen} alt="Arwen" />
                    <div className="bg-[#FF7D01] py-4">
                        <h2 className="text-center text-white font-Black_Sans text-xsm uppercase leading-normal">Arwen</h2>
                        <p className=" text-[#FFE5CC] font-m_plus text-center text-base leading-[160%]"> Co-founder & Designer</p>
                    </div>
                </div>
                <div className='w-full sm:w-3/4'>
                    <img className="w-full" src={John} alt="John" />
                    <div className="bg-[#FF7D01] py-4 md:rounded-br-[60px]">
                        <h2 className="text-center text-white font-Black_Sans text-xsm uppercase leading-normal">John</h2>
                        <p className=" text-[#FFE5CC] font-m_plus text-center text-base leading-[160%]">Developer</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team