import Image from "next/image"
import clothData from '../lib/clothData'

export default function clothImage({ ImageUrl, width = 200 , height = 300}) {
    return (
        <Image
            src={ImageUrl}
            alt='게임 썸네일'
            width={width}
            height={height}
        />
    )
}