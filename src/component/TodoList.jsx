import React, { useState } from 'react';

const TodoList = () => {
  const [data, setData] = useState('');
  const [displayData, setDisplayData] = useState([]);
  const [editData, setEditData] = useState(0);

  const handleClick = () => {
    if (editData !== 0) {
      const updatedData = displayData.map((element, id) =>
        id === editData ? data : element
      );
      setDisplayData(updatedData);
      setEditData(0);
      setData('');
    } else {
      setDisplayData([...displayData, data]);
      setData('');
    }
  };

  const handleDelete = (id) => {
    const updatedData = displayData.filter((_, ids) => ids !== id);
    setDisplayData(updatedData);
  };

  const handleUpdate = (id) => {
    const editTodo = displayData.find((_, ids) => ids === id);
    setData(editTodo);
    setEditData(id);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="todos"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
      <button type="button" onClick={handleClick}>
        {editData !== 0 ? 'Update' : 'Submit'}
      </button>

      <div>
        <h2>Display todo list</h2>
        <ul>
          {displayData.map((element, id) => (
            <div key={id}>
              <li>{element}</li>
              <button type="button" onClick={() => handleDelete(id)}>
                Delete
              </button>
              <button type="button" onClick={() => handleUpdate(id)}>
                Update
              </button>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
