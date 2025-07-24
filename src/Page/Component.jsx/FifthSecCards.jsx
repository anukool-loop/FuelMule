const FifthSecCard = ({ icon, heading, text }) => {

    return (
        <div className={`hover:outline flex sm:flex-col sm:gap-[30px] gap-[15px] outline-[#F37335] outline-[1px] sm:p-[32px] px-[17px] py-[28px] shadow-[0px_0px_8px_8px_#80808010] rounded-[10px]`}>
            <img src={icon} alt="" className=" sm:w-[60px] w-[45px] aspect-[1/1] h-fit"/>
            <div>
                <h2 className="font-[500] sm:text-[20px] text-[18px] mb-[8px]">{heading}</h2>
                <p className="font-[400] sm:text-[16px] text-[16px] text-[#6F6D71]">{text}</p>
            </div>
        </div>
    )
}

export default FifthSecCard