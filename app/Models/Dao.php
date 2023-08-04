<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Dao extends Model
{
    public function features()
    {
        return $this->belongsToMany(Feature::class);
    }

    public function members()
    {
        return $this->belongsToMany(User::class, 'dao_user')
            ->withPivot('email', 'role', 'share')
            ->withTimestamps();
    }
}
