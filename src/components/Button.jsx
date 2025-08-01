import React from "react";

const Button = (props) => {
  return (
    <>
      <a href="" className="px-8 py-4 bg-pink-400 text-white font-semibold rounded-full
      hover:bg-pink-500 transition">
        {props.nameButton}I
      </a>
    </>
  );
};

export default Button;
