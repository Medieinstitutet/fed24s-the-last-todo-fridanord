import { Todo } from '../models/Todo';
import {
    ListItem,
    Checkbox,
    IconButton,
    ListItemText,
    ListItemSecondaryAction,
    Box,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
//import { CheckBox } from "@mui/icons-material";

interface Props {
    todo: Todo;
    index: number;
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
    onMoveUp: (index: number) => void;
    onMoveDown: (index: number) => void;
}

const TodoItem = ({ todo, index, onToggle, onDelete, onMoveUp, onMoveDown }: Props) => {
    return (
        <ListItem divider>
            <Checkbox
                checked={todo.done}
                onChange={() => onToggle(todo.id)}
                color="primary"
            />
            <ListItemText
                primary={todo.text}
                style={{
                    textDecoration: todo.done ? 'line-through' : 'none',
                    color: todo.done ? 'gray' : 'black',
                }}
            />
            <ListItemSecondaryAction> //Ändra detta till en nyare.
                <Box display="flex" gap={1}>
                    <IconButton onClick={() => onMoveUp(index)}>
                        <ArrowUpwardIcon />
                    </IconButton>
                    <IconButton onClick={() => onMoveDown(index)}>
                        <ArrowDownwardIcon />
                    </IconButton>
                    <IconButton onClick={() => onDelete(todo.id)} edge="end">
                        <DeleteIcon />
                    </IconButton>
                </Box>
            </ListItemSecondaryAction>
        </ListItem>
    );
};

export default TodoItem;