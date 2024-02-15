import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router } from "@inertiajs/react";
import HorizontalCard from "./posts/Partials/HorizontalCard";
import { useEffect } from "react";
import { Link } from "@inertiajs/react";
import PrevButton from "@/Components/PrevButton";
import NextButton from "@/Components/NextButton";

export default function Posts({ auth, posts }) {
    useEffect(() => {
        const interval = setInterval(() => {
            router.reload({ only: ["posts"] });
        }, 60000);

        return () => clearInterval(interval);
    }, []);

    const formattedPosts = posts.data.map((post) => {
        // Format the date
        const lastUpdated = new Date(post.updated_at).toLocaleString();
        const createdAt = new Date(post.created_at).toLocaleString();

        return {
            id: post.id,
            title: post.title,
            content: post.content.split(" ").slice(0, 70).join(" "),
            image: post.image,
            category: post.categoryName,
            tags: post.tagName,
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
                    Latest Posts
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
                        <div className="pagination justify-center flex space-x-72 mb-12">
                            {posts.prev_page_url && (
                                <Link href={posts.prev_page_url}>
                                    <PrevButton>Previous</PrevButton>
                                </Link>
                            )}
                            {posts.next_page_url && (
                                <Link href={posts.next_page_url}>
                                    <NextButton>Next</NextButton>
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
