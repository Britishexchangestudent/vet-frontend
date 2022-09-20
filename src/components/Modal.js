import React from "react";

function Modal({ title, children }) {
  return (
    <div className="fixed top-0 right-0 left-0 bottom-0 z-50 bg-overlay-black bg-opacity-30">
      <div className="fixed  inset-x-0 mt-[25vh] text-white  m-auto w-2/6   sm:w-[500px] md:w-[700px] p-6  bg-dark shadow-md rounded-md ">
        <h1 className="text-2xl font-extrabold flex items-center justify-center mx-auto w-full mt-1">
          {title}
        </h1>
        {children}
      </div>
    </div>
  );
}

export default Modal;
