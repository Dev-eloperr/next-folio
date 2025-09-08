import { StaticImageData } from "next/image";
import Image from "next/image";

export default function Carousel({ data }: { data: 
    {
        body: string;
        imageSrc: StaticImageData;
        caption: string;
        subcaption: string;
        imageFilter?: string;
    }[]
}) {
    return (
        <div>
            {data.map((item, index) => (
                <div key={index}>
                    <Image src={item.imageSrc} alt={item.caption} className={item.imageFilter} />
                    <h3>{item.caption}</h3>
                    <p>{item.subcaption}</p>
                </div>
            ))}
        </div>
    );
}