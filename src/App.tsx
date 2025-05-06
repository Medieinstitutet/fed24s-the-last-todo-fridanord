import { useState } from 'react';
import { Container, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import './App.css'
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
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

  const deleteTodo = (id:number) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  const moveUp = (index: number) => {
    if (index === 0) return;
    const newTodos = [...todos];
    [newTodos[index - 1], newTodos[index]] = [newTodos[index], newTodos[index -1]];
    setTodos(newTodos);
  };

  const moveDown = (index: number) => {
    if (index === todos.length - 1) return;
    const newTodos = [...todos];
    [newTodos[index], newTodos[index + 1]] = [newTodos[index + 1], newTodos[index]];
    setTodos(newTodos);
  };

  //const sortedTodos = [...todos].sort((a, b) => Number(a.done) - Number(b.done));

  return (
    <Container maxWidth="sm">
      <Box mt={4}>
        <Typography variant='h4' gutterBottom>
          Att göra, en todo lista.
        </Typography>
        <TodoForm onAddTodo={addTodo} />
        <TodoList
          todos={todos}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
          onMoveUp={moveUp}
          onMoveDown={moveDown}
        />
      </Box>
    </Container>

  );
}

export default App
