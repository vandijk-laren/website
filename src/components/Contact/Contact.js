import React, { useState } from "react";
import bg from "../../assets/contactbg.png";

const FORM_ENDPOINT =
  "https://public.herotofu.com/v1/8d5f75b0-c97a-11ed-9580-715614691683"; // TODO - fill on the later step

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <div className="flex flex-col md:flex-row justify-center justify-evenly w-screen h-[80vh] lg:w-8/12 mx-auto">
      <img
        class="w-screen md:h-4/5 lg:h-4/5 object-cover absolute brightness-50"
        src={bg}
        alt="maps"
      />
      <div className="mt-[10em] text-white relative basis-1/2 ">
        <div>
          <p className="text-6xl mb-[1em]">Neem contact met ons op</p>
          <p className="text-xl">
            Heb je nog vragen die wij niet hebben kunnen beantwoorden op de
            website? stuur ons dan een mailtje met je vraag!
          </p>
        </div>
        <div className="backdrop-opacity-30  bg-[#d9d9d9]/60 p-8 rounded-xl mt-[2em]">
          <form
            action={FORM_ENDPOINT}
            onSubmit={handleSubmit}
            method="POST"
            target="_blank"
          >
            <div className="mb-3 pt-0">
              <input
                type="text"
                placeholder="Naam"
                name="name"
                className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                required
              />
            </div>
            <div className="mb-3 pt-0">
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                required
              />
            </div>
            <div className="mb-3 pt-0">
              <textarea
                placeholder="Bericht"
                name="message"
                className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                required
              />
            </div>
            <div className="mb-3 pt-0 flex justify-center">
              <button
                className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="submit"
              >
                verstuur
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="relative w-[12em]">
        <div className="md:absolute inset-x-0 bottom-6 backdrop-opacity-30  bg-[#d9d9d9]/60 p-4 rounded-xl">
          <div className="">
            <p>Zevenend 29</p>
            <p>1251RL Laren NH</p>
          </div>
          <div className="">
            <p>info@vandijklaren.nl</p>
            <p>035-5314262</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
