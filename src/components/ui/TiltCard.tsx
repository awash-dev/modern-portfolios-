"use client";

import React from "react";
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from "framer-motion";

interface TiltCardProps {
    children: React.ReactNode;
    className?: string;
    spotlightColor?: string;
}

export const TiltCard = ({ children, className, spotlightColor = "rgba(255, 255, 255, 0.1)" }: TiltCardProps) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Snappier, more responsive spring physics
    const springConfig = { stiffness: 80, damping: 25, mass: 1 };
    const mouseXSpring = useSpring(x, springConfig);
    const mouseYSpring = useSpring(y, springConfig);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const mX = e.clientX - rect.left;
        const mY = e.clientY - rect.top;
        mouseX.set(mX);
        mouseY.set(mY);
        x.set(mX / rect.width - 0.5);
        y.set(mY / rect.height - 0.5);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const background = useMotionTemplate`radial-gradient(800px circle at ${mouseX}px ${mouseY}px, ${spotlightColor}, transparent 80%)`;

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateY,
                rotateX,
                transformStyle: "preserve-3d",
            }}
            className={`${className} group cursor-pointer relative overflow-hidden transition-all duration-500`}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-0"
                style={{ background }}
            />
            <div className="relative z-10 h-full w-full" style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }}>
                {children}
            </div>
        </motion.div>
    );
};
