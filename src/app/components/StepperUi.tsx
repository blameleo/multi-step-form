import React from "react";
import { FaCheckCircle } from "react-icons/fa";

type stepperUiProps = {
  currentStep: number;
  completed: boolean;
};
const StepperUi: React.FC<stepperUiProps> = ({
  currentStep,
  completed,
}: stepperUiProps) => {


  const renderStep = (step: number, label: string) => (
    <div
      className={`${
        step < currentStep && completed
          ? "border-green-500 text-green-500"
          : ""
      } border text-gray-300 w-[2rem] h-[2rem] flex justify-center items-center rounded-full`}
    >
      {step < currentStep && completed ? <FaCheckCircle /> : label}
    </div>
  );
  return (
    <div className="flex items-center gap-x-6 pb-6">
    {renderStep(1, "1")}
    <div className="bg-white h-1 w-14"></div>
    {renderStep(2, "2")}
    <div className="bg-white h-1 w-14"></div>
    {renderStep(3, "3")}
    <div className="bg-white h-1 w-14"></div>
    {renderStep(4, "4")}
  </div>
  );
};

export default StepperUi;
