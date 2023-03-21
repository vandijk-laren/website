import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Landing from "../../components/landing/Landing";
import Footer from "../../components/footer/Footer";
import Devider from "../../components/devider/Devider";
import DogCatCard from "../../components/dogCatCard/DogCatCard";

export default function DogFood() {
    return (
        <div className="h-fit">
            <Navbar />
            <Landing />
            <DogCatCard />
            <Footer />
        </div>
    )
}
