import { ArrowRight, Bitcoin, CreditCard } from 'lucide-react';
import { Button } from '@/components/Button';
import Image from 'next/image';

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-background">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero-bg.png"
                    alt="Hero Background"
                    fill
                    className="object-cover object-center opacity-60"
                    priority
                />
                {/* Overlay gradient to ensure text readability */}
                <div className="absolute inset-0 bg-background/50 bg-gradient-to-b from-background/20 via-background/40 to-background" />
            </div>

            {/* Background Gradient Effect - subtle green glow (reduced since image provides color) */}
            <div className="absolute top-[20%] left-[50%] -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none z-0" />

            <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-80px)]">
                <div className="flex flex-col items-start text-left pt-20 lg:pt-0">
                    {/* Badge */}
                    <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-gray-300 backdrop-blur-sm shadow-xl">
                        <span className="font-bold text-white">#1 Top</span> Rated PropFirm
                    </div>

                    {/* Headline */}
                    <h1 className="max-w-full text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white mb-6 leading-[1.1]">
                        Dominate the Markets. <span className="text-primary">Become the Master.</span>
                    </h1>

                    {/* Subheadline */}
                    <p className="max-w-2xl text-lg md:text-xl text-gray-400 mb-10 leading-relaxed">
                        Join the elite ranks of FundedMaster traders.
                        <br className="hidden md:block" />
                        Access up to $200k in funding and keep up to 90% of your profits.
                    </p>

                    {/* CTA Button */}
                    <div className="mb-12">
                        <Button size="lg" className="text-lg px-12 group">
                            Get Funded
                            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </div>


                </div>

                {/* Right side spacer for the background image character */}
                <div className="hidden lg:block"></div>
            </div>
        </section>
    );
}
