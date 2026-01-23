"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo } from "react";
import { GlassCard } from "../ui/GlassCard";
import { GradientText } from "../ui/GradientText";
import { playgroundScenarios, calculateOutcome } from "@/lib/data/playground";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Button } from "../ui/Button";
import { RefreshCw, Calculator, DollarSign, TrendingUp } from "lucide-react";

export function Playground() {
    const scenario = playgroundScenarios[0]; // Freelance TJM Simulator
    const [params, setParams] = useState<Record<string, number>>(
        scenario.parameters.reduce((acc, p) => ({ ...acc, [p.id]: p.default }), {})
    );

    const outcome = useMemo(() => calculateOutcome(scenario.id, params), [scenario.id, params]);

    const chartData = [
        { name: 'TJM Actuel', value: 300 }, // Base baseline
        { name: 'TJM Optimisé', value: outcome.tjm },
    ];

    const handleParamChange = (id: string, value: number) => {
        setParams(prev => ({ ...prev, [id]: value }));
    };

    const reset = () => {
        setParams(scenario.parameters.reduce((acc, p) => ({ ...acc, [p.id]: p.default }), {}));
    };

    return (
        <section className="py-20 bg-background relative" id="playground">
            <div className="container mx-auto px-4 z-10 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <div className="inline-block px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-bold mb-4 border border-accent/20 uppercase tracking-wider">
                        Outil Signature - Cycy ink
                    </div>
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 text-white">
                        Simulateur de <GradientText>Valeur Data</GradientText>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        La plupart des freelances data sous-estiment leur impact.
                        <br />Utilisez ce simulateur pour estimer votre Taux Journalier Moyen (TJM) idéal en fonction de votre profil.
                    </p>
                </motion.div>

                <GlassCard className="max-w-5xl mx-auto bg-black/40 backdrop-blur-xl border-white/10 overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0">

                        {/* Left: Controls */}
                        <div className="p-8 md:p-10 space-y-8 border-b md:border-b-0 md:border-r border-white/10">
                            <div className="flex justify-between items-center">
                                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                    <Calculator className="w-5 h-5 text-primary" />
                                    Paramètres du Profil
                                </h3>
                                <Button size="sm" variant="ghost" onClick={reset} className="h-8 w-8 p-0 rounded-full hover:bg-white/10">
                                    <RefreshCw className="h-4 w-4" />
                                </Button>
                            </div>

                            <div className="space-y-8">
                                {scenario.parameters.map((param) => (
                                    <div key={param.id} className="space-y-4">
                                        <div className="flex justify-between text-sm">
                                            <label className="text-gray-300 font-medium">{param.label}</label>
                                            <span className="text-primary font-mono font-bold bg-primary/10 px-2 py-0.5 rounded">
                                                {params[param.id]} {param.unit}
                                            </span>
                                        </div>
                                        <input
                                            type="range"
                                            min={param.min}
                                            max={param.max}
                                            step={param.step || 1}
                                            value={params[param.id]}
                                            onChange={(e) => handleParamChange(param.id, parseInt(e.target.value))}
                                            className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary hover:accent-primary/80 transition-all"
                                        />
                                        <div className="flex justify-between text-[10px] text-gray-600 uppercase font-medium">
                                            <span>Débutant</span>
                                            <span>Expert</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right: Results & Viz */}
                        <div className="p-8 md:p-10 bg-white/[0.02] flex flex-col justify-between">

                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20">
                                    <div className="text-xs text-primary mb-1 uppercase tracking-wider font-semibold">TJM Recommandé</div>
                                    <div className="text-3xl font-bold text-white flex items-baseline gap-1">
                                        {outcome.tjm} <span className="text-sm font-normal text-gray-400">€/j</span>
                                    </div>
                                </div>
                                <div className="p-4 rounded-2xl bg-accent/10 border border-accent/20">
                                    <div className="text-xs text-accent mb-1 uppercase tracking-wider font-semibold">Revenu Annuel Est.</div>
                                    <div className="text-3xl font-bold text-white flex items-baseline gap-1">
                                        {(outcome.revenue / 1000).toFixed(1)}k <span className="text-sm font-normal text-gray-400">€</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex-grow min-h-[200px] relative">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                                        <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                                        <Tooltip
                                            cursor={{ fill: 'transparent' }}
                                            contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px', color: '#fff' }}
                                            itemStyle={{ color: '#fff' }}
                                            formatter={(value: number | undefined) => [`${value || 0}€`, 'Tarif'] as [string, string]}
                                        />
                                        <Bar dataKey="value" radius={[6, 6, 0, 0]} barSize={60}>
                                            {chartData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={index === 0 ? '#334155' : '#7C3AED'} />
                                            ))}
                                        </Bar>
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>

                            <div className="mt-4 pt-4 border-t border-white/5 text-center">
                                <p className="text-xs text-muted-foreground flex items-center justify-center gap-2">
                                    <TrendingUp className="w-3 h-3" />
                                    Basé sur une estimation moyenne de 140 jours facturés/an
                                </p>
                            </div>

                        </div>
                    </div>
                </GlassCard>
            </div>
        </section>
    );
}
