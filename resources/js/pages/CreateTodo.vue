<template>
    <show-request-provider
        v-slot="{ action }"
        :service="postTodo"
        :payload="payload"
        show-success-feedback
        @success="successHandler"
    >
        <div class="container">
            <h1 class="title">
                Adicionar nova tarefa
            </h1>

            <div class="form">
                <create-form
                    @submit="handleSubmit($event, action)"
                />
            </div>
        </div>

    </show-request-provider>
</template>

<script>
import { postTodo } from '../services/todo';
import CreateForm from '../components/CreateForm.vue';

export default {
    components: {
        CreateForm,
    },

    data() {
        return {
            title: '',
            description: '',
        };
    },

    computed: {
        payload() {
            return {
                title: this.title,
                description: this.description,
            };
        },
    },

    methods: {
        postTodo,

        handleSubmit({ title, description }, action) {
            this.title = title;
            this.description = description;
            this.$nextTick(() => {
                action();
            })
        },

        successHandler() {
            console.log('deu certo');
        },
    }    
}
</script>

<style lang="scss" scoped>
@import 'node_modules/@sysvale/cuida/dist/@sysvale/tokens.scss';

.title {
    @include heading-1;
    margin: my(6);
}

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
