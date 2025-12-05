"use client";

import Image from "next/image";
import { useRef } from "react";

interface SlideBoxItem {
    text: string;
    userImage: string;
    userName: string;
    userRole: string;
    companyLogo: string;
}

interface SlideBoxProps {
    items: SlideBoxItem[];
    sliderRef: React.RefObject<HTMLDivElement>;
}

export default function SlideBox({ items, sliderRef }: SlideBoxProps) {

    const isDragging = useRef(false);
    const startX = useRef(0);
    const scrollPos = useRef(0);

    const handleMouseDown = (e: any) => {
        if (!sliderRef.current) return;
        isDragging.current = true;
        startX.current = e.pageX - sliderRef.current.offsetLeft;
        scrollPos.current = sliderRef.current.scrollLeft;
    };

    const handleMouseMove = (e: any) => {
        if (!isDragging.current || !sliderRef.current) return;
        const x = e.pageX - sliderRef.current.offsetLeft;
        const walk = x - startX.current;
        sliderRef.current.scrollLeft = scrollPos.current - walk;
    };

    const handleMouseUp = () => {
        isDragging.current = false;
    };

    return (
        <div
            ref={sliderRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseUp}
            onMouseUp={handleMouseUp}
            className="
                flex gap-5 md:gap-6
                w-full
                overflow-x-auto
                select-none
                no-scrollbar
            "
        >
            {items.map((item, index) => (
                <div
                    key={index}
                    className="
                        shrink-0
                        w-[260px] md:w-[430px]
                        h-auto md:h-[420px]
                        rounded-2xl
                        border border-white/20
                        bg-transparent
                        flex flex-col justify-between
                        p-4 md:p-6
                    "
                >
                    <p className="text-sm md:text-xl leading-relaxed font-light">
                        "{item.text}"
                    </p>

                    <div className="flex items-center justify-between border-t border-white/20 pt-4">

                        <div className="flex items-center gap-3">
                            <Image
                                src={item.userImage}
                                width={45}
                                height={45}
                                alt=""
                                className="rounded-full md:w-[60px] md:h-[60px]"
                            />
                            <div className="flex flex-col">
                                <p className="text-xs md:text-sm font-medium">
                                    {item.userName}
                                </p>
                                <span className="text-[10px] md:text-xs opacity-60">
                                    {item.userRole}
                                </span>
                            </div>
                        </div>

                        <div className="h-full px-3 md:px-4 border-l border-white/20 flex items-center">
                            <Image
                                src={item.companyLogo}
                                width={45}
                                height={45}
                                alt=""
                                className="rounded-md md:w-[60px] md:h-[60px]"
                            />
                        </div>

                    </div>
                </div>
            ))}
        </div>
    );
}