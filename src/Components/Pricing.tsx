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
        <div className="flex justify-around mt-24">
          {subcriptions.map((subcription, index) => (
            <div
              key={index}
              className="h-124 w-72 border-grey border border-red-400 hover:border-red-600 rounded-3xl"
            >
              {subcription.title === "Free Plan" ? (
                <img src={iconFree} alt="free" className="w-40 mt-10 mx-auto" />
              ) : subcription.title === "Standard Plan" ? (
                <img src={iconStan} alt="free" className="w-40 mt-10 mx-auto" />
              ) : (
                <img src={iconPrem} alt="free" className="w-40 mt-10 mx-auto" />
              )}
              <h2 className="font-bold mt-8">{subcription.title}</h2>
              <ul className="mt-6 mx-auto px-8 h-80">
                {subcription.benefits.map((benefit, index) => (
                  <li key={index} className="mt-2 flex">
                    <span className="text-2xl mt-5">
                      <FcApproval />
                    </span>
                    <p className="ml-2 mt-5">{benefit}</p>
                  </li>
                ))}
              </ul>
              <h3 className="text-2xl mt-4">
                <span className="font-bold">
                  {subcription.price === "Free" ? (
                    subcription.price
                  ) : (
                    <>${subcription.price}/ mo</>
                  )}
                </span>
              </h3>
              <button
                className="mt-5 border-2
             border-red-400 
             w-40 h-10 rounded-3xl
              text-red-400 font-bold 
              hover:bg-red-600 hover:border-red-600 hover:text-white"
              >
                Select
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Pricing;
