const Button = ({ label, iconURL, backgroundColor, borderColor, textColor, fullWidth }) => {
  return (
    <button
      className={`inline-flex items-center gap-2 px-7 py-4 font-montserrat text-lg leading-1 rounded-full  border
      ${backgroundColor || 'bg-coral-red'} ${borderColor || ''} ${textColor || 'text-white'} ${fullWidth && 'w-full'}`}
    >
      {label}
      {iconURL && <img src={iconURL} alt="" className="ml-2 rounded-full w-5 h-5" />}
    </button>
  );
};

export default Button;