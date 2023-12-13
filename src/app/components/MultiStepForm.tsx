"use client"
import React, { useState } from "react";
import UserInfoForm from "./UserInfoForm";
import BusinessInfo from "./BusinessInfo";
import OtherInfo from "./OtherInfo";
import StepperUi from "./StepperUi";
import Image from "next/image";
// import formImage from "/image-1.jpg"
type MultiStepFormProps = {
  useFormHandler: object
}


const MultiStepForm = ({useFormHandler}: MultiStepFormProps) => {
  const [currentStep, setCurrentStep] = useState<number>(1); //NOTE - this tracks the current step of the whole form
  const totalSteps = 3; //NOTE - total steps for the whole form
const [completed,setCompleted]= useState<boolean>(false)//to check if the form is completed
  //NOTE - FUNCTION TO move to next form 
  const handleNext = (page: number) =>{
    setCurrentStep((prev: number)=> prev + page)
    setCompleted(true)
  }



  //NOTE - this renders the individual forms
  const renderForm = () => {
    switch (currentStep) {
      case 1:
        return <UserInfoForm setCompleted={setCompleted} handleNext={handleNext} useFormHandler={useFormHandler} />;
      case 2:
        return <BusinessInfo />;
      case 3:
        return <OtherInfo />;
      default:
        return null;
    }
  };
  return (
    <div className=" w-[80%] grid md:grid-cols-2 h-[80%] shadow-xl bg-slate-900">
      <div className="flex justify-center items-center bg-slate-900 ">
        <div className="">
        <StepperUi completed={completed} currentStep={currentStep}/>
        {renderForm()}
        </div>
      
      </div>
      <div  className="hidden sm:block backgroundImage">
    
      </div>
    </div>
  );
};

export default MultiStepForm;
