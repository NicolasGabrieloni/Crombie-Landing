import img1 from "../img/img1.png";

function About(): JSX.Element {
  return (
    <>
      <section
        id="About"
        className="section w-10/12 h-110 mt-40 mx-auto lg:flex lg:mb-10 md:mb-44"
      >
        <div className="lg:w-1/2 text-center">
          <h1 className="font-semibold xl:text-center lg:text-4xl lg:text-left lg:ml-8 text-xl sm:text-3xl">
            Want anything to be <br />
            easy with <span className="font-bold">LaslesVPN.</span>
          </h1>
          <p className="mt-10 xl:text-center lg:text-left lg:ml-8 text-sm sm:text-lg">
            Provide a network for all your needs with ease and fun using
            <span className="font-semibold "> LaslesVPN</span> <br />
            discover interesting features from us.
          </p>
          <button
            className="w-36 h-10 mt-8 lg:w-56 lg:h-12 lg:mt-24 md:mt-10 rounded-xl
           bg-red-500 font-semibold shadow-3xl hover:scale-105 duration-100"
          >
            Get Started
          </button>
        </div>
        <div className="lg:w-1/2">
          <img
            src={img1}
            alt="img1"
            className="lg:w-10/12 md:w-8/12 md:mt-10 mx-auto my-10"
          />
        </div>
      </section>
    </>
  );
}

export default About;
