import { forwardRef, useEffect, useRef, useState } from "react";

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
    const [selectedElement, setSelectedElement] = useState(
        categoryId ? categoryId : 0
    );

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
            value={selectedElement}
            onChange={(e) => setSelectedElement(e.target.value)}
        >
            <option disabled={true} value={0}>
                Select a {element}
            </option>
            {options.map((option) => (
                <option key={option.id} value={option.id}>
                    {option.name}
                </option>
            ))}
        </select>
    );
});
