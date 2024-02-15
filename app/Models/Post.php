<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Post extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'content',
        'image',
        'category_id',
        'user_id',
    ];

    protected $hidden = [
        "user",
        "category",
    ];

    protected $appends = [
        "writtenBy",
        "categoryName",
        "tagName"
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function getWrittenByAttribute()
    {
        return $this->user->name;
    }


    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }

    public function getCategoryNameAttribute()
    {
        return $this->category->name;
    }

    public function tags()
    {
        return $this->belongsToMany(Tag::class, "post_tags", "post_id", "tag_id");
    }

    public function getTagNameAttribute()
    {
        return $this->tags->pluck('name');
    }

    static public function navigateAllPosts()
    {
        return Post::orderBy("id", "desc")->paginate(5);
    }
}
