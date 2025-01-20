import {FaStar} from "react-icons/fa6"

export function ProductCard({...props}) {
    const {img, rating, title, color} = props

    return (
        <div className={"space-y-3"}>
            <img src={img} className={"h-[13.75rem] w-[9.375rem] object-cover rounded-md"}></img>
            <div>
                <h3 className={"font-semibold"}>{title}</h3>
                <p className={"text-sm text-gray-500"}>{color}</p>
                <div className={"flex items-center gap-2"}>
                    <FaStar className={"text-yellow-300"} />
                    <span>{rating}</span>
                </div>
            </div>
        </div>
    )
}
