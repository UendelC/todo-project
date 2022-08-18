import { describe, test, expect } from 'vitest';
import { shallowMount, flushPromises } from '@vue/test-utils';
import Todo from '../Todo.vue';

const testTodoItem = {
    id: 'testItem1',
    title: 'Test item',
    description: 'Test item description',
};

describe('Todo', () => {
    test('component renders correctly', async () => {
        const wrapper = shallowMount(Todo, {
            props: {
                item: testTodoItem,
            }
        });
        
        await flushPromises();
        
        expect(wrapper).toMatchSnapshot();
    })

    test('emits event onClick', async () => {
        const wrapper = shallowMount(Todo, {
            props: {
                item: testTodoItem,
            }
        });
        
        await flushPromises();
        
        wrapper.find(`#todo-${testTodoItem.id}`).trigger('click');

        await flushPromises();

        expect(wrapper.emitted('click')[0]).toContainEqual(testTodoItem);
    })
});