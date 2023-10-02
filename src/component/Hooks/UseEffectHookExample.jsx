import React, { useEffect } from "react";
import UseCustomHook from "./UseCustomHook";

const UseEffectHookExample = () => {
  useEffect(() => {
    document.title = "Meri marji bhai !!";
  }, []);

  const { isLoading, isError, value } = UseCustomHook(
    "https://jsonplaceholder.typicode.com/users"
  );
  return (
    <>
      <h1>Hello from useEffect hooks </h1>
      {isLoading ? (
        <h3>Loading</h3>
      ) : (
        <div>
          {isError ? (
            <h3>Error: Please try again</h3>
          ) : (
            <ul>
              {value?.map((element) => {
                return <li key={element.id}>{element.name}</li>;
              })}
            </ul>
          )}
        </div>
      )}
    </>
  );
};

export default UseEffectHookExample;
