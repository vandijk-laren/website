import React from "react";
import DogFood from "../../components/DogProducts/DogFood";
import DogThings from "../../components/DogProducts/DogStuff";
import Navbar from "../../components/navbar/Navbar";
import Landing from "../../components/landing/Landing";
import Footer from "../../components/footer/Footer";
import Devider from "../../components/devider/Devider";
import DogStuff from "../../components/DogProducts/DogStuff";
export default function DogPage() {
  return (
    <div className="h-fit">
      <Navbar />
      <Landing />
      <DogFood />
      <Devider />
      <DogStuff />
      <Footer />
    </div>
  );
}
