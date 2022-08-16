<?php

namespace Tests\Feature;

use App\Models\Todo;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class TodoControllerTest extends TestCase
{
    use RefreshDatabase;
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testItShowsAListOfTodos()
    {
        Todo::factory(3)->create();

        $this->getJson(route('todos.index'))
            ->assertJsonStructure(
                [
                    'message',
                    'todos',
                ]
            )
            ->assertStatus(200);

    }

    public function testItIsPossibleToCreateATodo()
    {
        $todo_payload = [
            'title' => 'Test Todo',
            'description' => 'Test Description',
        ];

        $this->postJson(route('todos.store'), $todo_payload)
            ->assertStatus(201)
            ->assertJson($todo_payload);
    }
}
