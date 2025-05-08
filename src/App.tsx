import { useState } from 'react';
import { Container, Typography, Box } from '@mui/material';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoFilter from './components/TodoFilter';
import type { Todo } from './models/Todo';
import './index.css';

//Huvudkomponent, håller vårat state.
// State = En komponents minne.
// Innehåller vår lista med todo objekt.
function App() {
  //useState = En hook, som lagrar vår lista.
  //Varje todo är ett objekt.
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "Gå ut med hunden", done: false },
    { id: 2, text: "Söka fler LIA-platser", done: false },
    { id: 3, text: "Laga middag", done: true }
  ]);

  // State igen, en komponents minne.
  // Visar vilket filter som är aktivt.
  // Det här statet får bara innehålla 3 strängar, all, done, notdone.
  // Gör så att vi kan filtera todosen baserat på dom olika värdena. 
  const [filter, setFilter] = useState<"all" | "done" | "notdone">("all");

  //Filtrerar todos utifrån valt filter
  const filteredTodos = todos.filter(todo => {
    if (filter === "done") return todo.done; // === Jämför, så här jämför den och visar bara klara uppgifter
    if (filter === "notdone") return !todo.done;// Jämför och visar bara oklara uppgifter
    return true;// Om filtet är all, visa alla uppgifter.
  });

  //Funktion som lägger till en ny todo.
  //Skapar ett nytt todo-objekt med ett unikt id, date.now så den lägger sig högst upp i listan.
  const addTodo = (text: string) => {
    const newTodo: Todo = { id: Date.now(), text, done: false };
    setTodos(prev => [newTodo, ...prev]);
  };

  //Funktion som togglar en todo, markerar den som klar eller inte klar.
  const toggleTodo = (id: number) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  // Funktion som tar bort en todo, filterar bort den vi valt genom rätt id.
  const deleteTodo = (id: number) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  // Funktion för att flytta upp en todo i listan
  // Byter plats på todosen, inte nödvöndigt om vi har filter funktionen men kul. 
  const moveUp = (index: number) => {
    if (index === 0) return;// Kan inte flyttas upp om den redan ligger högst upp, samma i nedan.
    const newTodos = [...todos];//Kopierar arrayen
    [newTodos[index - 1], newTodos[index]] = [newTodos[index], newTodos[index - 1]];
    setTodos(newTodos);// Uppdaterar vårat state, komponentens minne.
  };

  // Funktion för att flytta ner en todo, byter plats som funktionen ovan.
  const moveDown = (index: number) => {
    if (index === todos.length - 1) return;
    const newTodos = [...todos];
    [newTodos[index + 1], newTodos[index]] = [newTodos[index], newTodos[index + 1]];
    setTodos(newTodos);
  };

  // JSX - renderar appen.
  // JSX = låter mig skriva kod som liknar html.
  // JSX = Skapar react element.
  // JSX = JavaScript XML.
  // Nedan finns formuläret så en ny todo kan läggas till.
  // Nedan finns listan med todos. 
  // Nedan finns filterknapparna.
  // OBS - Lägga till klasser för att hantera i min css eller direkt här?
  return (
    <Container maxWidth="sm">
      <Box textAlign="center" mt={4} className="todo-list">
        <Typography variant="h4" gutterBottom sx={{ fontFamily: 'Caveat, cursive' }}>
          Att göra-lista
        </Typography>
        <TodoForm onAddTodo={addTodo} />
        <TodoFilter current={filter} onChange={setFilter} />
        <TodoList
          todos={filteredTodos}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
          onMoveUp={moveUp}
          onMoveDown={moveDown}
        />
      </Box>
    </Container>
  );
}

export default App;