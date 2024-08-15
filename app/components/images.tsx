import {images} from "@/app/constant/data"
import Image from "next/image"




export default function Images() {
    return (
        <div className="flex  flex-wrap space-x-2 justify-center mb-10">
            {
                images.map((image) => {
                    const pics = image.image
                    return(
                        <div key={image.id}>
                            <Image src={pics} alt="" />
                        </div>
                    )
                })
            }
        </div>
    )
}