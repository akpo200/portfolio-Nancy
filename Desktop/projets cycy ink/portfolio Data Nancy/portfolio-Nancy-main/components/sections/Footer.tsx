"use client";

import { useScroll, motion, useTransform, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import { Button } from "../ui/Button";

export function Footer() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end end"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [-50, 0]);

    return (
        <footer className="relative bg-black pt-20 pb-10 overflow-hidden" ref={container}>
            <motion.div style={{ y }} className="container mx-auto px-4 z-10 relative">
                <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bold font-display text-white">Nancy AKPO</h3>
                        <p className="text-muted-foreground mt-2 text-sm max-w-sm">
                            Transformer des données brutes en décisions claires.
                        </p>
                    </div>

                    <div className="flex gap-4">
                        <Button variant="ghost" className="text-gray-400 hover:text-white" onClick={() => window.open("https://linkedin.com/in/nancyakpo", "_blank")}>LinkedIn</Button>
                        <Button variant="ghost" className="text-gray-400 hover:text-white" onClick={() => window.location.href = "mailto:nancyakpo@gmail.com"}>Email</Button>
                    </div>
                </div>

                <div className="mt-16 text-center text-sm text-gray-600 font-medium">
                    © 2026 désigné et conçu par Nancy A.
                </div>
            </motion.div>
        </footer>
    );
}
