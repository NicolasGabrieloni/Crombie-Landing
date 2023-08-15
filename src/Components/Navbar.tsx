import icon from "../img/icon.png";

function Navbar() {
  return (
    <>
      <header className="flex justify-between h-20 pt-6 text-center">
        <div className="Icon">
          <img src={icon} alt="icono" className="w-40 ml-10 cursor-pointer" />
        </div>

        <div className="navigate mt-2">
          <ul className="flex">
            <li className="mx-3 hover:border-b border-white cursor-pointer">
              About
            </li>
            <li className="mx-3 hover:border-b border-white cursor-pointer">
              Features
            </li>
            <li className="mx-3 hover:border-b border-white cursor-pointer">
              Pricing
            </li>
            <li className="mx-3 hover:border-b border-white cursor-pointer">
              Testimonials
            </li>
            <li className="mx-3 hover:border-b border-white cursor-pointer">
              Help
            </li>
          </ul>
        </div>

        <div className="Buttons">
          <button className="mx-3 w-44 h-10 font-semibold hover:border-b border-white">
            Sing in
          </button>
          <button className="mx-3 w-44 h-10 border border-red-500 rounded-3xl text-red-500 font-semibold hover:bg-red-600 hover:text-white">
            Sing up
          </button>
        </div>
      </header>
    </>
  );
}

export default Navbar;
