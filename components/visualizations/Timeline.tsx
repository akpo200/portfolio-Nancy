"use client";

import { motion } from "framer-motion";
import { profile } from "@/lib/data/profile";
import { GlassCard } from "../ui/GlassCard";
import { Badge } from "../ui/Badge";

export function Timeline() {
    return (
        <div className="relative border-l border-white/10 ml-4 md:ml-0 md:pl-8 space-y-12">
            {profile.experience.map((item, index) => (
                <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="relative group"
                >
                    <div className="absolute -left-[41px] top-4 h-5 w-5 rounded-full border border-primary bg-background group-hover:bg-primary transition-colors hidden md:block" />

                    <GlassCard className="relative" hoverEffect>
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                            <div>
                                <h3 className="text-xl font-bold text-white">{item.role}</h3>
                                <p className="text-primary font-medium">{item.company}</p>
                            </div>
                            <Badge variant="secondary">{item.period}</Badge>
                        </div>

                        <p className="text-muted-foreground mb-4">{item.description}</p>

                        {item.impact && (
                            <ul className="space-y-2">
                                {item.impact.map((point, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </GlassCard>
                </motion.div>
            ))}
        </div>
    );
}
