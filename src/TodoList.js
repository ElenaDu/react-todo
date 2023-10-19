import React from 'react';
import TodoListItem from './TodoListItem';

const todoList = [
    {
        id: 1,
        title: "Complete assignment"
    },
    {
        id: 2,
        title: "Submit assignment"
    },
    {
        id: 3,
        title: "Attend session"
    }
];

function TodoList() {
    return (
        <ul>
            {todoList.map((item) => {
                return (
                    <TodoListItem key={item.id} todo={item} />
                );
            })}
        </ul>

    );
}
export default TodoList;