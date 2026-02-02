"use client";

import { useState } from 'react';
import { Button } from '@/components/Button';

export function EarningsCalculator() {
    const [accountSizeIndex, setAccountSizeIndex] = useState(3); // Default to 100K (index 3)
    const [profitRate, setProfitRate] = useState(18);

    const accountSizes = [10000, 25000, 50000, 100000, 200000];
    const currentAccountSize = accountSizes[accountSizeIndex];

    // Calculate Profit: Size * (Rate/100) * 0.95 (95% split)
    const monthlyProfit = currentAccountSize * (profitRate / 100) * 0.95;

    return (
        <section className="py-24 bg-background relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none translate-y-1/2 translate-x-1/4" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-medium text-white mb-4">
                        How much can you <span className="text-primary font-bold">Earn with Us?</span>
                    </h2>
                    <p className="text-gray-400">
                        Discover the potential to earn your desired income through trading without risking your own capital:
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">

                    {/* Sliders Area */}
                    <div className="space-y-12">

                        {/* Account Size Slider */}
                        <div>
                            <div className="flex justify-between text-white text-lg font-medium mb-8">
                                <span>Account Size</span>
                            </div>

                            <div className="relative h-2 bg-zinc-800 rounded-full mb-4">
                                <div
                                    className="absolute top-0 left-0 h-full bg-primary rounded-full transition-all duration-300"
                                    style={{ width: `${(accountSizeIndex / (accountSizes.length - 1)) * 100}%` }}
                                />
                                <input
                                    type="range"
                                    min="0"
                                    max={accountSizes.length - 1}
                                    step="1"
                                    value={accountSizeIndex}
                                    onChange={(e) => setAccountSizeIndex(parseInt(e.target.value))}
                                    className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer z-20"
                                />
                                {/* Thumb Graphic */}
                                <div
                                    className="absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-primary rounded-full shadow-[0_0_15px_rgba(0,213,99,0.8)] border-4 border-[#0a0a0a] z-10 pointer-events-none transition-all duration-300"
                                    style={{ left: `${(accountSizeIndex / (accountSizes.length - 1)) * 100}%` }}
                                />
                            </div>

                            {/* Labels */}
                            <div className="flex justify-between px-1">
                                {accountSizes.map((size, index) => (
                                    <span
                                        key={size}
                                        className={`text-xs font-bold transition-colors duration-300 ${index === accountSizeIndex ? 'text-primary' : 'text-zinc-600'
                                            }`}
                                    >
                                        ${size / 1000}K
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Profit Rate Slider */}
                        <div className="mt-12">
                            <div className="flex justify-between text-white text-lg font-medium mb-8">
                                <span>Monthly Profit Rate</span>
                            </div>

                            <div className="relative h-2 bg-zinc-800 rounded-full">
                                <div
                                    className="absolute top-0 left-0 h-full bg-primary rounded-full transition-all duration-300"
                                    style={{ width: `${(profitRate / 30) * 100}%` }}
                                />
                                <input
                                    type="range"
                                    min="1"
                                    max="30"
                                    step="1"
                                    value={profitRate}
                                    onChange={(e) => setProfitRate(parseInt(e.target.value))}
                                    className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer z-20"
                                />
                                {/* Thumb Graphic */}
                                <div
                                    className="absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-primary rounded-full shadow-[0_0_15px_rgba(0,213,99,0.8)] border-4 border-[#0a0a0a] z-10 pointer-events-none transition-all duration-300"
                                    style={{ left: `${(profitRate / 30) * 100}%` }}
                                />
                                {/* Tooltip Value */}
                                <div
                                    className="absolute top-8 -translate-x-1/2 px-3 py-1 bg-primary text-black text-xs font-extrabold rounded shadow-[0_0_10px_rgba(0,213,99,0.4)] pointer-events-none transition-all duration-300"
                                    style={{ left: `${(profitRate / 30) * 100}%` }}
                                >
                                    {profitRate}%
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Result Card */}
                    <div className="bg-[#0a0a0a] border border-white/5 rounded-3xl p-12 text-center relative overflow-hidden flex flex-col justify-center min-h-[300px]">

                        <p className="text-gray-400 text-lg mb-2 font-medium">Your total profit with</p>
                        <p className="text-white font-bold text-xl mb-8">95% Profit Split.</p>

                        <div className="text-5xl md:text-7xl font-bold text-white tracking-tight">
                            ${monthlyProfit.toLocaleString()}
                            <span className="text-2xl text-zinc-500 font-medium ml-2 relative -top-6">/month</span>
                        </div>
                    </div>

                </div>

                <div className="flex justify-center mt-20">
                    <a href="https://app.funded-master.com/checkoutpage" target="_blank" rel="noopener noreferrer">
                        <Button className="px-16 py-6 text-xl font-bold rounded-full shadow-[0_0_30px_rgba(0,213,99,0.3)] hover:shadow-[0_0_50px_rgba(0,213,99,0.5)] transition-all duration-300 hover:scale-105">
                            Get Funded
                        </Button>
                    </a>
                </div>

            </div>
        </section>
    );
}
