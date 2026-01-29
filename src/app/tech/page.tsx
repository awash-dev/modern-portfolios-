"use client";

import { motion } from 'framer-motion';
import { Terminal, Database, Server, Cpu, Layers, Shield, Zap, Box } from 'lucide-react';
import { TiltCard } from '@/components/ui/TiltCard';

const categories = [
    {
        title: "Languages",
        icon: <Terminal className="text-blue-500" />,
        skills: ["Go", "Rust", "Python", "TypeScript", "JavaScript", "SQL"]
    },
    {
        title: "Frameworks & Runtimes",
        icon: <Zap className="text-yellow-500" />,
        skills: ["FastAPI", "NestJS", "Bun", "Gin", "Actix Web", "Node.js", "React", "Next.js", "Tailwind CSS", "expo"]
    },
    {
        title: "Databases",
        icon: <Database className="text-emerald-500" />,
        skills: ["PostgreSQL", "Redis", "MongoDB", "ClickHouse", "ScyllaDB", "Firebase", "Supabase", "MySQL"]
    },
    {
        title: "Infrastructure",
        icon: <Server className="text-purple-500" />,
        skills: ["Kubernetes", "Docker", "AWS", "Terraform", "Nginx", "Cloudflare", "Vercel", "DigitalOcean", "Linode"]
    },
    {
        title: "Architecture",
        icon: <Layers className="text-orange-500" />,
        skills: ["Microservices", "gRPC", "Pub/Sub", "System Design", "EDA"]
    },
    {
        title: "DevOps & Tools",
        icon: <Box className="text-pink-500" />,
        skills: ["CI/CD", "Prometheus", "Grafana", "Linux", "Git"]
    }
];

export default function TechPage() {
    return (
        <div className="space-y-12">
            <div className="space-y-4">
                <h1 className="text-4xl font-black uppercase tracking-tighter italic leading-none">Technical <span className="text-primary">Arsenal</span></h1>
                <p className="text-text-secondary text-sm max-w-2xl font-medium uppercase tracking-widest">The deep stack behind high-concurrency systems.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.map((cat, idx) => (
                    <TiltCard
                        key={cat.title}
                        className="h-full bg-surface/30 border border-white/5 rounded-4xl shadow-2xl"
                        spotlightColor="rgba(var(--primary-rgb), 0.15)"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            whileHover={{ y: -10 }}
                            transition={{ type: "spring", stiffness: 400, damping: 25 }}
                            className="p-6 flex flex-col h-full relative z-10"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-2xl bg-background/40 flex items-center justify-center shadow-xl group-hover:scale-110 transition-all duration-300">
                                    <div className="text-emerald-500/80 drop-shadow-[0_0_10px_rgba(16,185,129,0.3)]">
                                        {cat.icon}
                                    </div>
                                </div>
                                <h2 className="text-xl font-black uppercase tracking-tighter italic text-primary/90">
                                    {cat.title}
                                </h2>
                            </div>
                            <div className="flex flex-wrap gap-2 mt-auto">
                                {cat.skills.map(skill => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1.5 rounded-xl bg-primary text-white text-[9px] font-black uppercase tracking-wider shadow-md shadow-primary/10 hover:scale-105 transition-transform cursor-default select-none"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </TiltCard>
                ))}
            </div>
        </div>
    );
}
