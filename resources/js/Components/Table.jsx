import { Link, router } from "@inertiajs/react";
import PrimaryButton from "./PrimaryButton";

export default function Table({
    element,
    elements,
    items,
    columns,
    primary,
    action,
}) {
    const deleteItem = (id) => {
        router.delete(route(`${elements}.destroy`, id), {
            onBefore: () =>
                confirm(`Are you sure you want to delete this ${element} ?`),
        });
    };

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
                            href={route(`${elements}.create`)}
                        >
                            Create {element}
                        </Link>
                    </PrimaryButton>
                </div>
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-3 py-2 text-center">
                                {primary}
                            </th>
                            {columns.map((column) => (
                                <th
                                    key={column}
                                    scope="col"
                                    className="px-6 py-3 text-center"
                                >
                                    {column}
                                </th>
                            ))}
                            <th
                                scope="col"
                                colSpan={2}
                                className="px-2 py-3 text-center w-1/12"
                            >
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
                                    className="px-3 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
                                >
                                    #{item.id}
                                </th>
                                {columns.map((column) => (
                                    <td
                                        key={column}
                                        className="px-3 py-2 text-center"
                                    >
                                        {column === "Image" ? (
                                            <img
                                                src={`/storage/${item[column]}`}
                                                alt="Image"
                                                className="w-24 h-12 rounded-lg "
                                            />
                                        ) : (
                                            item[column]
                                        )}
                                    </td>
                                ))}
                                <td className="px-6 py-4 flex justify-end space-x-1 items-center gap-6">
                                    {element === "post" &&
                                        action.length >= 3 && (
                                            <Link
                                                href={route(
                                                    `${elements}.${
                                                        action[
                                                            action.length - 3
                                                        ]
                                                    }`,
                                                    item.id,
                                                    action[action.length - 3]
                                                )}
                                                className="font-medium text-green-600 dark:text-green-500 hover:underline"
                                            >
                                                {action[action.length - 3]}
                                            </Link>
                                        )}

                                    <Link
                                        href={route(
                                            `${elements}.${
                                                action[action.length - 2]
                                            }`,
                                            item.id,
                                            action[action.length - 2]
                                        )}
                                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                    >
                                        {action[action.length - 2]}
                                    </Link>

                                    <button
                                        className="font-medium text-red-600 dark:text-red-500 hover:underline"
                                        onClick={() => deleteItem(item.id)}
                                    >
                                        {action?.[action.length - 1]}
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
