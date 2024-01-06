import React from 'react'
import Footer_log from '../../assets/svg/footerlogo.svg'
import { NavDiscordIcons, NavInstagramIcons, NavTwitterIcons } from './Icons'
const MyFooter = () => {
  return (
    <div>
      <div className="container mx-auto px-5 max-w-[1140px] pt-40">
        <div >
          <img className="mx-auto" src={Footer_log} alt="Footer_log" />
          <h2 className="text-white text-xmd font-Black_Sans leading-normal text-center pt-4">Trippy Goat</h2>
          <p className="text-white font-m_plus leading-[160%] text-base max-w-[480px] mx-auto text-center pt-[30px]">Vitae cras pellentesque amet, pretium ut consectetur pretium orci arcu. Aenean turpis ipsum nunc adipiscing fusce enim, eget rhoncus at.</p>
          <div className="flex justify-center mt-[30px] pb-[60px] items-center gap-[10px]"><a href="" className="hover:scale-110 transition-all ease-linear duration-300"><NavInstagramIcons /></a> <a href="" className=" inline-block hover:scale-110 transition-all ease-linear duration-300" ><NavDiscordIcons /></a> <a href="" className="hover:scale-110 transition-all ease-linear duration-300"><NavTwitterIcons /></a></div>
        </div>

      </div>
      <div className=" w-full h-[1px] bg-[#9D9C92]"></div>
      <p className="text-[#BCBCBC]  font-m_plus leading-normal text-center py-3">copyright@2022</p>
    </div>
  )
}

export default MyFooter