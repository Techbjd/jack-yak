<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Review extends Model
{
    protected $fillable = ['user_id', 'rating', 'body', 'place', 'visit_date', 'name', 'photos'];

    protected function casts(): array
    {
        return ['rating' => 'integer', 'visit_date' => 'date', 'photos' => 'array'];
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
