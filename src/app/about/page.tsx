"use client";

import { motion } from "framer-motion";
import {
  Download,
  MapPin,
  Briefcase,
  GraduationCap,
  Zap,
  Award,
  ArrowRight,
} from "lucide-react";
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
    { title: "Projects", desc: "View my best technical work.", path: "/projects", icon: <Briefcase size={22} /> },
    { title: "Tech Stack", desc: "The tools I use daily.", path: "/tech", icon: <Zap size={22} /> },
    { title: "Experience", desc: "My professional journey.", path: "/about", icon: <GraduationCap size={22} /> },
  ];

  return (
    <div className="space-y-20">

      {/* ================= HEADER ================= */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 border-b border-border pb-14">

        <div className="space-y-4 text-center lg:text-left max-w-xl">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            About <span className="text-primary">Me</span>
          </h1>
          <p className="text-text-secondary text-base">
            Engineering digital foundations with human empathy.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {highlights.map((h, i) => (
            <div
              key={i}
              className="px-5 py-3 rounded-full bg-surface border border-border flex items-center gap-2 text-sm font-medium text-text-secondary hover:border-primary/40 transition"
            >
              <span className="text-primary">{h.icon}</span>
              {h.label}
            </div>
          ))}
        </div>
      </div>

      {/* ================= GRID ================= */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

        {/* -------- Profile -------- */}
        <div className="md:col-span-4">
          <TiltCard className="p-8 rounded-3xl bg-surface border border-border shadow-xl text-center space-y-6">
            <div className="relative w-36 h-36 mx-auto rounded-full overflow-hidden border-2 border-primary/20">
              <Image
                src="/avator.png"
                alt="Mohammed Hussen"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <h2 className="text-xl font-semibold">
                Mohammed Hussen
              </h2>
              <p className="text-text-secondary text-sm">
                Backend Architect
              </p>
            </div>

            <Button className="w-full h-11 rounded-xl text-sm font-medium gap-2">
              <Download size={16} />
              Download Resume
            </Button>
          </TiltCard>
        </div>

        {/* -------- Story -------- */}
        <div className="md:col-span-8">
          <TiltCard className="p-10 rounded-3xl bg-surface border border-border shadow-xl space-y-8">

            <div>
              <h3 className="text-primary text-sm font-semibold mb-4">
                The Story So Far
              </h3>

              <p className="text-lg leading-relaxed text-text-secondary">
                I build tools that matter. Code isn't just logic — it's digital
                kindness. I specialize in backend systems that handle millions
                of requests while remaining invisible to users.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold mb-2">Philosophy</h4>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Empathy in code. Performance as a service. User-focused
                  distributed systems.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Mission</h4>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Designing high-concurrency architectures that solve real
                  human challenges.
                </p>
              </div>
            </div>
          </TiltCard>
        </div>

        {/* -------- Certifications -------- */}
        <div className="md:col-span-12">
          <div className="rounded-3xl bg-surface border border-border p-10 space-y-10">

            <div className="flex items-center gap-4">
              <div className="p-4 rounded-xl bg-primary text-white">
                <Award size={22} />
              </div>
              <div>
                <h3 className="text-xl font-semibold">
                  Certifications
                </h3>
                <p className="text-sm text-text-secondary">
                  5 Professional Certifications
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {certs.map((c, i) => (
                <div
                  key={i}
                  className="relative aspect-[4/3] rounded-xl overflow-hidden bg-background border border-border group"
                >
                  <Image
                    src={c.img}
                    alt={c.title}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition"
                  />

                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-center p-4">
                    <div>
                      <p className="text-sm font-semibold text-white">
                        {c.title}
                      </p>
                      <p className="text-xs text-primary">
                        {c.issuer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* -------- Favourite Pages -------- */}
        <div className="md:col-span-12 space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-4xl font-semibold">
              Favourite Pages
            </h2>
            <p className="text-text-secondary">
              Explore more of my work
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {favPages.map((page, i) => (
              <Link key={i} href={page.path}>
                <div className="p-10 rounded-3xl bg-surface border border-border hover:border-primary transition shadow-lg hover:-translate-y-1 duration-300 text-center space-y-5">
                  <div className="mx-auto w-fit p-4 rounded-xl bg-background text-primary">
                    {page.icon}
                  </div>

                  <h3 className="text-lg font-semibold">
                    {page.title}
                  </h3>

                  <p className="text-sm text-text-secondary">
                    {page.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* -------- CTA -------- */}
        <div className="md:col-span-12 mt-16">
          <div className="rounded-3xl bg-primary p-12 text-white flex flex-col md:flex-row items-center justify-between gap-10">

            <div>
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                Let's Build Something Great
              </h2>
              <p className="text-white/80 mt-4">
                Available for projects and collaborations.
              </p>
            </div>

            <Link href="/contact">
              <Button className="h-14 px-10 rounded-xl bg-white text-primary hover:bg-white/90 text-sm font-semibold gap-2">
                Contact Me
                <ArrowRight size={18} />
              </Button>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}