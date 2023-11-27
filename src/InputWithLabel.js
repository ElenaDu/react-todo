import React from 'react';

export default function InputWithLabel({ children, todoTitle, handleTitleChange }) {
    const inputRef = React.useRef();
    React.useEffect(() => {
        inputRef.current.focus();
    }
    )
    return (
        <>
            <label htmlFor="todoTitle">{children}</label>
            <input
                ref={inputRef}
                id="todoTitle"
                type="text"
                name="title"
                value={todoTitle}
                onChange={handleTitleChange}

            />
        </>
    );
}