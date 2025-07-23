const FifthSecCard = ({ icon, heading, text }) => {

    return (
        <div className={`hover:outline outline-[#F37335] outline-[1px] p-[32px] shadow-[0px_0px_8px_8px_#80808010] rounded-[10px]`}>
            <img src={icon} alt="" className="mb-[30px]"/>
            <div>
                <h2 className="font-[500] text-[20px] mb-[8px]">{heading}</h2>
                <p className="font-[400] text-[16px] text-[#6F6D71]">{text}</p>
            </div>
        </div>
    )
}

export default FifthSecCard