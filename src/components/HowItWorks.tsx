"use client";

import { Trophy, Landmark, DollarSign } from 'lucide-react';
import { Button } from '@/components/Button';
import Image from 'next/image';

export function HowItWorks() {
    return (
        <section className="py-24 bg-background overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="relative rounded-[3rem] bg-zinc-900/50 border border-white/5 p-8 md:p-16 overflow-hidden">

                    {/* Background Gradient */}
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3" />

                    <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
                        {/* Left Content */}
                        <div className="max-w-xl">
                            <span className="text-primary font-medium tracking-wider text-sm uppercase mb-4 block">
                                How It Works
                            </span>
                            <h2 className="text-4xl md:text-5xl md:leading-[1.1] font-medium text-white mb-6">
                                Maximum Profit & <br />
                                Secure <span className="text-primary">Trading Platform</span>
                            </h2>
                            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                                Choose the evaluation based on your preference to become an Empire Trader.
                            </p>
                            <Button className="px-8 bg-primary hover:bg-primary-hover text-black font-semibold rounded-full">
                                Get Funded
                            </Button>
                        </div>

                        {/* Right Graphic - 3D Plus Icon */}
                        <div className="flex items-center justify-center relative min-h-[400px] lg:min-h-auto mt-8 lg:mt-0">
                            <div className="relative w-full max-w-[500px] lg:max-w-[700px] aspect-square animate-float">
                                <Image
                                    src="/plus.png"
                                    alt="3D Plus Icon"
                                    fill
                                    priority
                                    className="object-contain drop-shadow-[0_0_80px_rgba(0,213,99,0.4)]"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Steps Grid */}
                    <div className="grid md:grid-cols-3 gap-6 mt-20 relative z-10">
                        {/* Step 1 */}
                        <div className="p-8 rounded-3xl bg-black/40 border border-white/5 backdrop-blur-sm hover:bg-white/5 transition-colors group">
                            <div className="w-12 h-12 rounded-full bg-black border border-white/10 flex items-center justify-center text-primary mb-6 shadow-[0_0_15px_rgba(0,213,99,0.15)] group-hover:scale-110 transition-transform">
                                <Trophy size={20} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Challenge Phase</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Choose a Challenge account and showcase your skills.
                            </p>
                        </div>

                        {/* Step 2 */}
                        <div className="p-8 rounded-3xl bg-black/40 border border-white/5 backdrop-blur-sm hover:bg-white/5 transition-colors group">
                            <div className="w-12 h-12 rounded-full bg-black border border-white/10 flex items-center justify-center text-primary mb-6 shadow-[0_0_15px_rgba(0,213,99,0.15)] group-hover:scale-110 transition-transform">
                                <Landmark size={20} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Get Funded Account</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Pass your challenge and get a simulated funded account.
                            </p>
                        </div>

                        {/* Step 3 */}
                        <div className="p-8 rounded-3xl bg-black/40 border border-white/5 backdrop-blur-sm hover:bg-white/5 transition-colors group">
                            <div className="w-12 h-12 rounded-full bg-black border border-white/10 flex items-center justify-center text-primary mb-6 shadow-[0_0_15px_rgba(0,213,99,0.15)] group-hover:scale-110 transition-transform">
                                <DollarSign size={20} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Get Rewarded</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Earn your share of the profits and receive your payout within 24 hrs.
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: rotateX(20deg) rotateY(-20deg) translateY(0); }
          50% { transform: rotateX(20deg) rotateY(-20deg) translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .perspective-[1000px] {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
      `}</style>
        </section>
    );
}
