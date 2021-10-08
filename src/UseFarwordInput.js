import React, { forwardRef } from "react";

const UseForwardInput = forwardRef((props, ref) => {
  return (
    <div>
      <h1>Appling UseFarword </h1>
      <input type="text" ref={ref} />
    </div>
  );
});
export default UseForwardInput;

//forwardRef() is technique to automatically forward ref from parent to its children.
//this is example for how to focus input field through ref.
