import React, { useEffect, useState } from 'react';
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';
import Footer from './components/Footer.js';
import Header from './components/Header.js';


import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import styles from './App.module.css';


function App() {
  // State hooks for managing the todo list and loading state
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Async function to fetch data from Airtable API
  const fetchData = async () => {

    // Define options with access credentials
    const options = {
      method: 'GET',
      headers: { Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_TOKEN}` }
    };
    // Define API URL
    const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}`;


    try {
      // Fetch data from the API
      const response = await fetch(url, options)

      // Check if the response is not successful
      if (!response.ok) {
        const message = `Error has occurred: ${response.status}`;
        throw new Error(message);
      }

      // Parse the JSON response
      const data = await response.json();
      const todos = data.records.map((todo) => {

        const newTodo = {
          id: todo.id,
          title: todo.fields.title
        }

        return newTodo

      });
      // Set the application's todoList by passing the todos created above to setTodoList
      setTodoList(todos);

      // Use setIsLoading to set isLoading to false to indicate to the user the fetch is complete
      setIsLoading(false);

      // Handle errors during data fetching
    } catch (error) {
      console.log('Error fetching data:', error.message);
    }
  };
  // Function to add a new todo
  const addTodo = async (newTodo) => {

    // Define Airtable data format for the POST request
    const airtableData = {
      fields: {
        title: newTodo.title,
      },
    };
    // Define the URL for adding a new todo
    const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default`;

    //  Define access credentials for POST request
    const options = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_TOKEN}`,
      },
      body: JSON.stringify(airtableData),
    };

    try {
      // Send a POST request to add a new todo. Fetch data from the API
      const response = await fetch(url, options);

      // Check if the response is not successful
      if (!response.ok) {
        const message = `Error adding todo: ${response.status}`;
        throw new Error(message);
      }

      // Parse the JSON response and update the todoList state
      const addedTodo = await response.json();
      setTodoList([...todoList, { id: addedTodo.id, title: addedTodo.fields.title }]);

      // Handle errors during adding a todo
    } catch (error) {
      console.log('Error fetching data:', error.message);
      return null;
    }
  }
  // Effect hook to fetch data when the component mounts
  useEffect(() => {
    fetchData();
  }, []);

  // Effect hook to save todoList to local storage when it changes
  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('savedTodoList', JSON.stringify(todoList));
    }

  }, [todoList, isLoading]);


  // Function to delete a todo by its ID from Airtable

  const deleteTodo = async (id) => {

    // Define the URL for deleting the todo item from Airtable
    const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default/${id}`;

    // Define access credentials for DELETE request
    const options = {
      method: 'DELETE',
      headers: {
        "Authorization": `Bearer ${process.env.REACT_APP_AIRTABLE_API_TOKEN}`,
      },
    };

    try {
      // Send a DELETE request to delete the todo item from table. Fetch data from the API
      const response = await fetch(url, options);

      // Check if the response is not successful
      if (!response.ok) {
        const message = `Error deleting todo: ${response.status}`;
        throw new Error(message);
      }
      // Parse the JSON response
      console.log('Todo deleted successfully.');
      return await response.json();

    } catch (error) {
      console.log('Error deleting todo:', error.message)
      return null;
    };

  };

  //Funtion to remove a todo from the local storage and update ToDoList
  const removeTodo = async (id) => {
    await deleteTodo(id);
    const updatedTodoList = todoList.filter(todo => todo.id !== id);
    setTodoList(updatedTodoList);

  };



  // Setup Router
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <div className={styles.app} >
              <h1>Todo List</h1>
              <AddTodoForm onAddTodo={addTodo} />
              {
                isLoading ?
                  <p>Loading...</p> :
                  <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
              }
            </div>
            <Footer />
          </>
        }
        />

        <Route path="/new" element={
          <h1>New Todo List</h1>
        }
        />
      </Routes>
    </BrowserRouter>



  );
}

export default App;
