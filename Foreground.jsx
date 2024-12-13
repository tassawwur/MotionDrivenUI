import React, { useRef } from 'react'; 
import Card from './Card'

function Foreground() {
const ref = useRef(null);
    const data = [

        { desc: "This text could be replaced ...", filesize: ".9mb", close: true, tag: { isopen: true, tagTitle: "Download Now", tagColor: "green" }, },
        { desc: "This text could be replaced ...", filesize: ".9mb", close: true, tag: { isopen: true, tagTitle: "Download Now", tagColor: "blue" }, },
        { desc: "This text could be replaced ...", filesize: ".9mb", close: true, tag: { isopen: false, tagTitle: "Open File", tagColor: "green" }, },
    ]
    return (

        <div ref={ref} className=' p-5 top-0 left-0 fixed z-3 w-full h-full flex gap-10 flex-wrap'>
            {data.map((item, index) => (
                <Card  reference= {ref} data={item} />
            ))}
        </div>

    )
}

export default Foreground





