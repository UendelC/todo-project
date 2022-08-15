<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use Illuminate\Http\Request;

class TodoController extends Controller
{
    public function index()
    {
    }

    public function store(Request $request)
    {
        $todo = Todo::create($request->all());

        return response()
            ->json(
                [
                    'message' => 'Todo created successfully',
                    'todo' => $todo,
                ]
            );
    }
}
