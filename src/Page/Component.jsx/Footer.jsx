import React from "react";
import { generalIcons, socialIcons } from "../../assets";


const companyLinks = ["Blog", "Pricing", "Marketplace", "Contact"];
const supportLinks = ["Status", "Privacy policy", "Help", "Dealers", "About"];

export const Footer = () => {
    return (
        <footer className="bg-black text-white px-[120px]">
            <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className=" w-full">
                    {/* Logo and Description */}
                    <div className="w-full">
                        <div className="flex items-center justify-between w-full mb-4">
                            <div className="flex items-center justify-between space-x-3">
                                <img
                                    src={generalIcons.logo}
                                    alt="Fuel Mule Logo"
                                    className="h-[62px] w-[46px]"
                                />
                                <span className="text-[30px] font-[700] satoshi-bold">Fuel Mule</span>
                            </div>
                            <div className="flex md:justify-end justify-start items-center space-x-6 mt-4 md:mt-0">
                                <a href="#" aria-label="Facebook">
                                    <img src={socialIcons.facebook} alt="Facebook" className="h-[41px] w-[41px]" />
                                </a>
                                <a href="#" aria-label="Twitter">
                                    <img src={socialIcons.twitter} alt="Twitter" className="h-[41px] w-[41px]" />
                                </a>
                                <a href="#" aria-label="Instagram">
                                    <img src={socialIcons.insta} alt="Instagram" className="h-[41px] w-[41px]" />
                                </a>
                            </div>
                        </div>
                        <p className="text-sm leading-relaxed text-[22px] font-[300] w-[597px]">
                            We specialize in delivering high-quality fuel solutions tailored
                            to meet the needs of businesses and individuals in our community.
                        </p>
                    </div>
                </div>

                {/* Footer Bottom Section */}
                <div className="border-t border-gray-800 mt-8 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <span className="text-[18px] font-[400]">
                            © 2024 Loop Methods. All Right Reserved
                        </span>
                        {/* <span className="text-gray-400 text-sm">Help@fuelmule.com</span> */}
                    </div>
                </div>
            </div>
        </footer>
    );
};
