import React from 'react';

function TodoListItem({ todo, onRemoveTodo }) {
    return (
        <li>
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