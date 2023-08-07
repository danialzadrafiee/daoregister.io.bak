<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contract extends Model
{
    public function dao()
    {
        return $this->belongsTo(Dao::class);
    }
    public function members()
    {
        return $this->belongsToMany(User::class)->withPivot('role');
    }
}
