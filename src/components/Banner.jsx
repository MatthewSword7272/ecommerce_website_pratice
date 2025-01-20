import {GiFoodTruck} from "react-icons/gi"
import {GrSecure} from "react-icons/gr"
import {IoFastFood} from "react-icons/io5"
import BannerImg from "../assets/women/women2.jpg"

const BannerData = [
    {
        icon: <GrSecure />,
        bgColor: "bg-violet-100",
        bgDark: "bg-violet-400",
        title: "Quality Products",
    },
    {
        icon: <IoFastFood />,
        bgColor: "bg-orange-100",
        bgDark: "bg-orange-400",
        title: "Fast Delivery",
    },
    {
        icon: <GiFoodTruck />,
        bgColor: "bg-green-100",
        bgDark: "bg-green-400",
        title: "Easy Payment method",
    },
    {
        icon: <GiFoodTruck />,
        bgColor: "bg-yellow-100",
        bgDark: "bg-yellow-400",
        title: "Get Offers",
    },
]

const Banner = () => {
    return (
        <div className={""}>
            <div className={"container mx-auto"}>
                <div className={"grid grid-cols-1 md:grid-cols-2 gap-6 py-14"}>
                    <div>
                        <img
                            src={BannerImg}
                            alt=""
                            className={
                                "max-w-[25rem] h-[21.875rem] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
                            }
                        />
                    </div>
                    <div className={"space-y-5"}>
                        <h1 className={"text-3xl"}>Winter Sale Up to 50% Off</h1>
                        <p className={"text-gray-500"}>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
                            reiciendis inventore iste ratione ex alias quis magni at optio
                        </p>
                        <div className={"space-y-3"}>
                            {BannerData.map((item, index) => (
                                <div key={index} className={"flex items-center gap-5"}>
                                    <div
                                        className={`${item.bgColor} dark:${item.bgDark} p-4 rounded-full `}
                                    >
                                        {item.icon}
                                    </div>
                                    <div>{item.title}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
