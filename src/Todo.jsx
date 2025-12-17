import { useState, useEffect } from "react";
import "./index.css";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDate } from "./TodoDate";

import { getLocalTodos, setLocalTodos } from "./TodoLocalStorage";

export const Todo = () => {
  // ✅ load from localStorage
  const [task, setTask] = useState(getLocalTodos);

  // ✅ save to localStorage
  useEffect(() => {
    setLocalTodos(task);
  }, [task]);

  const handleFormSubmit = (inputValue) => {
    const { id, content, checked } = inputValue;
    if (!content) return;

    const isDuplicate = task.find(
      (curTask) => curTask.content === content
    );
    if (isDuplicate) return;

    setTask((prev) => [...prev, { id, content, checked }]);
  };

  const handleDeleteTodo = (content) => {
    setTask(task.filter((curTask) => curTask.content !== content));
  };

  const handleClearTodoData = () => {
    setTask([]);
  };

  const handleCheckedTodo = (content) => {
    setTask(
      task.map((curTask) =>
        curTask.content === content
          ? { ...curTask, checked: !curTask.checked }
          : curTask
      )
    );
  };

  return (
    <section className="todo-container">
      <header>
        <h1>Todo Lists</h1>
        <TodoDate />
      </header>

      <TodoForm onAddTodo={handleFormSubmit} />

      <section className="myUnOrdList">
        <ul>
          {task.map((curTask) => (
            <TodoList
              key={curTask.id}
              data={curTask.content}
              checked={curTask.checked}
              onHandleDeleteTodo={handleDeleteTodo}
              onHandleCheckedTodo={handleCheckedTodo}
            />
          ))}
        </ul>
      </section>

      <section>
        <button className="clear-btn" onClick={handleClearTodoData}>
          Clear All
        </button>
      </section>
    </section>
  );
};
