import React from 'react';

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

export default function TodoList() {
    return (
        <ul>
            {todoList.map(function (item) {
                return <li key={item.id}>{item.title}</li>;
            })}
        </ul>

    );
}