import {FaStar} from "react-icons/fa6"
import Button from "./Button"
export function TopProductCard({...props}) {
    const {img, title, description} = props

    return (
        <div
            className={`mt-24 rounded-2xl bg-white dark:bg-gray-800 hover:black-black/80 dark:hover:bg-primary hover:bg-gray-800 hover:text-white relative shadow-xl duration-300 group max-w-[18.75rem]`}
        >
            <div className={`h-[6.25rem]`}>
                <img
                    src={img}
                    alt={title}
                    className={
                        "max-w-[8.75rem] absolute transform -translate-y-20 right-1/2 translate-x-1/2 group-hover:scale-105 duration-300 drop-shadow-md"
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
                <h1 className={`text-xl`}>{title}</h1>
                <p className={`text-gray-500 group-hover:text-white duration-300 line-clamp-2`}>
                    {description}
                </p>
                <Button groupHover className={"!py-1 !px-4 mx-auto"}>
                    Order More
                </Button>
            </div>
        </div>
    )
}
