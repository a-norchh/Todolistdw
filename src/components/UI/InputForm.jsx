import React from "react";
import Button from "./Button";

const InputForm = (props) => {
  return (
    <>
      <form onSubmit={props.onSubmit}>
        <input id="text_todo" type="text" placeholder={props.placeholder} />
        <Button>{props.btnTitle}</Button>
      </form>
    </>
  );
};

export default InputForm;
