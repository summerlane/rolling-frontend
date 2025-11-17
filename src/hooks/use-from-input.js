import { useState } from "react";

export default function useFormInput(initialValue = "") {
  const [value, setValue] = useState(initialValue);
  const [isTouched, setIsTouched] = useState(false);

  // 에러 상태 계산 빙법: 포커스 아웃되었고, 값이 비어있을 때 에러
  const hasError = isTouched && value.trim() === "";

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleBlur = () => {
    setIsTouched(true);
  };

  return {
    value,
    hasError,
    handleChange,
    handleBlur,
  };
}
