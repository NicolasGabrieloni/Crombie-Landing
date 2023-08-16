import React, { useState } from "react";
import { BASE_URL } from "../App";

type FormData = {
  email: string;
  coments: string;
};

function Form() {
  const [email, setEmail] = useState("");
  const [coments, setComents] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formData: FormData = {
      email,
      coments,
    };

    fetch(`${BASE_URL}/api/send-email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setEmail("");
        setComents("");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <section className="w-5/12 text-center mx-auto  mb-32">
        <h2 className="text-4xl font-bold">
          Send us your questions or comments!
        </h2>
        <form
          action=""
          onSubmit={handleSubmit}
          className="mt-10 h-96 border border-red-500 rounded-2xl"
        >
          <label htmlFor="email" className="font-bold text-2xl mt-5">
            Email
          </label>
          <br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-7/12 h-8 rounded-xl mt-5 text-black focus:outline-red-600 placeholder:text-center"
          />
          <br />
          <label htmlFor="text" className="font-bold text-2xl">
            Comments
          </label>
          <br />
          <input
            type="text"
            value={coments}
            onChange={(e) => setComents(e.target.value)}
            placeholder="Write here"
            className="w-7/12 h-28 rounded-xl mt-5 text-black focus:outline-red-600 placeholder:text-center"
          />
          <br />
          <button
            type="submit"
            className="font-bold text-xl border border-red-600 text-red-500 h-10 w-7/12 mt-16 rounded-xl hover:bg-red-600 hover:text-white"
          >
            Submit
          </button>
        </form>
      </section>
    </>
  );
}

export default Form;
