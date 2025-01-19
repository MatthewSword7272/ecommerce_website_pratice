import {DarkModeButton} from "./DarkModeButton"
import {IoMdSearch} from "react-icons/io"
import Logo from "../assets/logo.png"
import {FaCaretDown, FaCartShopping} from "react-icons/fa6"
import Button from "./Button"

const MenuItems = [
    {id: 1, name: "Home", link: "#"},
    {id: 2, name: "Top Rated", link: "#"},
    {id: 3, name: "Kids Wear", link: "#"},
    {id: 4, name: "Mens Wear", link: "#"},
    {id: 5, name: "Electronics", link: "#"},
    {
        id: 6,
        name: "Trending",
        dropdowns: [
            {name: "Trending Products", link: "#"},
            {name: "Best Selling", link: "#"},
            {name: "Top Rated", link: "#"},
        ],
    },
]

const NavBar = () => {
    return (
        <div
            className={`shadow-md bg-white
        dark:bg-gray-900 dark:text-white relative z-40 duration-300`}
        >
            {/* upper Navbar */}
            <div className={"bg-primary/40 py-2 "}>
                <div className={"container mx-auto flex justify-between items-center "}>
                    <div>
                        <a href={"#"} className={`flex gap-2`}>
                            <img src={Logo} alt="Logo" className={`w-10 `} />
                            <span className={`font-bold text-2xl sm:text-3xl`}>Shopsy</span>
                        </a>
                    </div>
                    {/* search bar and order button */}
                    <div className={"flex justify-between items-center gap-4"}>
                        <div className={"group relative hidden sm:block "}>
                            <input
                                type="text"
                                placeholder={"Search"}
                                className={`w-[12.5rem] group-hover:w-[18.75rem] duration-200 transition-all
                                    rounded-full border border-gray-300 px-2 py-1
                                    focus:outline-none focus:border-primary `}
                            />
                            <IoMdSearch
                                className={`text-gray-500 group-hover:text-primary duration-200 transition-colors
                                    absolute top-1/2 -translate-y-1/2 right-3`}
                            />
                        </div>
                        <Button
                            className={"!py-1 !px-4 scale-100 gap-3"}
                            onClick={() => alert("Ordering is not available yet")}
                        >
                            <span className={`group-hover:block hidden`}>Order</span>
                            <FaCartShopping className={`text-xl drop-shadow-sm`} />
                        </Button>
                        {/* DarkMode Switch */}
                        <DarkModeButton />
                    </div>
                </div>
            </div>
            {/* lower navbar */}
            <div className={`flex justify-center py-2`}>
                <ul className={`sm:flex hidden items-center gap-4`}>
                    {MenuItems.map((item) =>
                        item.link ? (
                            <li key={item.id}>
                                <a
                                    href={item.link}
                                    className={`inline-block px-4 hover:text-primary duration-200`}
                                >
                                    {item.name}
                                </a>
                            </li>
                        ) : (
                            // dropdown menu
                            <li
                                key={item.id}
                                className={`flex flex-col relative group items-center gap-1 hover:text-primary duration-200`}
                            >
                                <span className={`flex items-center gap-1`}>
                                    {item.name}
                                    <FaCaretDown
                                        className={"duration-200 group-hover:rotate-180"}
                                    />
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
                    )}
                </ul>
            </div>
        </div>
    )
}

export default NavBar
