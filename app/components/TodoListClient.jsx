'use client';

import { useEffect, useState } from 'react';

export default function TodoListClient() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch('/api/todos')
            .then((res) => res.json())
            .then(setTodos)
            .catch(console.error);
    }, []);

    return (
        <div>
            <form>
                {/* Your Add Todo form (can be enhanced later) */}
            </form>

            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>
        </div>
    );
}
