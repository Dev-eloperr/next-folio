"use client";

import { useEffect, useId, useState } from "react";

export default function CountTicker({
    start,
    end,
    duration,
    caption
}: {
    start: number;
    end: number;
    duration: number;
    caption: string;
}) {
    const [count, setCount] = useState(start);
    const id = useId();
    const diff = end - start;
    const interval = duration / diff;
    useEffect(() => {
        const timer = setInterval(() => {
            setCount(count => {
                if (count >= end) {
                    clearInterval(timer);
                    return end;
                }
                return count + 1;
            })
        }, interval);
        return () => clearInterval(timer);
    }, [interval]);
    return (
        <div>
            <p id={id} className="text-2xl font-semibold">{count}</p>
            <label htmlFor={id} className="text-sm text-gray-600">{caption}</label>
        </div>
    );
}