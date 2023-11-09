import React, { useState } from 'react';

const TodoList = () => {
  const [inputData, setInputData] = useState("");
  const [todoData, setTodoData] = useState([]);
  const [updateIndex, setUpdateIndex] = useState(0);
  const handleSubmit = () => {
    if (updateIndex !== 0) {
      const result = todoData.map((value, id) => {
        return id === updateIndex ? inputData : value;
      });
      setTodoData(result);
      setUpdateIndex(0);
      setInputData("");
    } else {
      setTodoData([...todoData, inputData]);
      setInputData("");
    }
  };
  const handleDelete = (index) => {
    const newResultAfterDelete = todoData.filter((_, id) => id !== index);
    setTodoData(newResultAfterDelete);
  };
  const handleUpdate = (index) => {
    const findClickedData = todoData.find((_, id) => id === index);
    setInputData(findClickedData);
    setUpdateIndex(index);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="add todos......"
        value={inputData}
        onChange={(e) => setInputData(e.target.value)}
      />
      <button type="submit" onClick={handleSubmit}>
        Send
      </button>
      <h3>TodoList</h3>
      <ul>
        {todoData.map((value, index) => {
          return (
            <div key={index}>
              <li>{value}</li>
              <button onClick={() => handleDelete(index)}>Delete</button>
              <button onClick={() => handleUpdate(index)}>Update</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
