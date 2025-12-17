# 📝 Todo App (React)


This is a simple **Todo App** I built while learning **React**. I created this project to practice real‑world React concepts like **state management**, **props**, **hooks**, and **localStorage**.

I’ve kept the code clean and easy to understand, especially for beginners who are just starting with React.

---

## 🚀 Features

* Add a new todo
* Delete a todo
* Mark todo as completed / uncompleted
* Clear all todos at once
* Todos are saved in **localStorage** (they stay even after refresh)
* Shows current date

---

## 🛠️ Tech Stack

* React (useState, useEffect)
* Vite
* JavaScript (ES6)
* CSS
* Browser LocalStorage

---

## 📁 Project Structure

```bash
src/
├─ Todo.jsx          # Main component & logic
├─ TodoForm.jsx      # Todo input form
├─ TodoList.jsx      # Single todo item UI
├─ TodoDate.jsx      # Date display
├─ localStorage.js   # LocalStorage helper functions
├─ index.css         # Styling
└─ main.jsx
```

---

## ▶️ How to Run the Project

```bash
# Clone the repository
git clone https://github.com/Abdulrkhan98/Todo-app.git

# Go into the project folder
cd Todo-app

# Install dependencies
npm install

# Start the development server
npm run dev
```

---

## 💾 LocalStorage Logic

To keep the code clean, I moved the localStorage logic into a separate file.

### `localStorage.js`

```js
const todoKey = "reactTodo";

export const getLocalTodos = () => {
  const rawTodos = localStorage.getItem(todoKey);
  if (!rawTodos) return [];
  return JSON.parse(rawTodos);
};

export const setLocalTodos = (task) => {
  localStorage.setItem(todoKey, JSON.stringify(task));
};
```

* `getLocalTodos()` → loads saved todos when the app starts
* `setLocalTodos(task)` → saves todos whenever todos change

---

## 🧠 Core React Logic

```js
const [task, setTask] = useState(getLocalTodos);

useEffect(() => {
  setLocalTodos(task);
}, [task]);
```

This ensures:

* Todos load only once on first render
* Any update automatically syncs with localStorage

---

## 🧪 Example Todo Object

```js
{
  id: 1,
  content: "Learn React",
  checked: false
}
```

---

## ✨ What I Learned

* How to manage state in React
* How `useEffect` works in real projects
* How to persist data using localStorage
* Importance of separating logic and UI
* Writing cleaner and reusable code

---

## 👨‍💻 Author

**Abdul Rahman Khan**
React Learner & Frontend Developer

---

## ❤️ Final Words

This project is part of my React learning journey. Feel free to use it, improve it, or add new features. If you’re learning React too — keep building small projects like this, it really helps.

Happy coding 🚀
