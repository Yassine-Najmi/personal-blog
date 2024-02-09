import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import SelectInput from "@/Components/SelectInput";
import TextInput from "@/Components/TextInput";
import TextareaInput from "@/Components/TextareaInput";
import { Transition } from "@headlessui/react";
import { useForm } from "@inertiajs/react";

export default function PostForm({
    post,
    categories,
    tags,
    className = "",
    action,
}) {
    const {
        data,
        setData,
        post: handlePost,
        patch: handlePatch,
        processing,
        errors,
        recentlySuccessful,
    } = useForm({
        title: post?.title,
        content: post?.content,
        image: post?.image,
        category: post?.category,
        tag: post?.tag,
    });
    const submit = (e) => {
        e.preventDefault();

        const preserveScroll = {
            preserveScroll: true,
        };

        if (action === "Update") {
            handlePatch(route("posts.update", post.id), preserveScroll);
        } else {
            handlePost(route("posts.store"), preserveScroll);
        }
    };

    // console.log(errors);
    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">
                    {action} Post
                </h2>

                <p className="mt-1 text-sm text-gray-600">{action} your post</p>
            </header>

            <form className="mt-6 space-y-6" onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="title" value="Title" />
                    <TextInput
                        id="title"
                        className="mt-1 block w-full"
                        value={data?.title}
                        onChange={(e) => setData("title", e.target.value)}
                    />
                    {errors?.title && (
                        <InputError className="mt-2" message={errors?.title} />
                    )}
                </div>

                <div>
                    <InputLabel htmlFor="content" value="Content" />
                    <TextareaInput
                        className="mt-1 block w-full"
                        content={data?.content}
                        onChange={(value) => setData("content", value)}
                    />
                    {errors?.content && (
                        <InputError
                            className="mt-2"
                            message={errors?.content}
                        />
                    )}
                </div>

                <div>
                    <InputLabel htmlFor="image" value="Image" />
                    <TextInput
                        id="image"
                        className="mt-1 block w-full"
                        value={data?.image}
                        onChange={(e) => setData("image", e.target.value)}
                    />
                    {errors?.image && (
                        <InputError className="mt-2" message={errors?.image} />
                    )}
                </div>

                <div>
                    <InputLabel htmlFor="category" value="Category" />
                    <SelectInput
                        id="category"
                        className="mt-1 block w-full"
                        options={categories}
                        value={data?.category}
                        onChange={(value) => setData("category", value)}
                    />
                    {errors?.category && (
                        <InputError
                            className="mt-2"
                            message={errors?.category}
                        />
                    )}
                </div>

                <div>
                    <InputLabel htmlFor="tags" value="Tags" />
                    <SelectInput
                        id="tags"
                        className="mt-1 block w-full"
                        options={tags}
                        value={data?.tag}
                        onChange={(e) => setData("tag", e.target.value)}
                    />
                    {errors?.tag && (
                        <InputError className="mt-2" message={errors?.tag} />
                    )}
                </div>

                <div className="flex items-center gap-4">
                    <PrimaryButton className="py-2 px-4" disabled={processing}>
                        Save {action === "Create" ? "Post" : "Changes"}
                    </PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out duration-200"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out duration-200"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-gray-600">Saved</p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}
