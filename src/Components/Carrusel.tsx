import { Carousel } from "antd";
import { BASE_URL } from "../App";
import { useEffect, useState } from "react";

type Testimonials = {
  avatar: string;
  fullName: string;
  testimonial: string;
};

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: "300px",
  color: "#fff",
  textAlign: "center",
  background: "black",
};

const Carrusel = () => {
  const [testimonials, setTestimonials] = useState<Testimonials[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>();

  useEffect(() => {
    setLoading(true);
    fetch(`${BASE_URL}/api/testimonial`)
      .then((response) => {
        response.json().then((result) => {
          setTestimonials(result);
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
    return <p className="text-center text-3xl mt-80">Loading...</p>;
  }
  if (error) {
    return <p className="text-center text-3xl mt-80">{error}</p>;
  }

  return (
    <>
      <div className="text-center my-40 ">
        <h2 className="font-bold text-3xl">
          Trusted By Thousands of <br /> Happy Customer
        </h2>
        <p className="mt-10">
          These are the stories of our customers who have joined us with great
          <br />
          pleasure when using this crazy frature.
        </p>
        <Carousel>
          {testimonials.map((testimonial) => (
            <div key={testimonial.fullName} style={contentStyle}>
              <div className="border border-white rounded-xl w-96 h-60 p-5 inline-block text-white mt-28 mb-24">
                <div className="flex justify-between mt-2">
                  <div className="flex">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.fullName}
                      className="w-12 h-14 rounded-full ml-7"
                    />
                    <div>
                      <h2 className="h-5 font-bold text-sm mt-2 ml-2">
                        {testimonial.fullName}
                      </h2>
                    </div>
                  </div>
                  <p className="text-lg">4.5 ★</p>
                </div>
                <p className="mt-6 text-left ml-10">
                  {testimonial.testimonial}
                </p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default Carrusel;
