import React from "react";
import "./homePage.css";
import Navbar from "../../components/navbar/Navbar";
import Landing from "../../components/landing/Landing";
import NieuweProducten from "../../components/nieuweProducten/NieuweProducten";
import OverDeWinkel from "../../components/overDeWinkel/OverDeWinkel";
import Footer from "../../components/footer/Footer";
import DogPage from '../homePage/DogPage'

export default function HomePage() {
  return (
    <div class="h-fit">
      {/* <Navbar />
      <Landing />
      <NieuweProducten />
      <OverDeWinkel />
      <Footer /> */}
      <DogPage/>
    </div>
  );
}
