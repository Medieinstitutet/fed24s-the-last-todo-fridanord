import { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';


interface Props {
    onAddTodo: (text: string) => void;
}

const TodoForm = ({ onAddTodo }: Props) => {
    const [input, setInput] = useState(''); 

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); //Stoppar sidan från att laddas om 
        if (input.trim()) {
            onAddTodo(input); // Anropar funktionen från props och skickar in texten
            setInput('');
        }
    };

    return (
        <Box component="form" onSubmit={handleSubmit} mb={2} display="flex" gap={1}>
            <TextField
                label="Ny Todo"
                variant="outlined"
                fullWidth
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <Button type="submit" variant="contained" color="success">
                <AddIcon />
            </Button>
        </Box>
    );
};

export default TodoForm;