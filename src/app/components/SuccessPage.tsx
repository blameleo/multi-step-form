import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const SuccessPage = () => {
  return (
    <div>
        <h1 className=" text-green-500 font-bold">You successfully submitted the form</h1>
        <div className=" flex justify-center py-5">
        <FaCheckCircle size={50} className="text-green-500 text-center"/>

        </div>
    </div>
  );
};

export default SuccessPage;
