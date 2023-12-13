import React from "react";

type props = {
  useFormHandler: any;
  handleNext: (params: number) => void;
  handleBack: (params: number) => void;
};


const BusinessInfo: React.FC<props> = ({ useFormHandler, handleNext,handleBack }) => {

  const onSubmit = (data:any) =>{
    console.log(data);
    handleNext(1)
    }
  return (
    <div>
      <form action="" className="grid gap-y-4" onSubmit={useFormHandler.handleSubmit(onSubmit)}>
        <h1 className="text-center text-gray-300  font-bold">
          Enter your business details
        </h1>
        <div className="grid ">
          <div className="grid">
            <label className="text-slate-400 pb-1" htmlFor="">
              Business name
            </label>
            <input
            {...useFormHandler.register("businessName")}
              type="text"
              placeholder="Enter business name"
              className="border-2 text-gray-400 border-gray-500 bg-black  outline-none rounded p-2 focus:border-blue-500"
            />
          </div>
        </div>
        <div className="grid">
          <label className="text-slate-400 pb-1" htmlFor="">
            Description
          </label>
          <textarea {...useFormHandler.register("description")} className="border-2 text-gray-400 border-gray-500 bg-black  outline-none rounded p-2 focus:border-blue-500"></textarea>
        </div>

        <div className="flex justify-between mt-4">
      <button onClick={()=>handleBack(1)} type="submit" className="bg-green-600 text-white p-2 rounded">
          Back
        </button>
        <button type="submit" className="bg-green-600 text-white p-2 rounded">
          Continue
        </button>
      </div>
      </form>
    </div>
  );
};

export default BusinessInfo;
