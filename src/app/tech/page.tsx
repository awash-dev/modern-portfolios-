"use client";

import { motion } from 'framer-motion';
import { Terminal, Database, Server, Cpu, Layers, Shield } from 'lucide-react';

const categories = [
    {
        title: "Languages",
        icon: <Terminal className="text-blue-500" />,
        skills: ["Go", "Rust", "Python", "TypeScript", "SQL"]
    },
    {
        title: "Databases",
        icon: <Database className="text-emerald-500" />,
        skills: ["PostgreSQL", "Redis", "MongoDB", "ClickHouse", "Elasticsearch"]
    },
    {
        title: "Infrastructure",
        icon: <Server className="text-purple-500" />,
        skills: ["Kubernetes", "Docker", "AWS", "Terraform", "Nginx"]
    },
    {
        title: "Architecture",
        icon: <Layers className="text-orange-500" />,
        skills: ["Microservices", "gRPC", "Message Queues", "System Design", "Event Driven"]
    }
];

export default function TechPage() {
    return (
        <div className="space-y-12">
            <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic">Technical <span className="text-primary">Arsenal</span></h1>
                <p className="text-text-secondary text-lg max-w-2xl font-medium">The deep stack behind high-concurrency systems and distributed architectures.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {categories.map((cat, idx) => (
                    <motion.div
                        key={cat.title}
                        initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="p-8 rounded-[2.5rem] bg-surface/50 border border-border group hover:border-primary/20 transition-all"
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-14 h-14 rounded-2xl bg-background flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                                {cat.icon}
                            </div>
                            <h2 className="text-2xl font-black uppercase tracking-tight italic">{cat.title}</h2>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            {cat.skills.map(skill => (
                                <span key={skill} className="px-5 py-3 rounded-2xl bg-background border border-border text-sm font-bold uppercase tracking-wider text-text-primary group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all cursor-default">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
