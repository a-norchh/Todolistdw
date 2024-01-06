import React from "react";
import Button from "./Button";

const InputForm = (props) => {
  return (
    <>
      <form onSubmit={props.onSubmit} className="input-form">
        <input
          id={props.id}
          type="text"
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
          autoFocus={props.autoFocus}
        />
        <Button>{props.btnTitle}</Button>
      </form>
    </>
  );
};

export default InputForm;
