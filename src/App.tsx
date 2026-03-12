import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Github, Linkedin, Mail, Play, X } from "lucide-react";
import profileCutout from "./assets/profile-cutout.png";
import voabtDemoFast from "./assets/voabt-demo-fast.mp4";

function Hero() {
  return (
    <section className="min-h-screen px-4 pt-20 pb-10 sm:px-8 md:px-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(204,255,0,0.16),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.08),transparent_22%)]"></div>
      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)]">
        <div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-neon text-sm md:text-base uppercase tracking-widest mb-4"
          >
            Software Intern & Full-Stack Developer
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-display text-[15vw] leading-[0.8] uppercase m-0 glitch-wrapper lg:text-[10vw]"
          >
            <span className="glitch" data-text="JEBARSON">JEBARSON</span><br/>
            <span className="text-outline">CALEB D</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-6 max-w-xl font-sans text-base leading-7 text-gray-400 md:text-lg"
          >
            Passionate technologist specializing in embedded systems, full-stack web development, and IoT-based innovation.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 48, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.35, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-sm sm:max-w-md lg:max-w-lg"
        >
          <motion.div
            animate={{ y: [0, -16, 0], rotate: [-1, 1, -1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <div className="absolute inset-x-8 bottom-0 h-14 rounded-full bg-neon/30 blur-3xl"></div>
            <motion.div
              animate={{ opacity: [0.35, 0.8, 0.35], scale: [0.98, 1.04, 0.98] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -inset-4 rounded-[2.5rem] border border-neon/20 bg-neon/5"
            ></motion.div>
            <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-white/6 px-4 pt-6 backdrop-blur-sm sm:px-6">
              <motion.div
                animate={{ x: [0, 10, 0], y: [0, -6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute right-3 top-4 rounded-full border border-white/15 bg-black/35 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.22em] text-neon sm:right-5"
              >
                Full-Stack + Embedded
              </motion.div>
              <motion.img
                src={profileCutout}
                alt="Jebarson Caleb portrait"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 mx-auto h-auto w-full object-contain drop-shadow-[0_24px_60px_rgba(0,0,0,0.55)]"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="absolute -left-2 bottom-10 rounded-2xl border border-white/10 bg-black/45 px-4 py-3 backdrop-blur-md sm:-left-8"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-neon">Available For</p>
            <p className="mt-1 font-sans text-sm text-white">Software roles, product builds, and rapid prototypes</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Marquee() {
  return (
    <div className="py-8 bg-neon text-dark transform -rotate-2 scale-110 my-20">
      <div className="marquee-container">
        <div className="marquee-content font-display text-4xl md:text-6xl uppercase tracking-wider">
          <span className="mx-4">EMBEDDED SYSTEMS</span> • 
          <span className="mx-4">FULL-STACK WEB</span> • 
          <span className="mx-4">PYTHON</span> • 
          <span className="mx-4">IOT INNOVATION</span> • 
          <span className="mx-4">EMBEDDED SYSTEMS</span> • 
          <span className="mx-4">FULL-STACK WEB</span> • 
          <span className="mx-4">PYTHON</span> • 
          <span className="mx-4">IOT INNOVATION</span> • 
        </div>
      </div>
    </div>
  );
}

function CodeLabSection() {
  return (
    <section className="py-20 px-4 sm:px-8 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full md:w-1/2"
          >
            <h2 className="font-display text-6xl md:text-8xl uppercase leading-[0.85] mb-6">
              Code<span className="text-neon">Lab</span>
            </h2>
            <div className="font-mono text-sm text-neon mb-6 uppercase tracking-widest leading-relaxed">
              CEO & Partner at ZivionX <br/>
              Academic Evaluation Platform
            </div>
            <p className="font-sans text-lg text-gray-300 mb-6">
              A centralized academic platform for automated coding evaluation, progress tracking, and outcome-based education support. 
            </p>
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-white/5 border border-white/10 p-6 rounded-2xl mb-8 hover:border-neon/50 transition-colors duration-300 cursor-default"
            >
              <h3 className="font-sans font-bold text-xl mb-4 text-white">Live Implementation Success</h3>
              <p className="font-sans text-gray-400">
                Successfully deployed and actively used by students at <strong className="text-white">Karunya Institute of Technology and Sciences</strong> for a whole semester's classes and events. Supported over 1000 users with zero performance drops on infrastructure.
              </p>
            </motion.div>
            <ul className="space-y-3 font-sans text-gray-400 mb-8">
              <li className="flex items-start gap-3">
                <span className="text-neon mt-1">▹</span>
                Built a full-stack academic platform combining coding practice, classroom management, and automated evaluation.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-neon mt-1">▹</span>
                Implemented auto-grading system, faculty dashboards, and custom report generation for OBE/NBA/NAAC requirements.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-neon mt-1">▹</span>
                Designed real-time progress tracking and notification system improving student engagement.
              </li>
            </ul>
            <a href="https://codelab.612151820.xyz/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-mono text-dark bg-neon px-6 py-3 rounded-full hover:bg-white transition-colors uppercase font-bold text-sm tracking-wider">
              View Project <ArrowUpRight size={16} />
            </a>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="w-full md:w-1/2 relative"
          >
            <motion.div 
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="aspect-4/3 bg-white/5 border border-white/10 rounded-3xl overflow-hidden flex items-center justify-center relative group cursor-pointer"
            >
              <div className="absolute inset-0 bg-linear-to-tr from-neon/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <p className="font-mono text-gray-500 text-center px-6 relative z-10 group-hover:text-white transition-colors duration-300">
                [ Place CodeLab Dashboard Image Here ]<br/>
                <span className="text-xs mt-2 block">Showcasing the automated evaluation interface or student progress tracking</span>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const [activeVideoProject, setActiveVideoProject] = useState<string | null>(null);

  const projects = [
    {
      id: "voabt",
      title: "VOABT",
      subtitle: "Voice-Activated Cartesian Bot",
      desc: "An assistive robotics project enabling voice-controlled handwriting for users with motor impairments. Engineered a Python-based control system integrating Whisper AI for real-time voice-to-text conversion.",
      tags: ["Python", "Whisper AI", "CNC", "Hardware"],
      imagePlaceholder: "[ Place VOABT Hardware/Action Image Here ]",
      videoSrc: voabtDemoFast,
      mediaHint: "Hover to preview. Click for player."
    },
    {
      id: "gunshot-detection",
      title: "Gunshot Detection",
      subtitle: "IoT Security System",
      desc: "Developed a gunshot detection system utilizing IoT sensors and real-time data processing to enhance security and provide immediate alerts.",
      tags: ["IoT", "Sensors", "Real-time"],
      imagePlaceholder: "[ Place Gunshot Detection System Image Here ]"
    },
    {
      id: "face-emotion-detection",
      title: "Face Emotion Detection",
      subtitle: "Computer Vision & AI",
      desc: "Implemented a real-time facial emotion recognition system using deep learning to analyze and classify human emotions from video feeds.",
      tags: ["AI/ML", "Computer Vision", "Python"],
      imagePlaceholder: "[ Place Face Emotion Detection Image Here ]"
    }
  ];

  useEffect(() => {
    if (!activeVideoProject) {
      return undefined;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveVideoProject(null);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [activeVideoProject]);

  const activeProject = projects.find((project) => project.id === activeVideoProject);

  return (
    <section className="py-20 px-4 sm:px-8 md:px-16 bg-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-5xl md:text-7xl uppercase mb-16 text-center"
        >
          Selected <span className="text-outline">Works</span>
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div key={project.id}>
              <ProjectCard
                index={i}
                project={project}
                onOpenVideo={setActiveVideoProject}
              />
            </div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <a href="https://github.com/jebarson-caleb" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-mono text-white border border-white/20 px-8 py-4 rounded-full hover:bg-white hover:text-dark hover:scale-105 transition-all duration-300 uppercase font-bold text-sm tracking-wider">
            <Github size={18} /> View More on GitHub
          </a>
        </motion.div>

        <AnimatePresence>
          {activeProject?.videoSrc ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveVideoProject(null)}
              className="fixed inset-0 z-50 flex items-end justify-center bg-black/80 px-4 py-6 backdrop-blur-md sm:items-center"
            >
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 18, scale: 0.96 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                onClick={(event) => event.stopPropagation()}
                className="w-full max-w-xl overflow-hidden rounded-4xl border border-neon/25 bg-[linear-gradient(180deg,rgba(204,255,0,0.08),rgba(255,255,255,0.02))] shadow-[0_24px_80px_rgba(0,0,0,0.5)]"
              >
                <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 sm:px-6">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-neon">Project Demo</p>
                    <h3 className="mt-1 font-display text-3xl uppercase leading-none text-white">{activeProject.title}</h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveVideoProject(null)}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:border-neon/60 hover:text-neon"
                    aria-label="Close project video"
                  >
                    <X size={18} />
                  </button>
                </div>
                <div className="p-4 sm:p-5">
                  <video
                    src={activeProject.videoSrc}
                    controls
                    autoPlay
                    playsInline
                    preload="metadata"
                    className="aspect-video w-full rounded-3xl border border-white/10 bg-black object-cover"
                  />
                  <p className="mt-4 font-sans text-sm leading-6 text-gray-400">Sped-up walkthrough of the VOABT build, styled to match the site and opened in a compact neon-accent player.</p>
                </div>
              </motion.div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  onOpenVideo,
}: {
  project: {
    id: string;
    title: string;
    subtitle: string;
    desc: string;
    tags: string[];
    imagePlaceholder: string;
    videoSrc?: string;
    mediaHint?: string;
  };
  index: number;
  onOpenVideo: (projectId: string) => void;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [isPreviewPlaying, setIsPreviewPlaying] = useState(false);
  const previewRef = useRef<HTMLVideoElement | null>(null);

  const playPreviewOnce = () => {
    if (!project.videoSrc || !previewRef.current || isPreviewPlaying) {
      return;
    }

    const preview = previewRef.current;
    preview.currentTime = 0;
    setIsPreviewPlaying(true);
    preview.play().catch(() => {
      setIsPreviewPlaying(false);
    });
  };

  const resetPreview = () => {
    if (!previewRef.current) {
      setIsPreviewPlaying(false);
      return;
    }

    previewRef.current.pause();
    previewRef.current.currentTime = 0;
    setIsPreviewPlaying(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
      onHoverStart={() => {
        setIsHovered(true);
        playPreviewOnce();
      }}
      onHoverEnd={() => setIsHovered(false)}
      className="group"
    >
      {project.videoSrc ? (
        <button
          type="button"
          onClick={() => onOpenVideo(project.id)}
          className="block w-full text-left"
          aria-label={`Open ${project.title} demo video player`}
        >
          <div className="aspect-square bg-dark border border-white/10 rounded-2xl mb-6 overflow-hidden relative transition-all duration-500 group-hover:border-neon/50 group-hover:shadow-[0_0_0_1px_rgba(204,255,0,0.2)]">
            <video
              ref={previewRef}
              src={project.videoSrc}
              muted
              playsInline
              preload="metadata"
              onEnded={resetPreview}
              className="h-full w-full object-cover opacity-70 transition duration-500 group-hover:scale-[1.02] group-hover:opacity-95"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0.02),rgba(5,5,5,0.82))]"></div>
            <div className="absolute inset-x-4 top-4 flex items-center justify-between gap-3">
              <span className="rounded-full border border-neon/40 bg-neon/10 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.22em] text-neon">
                Demo Preview
              </span>
              <span className="rounded-full border border-white/10 bg-black/40 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.22em] text-white/70">
                1.6x Speed
              </span>
            </div>
            <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-4">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-neon/90">VOABT Demo</p>
                <p className="mt-2 max-w-56 font-sans text-sm leading-5 text-white/80">{project.mediaHint}</p>
              </div>
              <motion.div
                animate={{ scale: isHovered || isPreviewPlaying ? [1, 1.08, 1] : 1 }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="flex h-14 w-14 items-center justify-center rounded-full border border-neon/50 bg-black/55 text-neon shadow-[0_0_30px_rgba(204,255,0,0.18)]"
              >
                <Play size={20} className="ml-1" />
              </motion.div>
            </div>
          </div>
        </button>
      ) : (
        <div className="aspect-square bg-dark border border-white/10 rounded-2xl mb-6 overflow-hidden relative flex items-center justify-center group-hover:border-neon/50 transition-all duration-500">
          <div className="absolute inset-0 bg-neon/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
          <motion.div className="relative z-10 transform group-hover:scale-110 transition-transform duration-500">
            <p className="font-mono text-xs text-gray-600 text-center px-4 group-hover:text-white transition-colors duration-300">
              {project.imagePlaceholder}
            </p>
          </motion.div>
        </div>
      )}

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag, j) => (
          <span key={j} className="font-mono text-[10px] uppercase tracking-wider border border-white/20 px-2 py-1 rounded-full text-gray-400 group-hover:border-neon/50 group-hover:text-neon transition-colors duration-300">
            {tag}
          </span>
        ))}
      </div>
      <h3 className="font-display text-3xl uppercase mb-2 group-hover:text-neon transition-colors duration-300">{project.title}</h3>
      <h4 className="font-sans font-medium text-white/70 mb-3 group-hover:text-white transition-colors duration-300">{project.subtitle}</h4>
      <p className="font-sans text-sm text-gray-400 line-clamp-3 group-hover:text-gray-300 transition-colors duration-300">{project.desc}</p>
    </motion.div>
  );
}

function Stats() {
  const stats = [
    { value: "9.55", label: "CGPA", desc: "Karunya Institute of Technology and Sciences (2024-2028)" },
    { value: "40%", label: "Performance Boost", desc: "Optimized performance by reducing API response time." },
    { value: "1000+", label: "Users Supported", desc: "Scaled infrastructure with zero performance drops." },
    { value: "15+", label: "Critical Bugs Fixed", desc: "Successfully improved system stability and reliability." }
  ];

  return (
    <section className="py-24 px-4 sm:px-8 md:px-16 border-y border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
              whileHover={{ y: -10 }}
              className="group cursor-default"
            >
              <div className="font-display text-6xl md:text-7xl text-neon mb-2 group-hover:scale-110 origin-left transition-transform duration-300">{stat.value}</div>
              <div className="font-mono text-sm uppercase tracking-widest text-white/50 mb-2 group-hover:text-white transition-colors duration-300">{stat.label}</div>
              <p className="font-sans text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="pt-32 pb-10 px-4 sm:px-8 md:px-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-10">
          <div>
            <h2 className="font-display text-[12vw] md:text-[8vw] leading-[0.8] uppercase mb-6">
              Let's <br/><span className="text-outline">Connect</span>
            </h2>
            <p className="font-sans text-xl text-gray-400 max-w-md">
              Always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
          </div>
          <div className="flex flex-col gap-4 font-mono text-sm uppercase tracking-widest">
            <a href="mailto:jebarsoncalebd@gmail.com" className="flex items-center gap-3 hover:text-neon transition-colors">
              <Mail size={18} /> jebarsoncalebd@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/jebarson-caleb/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-neon transition-colors">
              <Linkedin size={18} /> LinkedIn
            </a>
            <a href="https://github.com/jebarson-caleb" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-neon transition-colors">
              <Github size={18} /> GitHub
            </a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 font-mono text-xs text-gray-500 uppercase tracking-wider">
          <p>© {new Date().getFullYear()} Jebarson Caleb D.</p>
          <p className="mt-4 md:mt-0">Based in Tirupur, India</p>
        </div>
      </div>
      
      {/* Background massive text */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none opacity-5 select-none flex justify-center">
        <span className="font-display text-[25vw] leading-none whitespace-nowrap">JEBARSON</span>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="bg-dark min-h-screen selection:bg-neon selection:text-dark">
      <nav className="fixed top-0 left-0 w-full p-6 flex justify-between items-center z-50 mix-blend-difference">
        <div className="font-display text-2xl uppercase tracking-wider text-white">JC.</div>
        <a href="mailto:jebarsoncalebd@gmail.com" className="font-mono text-xs uppercase tracking-widest text-white border border-white/20 px-4 py-2 rounded-full hover:bg-white hover:text-black transition-colors">
          Contact Me
        </a>
      </nav>
      
      <main>
        <Hero />
        <Marquee />
        <CodeLabSection />
        <Stats />
        <Projects />
      </main>
      
      <Footer />
    </div>
  );
}
