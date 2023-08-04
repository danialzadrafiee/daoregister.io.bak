<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Feature extends Model
{
    public function daos()
    {
        return $this->belongsToMany(Dao::class);
    }
}
