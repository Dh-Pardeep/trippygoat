import React, { useState } from 'react';
import Mint_hero from '../assets/webp/mint_hero.webp'
import minnus from '../assets/svg/mines_img.svg'
import plus from '../assets/svg/plus.svg'
const Mint = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        // Check if count is greater than zero before decrementing
        if (count > 0) {
            setCount(count - 1);
        }
    };
    return (
        <div className="mint_bg_img py-5 md:py-10 md:mt-5">
            <div className="container mx-auto px-5 max-w-[1140px] pt-20 sm:pt-28 lg:pt-36  mb-20 lg:mb-32">
                <h2 className="text-white font-Black_Sans text-[36px] md:text-[42px] lg:text-lg leading-normal text-center pb-12 md:pb-16 lg:pb-[100px]">Mint NFT</h2>
                <div className="flex md:flex-row flex-col items-center justify-between gap-5">
                    <div>
                        <img src={Mint_hero} alt="Mint_hero" />
                    </div>
                    <div className="rounded-lg border border-solid border-[#6A5E43] bg-[#5B5235] max-w-[410px] lg:max-w-[458px] w-full py-7  lg:py-12 px-10 lg:px-[86px] mt-8">
                        <div className="flex justify-between">
                            <button onClick={handleDecrement}>
                                <img src={minnus} alt="minnus" />
                            </button>
                            <p className="text-white font-Black_Sans text-xmd leading-normal">{count}/5656</p>
                            <button onClick={handleIncrement}>
                                <img src={plus} alt="plus" />
                            </button>
                        </div>
                        <p className="text-[#DEDBD5] font-m_plus text-xxsm font-semibold leading-normal text-center  py-5">Max 4 NFTs per transaction</p>
                        <p className="text-[#DEDBD5] font-m_plus text-xxsm font-semibold leading-normal text-center  pt-2 pb-12">75 ADA
                            per NFT</p>
                        <div className="flex justify-center">
                            <div className="border   border-solid p-[6px] rounded-sm  inline-block  "><button className='px-[10.5px] pt-[5.2px] pb-[4px] bg-[#FF7D01] text-white  rounded-sm  font-Black_Sans leading-[150%]  common_btn hover:bg-transparent inline-block ' >Mint Now</button></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mint