import imageLogo from '../../../assets/images/SVG/Logos.svg';
function Logo() {
  return (
    <div className="flex items-center">
      <img
        src={imageLogo}
        alt="Furniro logo"
        className="w-12.5 object-contain sm:h-11"
      />
      <p className=" text-[38px] font-bold text-black">
        Furniro
      </p>
    </div>
  );
}

export default Logo ;