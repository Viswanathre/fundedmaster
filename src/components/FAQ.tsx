"use client";

import { useState } from 'react';
import { Plus, X } from 'lucide-react';

interface FAQItem {
    question: string;
    answer: string;
}

const faqs: FAQItem[] = [
    {
        question: "What is Funded Master?",
        answer: "To win the game, you need strong support and diligent preparation. Join For Traders Community."
    },
    {
        question: "Who can apply?",
        answer: "Traders from all over the world can apply, provided they are over 18 years old and capable of trading in financial markets."
    },
    {
        question: "How does funding work?",
        answer: "Pass our evaluation challenge to demonstrate your skills. Once verified, you receive a funded account where you can trade and earn real profit splits."
    },
    {
        question: "Which markets can I trade?",
        answer: "You can trade a wide range of instruments including Forex majors, minors, commodities, indices, and cryptocurrencies."
    },
    {
        question: "How do you help manage risk?",
        answer: "We provide strict drawdown limits and risk management rules to protect capital. Our dashboard helps you track your performance in real-time."
    },
    {
        question: "Do you offer resources for new traders?",
        answer: "Yes, we offer educational materials, trading guides, and a supportive community to help you succeed."
    },
    {
        question: "How fast are payouts?",
        answer: "Payouts are processed incredibly fast, typically within 24 hours of your request once you are eligible."
    },
    {
        question: "What trading platforms do you support?",
        answer: "We support industry-standard platforms like MetaTrader 4, MetaTrader 5, and cTrader for the best trading experience."
    }
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 bg-background relative overflow-hidden">
            {/* Right Gradient Glow */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none translate-x-1/2" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-medium text-white mb-4">
                        Frequently Asked <span className="text-primary font-bold">Questions</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        I know... just like you many traders have these questions, so here are the answers!
                    </p>
                </div>

                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`rounded-2xl transition-all duration-300 overflow-hidden ${openIndex === index
                                ? 'bg-card border border-primary/20'
                                : 'bg-white/5 border border-white/5 hover:border-white/10'
                                }`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left"
                            >
                                <span className={`text-lg font-medium pr-8 ${openIndex === index ? 'text-primary' : 'text-white'}`}>
                                    {faq.question}
                                </span>
                                <div className={`p-1 rounded-full border transition-all duration-300 ${openIndex === index
                                    ? 'border-transparent text-primary rotate-180'
                                    : 'border-white/20 text-white hover:border-white/40'
                                    }`}>
                                    {openIndex === index ? <X size={20} /> : <Plus size={20} />}
                                </div>
                            </button>

                            <div
                                className={`grid transition-all duration-300 ease-in-out ${openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                                    }`}
                            >
                                <div className="overflow-hidden">
                                    <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
