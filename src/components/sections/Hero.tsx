"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";

const destinations = ["USA", "UK", "Canada", "UAE", "Oman", "Qatar", "Saudi Arabia", "Africa", "Bangladesh", "China"];

export function Hero() {
    return (
        <section className="relative min-h-[95vh] w-full flex items-center bg-bg overflow-hidden border-b border-border">

            {/* Decorative floating spices with mix-blend-multiply to remove white background */}
            <motion.div
                animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-32 left-10 md:left-24 w-24 h-24 pointer-events-none hidden md:block"
            >
                <Image src="/assets/spices/leaf.png" alt="Mint Leaf" fill className="object-contain drop-shadow-sm" />
            </motion.div>

            <motion.div
                animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-40 left-1/4 w-32 h-32 opacity-90 mix-blend-multiply pointer-events-none hidden lg:block"
            >
                <Image src="/assets/spices/cinnamon.png" alt="Cinnamon" fill className="object-contain drop-shadow-sm" />
            </motion.div>


            {/* Hero Content */}
            <div className="container mx-auto px-4 md:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-24 pb-20">

                {/* Left Typography Area */}
                <div className="max-w-xl">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-primary uppercase mb-8 border border-primary/20 px-4 py-1.5 rounded-full bg-primary/5"
                    >
                        <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                        Mahesana, Gujarat
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                        className="text-5xl md:text-6xl lg:text-[72px] font-bold tracking-tight text-fg mb-6 leading-[1.05]"
                    >
                        Premium Indian
                        <br />
                        Agri <span className="text-primary italic font-ibm">Exports.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.25 }}
                        className="text-base md:text-lg text-muted mb-10 leading-relaxed"
                    >
                        Sourcing the finest spices, oil seeds, and millets from the heart of Gujarat. Certified, traceable, and trusted by importers in over 11 countries worldwide.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <Link href="/contact">
                            <Button size="lg" className="bg-primary text-white font-medium hover:bg-primary/90 rounded-full px-8 shadow-soft">
                                Request a Quote
                            </Button>
                        </Link>
                        <Link href="/products">
                            <Button size="lg" variant="outline" className="rounded-full px-8 border-border text-fg hover:bg-surface hover:border-fg/50 bg-surface/50 transition-all">
                                MRL Compliant Specs
                            </Button>
                        </Link>
                    </motion.div>

                    {/* Minimal Trust markers */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                        className="mt-14 flex flex-wrap gap-4 items-center pl-2 border-l-2 border-primary/20"
                    >
                        <span className="text-xs text-fg font-bold uppercase tracking-wider">Certifications:</span>
                        {["FSSAI", "HACCP", "ISO 22000", "KOSHER"].map((cert) => (
                            <span key={cert} className="text-[11px] font-medium text-muted bg-surface border border-border px-2 py-1 rounded">
                                {cert}
                            </span>
                        ))}
                    </motion.div>
                </div>

                {/* Right Natural Imagery Area */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="relative h-[500px] w-full hidden lg:block rounded-3xl overflow-hidden border border-border shadow-soft"
                >
                    {/* Beautiful Farm/Spice Field Image */}
                    <Image
                        src="/assets/hero/hero-field.png"
                        alt="Gujarat Spice Farms"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-fg/10 mix-blend-overlay" />

                    <div className="absolute bottom-6 right-6 bg-surface/90 backdrop-blur-md border border-border p-4 rounded-2xl shadow-card">
                        <p className="text-xs font-bold text-primary uppercase mb-1 tracking-wider">Traceability</p>
                        <p className="text-sm font-medium text-fg">Direct from Unjha Market Farms</p>
                    </div>
                </motion.div>

            </div>

            {/* Destination Ticker */}
            <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-border bg-surface/50 backdrop-blur-md py-2.5 overflow-hidden">
                <div className="flex whitespace-nowrap animate-marquee gap-10 items-center">
                    {[...destinations, ...destinations, ...destinations].map((dest, i) => (
                        <span key={i} className="text-[11px] font-semibold text-fg uppercase tracking-widest shrink-0">
                            {dest} <span className="text-primary/40 mx-4">✦</span>
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
