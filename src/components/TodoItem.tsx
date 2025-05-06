import { Todo } from "../models/Todo";

type TodoItemProps = {
    todo: Todo;
    toggleTodo: (id: number) => void;
};

export default function TodoItem ({ todo, toggleTodo }: TodoItemProps) {
    return (
        <li
            onClick={() => toggleTodo(todo.id)}
            className={`cursor-pointer ${
                todo.done ? "line-through" : "bg-white"
            }`}
        >
            <span>{todo.text}</span>
            <span className="text-sm text-gray-500">{todo.done ? "Klar" : "Inte klar"}</span>
        </li>
    );
}