import { useState } from "react";
import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import SpinnerMini from "../components/SpinnerMini";

function ContactMePage() {
  const [result, setResult] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "d44ddb58-8860-4799-9e27-f12b0a78c4b9");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult(
        "Thank you for getting in touch! I'll get back in touch with you soon!",
      );
      setSubmitted(true);
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="mt-20 w-full grid-cols-2 gap-20 bg-[--color-grey-0] px-[5.5rem] py-[4.5rem] sm:grid">
      <div className="flex flex-col gap-12">
        <Link
          to="/"
          className="text-[1.2rem] font-semibold text-primary-900 hover:text-primary-800"
        >
          &larr; Go back Home
        </Link>
        {submitted ? (
          <div className="flex flex-col gap-8 text-[2rem]">
            {result}
            <span className="ml-60 animate-fadein">
              <img src="/thu01.png" className="h-[200px] w-[200px]" />
            </span>
          </div>
        ) : (
          <>
            <div className="flex flex-col gap-4">
              <h2 className="text-[3rem] font-semibold text-[--color-grey-900]">
                Say Hello!
              </h2>
              <h2 className="text-[2rem] font-semibold text-[--color-grey-900]">
                Lets Work Together
              </h2>
              <p className="text-[1.4rem] text-gray-800">
                I would love to meet with You and discuss potential
                Collaborations and Ventures
              </p>
            </div>
            <form className="flex flex-col gap-12" onSubmit={onSubmitHandler}>
              <input
                type="text"
                placeholder="Name"
                name="name"
                required
                className="rounded-lg border border-gray-700 bg-gray-50 px-4 py-4 text-[1.4rem] capitalize placeholder:text-[1.2rem] placeholder:text-gray-700"
              />
              <input
                className="rounded-lg border border-gray-700 bg-gray-50 px-4 py-4 text-[1.4rem] placeholder:text-[1.2rem] placeholder:text-gray-700"
                name="phone"
                type="number"
                required
                placeholder="Phone"
              />
              <input
                className="rounded-lg border border-gray-700 bg-gray-50 px-4 py-4 text-[1.4rem] placeholder:text-[1.2rem] placeholder:text-gray-700"
                name="email"
                type="email"
                // pattern=" /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/"
                placeholder="Email Address"
                required
              />
              <textarea
                name="message"
                id="message"
                cols="100"
                rows="5"
                required
                placeholder="Let me know what you need"
                className="rounded-lg border border-gray-700 bg-gray-50 px-4 py-4 text-[1.4rem] placeholder:text-[1.2rem] placeholder:text-gray-700"
              />
              <button className="flex items-center justify-center rounded-lg bg-primary-900 px-10 py-4 text-center text-[1.2rem] font-semibold text-gray-100 hover:bg-primary-800">
                {!submitting ? "Lets Talk" : <SpinnerMini />}
              </button>
            </form>
            <div className="flex items-center justify-center gap-12 text-[--color-grey-900] sm:opacity-0">
              <FaInstagram className="h-[3rem] w-[3rem]" />
              <FaTwitter className="h-[3rem] w-[3rem]" />
              <FaLinkedinIn className="h-[3rem] w-[3rem]" />
            </div>
          </>
        )}
      </div>
      <div className="mt-20 flex flex-col items-center justify-center gap-8 rounded-lg opacity-0 sm:opacity-100">
        {/* <img src="/bg707.png" className="h-[400px] w-[400px] flex-1" /> */}
        <div className="w-[40%] rounded-2xl bg-[--color-grey-200] px-12 py-12">
          <h2 className="text-[4rem] font-semibold text-[--color-grey-900]">
            Let's Connect and Chat
          </h2>
        </div>
        <div className="flex w-[70%] flex-col items-center rounded-2xl bg-primary-700 px-12 py-8 text-[--color-grey-0]">
          <div className="flex pl-[25px]">
            <div className="rounded-full border border-[--color-grey-0] px-6 py-2 text-[2rem]">
              <h2>FOLLOW ME!</h2>
            </div>
            <div className="rotate-[15deg] rounded-full border border-[--color-grey-0] px-6 py-2 text-[2rem]">
              <h2>👀🤩</h2>
            </div>
          </div>
          <div className="flex pt-[4px]">
            <div className="rotate-[15deg] rounded-full border border-[--color-grey-0] px-6 py-2 text-[2rem]">
              <h2>INSTAGRAM</h2>
            </div>
            <div className="rounded-full border border-[--color-grey-0] px-6 py-2 text-[2rem]">
              <h2>LINKEDIN</h2>
            </div>
          </div>
          <div className="flex pr-[45px] pt-[7px]">
            <div className="rounded-full border border-[--color-grey-0] px-6 py-2 text-[2rem]">
              <h2>TWITTER</h2>
            </div>
            <div className="rounded-full border border-[--color-grey-0] px-6 py-2 text-[2rem]">
              <h2>TIKTOK</h2>
            </div>
          </div>
        </div>
        {/* <div className="flex gap-12">
          <FaInstagram className="h-[3rem] w-[3rem] text-[--color-grey-900]" />
          <FaTwitter className="h-[3rem] w-[3rem] text-[--color-grey-900]" />
          <FaLinkedinIn className="h-[3rem] w-[3rem] text-[--color-grey-900]" />
        </div> */}
      </div>
    </div>
  );
}

export default ContactMePage;
