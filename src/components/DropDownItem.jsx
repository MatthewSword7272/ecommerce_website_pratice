import {FaCaretDown} from "react-icons/fa6"

export function DropDownItem({item}) {
    return (
        <li
            className={`flex flex-col relative group items-center gap-1 hover:text-primary duration-200`}
        >
            <span className={`flex items-center gap-1`}>
                {item.name}
                <FaCaretDown className={"duration-200 group-hover:rotate-180"} />
            </span>
            <div
                className={`rounded-md shadow-md absolute top-6 z-50 hidden group-hover:block w-36 text-black bg-white p-2 `}
            >
                <ul>
                    {item.dropdowns.map((dropdown, index) => (
                        <li key={index}>
                            <a
                                href={dropdown.link}
                                className={`inline-block w-full rounded-md p-2 hover:bg-primary/20 `}
                            >
                                {dropdown.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </li>
    )
}
