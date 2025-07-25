import { fourthSection } from "../../assets";
import FDCards from "./FDCards";

export default function MobileCards() {

    return (
        <div className="[@media(min-width:840px)]:hidden absolute top-[100%] w-full h-[55vh]">
            <div className="relative h-full">
                <FDCards
                    heading={"Fully Automatic"}
                    style={` absolute sm:w-[35vw] w-[40vw]`}
                    icon={fourthSection.thunderIcon}
                    text={"Purchase fuel from a reliable local dealer at their current daily rate"}
                />
                <FDCards
                    heading={"Customer Confirm"}
                    style={`top-[20vw] [@media(max-width:480px)_and_(min-width:426px)]:top-[40vw] [@media(max-width:425px)]:top-[70%] sm:w-[35vw] w-[40vw]  absolute`}
                    icon={fourthSection.checkinCircle}
                    text={"Offer fuel from a reliable local dealer at their current daily rate with a delivery date. Customer confirms acceptance and delivery is made"}
                />
                <FDCards
                    heading={"Reverse Auction"}
                    style={`right-0 [@media(max-width:425px)]:top-[24%] sm:w-[40vw] w-[47vw] absolute`}
                    icon={fourthSection.hammerIcon}
                    text={"An exiting and cost effective way to buy fuel. Dealers bid their lowest price and delivery date to meet customer's stated deadline. This option optimises efficiency by adding your delivery to a preplanned delivery route . "}
                />
            </div>
        </div>
    )
}
