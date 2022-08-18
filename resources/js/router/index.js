import TodoList from '../pages/TodoList.vue';
import CreateTodo from '../pages/CreateTodo.vue';
import NotFound from '../pages/NotFound.vue';

export default [
    {
        path: '/',
        component: TodoList,
    },
    {
        path: '/create',
        name: 'create-todo',
        component: CreateTodo,
    },
    {
        // path: '*',
        path: "/:catchAll(.*)",
        component: NotFound,
    }
];