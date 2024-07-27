import React from "react";
import { Select, SelectItem } from "@nextui-org/react";
const Settings = () => {
  return (
    <div className="hidden md:flex flex-row gap-2 ">
      <Select defaultSelectedKeys={["EUR"]} radius="full" className="w-24">
        <SelectItem key="EUR">EUR</SelectItem>
        <SelectItem>USD</SelectItem>
      </Select>
      <Select defaultSelectedKeys={["ENG"]} radius="full" className="w-24">
        <SelectItem key="ENG">ENG</SelectItem>
        <SelectItem>AR</SelectItem>
      </Select>
    </div>
  );
};

export default Settings;
