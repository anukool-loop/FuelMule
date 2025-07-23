const FDCards = ({ style, text, heading, icon }) => {

    return (
        <div className={`${style} aboslute`}>
            <div className="flex ">
                <img src={icon} alt="" />
                <h3>{heading}</h3>
            </div>
            <p>{text}</p>
        </div>
    )
}

export default FDCards