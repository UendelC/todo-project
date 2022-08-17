<template>
    <div
        class="todo"
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
    width: 250px;
    color: $n-800;
    display: flex;
    align-items: center;
    cursor: pointer;

    &:hover {
        color: $n-500;
        background-color: $n-20;
    }

    &__title {
        @include heading-3;
    }

    &__description {
        @include subheading-3;
    }
}
</style>
