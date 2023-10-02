import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [formValue, setFormValue] = useState([]);
  const getData = (data) => {
    setFormValue(data);
  };
  console.log(formValue);
  return (
    <>
      <div>Parent</div>
      <Child getData={getData} />
      <ul>
        {formValue.map((element, id) => {
          return (
            <div key={id}>
              <li>{element.name}</li>
              <li>{element.city}</li>
            </div>
          );
        })}
      </ul>
    </>
  );
};

export default Parent;
