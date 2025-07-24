import React from "react";
import { generalIcons, socialIcons } from "../../assets";

const companyLinks = ["Blog", "Pricing", "Marketplace", "Contact"];
const supportLinks = ["Status", "Privacy policy", "Help", "Dealers", "About"];

const socialLinks = [
  { icon: socialIcons.facebook, alt: "Facebook", label: "Facebook", href: "#" },
  { icon: socialIcons.twitter, alt: "Twitter", label: "Twitter", href: "#" },
  { icon: socialIcons.insta, alt: "Instagram", label: "Instagram", href: "#" },
];

export const Footer = () => {
  return (
    <footer className="bg-black text-white sm:px-[clamp(60px,8.3vw,120px)] px-[14px] rounded-[20px_20px_0px_0px]">
      <div className="mx-auto sm:px-6 lg:px-8 py-12">
        <div className="w-full">
          {/* Logo and Description */}
          <div className="w-full">
            <div className="flex items-center justify-between w-full mb-4">
              <div className="flex items-center justify-between space-x-3">
                <img
                  src={generalIcons.logo}
                  alt="Fuel Mule Logo"
                  className="sm:h-[62px] sm:w-[46px] w-[27px] h-[36px]"
                />
                <span className="sm:text-[30px] text-[18px] font-[700] satoshi-bold">Fuel Mule</span>
              </div>

              {/* ⬇️ List-render social icons */}
              <div className="flex md:justify-end justify-start items-center sm:space-x-6 gap-[8px] mt-4 md:mt-0">
                {socialLinks.map(({ icon, alt, label, href }, index) => (
                  <a key={index} href={href} aria-label={label}>
                    <img src={icon} alt={alt} className="sm:w-[41px] w-[29px] aspect-[1/1]" />
                  </a>
                ))}
              </div>
            </div>

            <p className="text-sm leading-relaxed sm:text-[22px] text-[16px] font-[300] sm:w-[597px]">
              We specialize in delivering high-quality fuel solutions tailored
              to meet the needs of businesses and individuals in our community.
            </p>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-gray-800 sm:mt-8 mt-[20px] sm:pt-8 pt-[20px]">
          <div className="flex flex-col md:flex-row justify-between sm:items-center items-start gap-[5px]">
            <div className="self-start sm:hidden"><a href="mailto:Help@fuelmule.com" className="text-[12px]">Help@fuelmule.com</a></div>
            <span className="sm:text-[18px] text-[12px] font-[400]">
              © 2024 Loop Methods. All Right Reserved
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
