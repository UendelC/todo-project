<template>
    <div
        class="todo"
        @click="$emit('click', item)"
        :id="`todo-${item.id}`"
    >
        <div class="todo__title">
            {{ item.title }}
        </div>
    </div>
</template>

<script>
export default {
    props: {
        item: {
            type: Object,
            required: true,
        },
    },
}
</script>

<style lang="scss" scoped>
@import 'node_modules/@sysvale/cuida/dist/@sysvale/tokens.scss';

.todo {
    padding: 30px;
    border: 1px solid $n-50;
    border-radius: $border-radius-large;
    color: $n-800;
    display: flex;
    align-items: center;
    min-width: 50vw;

    &:hover {
        color: $n-10;
        background-color: $bn-200;
        cursor: pointer;
    }

    &__title {
        @include heading-3;
    }

    &__description {
        @include subheading-3;
    }
}
</style>
