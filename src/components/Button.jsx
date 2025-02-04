import React from "react";

const Button = ({text="text"}) => {
  return (
    <div>
      <button className="w-full bg-red-600 text-white px-4 py-4 mt-2 rounded-full font-semibold cursor-pointer border-2 border-red-600 transition-all ease-in duration-200 hover:text-red-600 hover:bg-white">
       {text}
      </button>
    </div>
  );
};

export default Button;
