import React from "react";
import styles from "./landing.module.css";
import bg from "../../assets/landingBg.svg";

export default function Landing() {
  return (
    <div class="flex flex-row justify-center w-screen h-[80vh] text-secondary-text-color mt-24">
      <img
        class="w-screen h-4/5 object-cover absolute"
        src={bg}
        alt="Foto van een hond als achtergrond"
      />
      <div class="w-4/5 h-full relative flex flex-col justify-evenly">
        <div class="w-fit h-72 flex flex-col justify-evenly">
          <div class="text-9xl font-bold">Wij willen</div>
          <div class="text-6xl pl-32">het best voor jouw</div>
          <div class="text-6xl font-semibold pl-52">en jouw huisdier</div>
        </div>
        <div class="w-fit h-56 flex flex-col justify-evenly">
          <p class="text-xl w-2/5">
            Alles voor jouw huisdier hebben wij in onze winkel staan. Wij helpen
            graag met advies of als u problemen heeft met uw huisdier.
          </p>
          <div class="flex flex-row gap-[2rem]">
            <button class="p-[1em] rounded-[1em] bg-primary-color text-secondary-text-color text-2xl">
              Kom bij ons langs
            </button>
            <button class="p-[1em] text-secondary-text-color text-2xl">
              Reviews
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
