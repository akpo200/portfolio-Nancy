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
    liveLink?: string;
}

export const projects: Project[] = [
    {
        id: "battery-health-lstm",
        title: "IA Prédictive : Santé Batterie",
        category: "Deep Learning",
        description: "Déploiement d'un modèle LSTM (Long Short-Term Memory) pour prédire l'état de santé (SoH) des batteries Lithium-Ion.",
        role: "Data Strategist / ML Engineer",
        tools: ["Python", "TensorFlow", "Keras", "Streamlit", "Scikit-Learn"],
        metrics: [
            { label: "Précision MAE", value: "2.56%" },
            { label: "R2 Score", value: "0.75" },
            { label: "Prévision", value: "Temps réel" }
        ],
        context: "La maintenance industrielle des batteries nécessite des prévisions de dégradation précises pour éviter les pannes.",
        solution: "Développement d'une architecture de réseau de neurones récurrents traitant les séries temporelles de tension et courant.",
        impact_statement: "Permet une estimation fiable du vieillissement pour optimiser le remplacement des cellules.",
        chartType: "line",
        dataset_preview: [
            { name: "C1", Reel: 100, Predit: 100 },
            { name: "C50", Reel: 98, Predit: 97.8 },
            { name: "C100", Reel: 96, Predit: 96.2 },
            { name: "C150", Reel: 94, Predit: 93.7 },
            { name: "C200", Reel: 91, Predit: 90.5 },
        ],
        liveLink: "https://battery-health-cycy.streamlit.app/"
    },
    {
        id: "cycy-viz-multisector",
        title: "Cycy Viz : Pilotage Business",
        category: "Data Visualization",
        description: "Dashboard analytique interactif pour le suivi dynamique des KPIs critiques dans plusieurs secteurs d'activité.",
        role: "Data Strategist",
        tools: ["Python", "Flask", "Plotly", "Pandas", "Heroku"],
        metrics: [
            { label: "Secteurs", value: "4" },
            { label: "Data Points", value: "10k+" },
            { label: "Exploration", value: "3D/2D" }
        ],
        context: "Nécessité pour les décideurs d'avoir une vision consolidée de données complexes (Santé, Immo, Retail).",
        solution: "Création d'une plateforme immersive transformant des données brutes en narrations visuelles claires.",
        impact_statement: "Simplification radicale de la prise de décision stratégique via une visualisation fluide.",
        chartType: "area",
        dataset_preview: [
            { name: "Jan", Performance: 65, Objectif: 60 },
            { name: "Féb", Performance: 78, Objectif: 70 },
            { name: "Mar", Performance: 82, Objectif: 85 },
            { name: "Avr", Performance: 95, Objectif: 90 },
        ],
        liveLink: "https://cycy-viz.render.com"
    },
    {
        id: "malira-strategy",
        title: "Malira : Autorité Digitale",
        category: "Web Strategy",
        description: "Déploiement de l'infrastructure web et de la stratégie d'autorité pour Malira, agence de Personal Branding.",
        role: "Product Owner",
        tools: ["Next.js", "Tailwind", "Framer Motion", "Personal Branding"],
        metrics: [
            { label: "Chargement", value: "<1s" },
            { label: "Visibilité", value: "+40%" },
            { label: "Authority score", value: "High" }
        ],
        context: "Positionner Malira comme la référence pour l'autorité digitale des experts.",
        solution: "Conception d'une plateforme premium alliant design minimaliste et performances techniques élevées.",
        impact_statement: "Établissement d'une identité visuelle forte et d'un flux d'acquisition optimisé.",
        chartType: "bar",
        dataset_preview: [
            { name: "Audience", Croissance: 15, Engagement: 25 },
            { name: "Leads", Croissance: 35, Engagement: 45 },
            { name: "Brand", Croissance: 60, Engagement: 80 },
        ],
        liveLink: "https://malira-nancy-akpo.vercel.app/"
    }
];
