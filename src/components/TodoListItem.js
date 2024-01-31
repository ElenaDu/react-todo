import React from 'react';
import styles from './TodoListItem.module.css';
import PropTypes from 'prop-types';

function TodoListItem({ todo, onRemoveTodo }) {
    return (
        <li className={styles.listItem}>
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

// Define PropTypes for 'TodoListItem' component
TodoListItem.propTypes = {
    todo: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
        title: PropTypes.string.isRequired,
    }).isRequired,

    onRemoveTodo: PropTypes.func.isRequired,
};

export default TodoListItem;