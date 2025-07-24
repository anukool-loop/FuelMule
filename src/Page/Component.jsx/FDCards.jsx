const FDCards = ({ style, text, heading, icon }) => {

    return (
        <div
            className={`
                ${style} 
                bg-[white] 
                 p-[12px]
                z-[1] shadow-lg 
                rounded-[20px] 
                w-[clamp(200px,22vw,330px)]
                `}
        >
            <div className="flex items-center justify-start sm:gap-[12px] gap-[3px]">
                <img src={icon} alt="" className="sm:w-[50px] w-[28px] aspect-[1/1]" />
                <h3 className="sm:text-[18px] text-start text-[11px] font-[500]">{heading}</h3>
            </div>
            <p className="text-left text-[#3F3E3E] sm:text-[clamp(13px,1.1vw,16px)] text-[10px] font-[100]">{text}</p>
        </div>
    )
}

export default FDCards