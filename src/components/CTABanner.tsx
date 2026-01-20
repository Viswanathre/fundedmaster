import { Button } from '@/components/Button';

export function CTABanner() {
    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-6">
                <div className="relative rounded-[3rem] bg-gradient-to-b from-[#0c2e1f] to-background p-12 md:p-24 text-center overflow-hidden border border-white/5">

                    {/* Background Glow */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-primary/5 blur-3xl pointer-events-none" />

                    <div className="relative z-10 max-w-4xl mx-auto">
                        <h2 className="text-4xl md:text-6xl font-medium text-white mb-12">
                            Let's join with millions of <br />
                            <span className="text-primary font-bold">Traders in the world</span>
                        </h2>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button className="px-8 py-4 text-base font-semibold bg-primary hover:bg-primary-hover text-primary-foreground rounded-full min-w-[160px]">
                                Get Funded
                            </Button>
                            <Button variant="outline" className="px-8 py-4 text-base font-semibold rounded-full min-w-[160px] border-white/10 hover:bg-white/5">
                                Try Demo
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
