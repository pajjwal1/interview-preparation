import { useState } from "react";

const url = "https://jsonplaceholder.typicode.com/users";

export default function TestCompany() {
  const [value, setValue] = useState([]);
  const [originalOrder, setOriginalOrder] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");

  const clickHandler = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setValue(data);
    setOriginalOrder(data);
  };

  const sortHandler = () => {
    let sortedUsers = [...value];

    if (sortOrder === "asc") {
      sortedUsers.sort((a, b) => a.name.localeCompare(b.name));
      setSortOrder("desc");
    } else if (sortOrder === "desc") {
      sortedUsers.sort((a, b) => b.name.localeCompare(a.name));
      setSortOrder("normal");
    } else if (sortOrder === "normal") {
      sortedUsers = originalOrder;
      setSortOrder("asc");
    }

    setValue(sortedUsers);
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h3>Disable Button Challenge</h3>
      <button onClick={clickHandler}>Load User</button>
      <button onClick={sortHandler}>Sort name</button>
      <ul>
        {value?.map((element) => {
          return <li key={element?.id}> {element?.name} </li>;
        })}
      </ul>
    </div>
  );
}
