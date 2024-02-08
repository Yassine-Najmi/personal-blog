import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import SelectInput from "@/Components/SelectInput";
import TextInput from "@/Components/TextInput";
import TextareaInput from "@/Components/TextareaInput";

export default function UpdatePostForm({ auth, post, className = "" }) {
    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">
                    Update Post
                </h2>

                <p className="mt-1 text-sm text-gray-600">Update your post</p>
            </header>

            <form className="mt-6 space-y-6">
                <div>
                    <InputLabel htmlFor="title" value="Title" />
                    <TextInput id="title" className="mt-1 block w-full" />
                </div>

                <div>
                    <InputLabel htmlFor="content" value="Content" />
                    <TextareaInput className="mt-1 block w-full" />
                </div>

                <div>
                    <InputLabel htmlFor="image" value="Image" />
                    <TextInput id="image" className="mt-1 block w-full" />
                </div>

                <div>
                    <InputLabel htmlFor="category" value="Category" />
                    <SelectInput id="category" className="mt-1 block w-full" />
                </div>

                <div>
                    <InputLabel htmlFor="tags" value="Tags" />
                    <SelectInput id="tags" className="mt-1 block w-full" />
                </div>

                <div className="flex items-center gap-4">
                    <PrimaryButton className="py-2 px-4">
                        Save Changes
                    </PrimaryButton>
                </div>
            </form>
        </section>
    );
}
