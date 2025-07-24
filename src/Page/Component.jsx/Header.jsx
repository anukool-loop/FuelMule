import React from 'react';
import FuelMuleLogo from "../../assets/icons/fuelmuleLogo.svg"
import ButtonFuel from './ButtonFuel';

const Header = () => {

    return (
        <header className="sm:px-[clamp(20px,8.3vw,120px)] px-[15px] py-[13px] flex justify-between bg-black fixed top-0 left-0 z-[100] w-screen">
            <span className='flex w-[150px] justify-center items-center gap-[12px]'>
                <img src={FuelMuleLogo} alt="" />
                <h1 className='font-[700] sm:text-[20px] text-[17px] text-white satoshi-bold'>Fuel Mule</h1>
            </span>
            <ButtonFuel text={"Buy Fuel Now"} style={'px-[clamp(10px,1.6vw,24px)] py-3 text-[12px] sm:text-[16px]'} />
        </header>
    )
}

export default Header