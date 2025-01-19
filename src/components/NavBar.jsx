import {DarkModeButton} from "./DarkModeButton"
import {IoMdSearch} from "react-icons/io"
import Logo from "../assets/logo.png"
import {FaCartShopping} from "react-icons/fa6"

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
                        <button
                            className={`bg-gradient-to-r from-primary to-secondary
                            text-white py-1 px-4 rounded-full
                            group flex items-center gap-3
                        `}
                            onClick={() => alert("Ordering is not available yet")}
                        >
                            <span className={`group-hover:block hidden`}>Order</span>
                            <FaCartShopping className={`text-xl drop-shadow-sm`} />
                        </button>
                        {/* DarkMode Switch */}
                        <DarkModeButton />
                    </div>
                </div>
            </div>
            {/* lower navbar */}
            <div></div>
        </div>
    )
}

export default NavBar
