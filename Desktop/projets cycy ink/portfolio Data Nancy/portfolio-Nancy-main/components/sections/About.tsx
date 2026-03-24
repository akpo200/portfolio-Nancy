"use client";

import { motion } from "framer-motion";
import { Timeline } from "../visualizations/Timeline";
import { GradientText } from "../ui/GradientText";
import { profile } from "@/lib/data/profile";
import Image from "next/image";

export function About() {
    return (
        <section className="py-20 bg-background relative" id="about">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    {/* Left Column: Photo & Manifesto */}
                    <div className="lg:col-span-5 space-y-8 sticky top-24">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative aspect-square w-full max-w-md mx-auto overflow-hidden rounded-2xl border border-white/10 shadow-2xl"
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
                            <Image
                                src="/nancy.jpg"
                                alt="Nancy AKPO"
                                fill
                                className="object-cover"
                                priority
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <h2 className="text-3xl font-display font-bold text-white">
                                Je suis <GradientText>Nancy AKPO</GradientText>
                            </h2>

                            <div className="text-muted-foreground space-y-4 text-lg leading-relaxed whitespace-pre-line">
                                {profile.bio}
                            </div>

                            <div className="flex gap-4">
                                <a href={`mailto:${profile.email}`} className="text-white border-b border-primary hover:text-primary transition-colors pb-1">
                                    {profile.email}
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Timeline & Stats */}
                    <div className="lg:col-span-7 space-y-12">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-8 border-l-4 border-primary pl-4">Mon Parcours</h3>
                            <Timeline />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
