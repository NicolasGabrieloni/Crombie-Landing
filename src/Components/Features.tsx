import { FcApproval } from "react-icons/fc";
import { FaUserAlt, FaLocationArrow, FaServer } from "react-icons/fa";
import img2 from "../img/img2.png";

function Features(): JSX.Element {
  return (
    <>
      <section
        id="Features"
        className="section w-10/12 h-auto mx-auto md:my-20 my-36"
      >
        <div className="flex justify-evenly">
          <div className="flex cursor-pointer hover:scale-110 transition duration-300 mx-2">
            <span
              className="mr-2 mt-2 text-red-500 bg-yellow-50 rounded-full 
            lg:w-12 lg:h-12 lg:text-l lg:p-4 
            md:w-10 md:h-10 md:text-l md:p-3
            w-8 h-8 p-2 text-sm"
            >
              <FaUserAlt />
            </span>
            <div>
              <p className="font-extrabold lg:text-2xl md:text-xl text-sm">
                90+
              </p>
              <p className="text-sm">Users</p>
            </div>
          </div>
          <div className="flex cursor-pointer hover:scale-110 transition duration-300 mx-2">
            <span
              className="mr-2 mt-2 text-red-500 bg-yellow-50 rounded-full 
            lg:w-12 lg:h-12 lg:text-l lg:p-4 
            md:w-10 md:h-10 md:text-l md:p-3
            w-8 h-8 p-2 text-sm"
            >
              <FaLocationArrow />
            </span>
            <div>
              <p className="font-extrabold lg:text-2xl md:text-xl text-sm">
                30+
              </p>
              <p className="text-sm">Locations</p>
            </div>
          </div>
          <div className="flex cursor-pointer hover:scale-110 transition duration-300 mx-2">
            <span
              className="mr-2 mt-2 text-red-500 bg-yellow-50 rounded-full 
            lg:w-12 lg:h-12 lg:text-l lg:p-4 
            md:w-10 md:h-10 md:text-l md:p-3
            w-8 h-8 p-2 text-sm"
            >
              <FaServer />
            </span>
            <div>
              <p className="font-extrabold lg:text-2xl md:text-xl text-sm">
                50+
              </p>
              <p className="text-sm">Servers</p>
            </div>
          </div>
        </div>
        <div className="lg:flex mt-24">
          <div className="lg:w-1/2 mt-10 text-center">
            <img
              src={img2}
              alt="img2"
              className="lg:w-10/12 md:w-8/12 mx-auto"
            />
          </div>
          <div className="lg:w-1/2 sm:w-80 sm:mx-auto">
            <h2 className="font-semibold xl:text-4xl text-2xl sm:text-3xl lg:text-left text-center lg:ml-12 mt-10">
              We provide many <br /> features you can use
            </h2>
            <p className="mt-10 xl:text-xl lg:text-left text-center lg:ml-12">
              You can explore the features what we provide with fun and
              <br /> have their own functions each feature.
            </p>
            <ul className="xl:ml-0 lg:ml-0 mt-6 ml-10 xl:text-lg">
              <li className="mt-2 lg:ml-12 sm:ml-5 flex">
                <span className="text-2xl">
                  <FcApproval />
                </span>
                <p className="lg:ml-6 sm:ml-5 ml-2">
                  Powerfull online protection.
                </p>
              </li>
              <li className="mt-2 lg:ml-12 sm:ml-5 flex">
                <span className="text-2xl">
                  <FcApproval />
                </span>
                <p className="lg:ml-6 sm:ml-5 ml-2">
                  Internet without borders.
                </p>
              </li>
              <li className="mt-2 lg:ml-12 sm:ml-5 flex">
                <span className="text-2xl">
                  <FcApproval />
                </span>
                <p className="lg:ml-6 sm:ml-5 ml-2">Supercharged VPN.</p>
              </li>
              <li className="mt-2 lg:ml-12 sm:ml-5 flex">
                <span className="text-2xl">
                  <FcApproval />
                </span>
                <p className="lg:ml-6 sm:ml-5 ml-2">No specific time limits.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Features;
