import { forwardRef, useEffect, useRef } from "react";

export default forwardRef(function SelectInput(
    { className = "", isFocused = false, element, options = [], ...props },
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
        >
            <option selected={true} disabled={true}>
                Select a {element}
            </option>
            {options.map((option) => (
                <option value={option.id} key={option.id}>
                    {option.name}
                </option>
            ))}
        </select>
    );
});
