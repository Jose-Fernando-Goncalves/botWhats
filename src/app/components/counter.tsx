'use client'
import { animate, useMotionValue } from "framer-motion";
import { useEffect, useRef } from "react";


export default function Counter({ value = 1, durationTime = 1 }: { value: number, durationTime: number }) {
    const motionValue = useMotionValue(0);
    const ref = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const animation = animate(motionValue, value, { duration: durationTime });

        return () => animation.stop();
    }, []);

    useEffect(() => {
        motionValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.innerText = latest.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
            }
        });

    }, [motionValue]);


    return <span ref={ref} className='text-3xl text-zinc-600 font-bold' />
}
