import React from 'react';

function Form({ onSubmit }) {
    let input;

    const handleSubmit = evenr => {
        evenr.preventDefault();
        onSubmit({ title: input.value });
        input.value = ''
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-group">
                <input ref={element => input = element} />
                <span>
                    <button type="submit">Добавить</button>
                </span>
            </div>
        </form>
    );
}

export default  Form;