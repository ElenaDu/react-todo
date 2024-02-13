import React from 'react';
import { Link } from 'react-router-dom';
import styles from './WelcomePage.module.css';



function WelcomePage() {
    return (
        <div className={styles.text}>
            <h1>Welcome to Your ToDo List!</h1>
            <h3>Effortlessly Manage Your Tasks.</h3>

            <p>
                Say goodbye to complicated task managers! Our ToDo List app focuses on
                simplicity and functionality, allowing you to easily add and delete tasks.
            </p>
            <h2>How It Works:</h2>
            <ol>
                <li><strong>Add Tasks:</strong> Type in your task and hit "Add." That's it! Your task is now part of the list.</li>
                <li><strong>Delete Completed Tasks:</strong> Finished a task? Click "Remove," and watch it disappear. Keeping your list clutter-free
                    has never been this straightforward.
                </li>

            </ol>
            <p>
                Ready to start?{' '}
                <Link to="/todos" className={styles.link}>
                    Go to your ToDo List
                </Link>
            </p>

        </div>


    );

};

export default WelcomePage;