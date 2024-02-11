import Table from "@/Components/Table";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function CategoriesList({ auth, categories }) {
    const modifiedCategories = categories.map((category) => {
        //     // Format the date
        const lastUpdated = new Date(category.updated_at).toLocaleString();
        const createdAt = new Date(category.created_at).toLocaleString();

        return {
            id: category.id,
            category: category.name,
            "last updated": lastUpdated,
            "Created at": createdAt,
        };
    });

    const columns = ["category", "last updated", "Created at"];

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    List of Categories
                </h2>
            }
        >
            <Head title="CategoriesList" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <Table
                            element="category"
                            elements="categories"
                            items={modifiedCategories}
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
