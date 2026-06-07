"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { LuExternalLink } from "react-icons/lu";

const experience = [
  {
    year: "Mar 2025 – Present",
    role: "Software Engineer",
    company: "AAPGS Private Limited",
    description: [
      "Engineered scalable full-stack applications using React, Angular, Next.js, Node.js, TypeScript, and MongoDB from REST API design to production deployment.",
      "Optimized MongoDB aggregation pipelines and backend logic for analytics dashboards, resolving data accuracy issues across reporting and shift calculation modules.",
      "Implemented real-time features using Socket.IO across multiple production applications, including live data updates, notifications, and event-driven UI rendering.",
      "Architected multi-tenant systems with dynamic database switching and JWT-based authentication across production applications.",
    ],
    skills: [
      "React",
      "Angular",
      "Next.js",
      "Node.js",
      "TypeScript",
      "MongoDB",
      "Socket.IO",
    ],
  },
  {
    year: "Dec 2024 – Feb 2025",
    role: "Web Developer",
    company: "E-CareerPluz Private Limited",
    description: [
      "Delivered a responsive business website offering digital services, consulting, and legal advisory.",
      "Implemented backend functionality using PHP to handle contact forms, subscription emails, and notifications.",
      "Crafted interactive user interfaces using HTML, CSS, and JavaScript to enhance user experience.",
    ],
    skills: ["HTML", "CSS", "Bootstrap", "JavaScript", "PHP"],
  },
];

const projects = [
  {
    name: "DeployDock",
    company: "Personal Project",
    github: "https://github.com/vickynot-10/DeployDock",
    stack: [
      "Next.js",
      "Node.js",
      "TypeScript",
      "MongoDB",
      "SSH",
      "PM2",
      "SSE",
      "React Flow",
    ],
    desc: [
      "Developed a self-hosted CI/CD platform supporting SSH-based remote deployments with PM2 process management and git-based rollbacks.",
      "Architected multi-tenant isolation with per-tenant MongoDB databases and AES-256-CBC encrypted SSH credentials.",
      "Implemented real-time log streaming via SSE using worker threads for non-blocking deploy pipelines.",
      "Integrated GitHub OAuth and webhook-based auto-deploy with commit SHA tracking and deployment history.",
      "Integrated React Flow to deliver a visual no-code automation editor supporting conditional notification workflows across SMTP, ZeptoMail, Twilio, and Meta WhatsApp API.",
    ],
  },
  {
    name: "ProfluxIoT",
    company: "AAPGS Private Limited",
    github: null,
    stack: [
      "Angular",
      "Node.js",
      "MongoDB",
      "Redis",
      "Socket.IO",
      "ECharts",
      "FoblexFlow",
    ],
    desc: [
      "Architected a scalable IoT platform with multi-tenant architecture using dynamic database switching based on JWT authentication.",
      "Delivered a configurable dashboard system with drag-and-drop real-time ECharts and table widgets with user-level assignment.",
      "Reduced database write operations by 98% by batching 50 documents per insertMany in background workers instead of individual inserts.",
      "Eliminated per-emit MongoDB reads by caching dashboard metadata in Redis with NX locks, reducing query latency on every real-time data push.",
      "Engineered a visual automation engine using FoblexFlow enabling conditional workflows (HTTP, Email, WhatsApp) per device.",
    ],
  },
];

const skills = [
  { title: "Languages", val: ["JavaScript", "TypeScript", "Python"] },
  {
    title: "Frameworks",
    val: ["React", "Next.js", "Angular", "Node.js", "Express.js"],
  },
  { title: "Databases", val: ["MongoDB", "Redis"] },
  {
    title: "Tools & Libraries",
    val: ["Socket.IO", "Git", "PM2", "WebRTC", "ECharts"],
  },
];

const nav_items = [
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
];

