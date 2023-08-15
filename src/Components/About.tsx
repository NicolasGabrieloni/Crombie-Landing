import img1 from "../img/img1.png";

function About() {
  return (
    <>
      <section className="section w-10/12 h-96 mt-24 mx-auto flex">
        <div className="text-center w-1/2">
          <h1 className="font-semibold text-4xl text-left ml-8">
            Want anything to be <br />
            easy with <span className="font-bold">LaslesVPN.</span>
          </h1>
          <p className="mt-10 text-left ml-8">
            Provide a network for all your needs with ease and fun using
            <span className="font-semibold "> LaslesVPN</span> <br />
            discover interesting features from us.
          </p>
          <button className="w-56 h-12 mt-24 rounded-xl bg-red-500 font-semibold shadow-3xl hover:scale-105 duration-100">
            Get Started
          </button>
        </div>
        <div className="w-1/2 text-center">
          <img src={img1} alt="img1" className="w-10/12 mx-auto" />
        </div>
      </section>
    </>
  );
}

export default About;
