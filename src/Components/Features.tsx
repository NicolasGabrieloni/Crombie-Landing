import { FcApproval } from "react-icons/fc";
import { FaUserAlt, FaLocationArrow, FaServer } from "react-icons/fa";
import img2 from "../img/img2.png";

function Features() {
  return (
    <>
      <section className="section w-10/12 h-auto lg:my-36 mx-auto">
        <div className="flex justify-evenly">
          <div className="flex cursor-pointer hover:scale-110 transition duration-300">
            <span
              className="mr-2 mt-2 text-red-500 bg-yellow-50 rounded-full 
            lg:w-12 lg:h-12 lg:text-l lg:px-4 lg:py-4 md:w-10 md:h-10 md:text-l md:px-3 md:py-3"
            >
              <FaUserAlt />
            </span>
            <div>
              <p className="font-extrabold lg:text-2xl md:text-xl">90+</p>
              <p>Users</p>
            </div>
          </div>
          <div className="flex cursor-pointer hover:scale-110 transition duration-300">
            <span className="mr-2 mt-2 text-red-500 bg-yellow-50 rounded-full lg:w-12 lg:h-12 lg:text-l lg:px-4 lg:py-4 md:w-10 md:h-10 md:text-l md:px-3 md:py-3">
              <FaLocationArrow />
            </span>
            <div>
              <p className="font-extrabold lg:text-2xl md:text-xl">30+</p>
              <p>Locations</p>
            </div>
          </div>
          <div className="flex cursor-pointer hover:scale-110 transition duration-300">
            <span className="mr-2 mt-2 text-red-500 bg-yellow-50 rounded-full lg:w-12 lg:h-12 lg:text-l lg:px-4 lg:py-4 md:w-10 md:h-10 md:text-l md:px-3 md:py-3">
              <FaServer />
            </span>
            <div>
              <p className="font-extrabold lg:text-2xl md:text-xl">50+</p>
              <p>Servers</p>
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
            <h2 className="font-semibold text-3xl text-left lg:ml-12 mt-10">
              We provide many <br /> features you can use
            </h2>
            <p className="mt-10 text-left lg:ml-12">
              You can explore the features what we provide with fun and
              <br /> have their own functions each feature.
            </p>
            <ul className="mt-6">
              <li className="mt-2 lg:ml-16 sm:ml-5 flex">
                <span className="text-2xl">
                  <FcApproval />
                </span>
                <p className="lg:ml-10 sm:ml-5">Powerfull online protection.</p>
              </li>
              <li className="mt-2 lg:ml-16 sm:ml-5 flex">
                <span className="text-2xl">
                  <FcApproval />
                </span>
                <p className="lg:ml-10 sm:ml-5">Internet without borders.</p>
              </li>
              <li className="mt-2 lg:ml-16 sm:ml-5 flex">
                <span className="text-2xl">
                  <FcApproval />
                </span>
                <p className="lg:ml-10 sm:ml-5">Supercharged VPN.</p>
              </li>
              <li className="mt-2 lg:ml-16 sm:ml-5 flex">
                <span className="text-2xl">
                  <FcApproval />
                </span>
                <p className="lg:ml-10 sm:ml-5">No specific time limits.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Features;
