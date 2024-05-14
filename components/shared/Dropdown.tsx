import React, { useEffect, useState } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Dropdown = ({ value, onChangeHandler }: any) => {
  const [roles, setRoles] = useState([
    { _id: "1", position: "admin" },
    { _id: "2", position: "staff" },
    { _id: "3", position: "user" },
  ]);

  const [selectedValue, setSelectedValue] = useState(value);

  useEffect(() => {
    setSelectedValue(value);
  }, [value]);

  const handleChange = (newValue: string) => {
    setSelectedValue(newValue);
    onChangeHandler(newValue);
  };
  return (
    <div>
      <Select onValueChange={handleChange} value={selectedValue}>
        <SelectTrigger className="select-field">
          <SelectValue>
            {roles.find((role) => role._id === selectedValue)?.position ||
              "Role"}
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          {roles.map((role) => (
            <SelectItem
              key={role._id}
              value={role._id}
              className="select-item p-regular-14"
            >
              {role.position}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default Dropdown;
