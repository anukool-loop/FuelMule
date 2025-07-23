import React from 'react';
import FuelMuleLogo from "../../assets/icons/fuelmuleLogo.svg"
import ButtonFuel from './ButtonFuel';

const Header = () => {

    return (
        <header className="px-[120px] py-[13px] flex justify-between bg-black fixed top-0 left-0 z-[100] w-screen">
            <span className='flex w-[150px] justify-center items-center gap-[12px]'>
                <img src={FuelMuleLogo} alt="" />
                <h1 className='font-[700] text-[20px] text-white satoshi-bold'>Fuel Mule</h1>
            </span>
            {/* <button className="bg-gradient-to-r from-[#FDC830] rounded-[80px] to-[#F37335]  px-6 py-3 shadow-md">
                Buy Fuel Now
            </button> */}
            <ButtonFuel text={"Buy Fuel Now"} />
        </header>
    )
}

export default Header