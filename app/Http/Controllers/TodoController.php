<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use Illuminate\Http\Request;

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

    public function store(Request $request)
    {
        $todo = Todo::create($request->all());

        return response()
            ->json($todo, 201);
    }
}
