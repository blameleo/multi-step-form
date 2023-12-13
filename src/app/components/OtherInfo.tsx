import React from 'react'

const OtherInfo = () => {
  return (
    <div><form action="" className="grid gap-y-4">
    <h1 className="text-center text-gray-300  font-bold">
      Enter your personal details
    </h1>
    <div className="grid grid-cols-2 gap-3">
      <div className="grid">
        <label className="text-slate-400 pb-1" htmlFor="">
          First name
        </label>
        <input
          type="text"
          placeholder="Enter first name"
          className="border-2 text-gray-400 border-gray-500 w-40 bg-black  outline-none rounded p-2 focus:border-blue-500"
        />
      </div>
      <div className="grid">
        <label className="text-slate-400 pb-1" htmlFor="">
          Last name
        </label>
        <input
          placeholder="Enter last name"
          type="text"
          className="border-2 text-gray-400 border-gray-500 w-40 bg-black  outline-none rounded p-2 focus:border-blue-500"
        />
      </div>
    </div>

    <div className="grid">
      <label className="text-slate-400 pb-1" htmlFor="">
        Date of birth
      </label>
      <input
        type="date"
        className="border-2 text-gray-400 border-gray-500 w bg-black  outline-none rounded p-2 focus:border-blue-500"
      />
    </div>
    <div className="grid">
      <label className="text-slate-400 pb-1" htmlFor="">
       Email
      </label>
      <input
        type="text"
        placeholder="Enter your email"
        className="border-2 text-gray-400 border-gray-500  bg-black  outline-none rounded p-2 focus:border-blue-500"
      />
    </div>

    <div className="flex justify-end mt-4">
      <button className="bg-green-600 text-white p-2 rounded">
        Continue
      </button>
    </div>
  </form></div>
  )
}

export default OtherInfo