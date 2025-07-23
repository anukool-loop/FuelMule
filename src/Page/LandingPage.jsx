import Header from "./Component.jsx/Header";
import BannerCard from "./Component.jsx/BannerCards";
import { firstBannerIcons } from "../assets";
import { image } from "../assets";
import { section2 } from "../assets";
import ButtonFuel from "./Component.jsx/ButtonFuel";
import FDCards from "./Component.jsx/FDCards";
import { fourthSection } from "../assets";

function LandingPage() {

    const BannerCards = [
        {
            text: "Reduced risk of runout",
            icon: firstBannerIcons.recycleIcon
        },
        {
            text: "Better pricing without shopping around",
            icon: firstBannerIcons.labelIcon
        },
        {
            text: "More burner service options",
            icon: firstBannerIcons.repairIcon
        },
        {
            text: "Better for the environment",
            icon: firstBannerIcons.treeIcon
        }
    ]

    const Section2 = [
        {
            text: "Milo does the work",
            icon: section2.battryIcon
        },
        {
            text: "Milo is your Reliable Partner",
            icon: section2.chainIcon
        }
    ]

    const rocketCards = [
        {
            heading: "Fuel Alerts",
            para: "Milo texts you your fuel level every week."
        },
        {
            heading: "Delivery Confirmed",
            para: "Milo lets you know when fuel has been delivered."
        },
        {
            heading: "Fuel Monitoring",
            para: "Milo Keeps an eye on your fuel level 24 hours a day"
        },
        {
            heading: "Days Left to Heat",
            para: "Milo tells you how many heating days remain after your first fill."
        },
        {
            heading: "Fuel Reminders",
            para: "Milo reminds you to refill and finds the best price."
        }
    ]


    return (
        <main className="font-poppins">
            <Header />

            {/* banner */}
            <section className="pt-20 px-[120px] border h-screen flex flex-col justify-center items-center gap-[15px]">
                <h1 className="text-[clamp(28px,3vw,42px)] font-[500] text-center">
                    MiloFuel: A Better Way to Purchase Fuel Oil
                </h1>
                <p className=" text-[18px] font-[300] pb-[50px] w-[676px] text-center">
                    Convenient Fuel Buying made smarter, easier and more reliable – without the hassle of constant monitoring or comparison shopping.
                </p>
                <div className="flex gap-[15px]">
                    {
                        BannerCards?.map((element, index) => {
                            return (
                                <BannerCard key={index} text={element.text} icon={element.icon} />
                            )
                        })
                    }
                </div>
                <ButtonFuel text={"Buy Fuel Now"} style={"w-[clamp(150px,14vw,213px)] text-[clamp(14px,1.4vw,20px)] h-[clamp(40px,10vh,80px)] mt-[60px] px-[clamp(6px,2.5vw,24px)]"} />
            </section>

            <section className={`bg-gradient-to-r from-[#FDC83020] to-[#F3733520] py-[60px] h-screen flex flex-col lg:flex-row h-fit justify-between items-center px-[122px]`}>
                <div className="w-[336px]">
                    <div className="flex flex-col gap-[20px]">
                        <h2 className="text-[clamp(30px,3vw,45px)] font-[600]">Milo, the Mule</h2>
                        <p className="leading-[34px] font-[300] text-[clamp(13px,1.3vw,19.4px)]">Your smart fuel assistant that keeps you informed, efficient, and always in control.</p>

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
                    <ButtonFuel text={"Tell Me More"} style={"mt-[47px] h-[80px] w-[213px] text-[20px] font-[500] hidden lg:block"} />

                </div>

                <div className=" w-[790px] h-[606px] flex justify-center align-center relative ">
                    <span className="block w-[408px] h-[408px] absolute top-[15%]  bg-gradient-to-r from-[#FF690F39] to-[#E8381B39] rounded-full"></span>
                    <img src={image.rocket} alt="" className="z-[1] w-[261px] h-[434px] " />
                    <div className="w-full absolute top-[15%] grid grid-cols-2 gap-x-[274px] auto-rows-fr justify-center items-center">
                        {rocketCards?.map((element, i) => {
                            const total = rocketCards.length;
                            const isFirstRow = i < 2;
                            const isLastRow = i >= Math.floor((total - 1) / 2) * 2; // last row starts here
                            const isOddTotal = total % 2 !== 0;
                            const isLastCard = i === total - 1;
                            const isLonelyLast = isOddTotal && isLastCard;

                            let marginTop = "";
                            if (!isFirstRow) {
                                marginTop = isLastRow ? "mt-[60px]" : "mt-[70px]";
                            }

                            return (
                                <div
                                    key={i}
                                    className={`h-[101px]
                                                py-[21px] px-[17px] flex flex-col gap-[6px]
                                                bg-gradient-to-r from-[#FEF1EC] via-[#F5843750] to-[#F5843750]
                                                rounded-[12px] 
                                                ${isLonelyLast ? "col-span-2 justify-self-center" : ""}
                                                ${marginTop || "mt-[-10px]"}
                                            `}
                                >
                                    <h3 className="font-[700] text-[13px]">{element.heading}</h3>
                                    <p className="text-[11px]">{element.para}</p>
                                </div>
                            );
                        })}
                    </div>

                </div>

            </section>

            <section className="px-[120px] py-[80px] flex flex-col justify-center items-center text-center">
                <div>
                    <div>
                        <h2 className="text-[42px] font-[500]">Fuel Delivery Options</h2>
                        <p className="text-[18px] font-[300] w-[684px]">Whether you prefer speed, control, or cost-efficiency, our platform offers multiple options tailored to your needs.</p>
                    </div>
                </div>
                <div className="relative w-full flex justify-center h-full mt-[50px]">
                    <FDCards
                        heading={"Fully Automatic"}
                        style={`top-[50px] left-[0] 
                                xl:after:content-['']
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
                        icon={fourthSection.thunderIcon}
                        text={"Offer fuel from a reliable local dealer at their current daily rate with a delivery date. Customer confirms acceptance and delivery is made"}
                    />
                    <FDCards
                        heading={"Reverse Auction"}
                        style={`top-[120px] right-[0]
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
                        icon={fourthSection.thunderIcon}
                        text={"An exiting and cost effective way to buy fuel. Dealers bid their lowest price and delivery date to meet customer’s stated deadline. This option optimises efficiency by adding your delivery to a preplanned delivery route . "}
                    />
                    <img src={image.mobileSec3} alt="" className="relative z-[2] w-[clamp(360px,29vw,420px)]" />
                    <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center">
                        <div
                            style={{ width: 650, height: 350 }}
                            className=" rounded-full bg-gradient-to-r from-[#FF690F9a] to-[#E8381B9a] opacity-[.91] blur-[60px] mix-blend-screen"
                        ></div>
                    </div>
                </div>
            </section>
        </main >
    );
}

export default LandingPage;
