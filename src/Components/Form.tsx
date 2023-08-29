import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { BASE_URL } from "../App";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

type FormData = {
  name: string;
  email: string;
  comment: string;
};

const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    comment: yup.string().required(),
  })
  .required();

function Form(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: FormData) => {
    fetch(`${BASE_URL}/api/send-email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(() => {
      MySwal.fire({
        heightAuto: false,
        icon: "success",
        iconColor: "rgb(112, 224, 0)",
        width: "240px",
        background: "black",
        showConfirmButton: false,
      });
      console.log(data);
      reset();
    });
  };

  return (
    <>
      <section
        id="Help"
        className="lg:w-5/12 w-8/12 text-center mx-auto  mb-32"
      >
        <h2 className="lg:text-4xl md:text-2xl text-xl font-bold">
          Send us your questions or comments!
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
          <label className="font-bold">Name:</label>
          <br />
          <input
            {...register("name")}
            placeholder="Your name"
            className="text-black rounded-md h-7"
          />
          <p className="text-sm text-red-500">{errors.name?.message}</p>

          <label className="font-bold">Email:</label>
          <br />
          <input
            {...register("email")}
            placeholder="Your email"
            className="text-black rounded-md h-7"
          />
          <p className="text-sm text-red-500">{errors.email?.message}</p>

          <label className="font-bold">Comments:</label>
          <br />
          <input
            {...register("comment")}
            placeholder="Comments or questions"
            className="text-black rounded-md h-12"
          />
          <p className="text-sm text-red-500">{errors.comment?.message}</p>

          <button
            type="submit"
            className="h-8 mt-5 w-48 text-red-500
             border border-red-400 rounded-xl font-semibold"
          >
            Submit
          </button>
        </form>
      </section>
    </>
  );
}

export default Form;
