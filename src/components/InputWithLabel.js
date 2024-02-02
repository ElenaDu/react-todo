import React from 'react';
import styles from './InputWithLabel.module.css';
import PropTypes from 'prop-types';

export default function InputWithLabel({ children, todoTitle, handleTitleChange }) {
    const inputRef = React.useRef();
    React.useEffect(() => {
        inputRef.current.focus();
    }
    )
    return (
        <>
            <label htmlFor="todoTitle" className={styles.label}>{children}</label>
            <input
                ref={inputRef}
                id="todoTitle"
                type="text"
                name="title"
                value={todoTitle}
                onChange={handleTitleChange}
                className={styles.input}

            />
        </>
    );
}

// Define PropTypes for 'InputWithLabel' component
InputWithLabel.propTypes = {
    children: PropTypes.node.isRequired,
    todoTitle: PropTypes.string.isRequired,
    handleTitleChange: PropTypes.func.isRequired,
};