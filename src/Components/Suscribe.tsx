function Suscribe() {
  return (
    <>
      <div className="text-center lg:my-40 my-20 h-60 md:flex-col sm:flex">
        <div className="my-auto lg:ml-32 lg:w-1/2">
          <h2 className="font-bold lg:text-4xl md:text-3xl text-center">
            Subscribe Now for <br />
            Get Special Features!
          </h2>
          <p className="text-center mt-6 lg:text-xl text-sm">
            Let's subscribe with us and find the fun.
          </p>
        </div>
        <div className="lg:w-1/2">
          <button className="lg:my-24 my-12 lg:h-14 lg:w-60 w-40 h-10 lg:text-xl text-sm font-bold text-white rounded-xl bg-red-500 hover:border">
            Subscribe Now
          </button>
        </div>
      </div>
    </>
  );
}

export default Suscribe;
