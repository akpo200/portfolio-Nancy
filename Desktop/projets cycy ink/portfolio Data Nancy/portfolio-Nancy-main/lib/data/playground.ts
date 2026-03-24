export interface Scenario {
    id: string;
    name: string;
    description: string;
    parameters: Parameter[];
}

interface Parameter {
    id: string;
    label: string;
    min: number;
    max: number;
    default: number;
    step?: number;
    unit: string;
}

export const playgroundScenarios: Scenario[] = [
    {
        id: "freelance-tjm",
        name: "Simulateur de TJM Data",
        description: "Estimez votre Taux Journalier Moyen idéal en fonction de votre expertise et de l'impact business.",
        parameters: [
            { id: "experience", label: "Années d'expérience", min: 0, max: 15, default: 2, step: 1, unit: "ans" },
            { id: "complexity", label: "Complexité technique (1-10)", min: 1, max: 10, default: 5, step: 1, unit: "/10" },
            { id: "impact", label: "Impact stratégique (1-10)", min: 1, max: 10, default: 6, step: 1, unit: "/10" },
        ]
    }
];

export function calculateOutcome(scenarioId: string, values: Record<string, number>) {
    if (scenarioId === "freelance-tjm") {
        const exp = values.experience || 0;
        const comp = values.complexity || 5;
        const impact = values.impact || 5;

        // Base TJM
        let baseTJM = 300;

        // Multipliers
        const expBonus = exp * 50; // +50€ per year
        const compBonus = (comp - 1) * 30; // Tech complexity bonus
        const impactBonus = (impact - 1) * 40; // Strategic impact bonus

        let recommendedTJM = baseTJM + expBonus + compBonus + impactBonus;

        // Market cap adjustment (soft cap)
        if (recommendedTJM > 1200) recommendedTJM = 1200 + (recommendedTJM - 1200) * 0.5;

        // Revenue calculation (assuming ~220 billable days/year but freelances work less, say 150 days optimistically fully billed)
        const annualRevenue = recommendedTJM * 140;

        return {
            tjm: Math.round(recommendedTJM),
            revenue: Math.round(annualRevenue),
            score: Math.round((comp + impact + (exp / 2)) / 2.5 * 10) // Arbitrary "Value Score"
        };
    }
    return { tjm: 0, revenue: 0, score: 0 };
}
