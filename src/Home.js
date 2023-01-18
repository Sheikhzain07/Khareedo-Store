import React from "react";
import FeatureProduct from "./Components/FeatureProduct";
import HeroSec from "./Components/HeroSec";
import Services from "./Components/Services";
import Trusted from "./Components/Trusted";

const Home = () => {
  const data = {
    name: "Khareedo Store",
  };
  return (
    <>
      <HeroSec myData={data} />;
      <FeatureProduct />
      <Services />
      <Trusted />
    </>
  );
};

export default Home;
