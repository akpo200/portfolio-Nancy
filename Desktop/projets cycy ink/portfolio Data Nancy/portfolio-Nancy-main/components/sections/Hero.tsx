"use client";

import { motion } from "framer-motion";
import { DataStream } from "../visualizations/DataStream";
import { GradientText } from "../ui/GradientText";
import { Button } from "../ui/Button";
import { BarChart2 } from "lucide-react";

export function Hero() {
    const scrollToAbout = () => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-background">
            <DataStream />

            <div className="container relative z-10 mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl mx-auto space-y-8"
                >
                    <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight text-white leading-tight">
                        Nancy AKPO
                        <br />
                        <GradientText>Data Strategist</GradientText>
                    </h1>

                    <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-light">
                        Je transforme des <span className="text-white font-medium">données complexes</span> en <span className="text-white font-medium">décisions stratégiques</span> claires.
                    </p>

                    <div className="flex justify-center items-center pt-8">
                        <Button variant="outline" size="lg" onClick={scrollToAbout} className="border-primary/50 hover:bg-primary/10 hover:border-primary text-white">
                            <BarChart2 className="mr-2 h-4 w-4" />
                            Explorer mes compétences
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
