import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";
import { ScrollReveal } from "@/components/ScrollReveal";
import { TrendingUp, Users, Wallet, Zap, CheckCircle2, ArrowRight } from "lucide-react";

export default function AffiliatesPage() {
    return (
        <main className="min-h-screen bg-background text-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center pt-20 pb-20 overflow-hidden">
                {/* Background Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <ScrollReveal width="100%">
                        <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-wider mb-6 border border-primary/20">
                            PARTNER PROGRAM
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                            Earn with <span className="text-primary">Funded Master</span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                            Join the fastest growing proprietary trading firm affiliate program.
                            Earn up to <span className="text-white font-bold">15% commission</span> for every trader you introduce.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button size="lg" className="px-10 py-6 text-lg">
                                Become a Partner
                            </Button>
                            <Button variant="outline" size="lg" className="px-10 py-6 text-lg">
                                Member Login
                            </Button>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Stats/Benefits Grid */}
            <section className="py-20 bg-white/5 border-y border-white/5">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <FeatureCard
                            icon={<Wallet className="text-primary w-8 h-8" />}
                            title="High Commissions"
                            desc="Earn 10% to 15% commission on all plan purchases."
                        />
                        <FeatureCard
                            icon={<Zap className="text-primary w-8 h-8" />}
                            title="Fast Payouts"
                            desc="Get paid monthly via Bank Transfer or Crypto."
                        />
                        <FeatureCard
                            icon={<TrendingUp className="text-primary w-8 h-8" />}
                            title="High Conversion"
                            desc="Our premium brand converts visitors into multiple buyers."
                        />
                        <FeatureCard
                            icon={<Users className="text-primary w-8 h-8" />}
                            title="Real-time Tracking"
                            desc="Track your clicks and earnings in real-time."
                        />
                    </div>
                </div>
            </section>

            {/* Comparison / Tiers */}
            <section className="py-24 relative">
                <div className="container mx-auto px-6">
                    <div className="mb-16 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Commission Structure</h2>
                        <p className="text-gray-400">The more you refer, the more you earn.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {/* Tier 1 */}
                        <div className="bg-card p-8 rounded-3xl border border-white/5 hover:border-primary/30 transition-all duration-300">
                            <div className="mb-6">
                                <span className="text-gray-400 text-sm font-medium uppercase tracking-wider">Standard Partner</span>
                                <h3 className="text-4xl font-bold mt-2">10% <span className="text-lg text-gray-500 font-normal">commission</span></h3>
                            </div>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center gap-3 text-gray-300">
                                    <CheckCircle2 className="text-primary w-5 h-5" />
                                    <span>0 - 50 Referrals</span>
                                </li>
                                <li className="flex items-center gap-3 text-gray-300">
                                    <CheckCircle2 className="text-primary w-5 h-5" />
                                    <span>Standard Marketing Assets</span>
                                </li>
                                <li className="flex items-center gap-3 text-gray-300">
                                    <CheckCircle2 className="text-primary w-5 h-5" />
                                    <span>Monthly Payouts</span>
                                </li>
                            </ul>
                            <Button variant="outline" className="w-full">Start Here</Button>
                        </div>

                        {/* Tier 2 */}
                        <div className="bg-primary/5 p-8 rounded-3xl border border-primary/20 relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-primary text-black text-xs font-bold px-3 py-1 rounded-bl-xl">
                                VIP
                            </div>
                            <div className="mb-6">
                                <span className="text-primary text-sm font-medium uppercase tracking-wider">Super Partner</span>
                                <h3 className="text-4xl font-bold mt-2 text-primary">15% <span className="text-lg text-primary/70 font-normal">commission</span></h3>
                            </div>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center gap-3 text-white">
                                    <CheckCircle2 className="text-primary w-5 h-5" />
                                    <span>51+ Referrals</span>
                                </li>
                                <li className="flex items-center gap-3 text-white">
                                    <CheckCircle2 className="text-primary w-5 h-5" />
                                    <span>Custom Marketing Assets</span>
                                </li>
                                <li className="flex items-center gap-3 text-white">
                                    <CheckCircle2 className="text-primary w-5 h-5" />
                                    <span>Priority Support</span>
                                </li>
                            </ul>
                            <Button variant="primary" className="w-full">Upgrade Now</Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-24 bg-white/[0.02]">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">How it works?</h2>
                        <p className="text-gray-400">Simple steps to start earning.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-12 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

                        <StepCard
                            number="01"
                            title="Register"
                            desc="Sign up for our affiliate program in less than 2 minutes."
                        />
                        <StepCard
                            number="02"
                            title="Promote"
                            desc="Share your unique link with your audience or friends."
                        />
                        <StepCard
                            number="03"
                            title="Earn"
                            desc="Get paid every month for every qualified sale."
                        />
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="bg-gradient-to-br from-zinc-900 to-black p-12 rounded-[2.5rem] border border-white/10 text-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-primary/5 pattern-grid-lg opacity-20" />

                        <div className="relative z-10 max-w-3xl mx-auto">
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to start earning?</h2>
                            <p className="text-gray-400 text-lg mb-10">
                                Join hundreds of successful partners promoting Funded Master today.
                            </p>
                            <Button size="lg" className="px-12 py-6 text-lg shadow-[0_0_30px_rgba(0,213,99,0.3)]">
                                Join Program Now <ArrowRight className="ml-2" />
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
    return (
        <div className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
            <div className="mb-4">{icon}</div>
            <h3 className="text-lg font-bold mb-2">{title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
        </div>
    );
}

function StepCard({ number, title, desc }: { number: string, title: string, desc: string }) {
    return (
        <div className="relative flex flex-col items-center text-center z-10">
            <div className="w-24 h-24 rounded-full bg-background border-4 border-white/5 flex items-center justify-center text-2xl font-bold text-primary mb-6 shadow-lg">
                {number}
            </div>
            <h3 className="text-xl font-bold mb-3">{title}</h3>
            <p className="text-gray-400 max-w-xs">{desc}</p>
        </div>
    );
}

