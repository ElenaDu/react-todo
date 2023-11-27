import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

function App() {
  const [todoList, setTodoList] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const timeoutPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ data: { todoList: JSON.parse(localStorage.getItem('savedTodoList')) } });

      }, 2000);

    });

    timeoutPromise.then(result => {
      console.log('Result:', result);
      setTodoList(result.data.todoList);
      setIsLoading(false);
    });
    
  }, []);


  React.useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('savedTodoList', JSON.stringify(todoList));
    }

  }, [todoList, isLoading]);

  function addTodo(newTodo) {
    setTodoList([...todoList, newTodo]);

  }
  function removeTodo(id) {
    const updatedTodoList = todoList.filter(todo => todo.id !== id);
    setTodoList(updatedTodoList);

  };
  return (
    <>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      {
        isLoading ?
          <p>Loading...</p> :
          <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
      }
    </>
  );
}

export default App;
