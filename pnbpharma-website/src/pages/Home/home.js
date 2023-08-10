import React from "react";
import lab from "../.././assets/images/lab.webp";
const Home = () => {
  const styles = {
    backgroundImage: `url(${lab})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh", // Set the minimum height to cover the viewport
    // Add more styling as needed
  };
  return (
    <div>
      <div>
        <img src={lab} alt="image not available" className="w-fit h-fit"/>
      </div>
      <div className="flex flex-col items-center bg-white">
        <p className="font-playfair text-3xl font-bold  w-6/12 text-sky-950 pt-5 pb-5">Your Health, Our Priority</p>
        <p className="font-playfair text-xl  w-6/12 pb-10 text-justify text-sky-950">
          At P&B Pharmaceuticals Private Limited, we are driven by a profound
          commitment to improving lives through innovation and excellence in
          pharmaceutical manufacturing. With a passion for healthcare and a
          vision for a healthier world, we strive to set new industry standards
          and make a positive impact on global health.
        </p>
      </div>
    </div>
  );
};

export default Home;
