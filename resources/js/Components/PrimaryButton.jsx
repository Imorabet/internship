export default function PrimaryButton({ className = '', disabled, children, ...props }) {
    return (
        <button
            {...props}
            className={
                `inline-flex items-center px-4 py-2 bg-[#003366] border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-[#033262] focus:bg-[#033262] active:bg-[#033262] focus:outline-none focus:ring-2 focus:ring-indigo-800 focus:ring-offset-2 transition ease-in-out duration-150 ${
                    disabled && 'opacity-30'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
