import { useState } from "react";

const useDropdown = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return {
    value,
    handleChange,
  };
};

export default useDropdown;
