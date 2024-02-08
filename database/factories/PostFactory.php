<?php

namespace Database\Factories;

use App\Models\Category;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Post>
 */
class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "title" => $this->faker->sentence,
            "content" => $this->faker->paragraph(5),
            "image" => $this->faker->imageUrl(640, 480, 'cats'),
            "category_id" => function () {
                return Category::inRandomOrder()->first()->id;
            },
            "user_id" => function () {
                return User::inRandomOrder()->first()->id;
            },
            "created_at" => $this->faker->dateTimeBetween('-1 year', 'now'),
            "updated_at" => $this->faker->dateTimeBetween('-1 year', 'now')
        ];
    }
}
