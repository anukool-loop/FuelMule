import Header from "./Component.jsx/Header";
import BannerCard from "./Component.jsx/BannerCards";
// import { firstBannerIcons } from "../assets";
import { generalIcons, image } from "../assets";
import { section2 } from "../assets";
import ButtonFuel from "./Component.jsx/ButtonFuel";
import FDCards from "./Component.jsx/FDCards";
import { fourthSection } from "../assets";
import { BannerCards, fifthSection, rocketCards, Section2, sixthContent } from "./Data/content";
import FifthSecCard from "./Component.jsx/FifthSecCards";
import { FAQ } from "./Component.jsx/FAQ";
import { Footer } from "./Component.jsx/Footer";
import MobileCards from "./Component.jsx/Mobilecards";

function LandingPage() {
    const px = 'sm:px-[clamp(60px,8.3vw,120px)] px-[14px]'
    const py = 'py-[clamp(40px,5.76vw,85px)]'




    return (
        <main className="font-poppins">
            <Header />

            {/* banner */}
            <section className={`pt-[120px] pb-20 ${px} flex flex-col justify-center items-center gap-[15px]`}>
                <h1 className="text-[clamp(28px,3vw,42px)] font-[500] text-center">
                    MiloFuel: A Better Way to Purchase Fuel Oil
                </h1>
                <p className=" text-[18px] font-[300] pb-[50px] sm:w-[676px] text-center">
                    Convenient Fuel Buying made smarter, easier and more reliable — without the hassle of constant monitoring or comparison shopping.
                </p>
                <div className="flex gap-[15px] flex-col sm:flex-row">
                    {
                        BannerCards?.map((element, index) => {
                            return (
                                <BannerCard key={index} text={element.text} icon={element.icon} />
                            )
                        })
                    }
                </div>
                <ButtonFuel text={"Buy Fuel Now"} style={"hidden sm:block w-[clamp(150px,14vw,213px)] text-[clamp(14px,1.4vw,20px)] h-[clamp(40px,10vh,80px)] mt-[60px] px-[clamp(6px,2.5vw,24px)]"} />
            </section>

            <section className={`bg-gradient-to-r from-[#FDC83020] to-[#F3733520] py-[60px] ${px} flex flex-col sm:flex-row h-fit justify-between items-center`}>
                <div className="sm:w-[336px] w-full">
                    <div className="flex flex-col gap-[20px]">
                        <h2 className="text-[clamp(30px,3vw,45px)] font-[600]">Milo, the Mule</h2>
                        <p className="leading-[34px] font-[300] sm:text-[clamp(13px,1.3vw,19.4px)] text-[16px]">Your smart fuel assistant that keeps you informed, efficient, and always in control.</p>

                        {
                            Section2?.map((element, i) => {

                                return (
                                    <div key={i} className="flex items-center gap-[19px]">
                                        <img src={element.icon} alt="" />
                                        <p className="font-[300] text-[clamp(13px,1.3vw,19.4px)]">
                                            {element.text}
                                        </p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <ButtonFuel text={"Tell Me More"} style={"mt-[47px] h-[80px] w-[213px] text-[20px] font-[500] hidden sm:block"} />

                </div>

                <div className=" sm:w-[clamp(350px,54vw,790px)] w-[clamp(290px,90vw,790px)] sm:h-[606px] [@media(max-width:400px)]:h-[70vh] flex justify-center align-center relative ">
                    <span className="block sm:w-[clamp(305px,28vw,408px)] w-[269px] aspect-[1/1] absolute top-[15%]  bg-gradient-to-r from-[#FF690F39] to-[#E8381B39] rounded-full"></span>
                    <img src={image.rocket} alt="" className="z-[1] sm:w-[261px] w-[170px] sm:h-[434px] h-[283px]" />
                    <div className="w-full absolute top-[49%] [@media(min-width:400px)]:top-[15%] grid grid-cols-2 sm:gap-x-[clamp(60px,10vw,274px)] md:gap-x-[clamp(60px,16vw,274px)] gap-x-[2px] z-[3] auto-rows-fr  justify-center items-center">
                        {rocketCards?.map((element, i) => {
                            const total = rocketCards.length;
                            const isFirstRow = i < 2;
                            const isLastRow = i >= Math.floor((total - 1) / 2) * 2; // last row starts here
                            const isOddTotal = total % 2 !== 0;
                            const isLastCard = i === total - 1;
                            const isLonelyLast = isOddTotal && isLastCard;

                            let marginTop = "";
                            if (!isFirstRow) {
                                marginTop = isLastRow ? "lg:mt-[60px] md:mt-[-30px] sm:mt-[-120px] mt-[30px]" : "sm:mt-[clamp(30px,4.5vw,70px)]";
                            }

                            return (
                                <div
                                    key={i}
                                    className={`lg:h-[101px] 
                                                sm:py-[21px] py-[10px] sm:px-[17px] px-[8px] flex flex-col gap-[6px]
                                                bg-gradient-to-r from-[#FEF1EC] via-[#F5843750] to-[#F5843750]
                                                rounded-[12px] 
                                                ${isLonelyLast ? "col-span-2 justify-self-center" : ""}
                                                ${marginTop || "mt-[-10px]"}
                                            `}
                                >
                                    <h3 className="font-[700] sm:text-[13px] text-[11px]">{element.heading}</h3>
                                    <p className="sm:text-[11px] text-[10px]">{element.para}</p>
                                </div>
                            );
                        })}
                    </div>

                </div>

            </section>

            <section className={`${px} py-[80px] flex flex-col justify-center items-center text-center [@media(max-width:840px)_and_(min-width:600px)]:pb-[60vh] [@media(max-width:600px)]:pb-[60vh]`}>
                <div className="">
                    <div>
                        <h2 className="sm:text-[clamp(28px,3vw,42px)] text-[22px] font-[500]">Fuel Delivery Options</h2>
                        <p className="sm:text-[18px] text-[16px] font-[300] ms:w-[684px]">Whether you prefer speed, control, or cost-efficiency, our platform offers multiple options tailored to your needs.</p>
                    </div>
                </div>
                <div className="relative w-full flex justify-center h-full mt-[50px] ">
                    <FDCards
                        heading={"Fully Automatic"}
                        style={`top-[50px] left-[0] 
                                absolute
                                hidden [@media(min-width:840px)]:block
                                after:content-['']
                                after:hidden
                                xl:after:block
                                after:absolute
                                after:top-1/3
                                after:z-[1]
                                after:-translate-y-1/2
                                after:left-[101%]
                                after:w-[7.5vw]
                                after:h-[1px]
                                after:border-t
                                after:border-dashed
                                after:border-[#FA5C12]
                                after:mt-[20px]
                                `}
                        icon={fourthSection.thunderIcon}
                        text={"Purchase fuel from a reliable local dealer at their current daily rate"}
                    />
                    <FDCards
                        heading={"Customer Confirm"}
                        style={`top-[262px] left-[0] after:content-['']
                                absolute
                                hidden [@media(min-width:840px)]:block
                                after:hidden
                                xl:after:block
                                after:absolute
                                after:top-1/3
                                after:z-[1]
                                after:-translate-y-1/2
                                after:left-[101%]
                                after:w-[40%]
                                after:h-[1px]
                                after:border-t
                                after:border-dashed
                                after:border-[#FA5C12]
                                after:mt-[20px]`}
                        icon={fourthSection.checkinCircle}
                        text={"Offer fuel from a reliable local dealer at their current daily rate with a delivery date. Customer confirms acceptance and delivery is made"}
                    />
                    <FDCards
                        heading={"Reverse Auction"}
                        style={`top-[120px] right-[0]
                                absolute
                                hidden [@media(min-width:840px)]:block
                                before:hidden
                                xl:before:block
                                before:absolute
                                before:top-[40%]
                                before:right-[101%]
                                before:w-[42%]
                                before:h-[1px]
                                before:border-t
                                before:border-dashed
                                before:border-[#FA5C12]
                                before:mt-[20px]
                                `}
                        icon={fourthSection.hammerIcon}
                        text={"An exiting and cost effective way to buy fuel. Dealers bid their lowest price and delivery date to meet customer's stated deadline. This option optimises efficiency by adding your delivery to a preplanned delivery route . "}
                    />
                    <MobileCards />
                    <img src={image.mobileSec3} alt="" className="relative z-[2] w-[clamp(360px,29vw,420px)]" />
                    <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center">
                        <div
                            style={{ width: 650, height: 350 }}
                            className=" rounded-full bg-gradient-to-r from-[#FF690F9a] to-[#E8381B9a] opacity-[.91] blur-[60px] mix-blend-screen"
                        ></div>
                    </div>
                </div>
            </section>

            <section className={`bg-black ${px} py-[clamp(40px,5.76vw,85px)] flex sm:flex-row flex-col [@media(max-width:600px)]:gap-[40px] items-center`}>
                <div className="text-white sm:w-[clamp(400px,43vw,632px)] text-center sm:text-left">
                    <h2 className="font-[600] text-[clamp(20px,3vw,42px)]">Explore Endless Possibilities with Smarter Fueling</h2>
                    <p className="sm:font-[400] font-[300] mt-[10px] md:text-[18px] text-[14px] sm:w-[clamp(200px,34vw,496px)]">Smarter fueling with real-time insights, instant payments, smart refills, industry-leading security, and total control—right at your fingertips.</p>
                    <ButtonFuel text={"Buy Fuel Now"} style={"mt-[47px] sm:h-[80px] h-[37px] sm:w-[213px] w-[130px] sm:text-[20px] text-[12px] font-[500]  text-[black]"} />
                </div>
                <div className=" w-[clamp(280px,43vw,632px)]">
                    <img src={image.laptop} alt="" />
                </div>
            </section>

            <section className={`sm:px-[clamp(60px,8.3vw,120px)] px-[clamp(10px,4.3vw,30px)] ${py} `}>
                <div className="text-center">
                    <h2 className={`font-[500] sm:text-[clamp(28px,3vw,42px)] text-[20px]`}>Fuel Your Business with Real-Time Intelligence</h2>
                    <p className={`font-[300] sm:text-[18px] text-[16px]`}>Track, analyze, and optimize your fuel operations — all in one powerful platform.</p>
                </div>
                <div>
                    <h3 className="font-[500] sm:text-[24px] text-[20px] my-[15px]">For Users</h3>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2  gap-[30px]">
                        {fifthSection?.forUsers?.map((element, i) => {

                            return (
                                <FifthSecCard
                                    key={i}
                                    icon={generalIcons.chartSuccess}
                                    text={element.text}
                                    heading={element.heading}
                                />
                            )
                        })}
                    </div>
                </div>
                <div>
                    <h3 className="font-[500] sm:text-[24px] text-[20px] my-[15px] mt-[30px]">For Oil Dealers</h3>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-[30px]">
                        {fifthSection?.forDealers?.map((element, i) => {

                            return (
                                <FifthSecCard
                                    key={i}
                                    icon={generalIcons.chartSuccess}
                                    text={element.text}
                                    heading={element.heading}
                                />
                            )
                        })}
                    </div>
                </div>
            </section>

            <section className={`bg-gradient-to-r from-[#FDC83030] to-[#F3733530] ${px} ${py} flex sm:flex-row flex-col items-center gap-[64px]`}>
                <div>
                    <img src={image.content} alt="" className={`sm:w-[581px]`} />
                </div>
                <div className={`sm:w-[555px]`}>
                    <h2 className="sm:text-[clamp(28px,3vw,42px)] text-[20px] font-[600]">Few Easy Steps and You're All Set</h2>
                    <p className="sm:text-[20px] font-[400] text-[#383838]">Get started with Fuel Mule in minutes and take control of your fuel usage and refills—all in one place.</p>
                    <div className="relative flex flex-col gap-[39px] mt-[70px]">
                        {sixthContent?.map((element, i) => {
                            const isThird = i === 2;
                            const isLast = i === sixthContent.length - 1;
                            const isOrange = !isThird;

                            return (
                                <div key={i} className="relative flex items-start">
                                    {/* Number + Line wrapper */}
                                    <div className="sm:w-[60px] w-[48px] flex flex-col items-center shrink-0 relative">
                                        <span
                                            className={`
                                                     w-[50px] h-[50px] flex justify-center items-center rounded-full font-bold z-10
                                                     ${isOrange ? 'bg-[#F37335] text-white' : 'bg-white text-black'}
                                                    `}
                                        >
                                            {i + 1}
                                        </span>

                                        {!isLast && (
                                            <span
                                                className={`
                                                     absolute top-[50px] left-1/2 -translate-x-1/2 w-px h-[39px]
                                                     ${i === 1 ? 'border-l border-dashed border-white' : 'bg-[#F37335]'}
                                                    `}
                                            />
                                        )}
                                    </div>

                                    {/* Text */}
                                    <p className="ml-4 text-[16px] leading-snug">{element.text}</p>
                                </div>
                            );
                        })}
                    </div>



                </div>

            </section>

            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <FAQ />
                </div>
            </section>

            <Footer />
        </main >
    );
}

export default LandingPage;
