import React from "react";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

export default function NieuweProducten() {
  const producten = [
    {
      title: "Honden mand",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies eros ut congue lacinia. Quisque egestas consequat tortor, a varius ligula accumsan nec. Cras aliquet ante augue. ",
      img: "hondMand.svg",
      animation: "slide-right",
      delay: "100",
    },
    {
      title: "Honden voer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies eros ut congue lacinia. Quisque egestas consequat tortor, a varius ligula accumsan nec. Cras aliquet ante augue. ",
      img: "hondMand.svg",
      animation: "slide-up",
      delay: "100",
    },
    {
      title: "Katten voer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies eros ut congue lacinia. Quisque egestas consequat tortor, a varius ligula accumsan nec. Cras aliquet ante augue. ",
      img: "hondMand.svg",
      animation: "slide-left",
      delay: "100",
    },
  ];

  return (
    <div class="flex flex-col p-6">
      <p class="text-4xl font-bold">Nieuwe producten</p>
      <div class="flex flex-col md:flex-row lg:flex-row p-6 gap-8">
        {producten.map((element) => {
          return (
            <div
              data-aos={element.animation}
              data-aos-once="false"
              data-aos-delay={element.delay}
              class="w-full"
              key={element.title}
            >
              <img
                class="w-full"
                src={require(`../../assets/${element.img}`)}
                alt={element.title}
              />
              <div>
                <p class="text-2xl font-semibold">{element.title}</p>
                <p>{element.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
