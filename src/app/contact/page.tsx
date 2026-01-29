"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/Button";

const socialLinks = [
    { icon: <Mail size={24} />, label: "Email", value: "hello@awashdev.com", href: "mailto:hello@awashdev.com" },
    { icon: <Github size={24} />, label: "Github", value: "github.com/awashdev", href: "#" },
    { icon: <Linkedin size={24} />, label: "Linkedin", value: "linkedin.com/in/awashdev", href: "#" },
];

export default function ContactPage() {
    return (
        <div className="space-y-12">
            <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic">Let&apos;s <span className="text-primary">Connect</span></h1>
                <p className="text-text-secondary text-lg max-w-2xl font-medium">Ready to discuss your next high-performance project?</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <div className="grid grid-cols-1 gap-4">
                        {socialLinks.map((link, idx) => (
                            <motion.a
                                key={link.label}
                                href={link.href}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex items-center gap-6 p-6 rounded-[2rem] bg-surface border border-border hover:border-primary/30 transition-all group"
                            >
                                <div className="p-4 rounded-2xl bg-background text-primary group-hover:scale-110 transition-transform">
                                    {link.icon}
                                </div>
                                <div>
                                    <p className="text-[10px] font-black uppercase tracking-[.2em] text-text-tertiary mb-1">{link.label}</p>
                                    <p className="font-bold text-lg">{link.value}</p>
                                </div>
                            </motion.a>
                        ))}
                    </div>

                    <div className="p-8 rounded-[2.5rem] bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20">
                        <div className="flex items-center gap-4 mb-4">
                            <MessageSquare className="text-primary" />
                            <h3 className="font-black uppercase italic tracking-tight">Quick Response</h3>
                        </div>
                        <p className="text-sm font-medium text-text-secondary leading-relaxed uppercase">
                            I usually respond within 24 hours. Looking forward to hearing about your vision.
                        </p>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="p-10 rounded-[3rem] bg-surface border border-border shadow-2xl"
                >
                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-text-tertiary ml-2">Name</label>
                                <input type="text" placeholder="John Doe" className="w-full h-14 rounded-2xl bg-background border border-border px-6 font-bold focus:border-primary transition-colors outline-none" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-text-tertiary ml-2">Email</label>
                                <input type="email" placeholder="john@example.com" className="w-full h-14 rounded-2xl bg-background border border-border px-6 font-bold focus:border-primary transition-colors outline-none" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-text-tertiary ml-2">Subject</label>
                            <input type="text" placeholder="Project Inquiry" className="w-full h-14 rounded-2xl bg-background border border-border px-6 font-bold focus:border-primary transition-colors outline-none" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-text-tertiary ml-2">Message</label>
                            <textarea rows={5} placeholder="Tell me about your project..." className="w-full py-6 rounded-3xl bg-background border border-border px-6 font-bold focus:border-primary transition-colors outline-none resize-none"></textarea>
                        </div>
                        <Button className="w-full h-16 rounded-2xl gap-3 font-black uppercase tracking-[0.2em] text-xs shadow-xl shadow-primary/20">
                            Send Message <Send size={18} />
                        </Button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
}
