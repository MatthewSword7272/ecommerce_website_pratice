import {TopProductCard} from "./TopProductCard"
import {SectionHeader} from "./SectionHeader"
import Img1 from "../assets/shirt/shirt.png"
import Img2 from "../assets/shirt/shirt2.png"
import Img3 from "../assets/shirt/shirt3.png"

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
        <div className={" "}>
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
                <div
                    className={
                        "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center gap-3"
                    }
                >
                    {ProductsData.map((product) => (
                        <TopProductCard key={product.id} {...product} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TopProducts
