import {FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow} from "react-icons/fa6"
import footerLogo from "../assets/logo.png"
import Banner from "../assets/website/footer-pattern.jpg"
import {FaMobileAlt} from "react-icons/fa"

const BannerImg = {
    backgroundImage: `url(${Banner})`,
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
}

const FooterLinks = [
    {
        title: "Home",
        link: "/#",
    },
    {
        title: "About",
        link: "/#about",
    },
    {
        title: "Contact",
        link: "/#contact",
    },
    {
        title: "Blog",
        link: "/#blog",
    },
]

const Footer = () => {
    return (
        <div style={BannerImg}>
            <div className={"container mx-auto"}>
                <div className={"grid md:grid-cols-3 pb-48 pt-10 gap-5"}>
                    <div className={" "}>
                        <h1 className={"sm:text-3xl text-xl mb-3 flex items-center gap-3"}>
                            <img src={footerLogo} className={"max-w-[3.125rem]"} alt="" />
                            Shopsy
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum in beatae
                            ea recusandae blanditiis veritatis.
                        </p>
                    </div>
                    <div className={"grid grid-cols-2 col-span-2 sm:grid-cols-3 md:pl-10"}>
                        <div className={"  "}>
                            <h3 className={"font-bold text-xl mb-4"}>Important Links</h3>
                            <ul className={"space-y-3"}>
                                {FooterLinks.map((link) => (
                                    <li
                                        className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                                        key={link.title}
                                    >
                                        <span>{link.title}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className={" "}>
                            <h3 className={"font-bold text-xl mb-4"}>Links</h3>
                            <ul className={"space-y-3"}>
                                {FooterLinks.map((link) => (
                                    <li
                                        className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                                        key={link.title}
                                    >
                                        <span>{link.title}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className={"space-y-5"}>
                            <div className="flex items-center gap-3">
                                <a href="#">
                                    <FaInstagram className="text-3xl" />
                                </a>
                                <a href="#">
                                    <FaFacebook className="text-3xl" />
                                </a>
                                <a href="#">
                                    <FaLinkedin className="text-3xl" />
                                </a>
                            </div>
                            <div className="">
                                <div className="flex items-center gap-3">
                                    <FaLocationArrow />
                                    <p>Noida, Uttar Pradesh</p>
                                </div>
                                <div className="flex items-center gap-3 mt-3">
                                    <FaMobileAlt />
                                    <p>+91 123456789</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