export default function Home() {
  const [activeNav, setActiveNav] = useState("about");
  const cardRefs = useRef<HTMLDivElement[]>([]);
  cardRefs.current = [];

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !cardRefs.current.includes(el)) cardRefs.current.push(el);
  };

  function scrollToSection(id: string) {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  useEffect(() => {
    const sections = document.querySelectorAll(
      "#about,#skills,#experience,#projects",
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveNav(entry.target.id);
        });
      },
      { rootMargin: "0px", threshold: 0.5 },
    );
    sections.forEach((s) => observer.observe(s));
    return () => sections.forEach((s) => observer.unobserve(s));
  }, []);

  useEffect(() => {
    const cards = cardRefs.current;
    const enter = (hovered: HTMLDivElement) => {
      cards.forEach((c) => {
        c !== hovered
          ? c.classList.add("card-blurred")
          : c.classList.add("card-focused");
      });
    };
    const leave = () =>
      cards.forEach((c) => c.classList.remove("card-blurred", "card-focused"));
    cards.forEach((c) => {
      c.addEventListener("mouseenter", () => enter(c));
      c.addEventListener("mouseleave", leave);
    });
    return () => {
      cards.forEach((c) => {
        c.removeEventListener("mouseenter", () => enter(c));
        c.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen">
      <div className="w-full flex flex-row justify-between py-24 min-h-screen gap-8">
        <div className="sticky top-24 w-[46%] self-start flex flex-col justify-between h-[calc(100vh-12rem)]">
          <div>
            <h1 className="text-5xl font-bold text-slate-200 mb-2 tracking-tight">
              Vignesh
            </h1>
            <p className="text-xl font-semibold text-slate-200 mb-4">
              Software Engineer
            </p>
            <p className="text-sm text-slate-400 leading-relaxed w-4/5">
              I build production-grade full-stack applications — from REST APIs
              and real-time systems to scalable multi-tenant architectures.
            </p>
          </div>

          <nav className="flex flex-col  gap-3 my-8">
            {nav_items.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`group flex items-center gap-4 text-xs font-bold uppercase tracking-widest transition-all duration-200 text-left py-1 w-fit cursor-pointer bg-transparent border-none ${
                  activeNav === item.id
                    ? "text-slate-200"
                    : "text-slate-500 hover:text-slate-200"
                }`}
              >
                <span
                  className={`block h-px transition-all duration-200 ${
                    activeNav === item.id
                      ? "w-16 bg-slate-200"
                      : "w-8 bg-slate-500 group-hover:w-16 group-hover:bg-slate-200"
                  }`}
                />
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex flex-row items-center gap-5">
            {[
              { icon: <FaGithub />, href: "https://github.com/vickynot-10" },
              {
                icon: <FaLinkedin />,
                href: "https://www.linkedin.com/in/vignesh-s-512245293/",
              },
              {
                icon: <FaWhatsapp />,
                href: "https://wa.me/916382409401?text=Hello%20There!",
              },
              { icon: <SiGmail />, href: "mailto:vigneshselvam504@gmail.com" },
            ].map((s, i) => (
              <Link
                key={i}
                href={s.href}
                target="_blank"
                className="text-slate-400 hover:text-slate-200 text-2xl transition-colors duration-200"
              >
                {s.icon}
              </Link>
            ))}
          </div>
        </div>

        <div className="w-[50%] flex flex-col gap-0">
          <section id="about" className="scroll-mt-24 pb-24">
            <p className="text-slate-400 leading-relaxed mb-5">
              I&apos;m a developer based in Madurai, Tamil Nadu, passionate
              about crafting accessible, pixel-perfect user interfaces that
              blend thoughtful design with robust engineering. My favorite work
              lies at the intersection of design and development — creating
              experiences that not only look great but are meticulously built
              for performance and usability.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Currently a Software Engineer at{" "}
              <span className="text-slate-200 font-medium">
                AAPGS Private Limited
              </span>
              , working across full-stack web applications — from Angular and
              Next.js frontends to Node.js APIs and MongoDB backend systems.
            </p>
          </section>

          <section id="skills" className="scroll-mt-24 pb-24">
            <div className="grid grid-cols-2 gap-3">
              {skills.map((item, i) => (
                <div
                  key={i}
                  className="p-4 rounded-lg bg-teal-400/10 border border-teal-400/10 hover:border-teal-400/25 transition-all duration-300"
                >
                  <p className="text-teal-300 text-sm font-semibold mb-3 capitalize">
                    {item.title}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.val.map((v, j) => (
                      <span key={j} className="text-slate-400 text-sm">
                        {v}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section
            id="experience"
            className="scroll-mt-16 pb-24 flex flex-col gap-4"
          >
            {experience.map((item, i) => (
              <div
                key={i}
                ref={addToRefs}
                className="experience-card group relative grid grid-cols-9 gap-4 p-4 rounded-lg transition-all duration-300 hover:bg-slate-800/50 cursor-default border border-transparent hover:border-slate-700/50"
              >
                <div className="col-span-3">
                  <p className="text-slate-500 text-xs font-medium leading-relaxed mt-1">
                    {item.year}
                  </p>
                </div>
                <div className="col-span-6">
                  <p className="text-slate-200 font-semibold text-sm mb-1">
                    {item.role} ·{" "}
                    <span className="text-slate-300">{item.company}</span>
                  </p>
                  <ul className="space-y-1 mb-4 max-h-48 overflow-y-auto pr-1 scrollbar-thin">
                    {item.description.map((d, j) => (
                      <li
                        key={j}
                        className="text-slate-400 text-sm leading-relaxed list-disc ml-4"
                      >
                        {d}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((s, j) => (
                      <span
                        key={j}
                        className="text-teal-300 text-xs font-medium bg-teal-400/10 px-3 py-1 rounded-full"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </section>

          <section
            id="projects"
            className="scroll-mt-24  flex flex-col gap-4"
          >
            {projects.map((item, i) => (
              <div
                key={i}
                ref={addToRefs}
                className="group relative grid grid-cols-9 gap-4 p-4 rounded-lg transition-all duration-300 hover:bg-slate-800/50 cursor-default border border-transparent hover:border-slate-700/50"
              >
                <div className="col-span-3">
                  <p className="text-slate-500 text-xs font-medium leading-relaxed mt-1">
                    {item.company}
                  </p>
                </div>
                <div className="col-span-6">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="text-slate-200 font-semibold text-sm">
                      {item.name}
                    </p>
                    {item.github && (
                      <Link
                        href={item.github}
                        target="_blank"
                        className="text-slate-500 hover:text-teal-300 transition-colors duration-200 text-sm"
                      >
                        <LuExternalLink />
                      </Link>
                    )}
                  </div>
                  <ul className="space-y-1 mb-4 max-h-48 overflow-y-auto pr-1">
                    {item.desc.map((d, j) => (
                      <li
                        key={j}
                        className="text-slate-400 text-sm leading-relaxed list-disc ml-4"
                      >
                        {d}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {item.stack.map((s, j) => (
                      <span
                        key={j}
                        className="text-teal-300 text-xs font-medium bg-teal-400/10 px-3 py-1 rounded-full"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
}
