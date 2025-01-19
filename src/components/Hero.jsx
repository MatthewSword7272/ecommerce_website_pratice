import Slider from "react-slick"
import Image1 from "../assets/hero/sale.png"
import Image2 from "../assets/hero/shopping.png"
import Image3 from "../assets/hero/women.png"
import Button from "./Button"

const imageList = [
    {
        id: 1,
        img: Image1,
        title: "Upto 50% off on all Men's Wear",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },

    {
        id: 2,
        img: Image2,
        title: "30% off on all Women's Wear",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },

    {
        id: 3,
        img: Image3,
        title: "70% off on all Products Sale",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
]

const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
}

const Hero = () => {
    return (
        <div
            className={`relative overflow-hidden min-h-[34.375rem] sm:min-h-[40.625rem] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200`}
        >
            {/* background pattern */}
            <div
                className={`size-[43.75rem]  bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 z-10`}
            ></div>
            {/* hero section */}
            <div className={"container pb-8 sm:pb-0 z-10"}>
                <Slider {...settings}>
                    {imageList.map((item) => (
                        <div className={"!grid grid-cols-1 sm:grid-cols-2"} key={item.id}>
                            {/* Text Content Section */}
                            <div
                                className={
                                    "flex flex-col justify-center max-md:items-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative"
                                }
                            >
                                <h1 className={`text-5xl sm:text-6xl lg:text-7xl font-bold`}>
                                    {item.title}
                                </h1>
                                <p className={"text-sm"}>{item.description}</p>
                                <div>
                                    <Button className={"hover:scale-105"}>Order Now</Button>
                                </div>
                            </div>
                            {/* image Section */}
                            <div className={"order-1 sm:order-2"}>
                                <img
                                    src={item.img}
                                    alt="image1"
                                    className={
                                        "size-[18.75rem] sm:size-[28.125rem] sm:scale-105 xl:scale-125 object-contain mx-auto"
                                    }
                                />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default Hero
