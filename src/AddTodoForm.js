import React from 'react'
import InputWithLabel from './InputWithLabel';

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
            <button type="submit" style={{ marginLeft: '5px' }}>Add</button>
        </form>
    );
}