import React from 'react';
import style from './TodoListItem.module.css'

function TodoListItem({ todo, onRemoveTodo }) {
    return (
        <li className = {style.ListItem}>
            {todo.title}
            <button
                type="button"
                onClick={() => onRemoveTodo(todo.id)}
                style={{ marginLeft: '8px' }}
            >
                Remove
            </button>
        </li>
    );
}

export default TodoListItem;