import { useState } from "react";
import { Todo } from "./models/Todo";
import { TodoList } from "./components/TodoList";
import './index.css';


function App () {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "Gå ut med hunden", done: false },
    { id: 2, text: "En till todo", done: false },
    { id: 3, text: "En tredje todo", done: false }
  ]);

  const handleDelete = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <ul className="list no-bullets">
      <h1>En enkel todo-lista med react</h1>
      <TodoList todos={todos}
      onDelete={handleDelete} />
    </ul>
  );
  
};

export default App;