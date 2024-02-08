export default function HorizontalCard({ post }) {
    console.log(post);
    return (
        <div className="w-full lg:flex mb-8">
            <div
                className="h-80 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                style={{
                    backgroundImage: `url(${post.image})`,
                }}
                title={post.title}
            ></div>
            <div className="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                    <div className="text-black font-bold text-xl mb-2">
                        {post.title}
                    </div>
                    <p className="text-grey-darker text-base">
                        {post.content}
                        <span className="cursor-pointer text-blue-600 hover:underline">
                            ...Read more
                        </span>
                    </p>
                </div>
                <div className="flex flex-col justify-center gap-1">
                    <div>{post.category}</div>
                    <div></div>
                    <div className="text-sm">
                        <p className="text-black leading-none">
                            Written By {post.WrittenBy}
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
