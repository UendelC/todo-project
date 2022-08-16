<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTodosRequest;
use App\Models\Todo;

class TodoController extends Controller
{
    public function index()
    {
        $todos = Todo::all();

        return response()
            ->json(
                [
                    'message' => 'Todos retrieved successfully',
                    'todos' => $todos,
                ]
            );
    }

    public function store(StoreTodosRequest $request)
    {
        $todo = Todo::create($request->validated());

        return response()
            ->json($todo, 201);
    }
}
