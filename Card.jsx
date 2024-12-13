import React from 'react'
import { FaFileLines } from "react-icons/fa6";
import { LuDownload } from "react-icons/lu";
import { IoIosClose } from "react-icons/io";
import { motion } from "motion/react"
function Card({ data, reference }) {
    return (
        <motion.div drag  dragConstraints={reference}  whileDrag={{scale: 1.2}} className='flex-shrink-0 relative w-60 h-72 rounded-[45px] bg-zinc-900/90 px-8 py-10 text-white overflow-hidden'>
            <FaFileLines />
            <p className='text-sm leading-tight mt-5 font-semibold'>{data.desc}</p>
            <div className='footer absolute bottom-0 w-full  left-0'>
                <div className='flex items-center justify-between px-8 py-3 mb-3'>
                    <h5>{data.filesize}</h5>
                    <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>

                        {data.close ? <IoIosClose /> : <LuDownload size=".7em" color='#fff' />}

                    </span>

                </div>
                {
                    data.tag.isopen && (
                        <div className= "tag  w-full py-4 flex items-center justify-center"
                        style={{ backgroundColor: data.tag.tagColor }}
                        >
                            <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
                        </div>
                    ) 
                }

            </div>

        </motion.div>
    )
}

export default Card
