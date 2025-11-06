import { Todo } from 'entities';

const todos = [
    {
        id: 1,
        title: "Learn HTML",
        completed: false
    },
    {
        id: 2,
        title: "Learn CSS",
        completed: false
    },
    {
        id: 3,
        title: "Learn Javascript",
        completed: false
    },
    {
        id: 4,
        title: "Learn React",
        completed: false
    },
    {
        id: 5,
        title: "Learn Next.js",
        completed: false
    }
]

export const fetchTodos = async () => {
    await fetch ((resolve) => setTimeout(resolve, 1000));

    console.log('fetch todos');

    const filteredTodos = todos.filter((todo) => {
        todo.title.toLowerCase().includes(query.toLowerCase());
    })

    return [...filteredTodos];
}