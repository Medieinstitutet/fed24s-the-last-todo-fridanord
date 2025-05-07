import { Todo } from "../models/Todo";

type TodoListProps = {
    todos: Todo[];
    onDelete: (id: number) => void;
};

export const TodoList = ({ todos, onDelete }: TodoListProps) => {
    return (
        <ul className="no-bullets">
            {todos.map(todo => (
                <li key={todo.id}>
                    {todo.text} <button onClick={() => onDelete(todo.id)}>Klar</button>
                </li>
            ))}
        </ul>
    );
};