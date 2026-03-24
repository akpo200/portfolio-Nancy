"use client";

import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Tooltip } from 'recharts';
import { profile } from '@/lib/data/profile';

const data = profile.skills.technical.map(skill => ({
    subject: skill.name,
    A: skill.level,
    fullMark: 100,
}));

export function SkillsRadar() {
    return (
        <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                    <PolarGrid stroke="#334155" />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                    <Radar
                        name="Compétence"
                        dataKey="A"
                        stroke="#7C3AED"
                        strokeWidth={3}
                        fill="#7C3AED"
                        fillOpacity={0.3}
                    />
                    <Tooltip
                        contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b', color: '#f8fafc' }}
                        itemStyle={{ color: '#7C3AED' }}
                    />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
}
