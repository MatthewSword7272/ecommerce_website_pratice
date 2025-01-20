import {HeroSlide} from "./HeroSlide"
import Slider from "react-slick"
import Image1 from "../assets/hero/sale.png"
import Image2 from "../assets/hero/shopping.png"
import Image3 from "../assets/hero/women.png"
import {Fragment} from "react"
import {motion} from "motion/react"

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
                    {imageList.map((item, index) => (
                        <Fragment key={index}>
                            {/* Text Content Section */}
                            <HeroSlide
                                title={item.title}
                                description={item.description}
                                img={item.img}
                                index={index}
                            />
                        </Fragment>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default Hero
