import { Link } from "@inertiajs/react";

export default function HorizontalCard({ post }) {
    return (
        <div className="w-full lg:flex mb-8">
            <span className=" position absolute bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5  dark:bg-blue-900 dark:text-blue-300 w-fit ">
                {post.category}
            </span>
            <div
                className="h-80 lg:h-auto lg:w-96 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                style={{
                    backgroundImage: `url(/storage/${post.image})`,
                }}
                title={post.title}
            ></div>
            <div className="mb border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal w-full">
                <div className="mb-8">
                    <div className="text-black font-bold text-xl mb-2">
                        {post.title}
                    </div>
                    <p className="text-grey-darker text-base">
                        {post.content}
                        <Link
                            href={route("posts.show", post.id)}
                            className="cursor-pointer text-blue-600 hover:underline"
                        >
                            ...Read more
                        </Link>
                    </p>
                </div>
                <div className="flex flex-col justify-center gap-4">
                    <div className="flex gap-2">
                        {post.tags.map((tag) => (
                            <span
                                key={tag}
                                className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 w-fit"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="text-sm">
                        <p className="text-black leading-none mb-2">
                            <>
                                Written By{" "}
                                <span className="border-b-2 border-blue-400">
                                    {post.WrittenBy}
                                </span>
                            </>
                        </p>
                        <p className="text-grey-dark">
                            last update: {post["last updated"]}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
