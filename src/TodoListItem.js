import React from 'react';
import styles from './TodoListItem.module.css'

function TodoListItem({ todo, onRemoveTodo }) {
    return (
        <li className = {styles.listItem}>
            {todo.title}
            <button
                type="button"
                onClick={() => onRemoveTodo(todo.id)}
                className={styles.buttonItem}
            >
                Remove
            </button>
        </li>
    );
}

export default TodoListItem;