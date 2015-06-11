<?php namespace Todo\Models;

use Illuminate\Database\Eloquent\Model;

class Todo extends Model
{
    protected $table = 'todo';

    protected $fillable = ['title', 'is_done', 'created_at'];
}