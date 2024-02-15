import { forwardRef, useEffect, useRef } from "react";

export default forwardRef(function SelectInput(
    {
        className = "",
        isFocused = false,
        element,
        categoryId,
        options = [],
        ...props
    },
    ref
) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <select
            {...props}
            className={
                "border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm " +
                className
            }
            ref={input}
            defaultValue={0}
        >
            <option disabled={true} value={0}>
                Select {element}
            </option>
            {options.map((option) => (
                <option key={option.id} value={option.id}>
                    {option.name}
                </option>
            ))}
        </select>
    );
});
