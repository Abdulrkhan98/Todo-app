const todoKey = "reactTodo";

export const getLocalTodos = () => {
  const rawTodos = localStorage.getItem(todoKey);
  if (!rawTodos) return [];
  return JSON.parse(rawTodos);
};

export const setLocalTodos = (task) => {
  localStorage.setItem(todoKey, JSON.stringify(task));
};
