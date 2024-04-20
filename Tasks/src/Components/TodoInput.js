import React from 'react'

const TodoInput = ({
    newTodoTitle,
    setNewTodoTitle,
    newDescription,
    setNewDescription,
    handleAddNewToDo,
  }) => {
  return (
    <div className="todo-input">
    <div className="todo-input-item">
      <label>Title:</label>
      <input
        type="text"
        value={newTodoTitle}
        onChange={e => setNewTodoTitle (e.target.value)}
        placeholder="Title"
      />
    </div>
    <div className="todo-input-item">
      <label>Description:</label>
      <input
        type="text"
        value={newDescription}
        onChange={e => setNewDescription (e.target.value)}
        placeholder="Description"
      />
    </div>
    <div className="todo-input-item">
      <button
        className="primary-btn"
        type="button"
        onClick={handleAddNewToDo}
      >
        Add
      </button>
    </div>
  </div>
  )
}

export default TodoInput