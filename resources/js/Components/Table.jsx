import { Link } from "@inertiajs/react";
import PrimaryButton from "./PrimaryButton";

export default function Table({ items, columns, primary, action }) {
    return (
        <>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg p-8">
                <div className="flex justify-end mb-4">
                    <PrimaryButton
                        className="flex items-end justify-end"
                        size="sm"
                    >
                        <Link
                            className="text-white px-4 py-2"
                            href={route("posts.create")}
                        >
                            Create Post
                        </Link>
                    </PrimaryButton>
                </div>
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                {primary}
                            </th>
                            {columns.map((column) => (
                                <th
                                    key={column}
                                    scope="col"
                                    className="px-6 py-3"
                                >
                                    {column}
                                </th>
                            ))}
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item) => (
                            <tr
                                key={item.id}
                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                            >
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    #{item.id}
                                </th>
                                {columns.map((column) => (
                                    <td key={column} className="px-6 py-4">
                                        {column === "Image" ? (
                                            <img
                                                src={item[column]}
                                                alt="Image"
                                                className="h-16 w-auto rounded-full"
                                            />
                                        ) : (
                                            item[column]
                                        )}
                                    </td>
                                ))}
                                <td className="px-6 py-4">
                                    <Link
                                        href={route(
                                            "posts.edit",
                                            item.id,
                                            "edit"
                                        )}
                                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                    >
                                        {action}
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
