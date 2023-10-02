import React, { useMemo, useState } from "react";

const UseMemoHookExample = () => {
  const [value, setValue] = useState(0);
  const [toggle, setToggle] = useState(true);
  const handleClick = () => {
    setValue(value + 1);
  };
  const complexComputation = (num) => {
    console.log(num);
    for (var i = 0; i < 100000000; i++) {}
    return num;
  };

  const complexResult = useMemo(() => {
    return complexComputation(value);
  }, [value]);
  return (
    <>
      <button onClick={handleClick}>click me for increment</button>
      <p>Incremented value is {complexResult}</p>
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        {toggle ? <>click me plss</> : <>reverse me to original mode</>}
      </button>
    </>
  );
};
// usememo hook in react is used to improve performance of an react application, it is used to memoize the complex computation
// of an variable, This can help to improve unnecessary calculation on every render of an component
export default UseMemoHookExample;
