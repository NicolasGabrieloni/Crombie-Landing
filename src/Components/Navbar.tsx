import icon from "../img/icon.png";

function Navbar(): JSX.Element {
  return (
    <>
      <header className="flex justify-between h-20 pt-3 text-center">
        <div className="sm:mx-auto lg:flex lg:mt-4 md:ml-16 ml-5">
          <div className="Icon">
            <img
              src={icon}
              alt="icono"
              className="xl:mr-52 lg:mr-20 lg:w-40 md:w-40 w-28 mx-auto cursor-pointer"
            />
          </div>

          <div className="xl:mr-24 lg:text-base md:text-sm md:mt-2">
            <ul className="flex sm:text-lg sm:mt-1 text-sm ml-2 mt-5">
              <li className="mx-1 md:mx-3 hover:border-b border-white cursor-pointer">
                <a href="#About">About</a>
              </li>
              <li className="mx-1 md:mx-3 hover:border-b border-white cursor-pointer">
                <a href="#Features">Features</a>
              </li>
              <li className="mx-1 md:mx-3 hover:border-b border-white cursor-pointer">
                <a href="#Pricing">Pricing</a>
              </li>
              <li className="mx-1 md:mx-3 hover:border-b border-white cursor-pointer">
                <a href="#Testimonials">Testimonials</a>
              </li>
              <li className="mx-1 md:mx-3 hover:border-b border-white cursor-pointer">
                <a href="#Help">Help</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="Buttons xl:block xl:mt-4 flex flex-col">
          <button
            className="mx-3 md:w-44 w-14 h-10 md:text-base text-xs
            font-semibold hover:border-b border-white "
          >
            Sing in
          </button>
          <button
            className="mx-3 md:w-44 w-14 h-10 md:text-base text-xs
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
