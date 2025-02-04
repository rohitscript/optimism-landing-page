import React from "react";
import Button from "./Button";

const OverlayWelcome = () => {
  return (
    <>
      <div className="h-screen  flex justify-center items-center fixed inset-0 bg-black/80 ">
        <div className="overlayCard w-[400px] bg-white p-6 rounded-3xl text-center">
          <img
            className="pb-4 "
            src="https://www.optimism.io/sun.svg"
            alt="sun"
          />
          <h1 className="text-xl font-bold tracking-tighter my-2">
            Good morning
          </h1>
          <p className="text-sm py-4 ">
            Before you continue into the world of Optimism, please read and
            agree to the Terms of Service and Optimism Community Agreement.
          </p>
          <Button text="Agree to terms" />
        </div>
      </div>
    </>
  );
};

export default OverlayWelcome;
