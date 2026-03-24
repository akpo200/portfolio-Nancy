"use client";

import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/lib/data/projects";
import { GlassCard } from "../ui/GlassCard";
import { GradientText } from "../ui/GradientText";
import { Badge } from "../ui/Badge";
import { ArrowUpRight, BarChart3, X } from "lucide-react";
import { useState } from "react";
import { ResponsiveContainer, BarChart, Bar, AreaChart, Area, LineChart, Line, XAxis, Tooltip } from 'recharts';

export function Projects() {
    const [selectedId, setSelectedId] = useState<string | null>(null);

    const renderChart = (project: typeof projects[0]) => {
        if (!project.dataset_preview) return null;

        const CommonAxis = <XAxis dataKey="name" hide />;
        const CommonTooltip = <Tooltip cursor={{ fill: 'transparent' }} contentStyle={{ backgroundColor: '#0f172a', border: 'none', borderRadius: '8px' }} />;

        if (project.chartType === 'area') {
            return (
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={project.dataset_preview}>
                        <defs>
                            <linearGradient id={`color${project.id}`} x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#7C3AED" stopOpacity={0.3} />
                                <stop offset="95%" stopColor="#7C3AED" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        {CommonTooltip}
                        <Area type="monotone" dataKey={Object.keys(project.dataset_preview[0])[1]} stroke="#7C3AED" fillOpacity={1} fill={`url(#color${project.id})`} />
                    </AreaChart>
                </ResponsiveContainer>
            );
        }
        if (project.chartType === 'line') {
            return (
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={project.dataset_preview}>
                        {CommonTooltip}
                        <Line type="monotone" dataKey={Object.keys(project.dataset_preview[0])[1]} stroke="#3B82F6" strokeWidth={3} dot={{ r: 4, fill: '#1e293b', strokeWidth: 2 }} />
                    </LineChart>
                </ResponsiveContainer>
            );
        }
        return (
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={project.dataset_preview}>
                    {CommonTooltip}
                    <Bar dataKey={Object.keys(project.dataset_preview[0])[2] || Object.keys(project.dataset_preview[0])[1]} fill="#ffffff" radius={[4, 4, 0, 0]} opacity={0.2} />
                    <Bar dataKey={Object.keys(project.dataset_preview[0])[1]} fill="#7C3AED" radius={[4, 4, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        );
    };

    return (
        <section className="py-20 bg-black/50" id="projects">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 text-white">
                        Cas <GradientText>Pratiques</GradientText>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Dashboards et analyses d'impact. Cliquez pour explorer.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <motion.div
                            layoutId={project.id}
                            key={project.id}
                            onClick={() => setSelectedId(project.id)}
                            className="cursor-pointer"
                        >
                            <GlassCard
                                className="group h-full flex flex-col justify-between hover:border-primary/30 transition-colors"
                                hoverEffect
                            >
                                <div>
                                    <div className="flex justify-between items-start mb-4">
                                        <Badge>{project.category}</Badge>
                                        <BarChart3 className="text-muted-foreground group-hover:text-primary transition-colors w-5 h-5" />
                                    </div>

                                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-muted-foreground mb-6 line-clamp-2">
                                        {project.description}
                                    </p>

                                    {/* Mini Viz Preview */}
                                    <div className="h-24 w-full bg-white/5 rounded-lg mb-6 overflow-hidden relative opacity-50 group-hover:opacity-100 transition-opacity">
                                        <div className="absolute inset-0 p-2">
                                            {renderChart(project)}
                                        </div>
                                    </div>

                                    <div className="space-y-3 mb-6">
                                        {project.metrics.slice(0, 2).map((metric, idx) => (
                                            <div key={idx} className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
                                                <span className="text-gray-400">{metric.label}</span>
                                                <span className="font-bold text-white">{metric.value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex items-center text-primary text-sm font-medium mt-4">
                                    Voir le détail <ArrowUpRight className="ml-1 w-4 h-4" />
                                </div>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>

                <AnimatePresence>
                    {selectedId && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedId(null)}>
                            <motion.div
                                layoutId={selectedId}
                                className="w-full max-w-4xl bg-[#0f1115] border border-white/10 rounded-3xl overflow-hidden shadow-2xl relative"
                                onClick={(e) => e.stopPropagation()}
                            >
                                {(() => {
                                    const project = projects.find(p => p.id === selectedId)!;
                                    return (
                                        <div className="grid grid-cols-1 md:grid-cols-2">
                                            <div className="p-8 md:p-10 space-y-6">
                                                <Badge className="mb-2">{project.category}</Badge>
                                                <h3 className="text-3xl md:text-4xl font-bold text-white">{project.title}</h3>
                                                <p className="text-gray-400 text-lg">{project.description}</p>

                                                <div className="space-y-4 pt-4">
                                                    <h4 className="font-bold text-white text-sm uppercase tracking-wider">Impact Mesurable</h4>
                                                    <div className="grid grid-cols-1 gap-3">
                                                        {project.metrics.map((metric, idx) => (
                                                            <div key={idx} className="bg-white/5 p-3 rounded-lg flex justify-between items-center">
                                                                <span className="text-gray-400">{metric.label}</span>
                                                                <span className="font-bold text-white text-lg">{metric.value}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                <div className="pt-4">
                                                    <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-2">Stack</h4>
                                                    <div className="flex flex-wrap gap-2">
                                                        {project.tools.map(tool => (
                                                            <span key={tool} className="text-xs bg-white/5 text-gray-400 px-2 py-1 rounded">{tool}</span>
                                                        ))}
                                                    </div>
                                                </div>

                                                {project.liveLink && (
                                                    <div className="pt-6">
                                                        <a
                                                            href={project.liveLink}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-bold hover:opacity-90 transition-all group/link"
                                                        >
                                                            Visiter le projet <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                                                        </a>
                                                    </div>
                                                )}
                                            </div>

                                            <div className="bg-white/5 p-8 md:p-10 flex flex-col justify-center relative">
                                                <button
                                                    onClick={() => setSelectedId(null)}
                                                    className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-white/10 rounded-full text-white transition-colors"
                                                >
                                                    <X className="w-5 h-5" />
                                                </button>

                                                <div className="h-[300px] w-full bg-[#0a0a0a] rounded-xl p-4 border border-white/5 shadow-inner">
                                                    {renderChart(project)}
                                                </div>
                                                <p className="text-center text-xs text-muted-foreground mt-4">
                                                    Visualisation interactive des données du projet
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })()}
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
