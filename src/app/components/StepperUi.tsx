import React from "react";
import { FaCheckCircle } from "react-icons/fa";


type stepperUiProps = {
  currentStep: number,
  completed: boolean
}
const StepperUi: React.FC<stepperUiProps> = ({currentStep,completed}: stepperUiProps) => {
  return (
    <div className="flex items-center gap-x-6 pb-6">
      <div className={`${currentStep !== 1  && completed ? "border-green-500 text-green-500": ""} border text-gray-300 w-[2rem] h-[2rem] flex justify-center items-center rounded-full`}>
        
        {completed ? <FaCheckCircle /> : "1"}

      </div>
      <div className="bg-white h-1 w-14"></div>
      <div className={` "border-blue-500 text-blue-500": ""} border text-gray-300 w-[2rem] h-[2rem] flex justify-center items-center rounded-full`}>
        2
      </div>
      <div className="bg-white h-1 w-14"></div>
      <div className={` "border-blue-500 text-blue-500": ""} border text-gray-300 w-[2rem] h-[2rem] flex justify-center items-center rounded-full`}>
        3
      </div>
     
    </div>
  );
};

export default StepperUi;
