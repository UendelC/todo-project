import { describe, expect, test } from 'vitest';
import CreateInput from '../CreateInput.vue';
import { shallowMount, flushPromises } from '@vue/test-utils';

describe('CreateInput', () => {
    test('renders correctly', async () => {
        const wrapper = shallowMount(CreateInput, {
            props: {
                id: 'test-input',
                label: 'Test label',
            },
        });

        await flushPromises();

        expect(wrapper).toMatchSnapshot();
    });

    test('input event is triggered correctly on input change', async () => {
        const testInputValue = '';
        const wrapper = shallowMount(CreateInput, {
            props: {
                value: testInputValue,
                id: 'test',
                label: 'Test label',
            },
        });

        await flushPromises();

        wrapper.find('#input-test').trigger('input', 'a');

        await flushPromises();

        expect(wrapper.emitted()).toHaveProperty('input');
    });
});