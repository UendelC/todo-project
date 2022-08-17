<template>
    <div class="list">
        <h1 class="list__title">
            ToDo List
        </h1>
        <div class="list__content">
            <todo
                class="list__item"
                v-for="item in todoList"
                :key="item.description"
                :item="item"
            />
        </div>
        <div class="list__button">
            <cds-button
                variant="blue"
                size="lg"
                text="Adicionar novo"
                @click="handleAdd"
            />
        </div>
    </div>
</template>

<script>
import Todo from '../components/Todo.vue';

const todoList = [
    {
        title: 'Todo 1',
        description: 'Todo 1 é muito bom',
    },
    {
        title: 'Todo 2',
        description: 'Todo 2 é muito bom',
    },
    {
        title: 'Todo 3',
        description: 'Todo 3 é muito bom',
    },
];

export default {
    components: {
        Todo,
    },

    data() {
        return {
            todoList,
        };
    },

    methods: {
        handleAdd() {
            console.log('oi');
        },
    },
};
</script>

<style lang="scss" scoped>
@import 'node_modules/@sysvale/cuida/dist/@sysvale/tokens.scss';

.list {
    display: flex;
    flex-direction: column;
    align-items: center;

    &__title {
        @include heading-1;
    }

    &__item {
        margin: mb(2);
    }

    &__button {
        margin: mt(2);
    }
}
</style>
