"use client";

import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';

const projects = [
    {
        title: "Distributed Ledger System",
        description: "A high-concurrency financial ledger built with Go and PostgreSQL, handling 10k+ transactions per second.",
        tech: ["Go", "PostgreSQL", "Redis", "Docker"],
        github: "#",
        demo: "#"
    },
    {
        title: "Real-time Messaging Engine",
        description: "Scalable WebSocket-based messaging server with Rust and NATS for low-latency communication.",
        tech: ["Rust", "NATS", "WebSockets", "Kubernetes"],
        github: "#",
        demo: "#"
    },
    {
        title: "Cloud-Native API Gateway",
        description: "Custom authentication and rate-limiting gateway optimized for microservices architectures.",
        tech: ["Python", "FastAPI", "Redis", "Envoy"],
        github: "#",
        demo: "#"
    }
];

export default function ProjectsPage() {
    return (
        <div className="space-y-12">
            <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic">Selected <span className="text-primary">Projects</span></h1>
                <p className="text-text-secondary text-lg max-w-2xl font-medium">A showcase of high-performance systems and backend architectures.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, idx) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                    >
                        <Card className="h-full flex flex-col group hover:border-primary/30 transition-all">
                            <CardHeader>
                                <CardTitle className=" group-hover:text-primary transition-colors">{project.title}</CardTitle>
                                <CardDescription className="line-clamp-3 mt-4">{project.description}</CardDescription>
                            </CardHeader>
                            <CardContent className="flex-1 flex flex-col justify-between">
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map(t => (
                                        <span key={t} className="text-[10px] font-black uppercase tracking-wider px-2 py-1 bg-surface border border-border rounded-md text-text-secondary">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex items-center gap-4">
                                    <Button variant="primary" size="sm" className="rounded-xl gap-2 font-bold uppercase tracking-widest text-[9px] h-10 flex-1">
                                        <ExternalLink size={14} /> Live Demo
                                    </Button>
                                    <Button variant="outline" size="sm" className="rounded-xl gap-2 font-bold uppercase tracking-widest text-[9px] h-10 border-2">
                                        <Github size={14} /> Code
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
