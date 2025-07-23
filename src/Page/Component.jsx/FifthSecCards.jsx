const FifthSecCard = ({ icon, heading, text }) => {

    return (
        <div className={`hover:border border-[#F37335]`}>
            <img src={icon} alt="" />
            <h2>{heading}</h2>
            <p>{text}</p>
        </div>
    )
}

export default FifthSecCard