<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Post;
use App\Models\Tag;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $posts = Post::navigateAllPosts();

        return Inertia::render('posts/PostsList', ['posts' => $posts]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        $categories = Category::all();
        $tags = Tag::all();
        return Inertia::render('posts/CreatePost', [
            'categories' => $categories,
            'tags' => $tags
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $tags = array_map(function ($item) {
            return $item['value'];
        }, $request->tags);


        $request->validate([
            'title' => 'required',
            'content' => 'required',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'category' => 'required',
            'tags' => 'required',
        ]);


        $post = new Post();
        $post->title = $request->title;
        $post->content = $request->content;
        $post->category_id = $request->category;
        $post->user_id = auth()->user()->id;

        // dd($post->id);

        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $imageName = time() . '_' . $image->getClientOriginalName();
            $imagePath = $image->storeAs('images', $imageName, 'public');
            $post->image = $imagePath;
        }

        $post->save();

        $tagIds = [];
        if ($tags) {
            foreach ($tags as $tag) {
                $tag = Tag::firstOrCreate(['name' => $tag]);
                $tagIds[] = $tag->id;
            }
            $post->tags()->attach($tagIds);
        }



        return redirect()->route('posts.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Post $post)
    {
        return Inertia::render('posts/ShowPost', [
            'post' => $post
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Post $post): Response
    {
        $categories = Category::all();
        $tags = Tag::all();

        return Inertia::render('posts/EditPost', [
            'post' => $post,
            'categories' => $categories,
            'tags' => $tags
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Post $post, Request $request)
    {


        $tags = [];
        if ($request->tags) {
            $tags = array_map(function ($item) {
                return $item['value'];
            }, $request->tags);
        }

        $request->validate([
            'title' => 'required',
            'content' => 'required',
            'category' => 'required',
            'image' => $request->hasFile('image') ? 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048' : "nullable",
            'tags' => 'required',
        ]);



        if ($request->hasFile('image')) {

            $image = $request->file('image');
            $imageName = time() . '_' . $image->getClientOriginalName();
            $imagePath = $image->storeAs('images', $imageName, 'public');


            if ($post->image) {
                Storage::delete($post->image);
            }
            $post->image = $imagePath;
        }

        $post->title = $request->input('title', $post->title);
        $post->content = $request->input('content', $post->content);
        $post->category_id = $request->input('category', $post->category_id);
        $post->save();


        $post->tags()->detach();

        $tagIds = [];
        if ($tags) {
            foreach ($tags as $tag) {
                $tag = Tag::firstOrCreate(['name' => $tag]);
                $tagIds[] = $tag->id;
            }
            $post->tags()->attach($tagIds);
        }


        return redirect()->route('posts.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post)
    {
        $post->delete();
        return redirect()->back();
    }
}
