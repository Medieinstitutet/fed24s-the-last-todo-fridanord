import { Todo } from "../models/Todo";

type Props = {
    todos: Todo[];
    toggleTodo: (id: number) => void
};

export const TodoList = ({ todos, toggleTodo }: Props) => {
    return (
        <ul className="space-y-2-mt-5">
            {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} toogleTodo={toogleTodo} />
            ))}
        </ul>
    );
};