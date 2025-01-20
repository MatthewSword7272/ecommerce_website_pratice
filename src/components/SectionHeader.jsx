import React from "react"
import {motion} from "motion/react"

export function SectionHeader({
    title,
    bottomDescription,
    topDescription,
    textAlign = "text-center",
}) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 140,
            }}
            animate={{
                opacity: 1,
                y: 0,
            }}
            transition={{
                duration: 0.8,
                ease: "easeIn",
            }}
            className={`${textAlign} mb-10`}
        >
            <p className={`text-sm text-primary`}>{topDescription}</p>
            <h1 className={`text-3xl`}>{title}</h1>
            <p className={"text-xs text-gray-400"}>{bottomDescription}</p>
        </motion.div>
    )
}
