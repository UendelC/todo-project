import { test, describe, expect } from "vitest";
import CreateForm from '../CreateForm.vue';
import { shallowMount, flushPromises, mount } from "@vue/test-utils";

describe('CreateForm', () => {
    test('component renders correctly', async () => {
        const wrapper = shallowMount(CreateForm, () => {});

        await flushPromises();

        expect(wrapper).toMatchSnapshot();
    });

    test('submit button is enabled when the form is filled', async () => {
        expect.assertions(2);

        const wrapper = shallowMount(CreateForm, () => {});

        await flushPromises();

        expect(wrapper.vm.disableButton).toBeTruthy();

        await wrapper.setData({
            title: 'Test title',
            description: 'Test description',
        });

        expect(wrapper.vm.disableButton).toBeFalsy();
    });

    test('data is emitted correctly on submit', async () => {
        const wrapper = mount(CreateForm, {});

        wrapper.setData({
            title: 'Test title',
            description: 'Test description',
        });

        wrapper.vm.handleSubmit();

        expect(wrapper.emitted()).toHaveProperty('submit');
        expect(wrapper.emitted('submit')[0]).toContainEqual({
            title: 'Test title',
            description: 'Test description',
        });
    });
})
