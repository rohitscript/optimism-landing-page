import React from "react";
import Button from "./Button";
const Hero = () => {
  return (
    <>
      <div className="banner mx-2 rounded-2xl px-6 lg:px-20 lg:mx-12 lg:min-h-96">
        <h1 className="text-5xl font-bold pt-20 lg:text-7xl lg:w-32  tracking-tighter ">
          Optimism Collective
        </h1>
        <p className="py-6">Build a world that benefits all, owned by all.</p>

        <div className="md:w-100 md:flex gap-3">
          <Button  text="Start Building" />
          <Button text="Bridge" />
        </div>
      </div>
    </>
  );
};

export default Hero;
