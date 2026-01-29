"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Database, Server, Cpu, Terminal, Sparkles, Zap, Shield, Globe } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';

export default function HomePage() {
  const stats = [
    { value: "4+", label: "Years Experience", icon: <Zap size={20} /> },
    { value: "50+", label: "Projects Completed", icon: <Terminal size={20} /> },
    { value: "30+", label: "Happy Clients", icon: <Globe size={20} /> },
    { value: "98.7%", label: "Satisfaction", icon: <Sparkles size={20} /> },
  ];

  const expertise = [
    {
      title: "Backend Architecture",
      desc: "Scalable systems with Go & Rust. High-concurrency masters.",
      icon: <Server className="text-blue-500" />,
    },
    {
      title: "Database Design",
      desc: "PostgreSQL, Redis, and custom ledger systems.",
      icon: <Database className="text-emerald-500" />,
    },
    {
      title: "API Systems",
      desc: "gRPC and REST APIs with advanced security.",
      icon: <Cpu className="text-purple-500" />,
    },
    {
      title: "Infrastructure",
      desc: "Cloud-native, Docker, and K8s expert deployment.",
      icon: <Shield className="text-orange-500" />,
    },
  ];

  return (
    <div className="relative isolate">
      {/* Background Decor */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-[10%] left-[20%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute top-[20%] -right-[10%] w-[35%] h-[35%] bg-secondary/5 blur-[100px] rounded-full" />
      </div>

      <div className="space-y-32">
        {/* Hero */}
        <section className="flex flex-col items-start space-y-10">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border text-[10px] font-bold uppercase tracking-widest text-primary"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Available for new projects
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-5xl md:text-8xl font-black tracking-tighter italic leading-[0.9] uppercase"
            >
              ENGINEERING
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">PERFORMANCE</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-lg md:text-xl text-text-secondary max-w-2xl font-medium leading-relaxed"
            >
              I&apos;m <span className="font-bold text-text-primary underline decoration-primary/30 decoration-4">Mohammed Hussen</span>.
              A Backend Systems Architect dedicated to building high-concurrency systems using Go, Rust, and Python.
            </motion.p>
          </div>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Link href="/projects">
              <Button size="lg" className="rounded-2xl gap-3 font-black uppercase tracking-widest text-xs group">
                View Selected Work
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="rounded-2xl font-black uppercase tracking-widest text-xs border-2">
                Get In Touch
              </Button>
            </Link>
          </motion.div>

          <motion.div
            className="w-full pt-10 border-t border-border/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-text-tertiary mb-8">Core Tech Stack</p>
            <div className="flex flex-wrap gap-x-10 gap-y-6">
              {['GO-LANG', 'RUST', 'POSTGRES', 'REDIS', 'KUBERNETES', 'DOCKER'].map((tech) => (
                <span key={tech} className="text-xl md:text-2xl font-black text-text-primary/20 hover:text-primary/60 transition-colors cursor-default select-none tracking-tighter italic">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Expertise */}
        <section className="space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter italic">Selected <br /><span className="text-primary">Expertise</span></h2>
              <p className="text-text-secondary font-medium">Solving complex problems with elegant code.</p>
            </div>
            <Link href="/tech" className="text-xs font-black uppercase tracking-widest p-4 border border-border rounded-2xl hover:bg-surface transition-all flex items-center gap-2">
              Explore full stack <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {expertise.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="h-full group hover:border-primary/30 transition-all duration-500 bg-surface/40 backdrop-blur-sm relative">
                  <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-20 transition-opacity">
                    {item.icon}
                  </div>
                  <CardHeader>
                    <div className="w-12 h-12 rounded-2xl bg-background border border-border flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/10 transition-all">
                      {item.icon}
                    </div>
                    <CardTitle className="mb-3 group-hover:text-primary transition-colors">{item.title}</CardTitle>
                    <CardDescription className="leading-relaxed group-hover:text-text-primary transition-colors">{item.desc}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border/30 rounded-[2.5rem] overflow-hidden border border-border/30">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-surface/80 p-10 flex flex-col items-center justify-center text-center space-y-3 group"
              >
                <div className="text-primary mb-2 opacity-40 group-hover:opacity-100 transition-all rotate-6 group-hover:rotate-0">
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-black italic tracking-tighter text-text-primary">
                  {stat.value}
                </div>
                <div className="text-[10px] uppercase font-black tracking-[0.2em] text-text-tertiary">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-[3rem] bg-gradient-to-br from-primary to-secondary p-1 text-center group overflow-hidden shadow-2xl shadow-primary/20"
          >
            <div className="bg-background rounded-[2.9rem] py-16 px-8 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
                <div className="absolute -top-20 -left-20 w-80 h-80 bg-white blur-[100px] rounded-full" />
                <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-secondary blur-[100px] rounded-full" />
              </div>

              <div className="relative z-10 max-w-2xl mx-auto space-y-8">
                <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter leading-none mb-6">
                  NEED <span className="text-primary">ROBUST</span> BACKEND SYSTEMS?
                </h2>
                <p className="text-lg text-text-secondary font-medium uppercase tracking-widest text-xs">
                  Let&apos;s build something scalable and bulletproof together.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link href="/contact" className="w-full sm:w-auto">
                    <Button size="lg" className="px-10 rounded-2xl w-full font-black uppercase tracking-widest text-xs shadow-xl shadow-primary/30 group/btn">
                      Start Your Project
                      <Zap size={18} className="ml-2 group-hover/btn:animate-bounce" />
                    </Button>
                  </Link>
                  <Link href="/projects" className="w-full sm:w-auto">
                    <Button variant="outline" size="lg" className="px-10 rounded-2xl w-full font-black uppercase tracking-widest text-xs border-2">
                      View Archive
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
