"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function Hero() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const logoSrc = mounted && resolvedTheme === "dark"
    ? "/logo/logo-white.png"
    : "/logo/logo-black.png";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-background">
      {/* Background decoration */}
      {/* <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-400/20 dark:bg-blue-600/10 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[40%] rounded-full bg-purple-400/20 dark:bg-purple-600/10 blur-[120px]" />
      </div> */}

      <div className="container mx-auto px-6 md:px-12 z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">

          {/* Text Content */}
          <motion.div
            className="flex-1 flex flex-col items-center text-center lg:items-start lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Disponible pour de nouveaux projets
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground mb-6 leading-tight">
              Créer des expériences numériques <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">exceptionnelles</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              Je suis un développeur passionné spécialisé dans la construction d'applications web modernes, performantes et évolutives. Transformons vos idées en réalité.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-foreground text-background font-semibold hover:opacity-90 transition-opacity shadow-lg"
              >
                Voir mes projets
                <ArrowRight size={18} />
              </a>
              <a
                href="/doc/CV_Modeste_TOLOJANAHARY.pdf"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border border-muted text-foreground font-semibold hover:bg-muted transition-colors"
              >
                <Download size={18} />
                Télécharger CV
              </a>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center gap-5">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-foreground transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-foreground transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-foreground transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
            </motion.div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            className="flex-1 flex justify-center lg:justify-end w-full max-w-md lg:max-w-none"
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Animated rings */}
              <div className="absolute inset-0 rounded-full border border-blue-500/20 dark:border-blue-400/20 animate-[spin_10s_linear_infinite]" />
              <div className="absolute inset-4 rounded-full border border-purple-500/20 dark:border-purple-400/20 animate-[spin_15s_linear_infinite_reverse]" />
              <div className="absolute inset-8 rounded-full border border-blue-500/10 dark:border-blue-400/10 animate-[spin_20s_linear_infinite]" />

              {/* Image Container */}
              <motion.div
                className="absolute inset-12 rounded-full overflow-hidden bg-gradient-to-tr from-blue-100 to-purple-100 dark:from-gray-800 dark:to-gray-700 shadow-2xl p-2"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-full h-full rounded-full overflow-hidden bg-transparent relative flex items-center justify-center">
                  <Image
                    src={logoSrc}
                    alt="Developer Logo/Avatar"
                    fill
                    className="object-contain p-4 hover:scale-110 transition-transform duration-500"
                    priority
                  />
                </div>
              </motion.div>

              {/* Floating tech badges */}
              <motion.div
                className="absolute top-10 right-0 bg-white dark:bg-gray-800 p-3 rounded-2xl shadow-xl flex items-center justify-center"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-blue-500 to-cyan-500">Re</span>
              </motion.div>

              <motion.div
                className="absolute bottom-20 left-0 bg-white dark:bg-gray-800 p-3 rounded-2xl shadow-xl flex items-center justify-center"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <span className="text-2xl font-bold text-black dark:text-white">Nx</span>
              </motion.div>

              <motion.div
                className="absolute top-1/2 -right-4 bg-white dark:bg-gray-800 p-3 rounded-2xl shadow-xl flex items-center justify-center"
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              >
                <span className="text-2xl font-bold text-sky-500">Tw</span>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
