import React, { useState, useMemo } from "react";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const [apiValue, setApiValue] = useState([]);
  const fetchData = (value) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        const outputResult = data.filter((element) => {
          return (
            value &&
            element &&
            element?.name &&
            element.name.toLowerCase().includes(value)
          );
        });
        setApiValue(outputResult);
      });
  };
  function debounced(fn, delay) {
    let timer;
    return function () {
      let context = this;
      let args = arguments;
      clearTimeout(timer);
      timer = setTimeout(() => {
        return fn.apply(context, args);
      }, delay);
    };
  }
  const processChange = useMemo(() => {
    return debounced((value) => {
      fetchData(value);
    }, 1000);
  }, []);
  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);
    // fetchData(value);
    processChange(value);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={input}
        onChange={(e) => handleChange(e)}
      />
      <div>
        {apiValue.map((value, id) => {
          return (
            <div key={id} onClick={() => alert(`you clicked ${value.name} ??`)}>
              {value.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchBar;
