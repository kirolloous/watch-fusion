import React from "react";

const Settings = () => {
  return (
    <div className="hidden md:flex flex-row gap-2">
      <select
        name="currency"
        className=" bg-gray-500 text-white w-fit h-fit text-center rounded-full p-2  cursor-pointer border-none"
      >
        <option value="eng">EUR</option>
        <option value="eng">USD</option>
      </select>

      <select
        name="language"
        className=" bg-gray-500 text-white w-fit h-fit text-center rounded-full p-2  cursor-pointer border-none"
      >
        <option value="eng">ENG</option>
        <option value="eng">AR</option>
      </select>
    </div>
  );
};

export default Settings;
