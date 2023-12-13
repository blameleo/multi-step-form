import React, { useEffect, useState } from "react";

type props = {
  useFormHandler: any;
  handleNext: (params: number) => void;
  handleBack: (params: number) => void;

};

type Formprops = {
  birth_place: string;
  businessName: string;
  description: string;
  dob: string;
  email: string;
  favorite_city: string;
  firstname: string;
  lastname: string;
};
const ReviewPage: React.FC<props> = ({ useFormHandler, handleNext ,handleBack}) => {
  const [state, setState] = useState<Formprops>();
  useEffect(() => {
    const formData = useFormHandler.getValues();
    setState(formData);
  }, []);
  return (
    <div className="">
      <h1 className="text-center font-bold">Review page</h1>
      <div className="bg-gray-300 rounded-lg">
      <div className=" text-center py-2">
        <span className="font-bold">First name:</span>{" "}
        <span> {state?.firstname}</span>{" "}
      </div>
      <div className=" text-center py-2">
        <span className="font-bold">Last name::</span>{" "}
        <span> {state?.lastname}</span>{" "}
      </div>
      <div className=" text-center py-2">
        <span className="font-bold">Date of birth:</span>{" "}
        <span> {state?.dob}</span>{" "}
      </div>
      <div className=" text-center py-2">
        <span className="font-bold">Email:</span> <span> {state?.email}</span>{" "}
      </div>
      <div className=" text-center py-2">
        <span className="font-bold">Business name:</span>{" "}
        <span> {state?.businessName}</span>{" "}
      </div>
      <div className=" text-center py-2">
        <span className="font-bold">Description:</span>{" "}
        <span> {state?.description}</span>{" "}
      </div>
      <div className=" text-center py-2">
        <span className="font-bold">Birth place:</span>{" "}
        <span> {state?.birth_place}</span>{" "}
      </div>
      <div className=" text-center py-2">
        <span className="font-bold">Favorite city:</span>{" "}
        <span> {state?.favorite_city}</span>{" "}
      </div>
      </div>
    

      <div className="flex justify-between mt-4">
      <button onClick={()=>handleBack(1)} type="submit" className="bg-green-600 text-white p-2 rounded">
          Back
        </button>
        <button onClick={()=>handleNext(1)} type="submit" className="bg-green-600 text-white p-2 rounded">
          Continue
        </button>
      </div>
    </div>
  );
};

export default ReviewPage;
