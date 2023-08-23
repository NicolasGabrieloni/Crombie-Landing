import icon from "../img/icon.png";

function Navbar() {
  return (
    <>
      <header className="flex justify-between h-20 pt-3 text-center">
        <div className="sm:mx-auto">
          <div className="Icon">
            <img
              src={icon}
              alt="icono"
              className="lg:w-40 md:w-40 w-32 mx-auto cursor-pointer"
            />
          </div>

          <div className="navigate mt-1 lg:text-base md:text-sm">
            <ul className="flex sm:text-lg sm:mt-1 text-sm ml-2 mt-5">
              <li className="mx-1 md:mx-3 hover:border-b border-white cursor-pointer">
                About
              </li>
              <li className="mx-1 md:mx-3 hover:border-b border-white cursor-pointer">
                Features
              </li>
              <li className="mx-1 md:mx-3 hover:border-b border-white cursor-pointer">
                Pricing
              </li>
              <li className="mx-1 md:mx-3 hover:border-b border-white cursor-pointer">
                Testimonials
              </li>
              <li className="mx-1 md:mx-3 hover:border-b border-white cursor-pointer">
                Help
              </li>
            </ul>
          </div>
        </div>

        <div className="Buttons lg:block md:flex md:flex-col">
          <button
            className="mx-3 md:w-44 h-10 md:text-base text-xs
            font-semibold hover:border-b border-white "
          >
            Sing in
          </button>
          <button
            className="mx-3 md:w-44 h-10 md:text-base text-xs
            rounded-xl sm:rounded-3xlfont-semibold
            border border-red-500  text-red-500  
          hover:bg-red-600 hover:text-white mt-1"
          >
            Sing up
          </button>
        </div>
      </header>
    </>
  );
}

export default Navbar;
