import { generalIcons } from "../../assets";

export default function BannerCard({ icon, text }) {
    return (
        <div className="border border-1 border-[#F95017] w-[289px]  rounded-lg bg-gradient-to-r from-[#FDC830] to-[#F37335] p-0">

            <div className="bg-white/90 rounded-lg p-[10px]">

                <div className="border-b border-[#FF9B6390] flex flex-col justify-between h-[140px]">

                    <span className="w-[50px] !h-[50px] flex justify-center items-center rounded-full bg-[#F5843720]">
                        <img src={icon} alt={"icons"} className="w-[29px] h-[29px]" />
                    </span>

                    <p className="text-gray-800 text-[18px] flex-[1] font-[700] flex items-center ">
                        {text || ""}
                    </p>
                </div>

                <div className="flex justify-between pt-[15px]">
                    <p className="text-[16px] font-[100] border-b">
                        Tell me more
                    </p>
                    <img src={generalIcons.redirOrg} alt={"icons"}
                        className="w-[21px] h-[21px]"
                    />
                </div>

            </div>

        </div>

    );
}


{/* <div className="p-[1px] rounded-lg overflow-hidden bg-gradient-to-r from-[#FF690F] to-[#E8381B]">
      <div className="bg-white rounded-lg p-4">
        <p className="text-gray-800">Gradient border with your colors!</p>
      </div>
    </div> */}