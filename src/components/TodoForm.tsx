import { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

interface Props {
    onAddTodo: (text: string) => void;
}

const TodoForm = ({ onAddTodo }: Props) => {
    const [input, setInput] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (input.trim()) {
            onAddTodo(input);
            setInput('');
        }
    };

    return (
        <Box component="form" onSubmit={handleSubmit} mb={2} display={'flex'} gap={1}>
            <TextField
                label="Ny Todo"
                variant="outlined"
                fullWidth
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <Button type="submit" variant="contained" color="primary">
                Lägg till
            </Button>
        </Box>
    );
};

export default TodoForm;