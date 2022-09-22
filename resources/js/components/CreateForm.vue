<template>
    <div class="form__container">
        <create-input
            v-model="title"
            id="title"
            label="Título"
        />
        <create-input
            v-model="description"
            id="description"
            label="Descrição"
        />
        <div class="form__button">
            <cds-button
                variant="teal"
                text="Voltar"
                @click="$emit('back')"
            />
            <cds-button
                variant="green"
                text="Adicionar novo"
                :disabled="disableButton"
                @click="handleSubmit"
            />
        </div>
    </div>
</template>

<script>
import CreateInput from './CreateInput.vue';

export default {
    components: {
        CreateInput,
    },

    data() {
        return {
            title: '',
            description: '',
        };
    },

    computed: {
        disableButton() {
            return this.title === '' || this.description === '';
        },
    },

    methods: {
        handleSubmit() {
            if (this.title !== '' && this.description !== '') {
                const emitData = {
                    title: this.title,
                    description: this.description,
                };
                this.$emit('submit', emitData);
            }
        },
    },
}
</script>

<style lang="scss" scoped>
@import 'node_modules/@sysvale/cuida/dist/@sysvale/tokens.scss';

.form {
    &__container {
        width: 50vw;
    }

    &__button {
        margin: my(6);
        display: flex;
        justify-content: space-between;
        max-width: 250px;
    }
}
</style>
