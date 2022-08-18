<template>
    <div class="input__container">
        <label
            class="input__label"
            :for="`input-${id}`"
        >
            {{ label }}
        </label>
        <input
            v-model="internalValue"
            class="input__content"
            :id="`input-${id}`"
            type="text"
            @change="handleInputChange"
        >
    </div>
</template>

<script>
export default {
    props: {
        value: {
            type: String,
            default: '',
        },
        id: {
            type: String,
            required: true,
        },
        label: {
            type: String,
            required: true,
        }
    },

    data() {
        return {
            internalValue: '',
        };
    },

    watch: {
        value(newValue, oldValue) {
            if (newValue !== oldValue) {
                this.internalValue = newValue;
            }
        },
    },

    methods: {
        handleInputChange() {
            this.$emit('input', this.internalValue);
        }
    },
}
</script>

<style lang="scss" scoped>
@import 'node_modules/@sysvale/cuida/dist/@sysvale/tokens.scss';

.input {
    &__container {
        padding: py(2);
        display: flex;
        flex-direction: column;
    }

    &__label {
        margin: my(2);
    }

    &__content {
        border-radius: $border-radius-lil;
        border: 1px solid $n-100;
        font-size: 16px;
        padding: pa(2);

        &:focus-visible {
            outline-width: 1px;
            outline-color: $n-100;
        }
    }
}
</style>
