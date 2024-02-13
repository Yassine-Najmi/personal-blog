import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import SelectInput from "@/Components/SelectInput";
import TextInput from "@/Components/TextInput";
import TextareaInput from "@/Components/TextareaInput";
import { Transition } from "@headlessui/react";
import { useForm } from "@inertiajs/react";
import { useState } from "react";

export default function TagForm({ tag, className = "", action }) {
    const {
        data,
        setData,
        post: handlePost,
        patch: handlePatch,
        processing,
        errors,
        recentlySuccessful,
    } = useForm({
        title: tag?.name || "",
    });
    const submit = (e) => {
        e.preventDefault();

        const preserveScroll = {
            preserveScroll: true,
        };

        if (action === "Update") {
            handlePatch(route("tags.update", tag.id), preserveScroll);
        } else {
            handlePost(route("tags.store"), preserveScroll);
        }
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">
                    {action} Tag
                </h2>

                <p className="mt-1 text-sm text-gray-600">{action} your Tag</p>
            </header>

            <form className="mt-6 space-y-6" onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="name" value="name" />
                    <TextInput
                        id="name"
                        className="mt-1 block w-full"
                        value={data?.name}
                        onChange={(e) => setData("name", e.target.value)}
                    />
                    {errors?.name && (
                        <InputError className="mt-2" message={errors?.name} />
                    )}
                </div>

                <div className="flex items-center gap-4">
                    <PrimaryButton className="py-2 px-4" disabled={processing}>
                        Save {action === "Create" ? "Tag" : "Changes"}
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
