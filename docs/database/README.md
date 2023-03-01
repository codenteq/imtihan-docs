# Database

## Factories Introduction
When testing your application or seeding your database, you may need to insert a few records into your database. Instead of manually specifying the value of each column, Laravel allows you to define a set of default attributes for each of your [Eloquent models](https://laravel.com/docs/9.x/eloquent) using model factories.

To see an example of how to write a factory, take a look at the database/factories/UserFactory.php file in your application. This factory is included with all new Laravel applications and contains the following factory definition:

namespace Database\Factories;
 
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

```bash
class UserFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => fake()->name(),
            'email' => fake()->unique()->safeEmail(),
            'email_verified_at' => now(),
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
            'remember_token' => Str::random(10),
        ];
    }
}
```

## Migrations Introduction
Migrations are like version control for your database, allowing your team to define and share the application's database schema definition. If you have ever had to tell a teammate to manually add a column to their local database schema after pulling in your changes from source control, you've faced the problem that database migrations solve.

The Laravel `Schema` [facade](https://laravel.com/docs/9.x/facades) provides database agnostic support for creating and manipulating tables across all of Laravel's supported database systems. Typically, migrations will use this facade to create and modify database tables and columns.

* The `total_questions` Shows how many questions there are.
* The `correct` Shows how many correct questions there are.
* The `in_correct` Shows how many wrong questions there are.
* The `blank` Shows how many empty questions there are.
* The `point` Shows how many points you got.
* The `paid_at` Indicates whether the invoice has been paid.
* The `parent_id` Shows infinite category IDs.
* The `is_option` When adding a question, it indicates that the question will be a picture or text area.
* The `is_default` waiting...

## Schema

[Database Schema](https://dbdiagram.io/d/632f5e447b3d2034ffa94a7d) by DBdiagram
