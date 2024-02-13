import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import TagForm from "./Partials/TagForm";
export default function EditTag({ auth, tag }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Edit Tag
                </h2>
            }
        >
            <Head title="CreateTag" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <TagForm tag={tag} action="Update" />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
