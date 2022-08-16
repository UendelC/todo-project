<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTodosRequest;
use App\Http\Resources\TodoResource;
use App\Models\Todo;

class TodoController extends Controller
{
    public function index()
    {
        $todos = Todo::all();

        return TodoResource::collection($todos);
    }

    public function store(StoreTodosRequest $request)
    {
        $todo = Todo::create($request->validated());

        return response(
            [
                'message' => 'Todo criado com sucesso',
                'todo' => TodoResource::make($todo),
            ],
            201
        );
    }
}
