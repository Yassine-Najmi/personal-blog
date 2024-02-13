import Table from "@/Components/Table";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function TagsList({ auth, tags }) {
    const modifiedTags = tags.map((tag) => {
        //     // Format the date
        const lastUpdated = new Date(tag.updated_at).toLocaleString();
        const createdAt = new Date(tag.created_at).toLocaleString();

        return {
            id: tag.id,
            tag: tag.name,
            "last updated": lastUpdated,
            "Created at": createdAt,
        };
    });

    const columns = ["tag", "last updated", "Created at"];

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    List of Tags
                </h2>
            }
        >
            <Head title="TagsList" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <Table
                            element="tag"
                            elements="tags"
                            items={modifiedTags}
                            columns={columns}
                            primary={"ID"}
                            action={["edit", "delete"]}
                        />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
