export default function Button({className, children, onClick, link, hover, groupHover}) {
    const combinedClasses = `bg-linear-to-r from-primary flex items-center to-secondary group duration-200 text-white py-2 px-4 rounded-full ${className} `

    const groupHoverClasses = ` group-hover:from-white group-hover:to-white group-hover:text-primary `
    const hoverClasses = ` hover:from-white hover:to-white hover:text-primary `

    return (
        <>
            {link ? (
                <a
                    href={link}
                    className={`${combinedClasses} ${hover ? hoverClasses : ""} ${
                        groupHover ? groupHoverClasses : ""
                    }`}
                >
                    {children}
                </a>
            ) : (
                <button
                    onClick={onClick}
                    className={`${combinedClasses} ${hover ? hoverClasses : ""} ${
                        groupHover ? groupHoverClasses : ""
                    }`}
                >
                    {children}
                </button>
            )}
        </>
    )
}
