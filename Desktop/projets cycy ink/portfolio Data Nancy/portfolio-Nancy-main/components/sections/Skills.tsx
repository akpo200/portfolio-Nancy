"use client";

import { motion } from "framer-motion";
import { SkillsRadar } from "../visualizations/SkillsRadar";
import { GradientText } from "../ui/GradientText";
import { profile } from "@/lib/data/profile";
import { GlassCard } from "../ui/GlassCard";

export function Skills() {
    return (
        <section className="py-20 bg-background relative overflow-hidden" id="skills">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none" />

            <div className="container mx-auto px-4 z-10 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 text-white">
                        Compétences <GradientText>Analytiques</GradientText>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Visualisation de mon expertise technique et stratégique.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
                    {/* Visual Chart with Stats Overlay */}
                    <GlassCard className="h-full min-h-[400px] flex flex-col justify-between p-6 bg-black/20 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-6 z-10 text-right w-full">
                            <div className="text-sm text-muted-foreground uppercase tracking-widest mb-1">Expertise Principale</div>
                            <div className="text-2xl font-bold text-white">Data Strategy</div>
                        </div>

                        <div className="flex-grow flex items-center justify-center -ml-4 md:ml-0">
                            <SkillsRadar />
                        </div>

                        <div className="grid grid-cols-3 gap-4 border-t border-white/5 pt-4 mt-4">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-primary">2+</div>
                                <div className="text-xs text-muted-foreground">Années Exp.</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-accent">15+</div>
                                <div className="text-xs text-muted-foreground">Projets</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-white">100%</div>
                                <div className="text-xs text-muted-foreground">Engagement</div>
                            </div>
                        </div>
                    </GlassCard>

                    {/* Context & Tools */}
                    <div className="space-y-8 flex flex-col justify-center">
                        <div>
                            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                                <span className="w-8 h-1 bg-primary rounded-full" />
                                Stack Technique
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {profile.skills.tools.map((tool, index) => (
                                    <motion.div
                                        key={tool}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: index * 0.05 }}
                                        className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:bg-primary/20 hover:text-white hover:border-primary/50 transition-all cursor-default text-sm"
                                    >
                                        {tool}
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                                <span className="w-8 h-1 bg-accent rounded-full" />
                                Langues
                            </h3>
                            <div className="space-y-6">
                                {profile.skills.languages.map(lang => (
                                    <div key={lang.name}>
                                        <div className="flex justify-between mb-2 text-sm font-medium">
                                            <span className="text-gray-300">{lang.name}</span>
                                            <span className="text-primary">{lang.level}%</span>
                                        </div>
                                        <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${lang.level}%` }}
                                                transition={{ duration: 1, ease: "easeOut" }}
                                                className="h-full bg-gradient-to-r from-primary to-accent"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
