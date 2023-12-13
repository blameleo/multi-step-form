"use client"
import React, { useState } from "react";
import UserInfoForm from "./UserInfoForm";
import BusinessInfo from "./BusinessInfo";
import OtherInfo from "./OtherInfo";
import StepperUi from "./StepperUi";
import Image from "next/image";
import ReviewPage from "./ReviewPage";
import SuccessPage from "./SuccessPage";


type props = {
  useFormHandler: object
}


const MultiStepForm = ({useFormHandler}: props) => {
  const [currentStep, setCurrentStep] = useState<number>(1); //NOTE - this tracks the current step of the whole form
  const totalSteps = 3; //NOTE - total steps for the whole form
const [completed,setCompleted]= useState<boolean>(false)//to check if the form is completed
  //NOTE - FUNCTION TO move to next form 
  
  const handleNext = (page: number) =>{
    setCurrentStep((prev: number)=> prev + page)
    setCompleted(true)
  }

  const handleBack = (page: number)=>{
    setCurrentStep((prev: number)=> prev - page)
    setCompleted(true)
  }

  

  //NOTE - this renders the individual forms
  const renderForm = () => {
    switch (currentStep) {
      case 1:
        return <UserInfoForm  handleNext={handleNext} useFormHandler={useFormHandler} />;
      case 2:
        return <BusinessInfo handleBack={handleBack}  handleNext={handleNext} useFormHandler={useFormHandler}/>;
      case 3:
        return <OtherInfo handleBack={handleBack}  handleNext={handleNext} useFormHandler={useFormHandler}/>;
        case 4:
          return <ReviewPage handleBack={handleBack} handleNext={handleNext} useFormHandler={useFormHandler} />;
          case 5:
          return <SuccessPage />;
      default:
        return null;
    }
  };
  return (
    <div className=" sm:w-[80%] grid md:grid-cols-2 h-[80%] shadow-xl bg-slate-900">
      <div className="flex justify-center items-center bg-slate-900 ">
        <div className="">
       {currentStep <5 &&  <StepperUi completed={completed} currentStep={currentStep}/>}
        {renderForm()}
        </div>
      
      </div>
      <div  className="hidden sm:block backgroundImage">
    
      </div>
    </div>
  );
};

export default MultiStepForm;
