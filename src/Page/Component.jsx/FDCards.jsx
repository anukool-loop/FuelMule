const FDCards = ({ style, text, heading, icon }) => {

    return (
        <div
            className={`
                ${style} 
                absolute 
                bg-[white] 
                border p-[12px]
                z-[1] shadow-lg 
                rounded-[20px] 
                w-[clamp(200px,22vw,330px)]
                `}
        >
            <div className="flex items-center justify-start gap-[12px]">
                <img src={icon} alt="" />
                <h3 className="text-[18px] font-[500]">{heading}</h3>
            </div>
            <p className="text-left text-[#3F3E3E] text-[clamp(13px,1.1vw,16px)] font-[100]">{text}</p>
        </div>
    )
}

export default FDCards