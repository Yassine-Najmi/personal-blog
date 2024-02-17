# Personal Blog: A Laravel, ReactJS and Tailwind Project with InertiaJS

Welcome to my Personal Blog project! This application serves as a platform for users to explore and interact with various blog posts on different topics. Users can browse through the available posts, read full articles, and get insights into the latest updates, authors, categories, and tags associated with each post.

### Technologies Used

I chose to implement this project using a combination of Laravel, ReactJS, Tailwind CSS, and InertiaJS for several reasons.

**ReactJS and Tailwind CSS:** These technologies were selected for the frontend to leverage their capabilities in building reusable components, streamlining development, and creating a seamless single-page web application experience for users.

**Laravel:** As the backend framework, Laravel offers a robust set of features that contribute to the security and stability of the application. Leveraging Laravel's built-in security features helps mitigate potential vulnerabilities, ensuring a safer environment for both users and data.

**InertiaJS**: Acting as the glue between the frontend and backend, InertiaJS enables fully client-side rendered interactions, enhancing the application's performance and user experience.

### Challenges and Future Features

During the development process, I encountered various challenges, from implementing user authentication to designing efficient data flow between frontend and backend. However, these challenges provided valuable learning experiences and opportunities for improvement.

In the future, I aim to implement additional features to enhance the functionality and user engagement of the application. These features include:

**Search Functionality:** Enabling users to easily search for specific posts based on keywords or topics.

**Comments:** Allowing users to engage in discussions by adding comments to individual blog posts.

**Notification System**: Implementing a notification system to keep users informed about updates, replies to their comments, or new posts.

**Markdown Support**: Enhancing the post creation experience by adding support for Markdown formatting.

These future features aim to enrich the user experience and make the Personal Blog project a dynamic and interactive platform for content consumption and discussion.

### How to Install and Run the Project

1. Clone the repository:

    ```
    git clone https://github.com/Yassine-Najmi/personal-blog.git
    ```

2. Navigate to the project directory:

    ```
    cd personal-blog
    ```

3. Install PHP dependencies:

    ```
    composer install
    ```

4. Install Node.js dependencies:

    ```
    npm install
    ```

5. Copy the `.env.example` file and rename it to `.env`:

    ```
    cp .env.example .env
    ```

6. Generate a new application key:

    ```
    php artisan key:generate
    ```

7. Create a new database for the project and configure the `.env` file with your database credentials.

8. Run the database migrations to create the necessary tables:

    ```
    php artisan migrate
    ```

9. Compile frontend assets:

    ```
    npm run dev
    ```

10. Start the development server:
    ```
    php artisan serve
    ```

After completing these steps, the Laravel React Inertia project should be set up and running locally on your machine.

If you want to create an admin account to access the dashboard for managing posts, categories, and tags, visit the link [http://localhost:**`your_port`**/register](http://localhost/register) to create a new account. Then, log in with your credentials.

If images do not appear when creating a new post, run the following command:

```
php artisan storage:link
```

### Useful Links

Here are some helpful resources that aided in the development of this project:

-   [Laravel Documentation](https://laravel.com/docs/10.x)
-   [Inertia.js Documentation](https://legacy.inertiajs.com/)
-   [React Documentation](https://react.dev/)
-   [Tailwind CSS Documentation](https://tailwindcss.com/docs/installation)

These documentation links provided valuable insights, guidance, and references throughout the development process. They were instrumental in understanding and implementing various aspects of Laravel, Inertia.js, React, and Tailwind CSS.
