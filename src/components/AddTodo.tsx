import { useState } from "react";

type AddTodoProps = {
    addTodo: (text: string) => void;
};

export default function AddTodo({ addTodo }: AddTodoProps) {
    const [text, setText] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (text.trim() !== "") {
            addTodo(text);
            setText("");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
            <input
            type="text"
            className="border rounded px-2 py-1 flex-grow"
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder="Lägg till fler todos här"
            />
            <button
                type="submit"
                className="bg-blue-300 text-white">
                Lägg till
            </button>
        </form>
    )
}