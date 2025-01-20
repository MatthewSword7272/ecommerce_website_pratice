import Button from "./Button"
import {motion} from "motion/react"

export function HeroSlide({title, description, img}) {
    return (
        <div className={"!grid grid-cols-1 sm:grid-cols-2"}>
            <div
                className={
                    "flex flex-col justify-center max-md:items-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative"
                }
            >
                <motion.h1
                    initial={{scale: 2, opacity: 0}}
                    animate={{scale: 1, opacity: 1}}
                    transition={{duration: 0.5, delay: 0.1, ease: "easeIn"}}
                    className={`sm:text-6xl lg:text-7xl`}
                >
                    {title}
                </motion.h1>
                <motion.p
                    initial={{opacity: 0, y: 50}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5, ease: "easeIn"}}
                    className={"text-sm"}
                >
                    {description}
                </motion.p>
                <motion.div
                    initial={{opacity: 0, y: 140}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.8, ease: "easeIn"}}
                >
                    <Button className={"hover:scale-105"}>Order Now</Button>
                </motion.div>
            </div>
            {/* image Section */}
            <div className={"order-1 sm:order-2"}>
                <motion.img
                    initial={{scale: 1.3, opacity: 0}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{duration: 0.8, ease: "easeIn"}}
                    src={img}
                    alt="image1"
                    className={
                        "size-[18.75rem] sm:size-[28.125rem] sm:scale-105 xl:scale-125 object-contain mx-auto"
                    }
                />
            </div>
        </div>
    )
}
