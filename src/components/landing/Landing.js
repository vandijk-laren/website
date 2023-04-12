import React from "react";
import bg from "../../assets/landingBg.svg";

export default function Landing() {
  return (
    <div class="flex flex-row justify-center w-screen h-[80vh] text-secondary-text-color mt-28">
      <img
        class="w-screen h-4/5 object-cover absolute"
        src={bg}
        alt="Foto van een hond als achtergrond"
      />
      <div class="w-4/5 h-full relative flex flex-col justify-evenly">
        <div class="w-fit h-72 flex flex-col md:justify-evenly lg:justify-evenly">
          <div className="overflow-hidden">
            <p class="text-5xl md:text-9xl lg:text-9xl font-bold motion-safe:animate-slideFromTop">
              Wij willen
            </p>
          </div>
          <div className="overflow-hidden">
            <p class="text-3xl md:text-6xl lg:text-6xl pl-5 md:pl-32 lg:pl-32 animate-slideFromTop1">
              het best voor jouw
            </p>
          </div>
          <div className="overflow-hidden">
            <p class="overflow-hidden text-3xl md:text-6xl lg:text-6xl font-semibold pl-16 md:pl-52 lg:pl-52 animate-slideFromTop2">
              en jouw huisdier
            </p>
          </div>
        </div>
        <div class="overflow-hidden w-fit h-80 md:h-56 lg:h-56 flex flex-col justify-evenly">
          <p class="text-xl w-4/5 md:w-2/5 lg:w-2/5 animate-slideFromTop3">
            Alles voor jouw huisdier hebben wij in onze winkel staan. Wij helpen
            graag met advies of als u problemen heeft met uw huisdier.
          </p>
          <div class="overflow-hidden flex flex-row gap-[2rem]">
            <button class="p-[1em] rounded-[1em] bg-primary-color text-secondary-text-color text-l font-bold md:text-2xl md:font-normal lg:text-2xl lg:font-normal animate-slideFromTop4">
              Kom bij ons langs
            </button>
            <button class="p-[1em] text-secondary-text-color text-2xl animate-slideFromTop4">
              Reviews
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
