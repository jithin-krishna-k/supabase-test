import addTodo from './action/addTodo';
import deleteTodo from './action/deleteTodo';
import { prisma } from '@/lib/prisma';

export default async function Home() {
  let todos = [];

  try {
    todos = await prisma.todo.findMany();
  } catch (error) {
    console.error('Fetch Todos Error:', error);
  }

  return (
    <main className="max-w-xl mx-auto px-6 py-10 bg-white shadow-lg rounded-lg mt-10">
      <h1 className="text-3xl font-extrabold text-center mb-8 text-indigo-700">
        Todo List
      </h1>

      <form action={addTodo} method="post" className="flex gap-3 mb-6">
        <input
          name="title"
          type="text"
          placeholder="Add a new todo..."
          className="flex-grow px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
          autoComplete="off"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-md shadow hover:bg-indigo-700 active:bg-indigo-800 transition"
        >
          Add
        </button>
      </form>

      {todos.length === 0 ? (
        <p className="text-center text-gray-500">No todos yet, add one above!</p>
      ) : (
        <ul className="space-y-3">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex justify-between items-center bg-indigo-50 border border-indigo-100 rounded-md px-5 py-3 shadow-sm hover:bg-indigo-100 transition"
            >
              <span className="text-lg text-indigo-900">{todo.title}</span>
              <form action={deleteTodo}>
                <input type="hidden" name="id" value={todo.id} />
                <button
                  type="submit"
                  className="text-red-600 font-semibold hover:text-red-800 active:text-red-900 transition"
                  aria-label={`Delete todo: ${todo.title}`}
                >
                  Delete
                </button>
              </form>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
