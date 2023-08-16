function Suscribe() {
  return (
    <>
      <div className="text-center my-40 h-60 md:flex">
        <div className="my-auto ml-32 w-1/2">
          <h2 className="font-bold text-4xl text-left">
            Subscribe Now for <br />
            Get Special Features!
          </h2>
          <p className="text-left mt-6">
            Let's subscribe with us and find the fun.
          </p>
        </div>
        <div className="w-1/2">
          <button className="my-24 h-14 w-60 font-bold text-white rounded-xl bg-red-500 hover:border">
            Subscribe Now
          </button>
        </div>
      </div>
    </>
  );
}

export default Suscribe;
