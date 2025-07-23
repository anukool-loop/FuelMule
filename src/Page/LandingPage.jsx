import Header from "./Component.jsx/Header";
import { firstBannerIcons } from "../assets";
import BannerCard from "./Component.jsx/BannerCards";
import { image } from "../assets";
import ButtonFuel from "./Component.jsx/ButtonFuel";

function LandingPage() {

    const BannerCards = [{
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
    }]



    return (
        <main className="font-poppins">
            <Header />

            {/* banner */}
            <section className="pt-20 px-[120px] border h-screen flex flex-col justify-center items-center gap-[15px]">
                <h1 className="text-4xl font-bold ">
                    MiloFuel: A Better Way to Purchase Fuel Oil
                </h1>
                <p className=" text-[18px] font-[300] pb-[50px]">
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
                <ButtonFuel text={"Buy Fuel Now"} style={"w-[213px] text-[20px] h-[80px] mt-[60px]"} />
            </section>

            <section className={`bg-gradient-to-r from-[#FDC83020] to-[#F3733520] p-0 h-screen`}>
                <div>
                    <div>
                    <h2></h2>
                    <p></p>
                    <p></p>
                    <p></p>
                    </div>

                </div>
                <div>
                    <img src={image.rocket} alt="" />
                </div>
            </section>


        </main>
    );
}

export default LandingPage;
