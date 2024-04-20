import React from 'react'
import { AiOutlineDelete } from 'react-icons/ai';
import { BsCheckLg } from 'react-icons/bs';


const TodoList = ({
    isCompletedScreen,
    allTodos,
    completedTodos,
    handleToDoDelete,
    handleComplete,
    handleCompletedTodoDelete,
  }) => {
  return (
    <div className="todo-list">

    {isCompletedScreen === false &&
      allTodos.map ((item, index) => (
        <div className="todo-list-item" key={index}>
          <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>

          </div>
          <div>
            <AiOutlineDelete
              title="Delete?"
              className="icon"
              onClick={() => handleToDoDelete (index)}
            />
            <BsCheckLg
              title="Completed?"
              className=" check-icon"
              onClick={() => handleComplete (index)}
            />
          </div>
        </div>
      ))}

    {isCompletedScreen === true &&
      completedTodos.map ((item, index) => (
        <div className="todo-list-item" key={index}>
          <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p> <i>Completed at: {item.completedOn}</i></p>
          </div>
          <div>
            <AiOutlineDelete
              className="icon"
              onClick={() => handleCompletedTodoDelete (index)}
            />
          </div>
        </div>
      ))}
  </div>
  )
}

export default TodoList