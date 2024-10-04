import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import ContactUs from "../../public/Contact.png";
import { MdOutlineMailOutline } from "react-icons/md";
import { CiPhone } from "react-icons/ci";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    try {
      await axios.post("https://getform.io/f/avreqxda", userInfo);
      toast.success("Your query has been sent");
    } catch (error) {
      toast.error("oops something went wrong");
    }
  };
  return (
    <>
      <div
        name="Contact"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 "
      >
        <h1 className="text-xl font-bold  text-white/60">Contact</h1>

        <div className="xl:flex-row w-full md:flex flex-row">
          <div className="w-full md:w-1/2 text-white">
            <h5 className="text-md font-semibold mt-3">Let's Talk!</h5>
            <p className="text-md md:text-sm font-medium text-orange-500">
            I would love to chat! Drop me a message and let's get in touch.
            </p>

            <div className="flex items-center space-x-2">
              <MdOutlineMailOutline className="text-xl md:text-sm" />
              <p className="text-lg md:text-sm font-medium  text-yellow-200">
                itsprajaktaapte@gmail.com
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <CiPhone className="text-xl md:text-sm" />
              <p className="text-lg md:text-sm font-medium  text-yellow-200">+64-272676515</p>
            </div>
            <img
              className="mx-auto md:h-[50%] items-start justify-start"
              src={ContactUs}
              alt="Contact Us"
            />
          </div>

          <div className="w-full  md:w-1/2  text-white">
            <span className="text-md font-semibold">
              Please fill out the form below
            </span>
            <div className="w-full lg:w-full mx-auto bg-gradient-to-r from-yellow-500 via-orange-500 to-orange-900 p-5 m-2 rounded-md">
              <form
                onSubmit={handleSubmit(onSubmit)}
                //   action="https://getform.io/f/avreqxda"
                //   method="POST"
                className="mt-6 "
              >
                <div className="mb-4">
                  <label className=" block text-sm font-medium text-black">
                    Name
                  </label>
                  <input
                    type="text"
                    {...register("name", { required: true })}
                    name="name"
                    placeholder="Enter Your name"
                    className="mt-1 px-4 py-2 border rounded-lg w-full text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  {errors.name && <span>This field is required</span>}
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-black">
                    Email
                  </label>
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    name="email"
                    placeholder="Enter Your email"
                    className="mt-1 px-4 py-2 border rounded-lg w-full text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  {errors.email && <span>This field is required</span>}
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-black">
                    Message
                  </label>
                  <textarea
                    placeholder="Enter Your Query"
                    name="message"
                    {...register("message", { required: true })}
                    rows="4"
                    className="mt-1 px-4 py-2 border rounded-lg w-full text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
                  ></textarea>
                  {errors.message && <span>This field is required</span>}
                </div>

                <div className="flex items-center justify-center">
                  <button
                    type="submit"
                    className="bg-orange-100 text-black font-bold py-2 px-6 mb-2 rounded-lg hover:bg-orange-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
