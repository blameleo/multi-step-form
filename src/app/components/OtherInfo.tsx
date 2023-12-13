import React from "react";
type props = {
  useFormHandler: any;
  handleNext: (params: number) => void;
  handleBack: (params: number) => void;

};

const OtherInfo: React.FC<props> = ({ useFormHandler, handleNext,handleBack }) => {
  const onSubmitHandler = (data: any) => {
    console.log(data);
    handleNext(1);
  };
  return (
    <div>
      <form
        action=""
        className="grid gap-y-4"
        onSubmit={useFormHandler.handleSubmit(onSubmitHandler)}
      >
        <h1 className="text-center text-gray-300  font-bold">
          Enter your other details
        </h1>

        <div className="grid">
          <label className="text-slate-400 pb-1" htmlFor="">
            where were you born ?
          </label>
          <input
            {...useFormHandler.register("birth_place", {required:{ value: true}})}
            type="text"
            placeholder="Place of birth"
            className={`border-2 text-gray-400 border-gray-500  bg-black focus:border-blue-500 outline-none rounded p-2   ${
              useFormHandler.formState.errors.birth_place
                ? "border-red-500 focus:border-red-500"
                : " "
            }`}          />
        </div>

        <div className="grid">
          <label className="text-slate-400 pb-1" htmlFor="">
            what is your favorite city ?
          </label>
          <input
            {...useFormHandler.register("favorite_city", {required:{ value: true}})}
            type="text"
            placeholder="favorite city "
            className={`border-2 text-gray-400 border-gray-500  bg-black focus:border-blue-500 outline-none rounded p-2   ${
              useFormHandler.formState.errors.favorite_city
                ? "border-red-500 focus:border-red-500"
                : " "
            }`}          />
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

export default OtherInfo;
