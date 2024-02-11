import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router } from "@inertiajs/react";
import HorizontalCard from "./posts/Partials/HorizontalCard";
import { useEffect } from "react";

export default function Posts({ auth, posts }) {
    useEffect(() => {
        const interval = setInterval(() => {
            router.reload({ only: ["posts"] });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const formattedPosts = posts.map((post) => {
        // Format the date
        const lastUpdated = new Date(post.updated_at).toLocaleString();
        const createdAt = new Date(post.created_at).toLocaleString();

        return {
            id: post.id,
            title: post.title,
            content: post.content.split(" ").slice(0, 25).join(" "),
            image: post.image,
            category: post.categoryName,
            tag: post.tagName,
            WrittenBy: post.writtenBy,
            "last updated": lastUpdated,
            "Created at": createdAt,
        };
    });

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Posts
                </h2>
            }
        >
            <Head title="Posts" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            {formattedPosts.map((post) => (
                                <HorizontalCard key={post.id} post={post} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
