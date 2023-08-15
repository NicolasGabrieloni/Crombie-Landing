import { FcApproval } from "react-icons/fc";
import { FaUserAlt, FaLocationArrow, FaServer } from "react-icons/fa";
import img2 from "../img/img2.png";

function Features() {
  return (
    <>
      <section className="section w-10/12 h-auto my-36 mx-auto">
        <div className="flex justify-evenly">
          <div className="flex cursor-pointer hover:scale-110 transition duration-300">
            <span className="mr-2 mt-2 text-l text-red-500 bg-yellow-50 rounded-full w-12 h-12 text-center px-4 py-4">
              <FaUserAlt />
            </span>
            <div>
              <p className="font-extrabold text-2xl">90+</p>
              <p>Users</p>
            </div>
          </div>
          <div className="flex cursor-pointer hover:scale-110 transition duration-300">
            <span className="mr-2 mt-2 text-l text-red-500 bg-yellow-50 rounded-full w-12 h-12 text-center px-4 py-4">
              <FaLocationArrow />
            </span>
            <div>
              <p className="font-extrabold text-2xl">30+</p>
              <p>Locations</p>
            </div>
          </div>
          <div className="flex cursor-pointer hover:scale-110 transition duration-300">
            <span className="mr-2 mt-2 text-l text-red-500 bg-yellow-50 rounded-full w-12 h-12 text-center px-4 py-4">
              <FaServer />
            </span>
            <div>
              <p className="font-extrabold text-2xl">50+</p>
              <p>Servers</p>
            </div>
          </div>
        </div>
        <div className="flex mt-24">
          <div className="w-1/2 mt-10 text-center">
            <img src={img2} alt="img2" className="w-10/12 mx-auto" />
          </div>
          <div className="text-center w-1/2">
            <h2 className="font-semibold text-3xl text-left ml-12 mt-10">
              We provide many <br /> features you can use
            </h2>
            <p className="mt-10 text-left ml-12">
              You can explore the features what we provide with fun and
              <br /> have their own functions each feature.
            </p>
            <ul className="mt-6">
              <li className="mt-2 ml-16 flex">
                <span className="text-2xl">
                  <FcApproval />
                </span>
                <p className="ml-10">Powerfull online protection.</p>
              </li>
              <li className="mt-2 ml-16 flex">
                <span className="text-2xl">
                  <FcApproval />
                </span>
                <p className="ml-10">Internet without borders.</p>
              </li>
              <li className="mt-2 ml-16 flex">
                <span className="text-2xl">
                  <FcApproval />
                </span>
                <p className="ml-10">Supercharged VPN.</p>
              </li>
              <li className="mt-2 ml-16 flex">
                <span className="text-2xl">
                  <FcApproval />
                </span>
                <p className="ml-10">No specific time limits.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Features;
