<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{
    protected $fillable = [
        'nama', 'kelas', 'sekolah', 'hobi', 'bio', 'motto', 'foto',
    ];
}
