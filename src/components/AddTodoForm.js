import React from 'react'
import InputWithLabel from './InputWithLabel';
import styles from './AddTodoForm.module.css';
import PropTypes from 'prop-types';

export default function AddTodoForm({ onAddTodo }) {

    const [todoTitle, setTodoTitle] = React.useState('');

    function handleTitleChange(event) {
        const newTodoTitle = event.target.value;
        console.log('New todo title:', newTodoTitle);
        setTodoTitle(newTodoTitle);
    }


    function handleAddTodo(event) {
        event.preventDefault();
        const todoItem = {
            title: todoTitle,
            id: Date.now(),
        };
        console.log('Adding todo:', todoItem);
        onAddTodo(todoItem);
        setTodoTitle('');

    }

    return (
        <form onSubmit={handleAddTodo}>
            <InputWithLabel
                todoTitle={todoTitle}
                handleTitleChange={handleTitleChange}
            >
                Title
            </InputWithLabel>
            <button type="submit" className={styles.button}>Add</button>
        </form>
    );
}
//Define the propTypes property (with key 'onAddTodo' and value 'PropTypes.func').
AddTodoForm.propTypes = {
    onAddTodo: PropTypes.func,
};