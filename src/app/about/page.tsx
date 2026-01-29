"use client";

import { motion } from "framer-motion";
import { Download, MapPin, Briefcase, GraduationCap, Heart, Zap } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function AboutPage() {
    const highlights = [
        { icon: <Briefcase size={18} />, label: "3+ Years Experience" },
        { icon: <MapPin size={18} />, label: "Remote Worldwide" },
        { icon: <GraduationCap size={18} />, label: "Continuous Learner" },
        { icon: <Heart size={18} />, label: "Open Source Contributor" },
    ];

    return (
        <div className="space-y-12">
            <div className="space-y-4 text-center md:text-left">
                <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic">About <span className="text-primary">Me</span></h1>
                <p className="text-text-secondary text-lg max-w-2xl font-medium mx-auto md:mx-0">
                    The journey from curious coder to backend systems architect.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Profile Card */}
                <div className="lg:col-span-1">
                    <div className="sticky top-32 rounded-[2.5rem] bg-surface border border-border p-8 text-center shadow-xl">
                        <div className="w-40 h-40 rounded-3xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-5xl font-black text-white mx-auto mb-6 shadow-2xl rotate-3">
                            MH
                        </div>

                        <h2 className="text-2xl font-black mb-1 uppercase tracking-tight italic">Mohammed Hussen</h2>
                        <p className="text-text-secondary mb-8 font-medium uppercase text-[10px] tracking-[0.2em]">Backend Architect</p>

                        <div className="space-y-3 mb-8">
                            {highlights.map((item, idx) => (
                                <div key={idx} className="flex items-center gap-4 text-sm text-text-secondary bg-background/50 rounded-2xl px-5 py-4 border border-border/50">
                                    <span className="text-primary">{item.icon}</span>
                                    <span className="font-bold uppercase tracking-wider text-[10px]">{item.label}</span>
                                </div>
                            ))}
                        </div>

                        <Button size="lg" className="w-full h-14 rounded-2xl gap-2 font-bold uppercase tracking-widest text-[10px]">
                            <Download size={18} /> Resume
                        </Button>
                    </div>
                </div>

                {/* Story */}
                <div className="lg:col-span-2 space-y-8">
                    <div className="rounded-[2.5rem] bg-surface border border-border p-10 shadow-xl">
                        <h3 className="text-3xl font-black mb-8 uppercase italic">My <span className="text-primary">Story</span></h3>
                        <div className="space-y-6 text-text-secondary leading-relaxed text-lg font-medium">
                            <p>
                                My passion for technology began early, tinkering with computers and writing my first lines of code as a teenager. What started as curiosity quickly evolved into a deep fascination with how systems work under the hood.
                            </p>
                            <p>
                                Today, I specialize in building high-performance backend systems using Go, Rust, and Python. I&apos;m particularly drawn to the challenges of distributed computing, database optimization, and creating APIs that can handle millions of requests.
                            </p>
                            <p>
                                Beyond backend development, I enjoy crafting premium frontend experiences with React and modern CSS. I believe that great software isn&apos;t just functional—it should be a joy to use.
                            </p>
                        </div>
                    </div>

                    <div className="rounded-[2.5rem] bg-surface border border-border p-10 shadow-xl">
                        <h3 className="text-3xl font-black mb-8 uppercase italic">Core <span className="text-primary">Values</span></h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                { title: "Clean Code", desc: "Writing maintainable, readable code that others can understand." },
                                { title: "Performance First", desc: "Optimizing for speed without sacrificing reliability." },
                                { title: "Continuous Learning", desc: "Always exploring new tools and technologies." },
                                { title: "User-Centric", desc: "Building software that solves real problems." },
                            ].map((item, idx) => (
                                <div key={idx} className="p-6 rounded-3xl bg-background/50 border border-border/50 hover:border-primary/30 transition-all group">
                                    <h4 className="font-black mb-3 uppercase tracking-tight text-primary text-sm group-hover:translate-x-1 transition-transform">{item.title}</h4>
                                    <p className="text-[13px] text-text-secondary font-medium leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
