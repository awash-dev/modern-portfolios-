"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Github, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { TiltCard } from "@/components/ui/TiltCard";

const socialLinks = [
    { icon: <Mail size={24} />, label: "Email", value: "mtcoder42@gmail.com", href: "mailto:mtcoder42@gmail.com" },
    { icon: <Github size={24} />, label: "Github", value: "github.com/awash-dev", href: "https://github.com/awash-dev" },
];

export default function ContactPage() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", subject: "", message: "" });
                setTimeout(() => setStatus("idle"), 5000);
            } else {
                setStatus("error");
                setTimeout(() => setStatus("idle"), 5000);
            }
        } catch (error) {
            console.error("Submission Error:", error);
            setStatus("error");
            setTimeout(() => setStatus("idle"), 5000);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <div className="space-y-12 md:space-y-20 py-10">
            {/* Header - Mobile spacing fixed */}
            <div className="space-y-4 px-4 md:px-0">
                <h1 className="text-4xl md:text-xl font-black uppercase tracking-tighter italic leading-none">
                    Let&apos;s <span className="text-primary italic">Connect</span>
                </h1>
                <p className="text-text-secondary text-sm md:text-base max-w-2xl font-medium uppercase tracking-widest">
                    Building the future of mobile and backend systems.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-start">
                <div className="px-4 md:px-0">
                    <div className="grid grid-cols-1 gap-4">
                        {socialLinks.map((link, idx) => (
                            <motion.a
                                key={link.label}
                                href={link.href}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex items-center gap-6 rounded-4xl bg-surface border border-border hover:border-primary/50 transition-all group overflow-hidden relative"
                            >
                                <div className="p-4 rounded-2xl bg-background text-primary group-hover:scale-110 transition-transform relative z-10">
                                    {link.icon}
                                </div>
                                <div className="relative z-10">
                                    <p className="text-[10px] font-black uppercase tracking-[.2em] text-text-tertiary mb-1">{link.label}</p>
                                    <p className="font-bold text-base md:text-lg">{link.value}</p>
                                </div>
                                <div className="absolute inset-0 bg-linear-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            </motion.a>
                        ))}
                    </div>
                </div>

                {/* Contact Form - Stable Card (No Tilt) for better UX */}
                <div className="px-4 md:px-0">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="p-8 rounded-4xl bg-surface/30 backdrop-blur-md border border-white/5 shadow-2xl relative overflow-hidden group hover:border-primary/20 transition-colors duration-500"
                    >
                        {/* Dynamic Background Glow */}
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[100px] rounded-full group-hover:bg-primary/10 transition-colors duration-700 pointer-events-none -z-10" />

                        <form className="space-y-8 relative z-10" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-text-tertiary ml-2">Full Name</label>
                                    <input
                                        required
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="John Doe"
                                        className="w-full h-14 rounded-2xl bg-background/50 border border-white/10 px-6 font-bold focus:border-primary focus:bg-background transition-all outline-none text-sm placeholder:text-white/20"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-text-tertiary ml-2">Email Address</label>
                                    <input
                                        required
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="john@example.com"
                                        className="w-full h-14 rounded-2xl bg-background/50 border border-white/10 px-6 font-bold focus:border-primary focus:bg-background transition-all outline-none text-sm placeholder:text-white/20"
                                    />
                                </div>
                            </div>
                            <div className="space-y-3">
                                <label className="text-[10px] font-black uppercase tracking-widest text-text-tertiary ml-2">Subject</label>
                                <input
                                    required
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="Project Inquiry"
                                    className="w-full h-14 rounded-2xl bg-background/50 border border-white/10 px-6 font-bold focus:border-primary focus:bg-background transition-all outline-none text-sm placeholder:text-white/20"
                                />
                            </div>
                            <div className="space-y-3">
                                <label className="text-[10px] font-black uppercase tracking-widest text-text-tertiary ml-2">Message</label>
                                <textarea
                                    required
                                    rows={4}
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell me about your vision..."
                                    className="w-full py-4 rounded-3xl bg-background/50 border border-white/10 px-6 font-bold focus:border-primary focus:bg-background transition-all outline-none resize-none text-sm placeholder:text-white/20"
                                ></textarea>
                            </div>

                            <div className="space-y-6 min-h-[64px] flex flex-col justify-end">
                                <AnimatePresence mode="popLayout">
                                    {status !== "success" && (
                                        <motion.div
                                            key="button"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, scale: 0.95 }}
                                        >
                                            <Button
                                                type="submit"
                                                size="lg"
                                                className="w-full shadow-2xl shadow-primary/30 group/btn"
                                                isLoading={status === "loading"}
                                                rightIcon={<Send size={18} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />}
                                            >
                                                Send Message
                                            </Button>
                                        </motion.div>
                                    )}

                                    {status === "success" && (
                                        <motion.div
                                            key="success"
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.9 }}
                                            className="w-full h-16 flex items-center justify-center gap-3 rounded-2xl bg-green-500/10 border border-green-500/20 text-green-500 text-xs font-bold uppercase tracking-widest"
                                        >
                                            <CheckCircle2 size={18} />
                                            Message sent! I&apos;ll get back to you soon.
                                        </motion.div>
                                    )}

                                    {status === "error" && (
                                        <motion.div
                                            key="error"
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0 }}
                                            className="w-full flex items-center justify-center gap-3 p-4 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-bold uppercase tracking-widest"
                                        >
                                            <AlertCircle size={18} />
                                            Failed to send. Please retry.
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
