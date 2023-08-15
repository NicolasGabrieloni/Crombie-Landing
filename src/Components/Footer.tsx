import icon from "../img/icon.png";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

function Footer() {
  return (
    <>
      <div className="h-72 p-8 flex">
        <div className="w-1/4">
          <img src={icon} alt="icono" className="w-32 ml-8" />
          <p className="mt-4 ml-8">
            <b>LaslesVPN</b> is a private virtual network that has unique
            features and has high security.
          </p>
          <div className="flex justify-around  mt-8">
            <span className="hover:scale-125 transition duration-300 cursor-pointer">
              <FiFacebook className="text-red-500 text-2xl" />
            </span>
            <span className="hover:scale-125 transition duration-300 cursor-pointer">
              <FiTwitter className="text-red-500 text-2xl" />
            </span>
            <span className="hover:scale-125 transition duration-300 cursor-pointer">
              <FiInstagram className="text-red-500 text-2xl" />
            </span>
          </div>
          <p className="mt-10 text-grey-500 text-center">
            ©2020Lasles<b>VPN</b>
          </p>
        </div>

        <div className="w-1/4">
          <div className="text-left pl-24">
            <h3>
              <b>Product</b>
            </h3>
            <ul className="mt-4">
              <li className="cursor-pointer hover:text-red-500">Dowload</li>
              <li className="cursor-pointer hover:text-red-500">Pricing</li>
              <li className="cursor-pointer hover:text-red-500">Locations</li>
              <li className="cursor-pointer hover:text-red-500">Server</li>
              <li className="cursor-pointer hover:text-red-500">Countries</li>
              <li className="cursor-pointer hover:text-red-500">Blog</li>
            </ul>
          </div>
        </div>

        <div className="w-1/4">
          <div className="text-left pl-24">
            <h3>
              <b>Engage</b>
            </h3>
            <ul className="mt-4">
              <li className="cursor-pointer hover:text-red-500">LaslesVPN ?</li>
              <li className="cursor-pointer hover:text-red-500">FAQ</li>
              <li className="cursor-pointer hover:text-red-500">Tutorials</li>
              <li className="cursor-pointer hover:text-red-500">About Us</li>
              <li className="cursor-pointer hover:text-red-500">
                Privacy Policy
              </li>
              <li className="cursor-pointer hover:text-red-500">
                Terms of Service
              </li>
            </ul>
          </div>
        </div>

        <div className="w-1/4">
          <div className="text-left pl-24">
            <h3>
              <b>Earn Money</b>
            </h3>
            <ul className="mt-4">
              <li className="cursor-pointer hover:text-red-500">Affiliate</li>
              <li className="cursor-pointer hover:text-red-500">
                Become Partner
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
