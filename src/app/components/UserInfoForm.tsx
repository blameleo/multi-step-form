import React from "react";

type props = {
  useFormHandler: any,
  handleNext: (params: number)=>void,

}

const UserInfoForm: React.FC<props> = ({ useFormHandler,handleNext }) => {
  //handle next form function
  const onSubmit = async (data: object) => {
   console.log(data);
   handleNext(1)
  };
  return (
    <div>
      <form
        action=""
        className="grid gap-y-4"
        onSubmit={useFormHandler.handleSubmit(onSubmit)}
      >
        <h1 className="text-center text-gray-300  font-bold">
          Enter your personal details
        </h1>
        <div className="grid grid-cols-2 gap-3 ">
          <div className="grid">
            <label className="text-slate-400 pb-1" htmlFor="">
              First name
            </label>
            <input
              type="text"
              {...useFormHandler.register("firstname", {
                required: {
                  value: true,
                  message: "first name is required",
                },
                minLength: {
                  value: 3,
                  message: "First name must be at least 3 character",
                },
              })}
              placeholder="Enter first name"
              className={`border-2 text-gray-400 border-gray-500 w-52 bg-black focus:border-blue-500 outline-none rounded p-2  ${
                useFormHandler.formState.errors.firstname
                  ? "border-red-500 focus:border-red-500"
                  : " "
              }`}
            />
          </div>
          <div className="grid">
            <label className="text-slate-400 pb-1" htmlFor="">
              Last name
            </label>
            <input
              {...useFormHandler.register("lastname", {
                required: {
                  value: true,
                  message: "Last name is required",
                },
                minLength: {
                  value: 3,
                  message: "Last name must be at least 3 character",
                },
              })}
              placeholder="Enter last name"
              type="text"
              className={`border-2 text-gray-400 border-gray-500 w-52 bg-black focus:border-blue-500 outline-none rounded p-2   ${
                useFormHandler.formState.errors.lastname
                  ? "border-red-500 focus:border-red-500"
                  : " "
              }`}
            />
          </div>
        </div>
        {useFormHandler.formState.errors && (
          <div>
            <p className="text-red-500 text-sm">
              {useFormHandler.formState.errors?.firstname?.message}
            </p>
            <p className="text-red-500 text-sm">
              {useFormHandler.formState.errors?.lastname?.message}
            </p>
          </div>
        )}
        <div className="grid">
          <label className="text-slate-400 pb-1" htmlFor="">
            Date of birth
          </label>
          <input
            {...useFormHandler.register("dob", { required: { value: true } })}
            type="date"
            className={`border-2 text-gray-400 border-gray-500  bg-black focus:border-blue-500 outline-none rounded p-2   ${
              useFormHandler.formState.errors.dob
                ? "border-red-500 focus:border-red-500"
                : " "
            }`}
          />
        </div>
        <div className="grid">
          <label className="text-slate-400 pb-1" htmlFor="">
            Email
          </label>
          <input
            type="text"
            {...useFormHandler.register("email", { required: { value: true } })}
            placeholder="Enter your email"
            className={`border-2 text-gray-400 border-gray-500  bg-black focus:border-blue-500 outline-none rounded p-2   ${
              useFormHandler.formState.errors.email
                ? "border-red-500 focus:border-red-500"
                : " "
            }`}
          />
        </div>

        <div className="flex justify-end mt-4">
          <button type="submit" className="bg-green-600 text-white p-2 rounded">
            Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserInfoForm;
