import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import SelectInput from "@/Components/SelectInput";
import TextInput from "@/Components/TextInput";
import TextareaInput from "@/Components/TextareaInput";
import { Transition } from "@headlessui/react";
import { useForm } from "@inertiajs/react";
import { useState } from "react";

export default function PostForm({
    post,
    categories,
    tags,
    className = "",
    action,
}) {
    const [imagePreview, setImagePreview] = useState(null);

    const {
        data,
        setData,
        post: handlePost,
        patch: handlePatch,
        progress,
        processing,
        errors,
        recentlySuccessful,
    } = useForm({
        title: post?.title || "",
        content: post?.content || "",
        image: post?.image || "",
        category: post?.category || "",
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

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setData("image", file);

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

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
                    <InputLabel
                        htmlFor="image"
                        className="mb-1"
                        value="Image"
                    />
                    <div className="flex ">
                        <div>
                            <input
                                id="image"
                                className="-full text-black text-sm bg-gray-100 file:cursor-pointer cursor-pointer file:border-0 file:py-2 file:px-4 file:mr-4 file:bg-gray-800 file:hover:bg-gray-700 file:text-white rounded"
                                type="file"
                                onChange={handleImageChange}
                            />
                            <p
                                className="mt-1 text-sm text-gray-500 dark:text-gray-300"
                                id="file_input_help"
                            >
                                jpeg,png,jpg,gif,svg (max:2048)
                            </p>
                        </div>
                        {imagePreview && (
                            <img
                                src={imagePreview}
                                className="ml-4 w-24 h-24"
                                alt={data?.title}
                            />
                        )}
                    </div>

                    {progress && (
                        <progress value={progress.percentage} max="100">
                            {progress.percentage}%
                        </progress>
                    )}
                    {errors?.image && (
                        <InputError className="mt-2" message={errors?.image} />
                    )}
                </div>

                <div>
                    <InputLabel htmlFor="category" value="Category" />
                    <SelectInput
                        id="category"
                        className="mt-1 block w-full"
                        categoryId={post?.category_id}
                        options={categories}
                        element="category"
                        value={data?.category}
                        onChange={(e) => setData("category", e.target.value)}
                    />
                    {errors?.category && (
                        <InputError
                            className="mt-2"
                            message={errors?.category}
                        />
                    )}
                </div>

                {/* <div>
                    <InputLabel htmlFor="tags" value="Tags" />
                    <SelectInput
                        id="tags"
                        className="mt-1 block w-full"
                        options={tags}
                        value={data?.tag}
                        onChange={(value) => setData("tag", value)}
                    />
                    {errors?.tag && (
                        <InputError className="mt-2" message={errors?.tag} />
                    )}
                </div> */}

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
