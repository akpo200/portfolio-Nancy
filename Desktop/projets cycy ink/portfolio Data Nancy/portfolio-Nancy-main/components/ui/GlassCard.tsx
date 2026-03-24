import { cn } from "@/lib/utils";
import { HTMLMotionProps, motion } from "framer-motion";
import React from "react";

interface GlassCardProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

export function GlassCard({ children, className, hoverEffect = false, ...props }: GlassCardProps) {
    return (
        <motion.div
            initial={hoverEffect ? { opacity: 0, y: 20 } : undefined}
            whileInView={hoverEffect ? { opacity: 1, y: 0 } : undefined}
            viewport={{ once: true }}
            whileHover={hoverEffect ? { y: -5, boxShadow: "0 20px 40px -10px rgba(124, 58, 237, 0.15)" } : undefined}
            transition={{ duration: 0.4 }}
            className={cn(
                "glass-panel rounded-2xl p-6 relative overflow-hidden border border-white/5",
                "bg-gradient-to-br from-white/5 to-white/0",
                className
            )}
            {...props}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">{children}</div>
        </motion.div>
    );
}
