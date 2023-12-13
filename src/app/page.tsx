"use client";
import { useForm } from "react-hook-form";
import MultiStepForm from "./components/MultiStepForm";


export default function Home() {

  const useFormHandler = useForm({mode: 'onChange'});

  return (
    <div className=" grid place-items-center h-screen">
    <MultiStepForm   useFormHandler={useFormHandler}/>
    </div>
  );
}
