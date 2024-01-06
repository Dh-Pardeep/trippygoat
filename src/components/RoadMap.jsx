import React from 'react'
import roadmap_right_img from '../assets/webp/roadmap_right_img.webp'
import roadmap_left_img from '../assets/webp/roadmap_left_img.webp'
const RoadMap = () => {
    return (
        <div className="relative ">
            <img className="absolute top-0 right-0 w-[18%] md:w-[14%]" src={roadmap_right_img} alt="roadmap_right_img" />
            <img className="absolute bottom-0 hidden md:block left-0 w-[12%]" src={roadmap_left_img} alt="roadmap_left_img" />
            <div className="w-[304px] h-[304px] bg-yellow-200 rounded-full blur-[280px] absolute top-1/4" />
            <div className="container mx-auto px-5 max-w-[1140px] pt-20 sm:pt-28 lg:pt-36 mb-32">
                <h2 className="text-white font-Black_Sans text-[36px] md:text-[42px] lg:text-lg leading-normal text-center pb-12 md:pb-16 lg:pb-[100px]">Roadmap</h2>
                <div className='md:max-w-[525px] lg:max-w-[847px] mx-auto'>
                    <div className="p-6 rounded-lg hover:bg-[#292929] max-w-[752px] border-transparent border-[1px] border-[#1D1D1E] hover:border-[#3E3E3F] hover:border-solid hover:shadow-[0px_4px_16px_0px] hover:shadow-[#3E3E3F] ms-auto relative after:absolute after:content-[''] after:w-[24px] after:h-[24px] after:bg-white after:-left-20 after:rounded-full after:top-0 before:h-[125%] before:w-[3px] before:bg-white before:content-[''] before:absolute before:top-[24px] before:-left-[69px]">
                        <h2 className="text-[#FF7D01] text-md font-Black_Sans leading-normal">10%</h2>
                        <h2 className="text-white text-sm leading-normal font-Black_Sans py-[10px]">Giveaway of Goat NFT</h2>
                        <p className="text-[#BFBFBF] leading-[160%] text-base font-m_plus max-w-[628px]">Feugiat felis, egestas cursus et ut lacus viverra. Rhoncus ornare tortor sociis vulputate arcu pellentesque eu ornare tempus. Et mi arcu quam tellus feugiat quisque urna velit.</p>
                    </div>
                    <div className="p-6 rounded-lg hover:bg-[#292929] max-w-[752px] border-transparent border-[1px] border-[#1D1D1E] hover:border-[#3E3E3F] hover:border-solid hover:shadow-[0px_4px_16px_0px] hover:shadow-[#3E3E3F] my-8 ms-auto relative after:absolute after:content-[''] after:w-[24px] after:h-[24px] after:bg-white after:-left-20 after:rounded-full after:top-9 before:h-[107%] before:w-[3px] before:bg-white before:content-[''] before:absolute before:top-[60px] before:-left-[69px]">
                        <h2 className="text-[#FF7D01] text-md font-Black_Sans leading-normal">50%</h2>
                        <h2 className="text-white text-sm leading-normal font-Black_Sans py-[10px]">Merch store</h2>
                        <p className="text-[#BFBFBF] leading-[160%] text-base font-m_plus max-w-[628px]">Adipiscing vehicula dui sollicitudin venenatis. A feugiat iaculis amet magna. Odio elementum, purus egestas convallis et vulputate. Dictumst vitae nulla aliquam, vivamus nunc. Volutpat nunc non platea mauris sem dui scelerisque. </p>
                    </div>
                    <div className="p-6 rounded-lg hover:bg-[#292929] max-w-[752px] border-transparent border-[1px] border-[#1D1D1E] hover:border-[#3E3E3F] hover:border-solid hover:shadow-[0px_4px_16px_0px] hover:shadow-[#3E3E3F] ms-auto relative after:absolute after:content-[''] after:w-[24px] after:h-[24px] after:bg-white after:-left-20 after:rounded-full after:top-9 ">
                        <h2 className="text-[#FF7D01] text-md font-Black_Sans leading-normal">100%</h2>
                        <h2 className="text-white text-sm leading-normal font-Black_Sans py-[10px]">Charity donation</h2>
                        <p className="text-[#BFBFBF] leading-[160%] text-base font-m_plus max-w-[628px]">Condimentum tristique sit pretium ipsum. Et egestas venenatis consectetur ornare ipsum elementum nulla imperdiet imperdiet. </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RoadMap