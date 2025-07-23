const ButtonFuel = ({ text, handleFunction, style }) => {

    const handleClick = (event) => {
        handleFunction()
    }

    return (
        <button onClick={handleClick} className={`bg-gradient-to-r from-[#FDC830] rounded-[80px] to-[#F37335]  px-6 py-3 shadow-md ${style}`}>
            {text}
        </button>
    )
}

export default ButtonFuel