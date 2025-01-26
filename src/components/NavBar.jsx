import {DropDownItem} from "./DropDownItem"
import {DarkModeButton} from "./DarkModeButton"
import {IoMdSearch} from "react-icons/io"
import Logo from "../assets/logo.png"
import {FaCartShopping} from "react-icons/fa6"
import {motion} from "motion/react"
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
        <div className={`shadow-md relative z-40`}>
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
                                    focus:outline-hidden focus:border-primary `}
                            />
                            <IoMdSearch
                                className={`text-gray-500 group-hover:text-primary duration-200 transition-colors
                                    absolute top-1/2 -translate-y-1/2 right-3`}
                            />
                        </div>
                        <Button
                            className={"py-1! px-4! scale-100 gap-3"}
                            onClick={() => alert("Ordering is not available yet")}
                        >
                            <span className={`group-hover:block hidden`}>Order</span>
                            <FaCartShopping className={`text-xl drop-shadow-xs`} />
                        </Button>
                        {/* DarkMode Switch */}
                        <DarkModeButton />
                    </div>
                </div>
            </div>
            {/* lower navbar */}
            <motion.div
                initial={{scale: 0.3, opacity: 0}}
                animate={{scale: 1, opacity: 1}}
                transition={{
                    duration: 0.8,
                    ease: "easeIn",
                    delay: 0.1,
                }}
                className={`flex justify-center py-2`}
            >
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
                            <DropDownItem item={item} key={item.id} />
                        )
                    )}
                </ul>
            </motion.div>
        </div>
    )
}

export default NavBar
