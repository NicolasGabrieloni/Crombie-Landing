import { FcApproval } from "react-icons/fc";
import { BASE_URL } from "../App";
import iconFree from "../img/iconFree.png";
import iconStan from "../img/iconStan.png";
import iconPrem from "../img/iconPrem.png";
import { useEffect, useState } from "react";

type Suscription = {
  title: string;
  price: number | "Free";
  benefits: string[];
};

function Pricing() {
  const [subcriptions, setSubcriptions] = useState<Suscription[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>();

  useEffect(() => {
    setLoading(true);
    fetch(`${BASE_URL}/api/subscription`)
      .then((response) => {
        response.json().then((result) => {
          setSubcriptions(result);
        });
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section className="mb-24 w-10/12 mt-24 mx-auto text-center h-128">
        <div>
          <h2 className="font-bold text-2xl">Choose Your Plan</h2>
          <p className="mt-6">
            Let's choose the package that is best for you and explore it happily
            and cheerfully.
          </p>
        </div>
        <p className="text-center text-3xl mt-80">Loading...</p>
      </section>
    );
  }
  if (error) {
    return (
      <section className="mb-24 w-10/12 mt-24 mx-auto text-center h-128">
        <div>
          <h2 className="font-bold text-2xl">Choose Your Plan</h2>
          <p className="mt-6">
            Let's choose the package that is best for you and explore it happily
            and cheerfully.
          </p>
        </div>
        <p className="text-center text-3xl mt-80">{error}</p>
      </section>
    );
  }

  return (
    <>
      <section className="mb-24 w-10/12 mt-24 mx-auto text-center h-128">
        <div>
          <h2 className="font-bold text-2xl">Choose Your Plan</h2>
          <p className="mt-6">
            Let's choose the package that is best for you and explore it happily
            and cheerfully.
          </p>
        </div>
        <div className="md:flex justify-around mt-16">
          {subcriptions.map((subcription, index) => (
            <div
              key={index}
              className="mt-4 md:flex-col md:h-110 sm:flex h-60 w-full lg:h-124 lg:w-72 mx-2
               border-grey border border-red-400 hover:border-red-600 rounded-3xl"
            >
              <div className="md:ml-0 sm:ml-4">
                {subcription.title === "Free Plan" ? (
                  <img
                    src={iconFree}
                    alt="free"
                    className="w-24 sm:w-28 mt-10 mx-auto"
                  />
                ) : subcription.title === "Standard Plan" ? (
                  <img
                    src={iconStan}
                    alt="Standard"
                    className="w-24 sm:w-28 mt-10 mx-auto"
                  />
                ) : (
                  <img
                    src={iconPrem}
                    alt="Premium"
                    className="w-24 sm:w-28 mt-10 mx-auto"
                  />
                )}
                <h2 className="font-bold lg:text-lg text-sm mt-8">
                  {subcription.title}
                </h2>
              </div>

              <div>
                <ul className="lg:mt-6 mx-auto px-2 mt-6 lg:px-8 md:h-48 md:mt-10 h-36 lg:h-80 sm:h-72">
                  {subcription.benefits.map((benefit, index) => (
                    <li key={index} className="mt-2 flex">
                      <span className="text-xs lg:text-2xl sm:text-lg sm:mt-0 mt-1 md:ml-2">
                        <FcApproval />
                      </span>
                      <p className="sm:ml-2 lg:mt-5 text-xs sm:mt-0 sm:text-sm">
                        {benefit}
                      </p>
                    </li>
                  ))}
                </ul>
                <h3 className="lg:text-2xl sm:text-base sm:mt-0">
                  <span className="font-bold">
                    {subcription.price === "Free" ? (
                      subcription.price
                    ) : (
                      <>${subcription.price}/ mo</>
                    )}
                  </span>
                </h3>
                <button
                  className="lg:w-40 lg:font-bold md:w-36 md:h-10 md:mb-0 sm:mb-2 w-28 h-6 mt-2  border
                   rounded-3xl border-red-400 text-red-400 hover:bg-red-600 
                   hover:border-red-600 hover:text-white"
                >
                  Select
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Pricing;
