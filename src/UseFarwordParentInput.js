import React from "react";
import UseFarwordInput from "../src/UseFarwordInput";
import { useRef } from "react";

const UseForwardParentInput = () => {
  const inputRef = useRef();

  const handleFocus = () => {
    inputRef.current.focus();
  };
  return (
    <div>
      <UseFarwordInput ref={inputRef} />
      <br />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
};
export default UseForwardParentInput;
