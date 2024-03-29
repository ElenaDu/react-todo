import React from 'react';
import TodoListItem from './TodoListItem';
import PropTypes from 'prop-types';

function TodoList({ todoList, onRemoveTodo }) {
    return (
        <ul>
            {todoList.map((item) => {
                return (
                    <TodoListItem key={item.id} todo={item} onRemoveTodo={onRemoveTodo} />
                );
            })}
        </ul>

    );
}
// Define PropTypes for 'TodoList' component
TodoList.propTypes = {
    todoList: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
            title: PropTypes.string.isRequired,
        })
    ).isRequired,
    onRemoveTodo: PropTypes.func.isRequired,
};

export default TodoList;