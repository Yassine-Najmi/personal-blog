import Table from "@/Components/Table";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function PostsList({ auth, posts }) {
    const modifiedPosts = posts.map((post) => {
        // Format the date
        const lastUpdated = new Date(post.updated_at).toLocaleString();
        const createdAt = new Date(post.created_at).toLocaleString();

        return {
            id: post.id,
            Title: post.title.split(" ").slice(0, 3).join(" ") + "...",
            Content: post.content.split(" ").slice(0, 10).join(" ") + "...",
            Image: post.image,
            Category: post.categoryName,
            "Written By": post.writtenBy,
            "last updated": lastUpdated,
            "Created at": createdAt,
        };
    });

    const columns = [
        "Title",
        "Content",
        "Image",
        "Category",
        "Written By",
        "last updated",
        "Created at",
    ];

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    List of Posts
                </h2>
            }
        >
            <Head title="PostsList" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <Table
                            element="post"
                            elements="posts"
                            items={modifiedPosts}
                            columns={columns}
                            primary={"ID"}
                            action={["show", "edit", "delete"]}
                        />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
