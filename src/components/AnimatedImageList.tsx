"use client";
import clsx from "clsx";
import { StaticImageData } from "next/image";
import Image from "next/image";

export default function AnimatedImageList({ data }: { data: { src: StaticImageData, label: string }[] }) {
    return (
        <ul className="group">
            {data.map((item, index) => (
                <li key={index} className={clsx(
                    "relative border-b-[2px] border-gray-700 h-auto group/item",
                    "hover:z-10",
                    index === 0 && "border-t-[2px]",
                )}>
                    <div className={clsx(
                        "flex items-center gap-8 py-8 transition-opacity duration-300",
                        "group-hover:opacity-50 group-hover/item:opacity-100"
                    )}>
                        <span aria-hidden="true">{index + 1}</span>
                        <span className="font-semibold text-[64px]">{item.label}</span>
                    </div>
                    <div className={clsx(
                        "absolute right-1/5 top-0",
                        "w-[160px] h-[160px] rounded-lg overflow-hidden",
                        "opacity-0 rotate-[30deg] transition-all duration-500 ease-out scale-75",
                        "group-hover/item:opacity-100 group-hover/item:rotate-[3deg] group-hover/item:scale-[1.6]",
                        "before:absolute before:inset-0 before:bg-accent/60 before:z-10 before:pointer-events-none"
                    )}>
                        <Image 
                            className="w-full h-full object-cover" 
                            aria-hidden="true" 
                            src={item.src} 
                            alt={item.label} 
                            width={160} 
                            height={160} 
                            loading="lazy" 
                        />
                    </div>
                </li>
            ))}
        </ul>
    )
}