import { useState } from 'react';
import './App.css'
import { TodoList } from './components/TodoList';
import AddTodo from './components/AddTodo';
import { Todo } from './models/Todo';

function App() {

  const [todos, setTodos] = useState<Todo[]>([
    {id: 1, text: "Gå ut med hunden", done: false},
    {id: 2, text: "Söka fler LIA platser", done: false},
    {id: 3, text: "Laga middag", done: true},
  ]);

  const toggleTodo = (id: number) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      done: false,
    };
    setTodos(prev => [newTodo, ...prev]);
  };

  const sortedTodos = [...todos].sort((a, b) => Number(a.done) - Number(b.done));

  return (
    <main className="p-3 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Min Todo Lista</h1>
      <AddTodo addTodo ={addTodo} />
      <TodoList todos={sortedTodos} toggleTodo={toggleTodo} />
    </main>

  );
}

export default App
