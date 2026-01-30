"use client";

import { motion } from "framer-motion";
import { Download, MapPin, Briefcase, GraduationCap, Zap, Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { TiltCard } from "@/components/ui/TiltCard";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
    const highlights = [
        { icon: <Briefcase size={16} />, label: "3+ Years Experience" },
        { icon: <MapPin size={16} />, label: "Remote Worldwide" },
        { icon: <GraduationCap size={16} />, label: "Backend Architect" },
    ];

    const certs = [
        { title: "Flask Dev", issuer: "Mind Luster", img: "/certificertifications/full-flask-mind-luster.png" },
        { title: "Blockchain", issuer: "Mind Luster", img: "/certificertifications/mindluster-blockchain.webp" },
        { title: "Mobile Dev", issuer: "Personal", img: "/certificertifications/mobile-dev.png" },
        { title: "Python DS", issuer: "SoloLearn", img: "/certificertifications/python-data-scientists-solo-learn.png" },
        { title: "Structures", issuer: "SoloLearn", img: "/certificertifications/python-data-stractures-solo-learn.png" },
    ];

    const favPages = [
        { title: "Projects", desc: "View my best technical work.", path: "/projects", icon: <Briefcase size={20} /> },
        { title: "Tech Stack", desc: "The tools I use daily.", path: "/tech", icon: <Zap size={20} /> },
        { title: "Experience", desc: "My professional journey.", path: "/about", icon: <GraduationCap size={20} /> },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="space-y-10"
        >
            {/* Header section with unique layout */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 border-b border-white/5 pb-10">
                <div className="space-y-3 text-center lg:text-left">
                    <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic leading-none">
                        About <span className="text-primary">Me</span>
                    </h1>
                    <p className="text-text-secondary text-[11px] font-medium uppercase tracking-[0.2em] max-w-md mx-auto lg:mx-0">
                        Engineering digital foundations with human empathy.
                    </p>
                </div>
                <div className="flex flex-wrap justify-center gap-3">
                    {highlights.map((h, i) => (
                        <div key={i} className="px-5 py-2.5 rounded-full bg-surface/50 border border-white/5 flex items-center gap-2.5 text-[10px] font-black uppercase tracking-widest text-text-secondary hover:border-primary/30 transition-colors">
                            <span className="text-primary">{h.icon}</span>
                            {h.label}
                        </div>
                    ))}
                </div>
            </div>

            {/* Unique Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

                {/* Profile Widget - Span 4 */}
                <motion.div
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="md:col-span-4 h-full"
                >
                    <TiltCard className="h-full flex flex-col items-center justify-center text-center p-6 bg-surface/30 rounded-4xl border border-white/5 shadow-2xl">
                        <div className="w-40 h-40 rounded-full border-2 border-primary/20 p-2 mb-4 group overflow-hidden">
                            <div className="w-full h-full rounded-full overflow-hidden bg-background">
                                <Image src="/avator.png" alt="Mohammed" width={160} height={160} className="object-contain group-hover:scale-111 transition-transform duration-500" />
                            </div>
                        </div>
                        <h2 className="text-lg font-black uppercase italic tracking-tight mb-1">Mohammed Hussen</h2>
                        <p className="text-text-tertiary text-[8px] uppercase font-black tracking-[0.2em] mb-4 italic">Backend Architect</p>
                        <Button className="w-full h-10 rounded-xl font-black uppercase tracking-widest text-[8px] gap-2 shadow-xl shadow-primary/10">
                            <Download size={12} /> Get Resume
                        </Button>
                    </TiltCard>
                </motion.div>

                {/* Narrative Widget - Span 8 */}
                <motion.div
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="md:col-span-8"
                >
                    <TiltCard className="h-full flex flex-col p-8 bg-surface/30 rounded-4xl border border-white/5 shadow-2xl">
                        <div className="flex-1 flex flex-col justify-center">
                            <h3 className="text-primary text-[8px] font-black uppercase tracking-[0.5em] mb-3">The Story So Far</h3>
                            <p className="text-base md:text-lg font-black uppercase italic tracking-tighter leading-tight text-balance">
                                I build tools that matter. Code isn&apos;t just logic—it&apos;s digital kindness. I specialize in deep backend systems that handle millions of requests while feeling completely invisible.
                            </p>
                            <div className="mt-5 grid grid-cols-2 gap-6">
                                <div className="space-y-1">
                                    <p className="text-primary font-black uppercase text-[7px] tracking-widest">Philosophy</p>
                                    <p className="text-text-secondary text-[8px] font-bold uppercase leading-relaxed">Empathy in code. Performance as a service. User-centric distributed systems.</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-primary font-black uppercase text-[7px] tracking-widest">Mission</p>
                                    <p className="text-text-secondary text-[8px] font-bold uppercase leading-relaxed">Building high-concurrency architectures that solve real human challenges.</p>
                                </div>
                            </div>
                        </div>
                    </TiltCard>
                </motion.div>

                {/* Certifications Widget - Span 12 - Compact Ribbon */}
                <motion.div
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="md:col-span-12"
                >
                    <div className="rounded-4xl bg-linear-to-r from-primary/10 to-transparent border border-white/5 p-6 flex flex-col md:flex-row items-center gap-8">
                        <div className="flex items-center gap-4 shrink-0">
                            <div className="p-4 rounded-2xl bg-primary text-white shadow-lg shadow-primary/20">
                                <Award size={24} />
                            </div>
                            <div>
                                <p className="font-black uppercase italic text-xl">Verified Credits</p>
                                <p className="text-[9px] font-black uppercase tracking-widest text-text-tertiary">5 Professional Certifications</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 w-full">
                            {certs.map((c, i) => (
                                <div key={i} className="group relative aspect-4/3 rounded-2xl overflow-hidden bg-background border border-white/5 shadow-lg flex items-center justify-center p-3">
                                    <Image src={c.img} alt={c.title} fill className="object-contain group-hover:scale-110 transition-transform duration-500 opacity-90 group-hover:opacity-100" />
                                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4 text-center">
                                        <p className="text-[8px] font-black uppercase text-white leading-tight">{c.title}<br /><span className="text-primary">{c.issuer}</span></p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Favourite Pages Section */}
                <motion.div
                    variants={itemVariants}
                    className="md:col-span-12 mt-12 space-y-8"
                >
                    <div className="flex flex-col items-center text-center space-y-4">
                        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter italic">Favourite <span className="text-primary">Pages</span></h2>
                        <p className="text-text-secondary text-[10px] font-black uppercase tracking-[0.3em]">Explore more of my work</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {favPages.map((page, i) => (
                            <Link key={i} href={page.path}>
                                <motion.div
                                    whileHover={{ y: -8 }}
                                    className="p-8 rounded-4xl bg-surface/30 border border-white/5 hover:border-primary/50 transition-all group flex flex-col items-center text-center space-y-4"
                                >
                                    <div className="p-4 rounded-2xl bg-background text-primary group-hover:scale-110 transition-transform">
                                        {page.icon}
                                    </div>
                                    <h3 className="font-black uppercase italic tracking-tighter text-xl">{page.title}</h3>
                                    <p className="text-text-tertiary text-[10px] uppercase font-bold tracking-widest">{page.desc}</p>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </motion.div>

                {/* Final Contact Call to Action */}
                <motion.div
                    variants={itemVariants}
                    className="md:col-span-12 mt-12 mb-10"
                >
                    <div className="relative rounded-4xl bg-primary p-1 md:p-12 overflow-hidden group">
                        <div className="absolute inset-0 bg-linear-to-r from-white/10 to-transparent opacity-50" />
                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 p-8 md:p-0">
                            <div className="text-center md:text-left space-y-4">
                                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic leading-none text-white">Let&apos;s Build <br /> Something Great</h2>
                                <p className="text-white/70 text-[10px] font-black uppercase tracking-[0.3em]">Available for projects and collaborations</p>
                            </div>
                            <Link href="/contact">
                                <Button className="h-20 px-12 rounded-3xl bg-white text-primary hover:bg-white/90 font-black uppercase tracking-widest text-[12px] group/btn">
                                    Contact Me Now <ArrowRight size={20} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}
