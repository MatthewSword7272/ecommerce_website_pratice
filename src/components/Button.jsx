export default function Button({className, children, onClick}) {
    return (
        <button
            onClick={onClick}
            className={
                "bg-gradient-to-r from-primary flex items-center to-secondary group duration-200 text-white py-2 px-4 rounded-full " +
                className
            }
        >
            {children}
        </button>
    )
}
