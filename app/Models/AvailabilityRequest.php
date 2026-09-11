<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class AvailabilityRequest extends Model
{
    protected $fillable = ['user_id', 'date', 'travelers', 'duration', 'looking_for'];

    protected function casts(): array
    {
        return ['date' => 'date', 'travelers' => 'integer'];
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
