const ButtonFuel = ({ text, href = "https://getnetfuels.com/", handleFunction, style = "" }) => {
  const handleClick = () => {
    if (handleFunction) {
      handleFunction();
    } else if (href) {
      window.location.href = href; // ← this redirects
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`bg-gradient-to-r from-[#FDC830] to-[#F37335] rounded-[80px] shadow-md ${style}`}
    >
      {text}
    </button>
  );
};

export default ButtonFuel;
