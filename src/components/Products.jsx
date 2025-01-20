import {SectionHeader} from "./SectionHeader"
import {ProductCard} from "./ProductCard"
import Img1 from "../assets/women/women.png"
import Img2 from "../assets/women/women2.jpg"
import Img3 from "../assets/women/women3.jpg"
import Img4 from "../assets/women/women4.jpg"
import {motion} from "motion/react"
import Button from "./Button"

// Dummy Data
const ProductsData = [
    {
        id: 1,
        img: Img1,
        title: "Women Ethnic",
        rating: 5.0,
        color: "white",
        aosDelay: "0",
    },
    {
        id: 2,
        img: Img2,
        title: "Women western",
        rating: 4.5,
        color: "red",
        aosDelay: "200",
    },
    {
        id: 3,
        img: Img3,
        title: "Goggles",
        rating: 4.7,
        color: "brown",
        aosDelay: "400",
    },
    {
        id: 4,
        img: Img4,
        title: "Printed T-Shirt",
        rating: 4.4,
        color: "yellow",
        aosDelay: "600",
    },
    {
        id: 5,
        img: Img2,
        title: "Fashin T-Shirt",
        rating: 4.5,
        color: "pink",
        aosDelay: "800",
    },
]

const Products = () => {
    return (
        <div className={"mt-14 mb-12"}>
            <div className={`container mx-auto`}>
                {/* Header section  */}
                <SectionHeader
                    title={"Products"}
                    topDescription={"Top Selling Products for you"}
                    bottomDescription={"Lorem ipsum dolor sit amet consectetur, adipisicing elit."}
                />
                {/* Body Section */}
                <div>
                    <div
                        className={
                            "grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5"
                        }
                    >
                        {/* Card Section */}
                        {ProductsData.map((item, index) => (
                            <motion.div
                                initial={{y: 50, opacity: 0}}
                                animate={{y: 0, opacity: 1}}
                                transition={{duration: 0.5, delay: 0.15 * index, ease: "easeIn"}}
                                key={item.id}
                            >
                                <ProductCard {...item} />
                            </motion.div>
                        ))}
                    </div>
                    <div className={"flex justify-center mt-10"}>
                        <Button className={"rounded-md !py-1 !px-5"}>View All Button</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products
