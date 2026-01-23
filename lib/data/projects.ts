export interface Project {
    id: string;
    title: string;
    category: string;
    description: string;
    role: string;
    tools: string[];
    metrics: { label: string; value: string; trend?: number }[];
    context: string;
    solution: string;
    impact_statement: string;
    chartType?: "bar" | "line" | "area";
    dataset_preview?: Array<Record<string, string | number>>;
}

export const projects: Project[] = [
    {
        id: "freelance-rate-opt",
        title: "Freelance Value Optimizer",
        category: "Business Intelligence",
        description: "Modèle d'analyse pour optimiser la tarification des experts data freelances.",
        role: "Data Strategist",
        tools: ["Python", "Streamlit", "Market Analysis"],
        metrics: [
            { label: "Augmentation revenus", value: "+25%", trend: 25 },
            { label: "Taux de conversion", value: "45%", trend: 15 },
            { label: "Satisfaction", value: "4.8/5", trend: 5 }
        ],
        context: "Les freelances data sous-estiment souvent leur TJM par manque de benchmarks fiables.",
        solution: "Création d'un modèle comparatif basé sur l'expérience, la stack technique et le secteur.",
        impact_statement: "Permet aux experts de justifier leurs tarifs avec des données concrètes.",
        chartType: "bar",
        dataset_preview: [
            { name: "Junior", Tarif_Actuel: 350, Tarif_Optimise: 450 },
            { name: "Confirmé", Tarif_Actuel: 500, Tarif_Optimise: 650 },
            { name: "Senior", Tarif_Actuel: 700, Tarif_Optimise: 950 },
        ]
    },
    {
        id: "econ-trends-dash",
        title: "Global Economic Indicators",
        category: "Data Visualization",
        description: "Dashboard interactif visualisant les corrélations économiques majeures (PIB, Inflation) post-2020.",
        role: "Data Designer",
        tools: ["D3.js", "React", "World Bank API"],
        metrics: [
            { label: "Data points", value: "50k+" },
            { label: "Pays", value: "190" },
            { label: "Indicateurs", value: "12" }
        ],
        context: "La complexité des données macro-économiques rend leur compréhension difficile.",
        solution: "Dashboard immersif transformant les séries temporelles en narrations visuelles.",
        impact_statement: "Simplification de l'analyse de tendances pour décideurs non-techniques.",
        chartType: "area",
        dataset_preview: [
            { name: "2020", PIB: 2.5, Inflation: 1.2 },
            { name: "2021", PIB: 5.8, Inflation: 3.4 },
            { name: "2022", PIB: 3.2, Inflation: 6.8 },
            { name: "2023", PIB: 2.1, Inflation: 4.2 },
        ]
    },
    {
        id: "offer-clarity",
        title: "Clarté des Offres Data",
        category: "Marketing Analytics",
        description: "Analyse de la performance des offres de formation et coaching data.",
        role: "Product Owner",
        tools: ["Notion", "Excel", "Analytics"],
        metrics: [
            { label: "Lisibilité", value: "+80%" },
            { label: "Ventes", value: "+30%" },
            { label: "Clics", value: "2.5x" }
        ],
        context: "Des offres techniques souvent incompréhensibles pour les clients finaux.",
        solution: "Restructuration basée sur l'analyse des points de friction et mots-clés.",
        impact_statement: "Transformation de jargon technique en bénéfices clients tangibles.",
        chartType: "line",
        dataset_preview: [
            { name: "Sem 1", Ventes: 12, Visites: 150 },
            { name: "Sem 2", Ventes: 18, Visites: 280 },
            { name: "Sem 3", Ventes: 25, Visites: 450 },
            { name: "Sem 4", Ventes: 42, Visites: 600 },
        ]
    }
];
