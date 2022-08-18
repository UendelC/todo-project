<template>
    <div class="list">
        <h1 class="list__title">
            ToDo List
        </h1>
        <show-request-provider
            v-slot="{ loading, failed }"
            immediate
            :service="getTodos"
            @success="successHandler"
        >
            <div v-if="loading">
                <cds-spinner
                    size="lg"
                    variant="blue"
                />
            </div>
            <div v-else-if="failed || todoList.length === 0">
                <cds-empty-state
                    image="https://cdn-icons-png.flaticon.com/128/4076/4076419.png"
                    image-description="Imagem de empty state"
                    title="Não tem nada aqui ainda!"
                    text="Para sair dessa situação de empty state, realize a ação abaixo"
                    action-button-text="Adicionar novo"
                    @action-button-click="handleAdd"
                />
            </div>
            <div v-else>
                <div class="list__button">
                    <cds-button
                        variant="blue"
                        size="md"
                        text="Adicionar nova tarefa"
                        @click="handleAdd"
                    />
                </div>
                <todo
                    class="list__item"
                    v-for="item in todoList"
                    :key="item.id"
                    :item="item"
                    @click="handleTodoClick"
                />
            </div>
        </show-request-provider>
        <cds-side-sheet
            v-model="showSideSheet"
            position="left"
        >
            <div class="side-sheet">
                <div class="side-sheet__title">
                    {{ selectedTodo.title }}
                </div>
                <div class="side-sheet__description">
                    {{ selectedTodo.description }}
                </div>
            </div>
        </cds-side-sheet>
    </div>
</template>

<script>
import Todo from '../components/Todo.vue';
import { getTodos } from '../services/todo';

export default {
    components: {
        Todo,
    },

    data() {
        return {
            todoList: [],
            showSideSheet: false,
            selectedTodo: {},
        };
    },

    methods: {
        getTodos,

        handleAdd() {
            this.$router.push({ name: 'create-todo' });
        },

        successHandler(response) {
            this.todoList = JSON.parse(JSON.stringify(response)).data;
        },

        handleTodoClick(todo) {
            this.selectedTodo = todo;
            this.showSideSheet = true;
        }
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
        margin: my(6);
    }

    &__item {
        margin: mb(2);
    }

    &__button {
        margin: my(6);
        display: flex;
        justify-content: flex-start;
    }
}

.side-sheet {
    padding: pa(4);

    &__title {
        @include heading-3;
    }
    &__description {
        @include body-1;
    }
}
</style>
