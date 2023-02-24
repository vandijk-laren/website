import React from "react";
import styles from "./footer.module.css";

import Devider from "../devider/Devider";
import logoBlue from "../../assets/logoBlue.svg";

export default function Footer() {
  const opening = [
    {
      dag: "Maandag",
      tijd: "13:00 - 18:00",
    },
    {
      dag: "Dinsdag",
      tijd: "09:15 - 18:00",
    },
    {
      dag: "Woensdag",
      tijd: "09:15 - 18:00",
    },
    {
      dag: "Donderdag",
      tijd: "09:15 - 18:00",
    },
    {
      dag: "Vrijdag",
      tijd: "09:15 - 18:00",
    },
    {
      dag: "Zaterdag",
      tijd: "09:15 - 17:00",
    },
    {
      dag: "Zondag",
      tijd: "Gesloten",
    },
  ];

  return (
    <div class="flex flex-col md:flex-row lg:row w-screen bg-primary-text-color text-secondary-text-color p-4">
      <div class="w-2/5 p-2 flex flex-col gap-[0.5rem]">
        <p class="text-4xl font-bold">Adres</p>
        <Devider />
        <div class="flex flex-col h-3/5 justify-between content-evenly">
          <div>
            <p class="text-xl font-semibold">Dieren speciaalzaak Van Dijk</p>
            <p>Zevenend 29</p>
            <p>1251 RL Laren NH</p>
          </div>
          <div class="flex flex-row gap-[0.5rem]">
            <p>Tel:</p>
            <p>035-5314262</p>
          </div>
        </div>
      </div>
      <div class="w-2/5 p-2 flex flex-col gap-[0.5rem]">
        <p class="text-4xl font-bold">Openingstijden</p>
        <Devider />
        <div>
          {opening.map((element) => {
            return (
              <div class="flex flex-row justify-between w-60" key={element.dag}>
                <p>{element.dag}</p>
                <p>{element.tijd}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div class="hidden md:block lg:block md:w-2/6 lg:w-2/6 md:p-2 lg:p-2 md:flex lg:flex md:justify-center lg:justify-center md:items-center lg:items-center">
        <img class="w-4/5" src={logoBlue} alt="Logo" />
      </div>
    </div>
  );
}
