"use client";

import { motion } from 'framer-motion';
import { ExternalLink, Github, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { useEffect, useState } from 'react';

interface Repo {
    id: number;
    name: string;
    description: string;
    topics: string[];
    html_url: string;
    homepage: string;
    stargazers_count: number;
    language: string;
}

export default function ProjectsPage() {
    const [repos, setRepos] = useState<Repo[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const res = await fetch('https://api.github.com/users/awash-dev/repos?sort=updated&per_page=12');
                if (!res.ok) throw new Error('Failed to fetch');
                const data = await res.json();
                setRepos(data);
            } catch (err) {
                console.error(err);
                setError(true);
            } finally {
                setLoading(false);
            }
        };
        fetchRepos();
    }, []);

    return (
        <div className="space-y-10">
            <div className="space-y-3 px-4 md:px-0">
                <h1 className="text-4xl font-black uppercase tracking-tighter italic leading-none">Engineering <span className="text-primary">Shipments</span></h1>
                <p className="text-text-secondary text-sm max-w-2xl font-medium uppercase tracking-widest text-balance">
                    Live source code from my GitHub ecosystem.
                </p>
            </div>

            {loading ? (
                <div className="flex flex-col items-center justify-center py-32 gap-6">
                    <Loader2 className="animate-spin text-primary w-12 h-12" />
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-text-tertiary animate-pulse">Synchronizing Repositories...</p>
                </div>
            ) : error ? (
                <div className="text-center py-20 bg-surface/30 rounded-4xl border border-dashed border-border mx-4 md:mx-0">
                    <p className="font-black uppercase tracking-widest text-xs text-text-secondary">GitHub API Handshake Failed.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-0">
                    {repos.map((project, idx) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            whileHover={{
                                y: -10,
                                scale: 1.02,
                                transition: { type: "spring", stiffness: 400, damping: 25 }
                            }}
                            transition={{ delay: idx * 0.05 }}
                            className="h-full"
                        >
                            <Card className="h-full flex flex-col group hover:border-primary/40 transition-all rounded-4xl bg-surface/30 backdrop-blur-md border border-white/5 shadow-2xl relative overflow-hidden">
                                <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/5 blur-3xl rounded-full group-hover:bg-primary/20 transition-all duration-700" />
                                <CardHeader className="p-8 pb-0">
                                    <div className="flex justify-between items-start mb-4">
                                        <CardTitle className="text-xl group-hover:text-primary transition-colors tracking-tight uppercase italic font-black wrap-break-word leading-none">
                                            {project.name.replace(/-/g, ' ')}
                                        </CardTitle>
                                        {project.stargazers_count > 0 && (
                                            <div className="px-2 py-1 rounded-lg bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-[10px] font-black flex items-center gap-1">
                                                ★ {project.stargazers_count}
                                            </div>
                                        )}
                                    </div>
                                    <CardDescription className="line-clamp-2 text-[12px] font-medium text-text-secondary leading-relaxed uppercase tracking-tight">
                                        {project.description || "Experimental architecture and systems exploration."}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="p-8 pt-6 flex-1 flex flex-col justify-between">
                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {project.topics && project.topics.length > 0 ? (
                                            project.topics.slice(0, 4).map(t => (
                                                <span key={t} className="text-[9px] font-black uppercase tracking-widest px-3 py-1.5 bg-background/50 border border-border rounded-xl text-text-secondary group-hover:bg-primary/20 group-hover:text-primary group-hover:border-primary/30 transition-all">
                                                    {t}
                                                </span>
                                            ))
                                        ) : (
                                            <span className="text-[9px] font-black tracking-widest px-3 py-1.5 bg-background/50 border border-border rounded-xl text-text-tertiary uppercase">
                                                {project.language || "System"}
                                            </span>
                                        )}
                                    </div>
                                    <div className="flex items-center gap-3">
                                        {project.homepage && (
                                            <a href={project.homepage} target="_blank" rel="noopener noreferrer" className="flex-1">
                                                <Button className="w-full rounded-2xl gap-2 font-black uppercase tracking-[0.2em] text-[9px] h-12 shadow-2xl shadow-primary/20 border-0 bg-primary hover:scale-[1.02] transition-transform">
                                                    <ExternalLink size={14} /> Live
                                                </Button>
                                            </a>
                                        )}
                                        <a href={project.html_url} target="_blank" rel="noopener noreferrer" className={project.homepage ? "" : "flex-1"}>
                                            <Button variant="outline" className={`rounded-2xl gap-2 font-black uppercase tracking-[0.2em] text-[9px] h-12 border-2 hover:bg-white/5 transition-colors ${project.homepage ? "px-6" : "w-full"}`}>
                                                <Github size={16} /> {project.homepage ? "" : "Source"}
                                            </Button>
                                        </a>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            )}
        </div>
    );
}
