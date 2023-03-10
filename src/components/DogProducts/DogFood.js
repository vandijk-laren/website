import React from "react";
import food from "../DogProducts/images/food.svg";

export default function DogFood() {
  return (
    <section>
      <div className="md:flex flex-row justify-center pt-16 pb-16">
        <div className="basis-1/3">
          <img src={food} alt="food" />
        </div>
        <div className="flex flex-col basis-1/2 p-16">
          <div className="flex flex-col justify-between mb-8">
            <h1 className="flex justify-center mb-8 text-3xl">Voedsel</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, sunt
              illum, enim quo nemo neque fugit ab quis dolor sequi minus veniam
              ex in similique consequuntur officiis libero nulla dolorum iure!
              Minus, atque molestias. Facilis vero repellat debitis modi
              repellendus.
            </p>
          </div>
          <div className="flex justify-evenly">
            <button className="p-[1em] rounded-[1em] bg-primary-color text-secondary-text-color text-l font-bold md:text-l md:font-normal lg:text-l lg:font-normal">
              Alle soorten
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
