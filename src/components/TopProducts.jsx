import {SectionHeader} from "./SectionHeader"
import Img1 from "../assets/shirt/shirt.png"
import Img2 from "../assets/shirt/shirt2.png"
import Img3 from "../assets/shirt/shirt3.png"
import {FaStar} from "react-icons/fa6"
import Button from "./Button"

const ProductsData = [
    {
        id: 1,
        img: Img1,
        title: "Casual Wear",
        description:
            "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id: 2,
        img: Img2,
        title: "Printed shirt",
        description:
            "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id: 3,
        img: Img3,
        title: "Women shirt",
        description:
            "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
]

const TopProducts = () => {
    return (
        <div>
            <div className={"container mx-auto"}>
                {/* Header section */}
                <SectionHeader
                    textAlign={"text-start"}
                    title={"Best Products"}
                    topDescription={"Top Rated Products for you"}
                    bottomDescription={
                        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores modi Sit asperiores modi"
                    }
                />
                {/* body Section */}
                <div className={"flex justify-between max-md:flex-col mt-24"}>
                    {ProductsData.map((product) => (
                        <div
                            key={product.id}
                            className={`rounded-2xl bg-white dark:bg-gray-800 hover:black-black/80 dark:hover:bg-primary hover:bg-gray-800 hover:text-white relative shadow-xl duration-300 group max-w-[18.75rem]`}
                        >
                            <div className={`h-[6.25rem]`}>
                                <img
                                    src={product.img}
                                    alt={product.title}
                                    className={
                                        "max-w-[8.75rem] transform -translate-y-20 translate-x-1/2 group-hover:scale-105 duration-300 drop-shadow-md"
                                    }
                                />
                            </div>
                            <div className={`p-4 text-center space-y-2`}>
                                <div className={`flex justify-center gap-1`}>
                                    <FaStar className={"text-yellow-500"} />
                                    <FaStar className={"text-yellow-500"} />
                                    <FaStar className={"text-yellow-500"} />
                                    <FaStar className={"text-yellow-500"} />
                                </div>
                                <h1 className={`text-xl`}>{product.title}</h1>
                                <p
                                    className={`text-gray-500 group-hover:text-white duration-300 line-clamp-2`}
                                >
                                    {product.description}
                                </p>
                                <Button groupHover className={"!py-1 !px-4 mx-auto"}>
                                    Order More
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TopProducts
