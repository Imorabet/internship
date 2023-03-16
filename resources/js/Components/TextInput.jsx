import { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function TextInput({ type = 'text', className = '',max=0, isFocused = false, ...props }, ref) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <div className="flex flex-col items-start">
            <input
                max={max}
                {...props}
                type={type}
                className={
                    'border-gray-300 focus:border-[#033262] focus:ring-indigo-800 rounded-md shadow-sm ' +
                    className
                }
                ref={input}
            />
        </div>
    );
});
