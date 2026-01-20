import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function TermsAndConditionsPage() {
    return (
        <main className="min-h-screen bg-background text-white">
            <Navbar />
            <div className="container mx-auto px-6 py-32">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">Terms and Conditions</h1>

                    <div className="prose prose-invert prose-lg max-w-none space-y-12 text-gray-400">
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">Welcome to Funded Master</h2>
                            <p>
                                These Terms and Conditions (“Agreement”) govern your use of the services (“Services”) provided by Funded Master (“Company,” “we,” “us,” or “our”). By accessing or using our Services, you (“you” or “Trader”) agree to be bound by this Agreement. If you do not agree to these terms, please do not use the Services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">Modification of Agreement</h2>
                            <p>
                                Funded Master reserves the right to modify, amend, or terminate this Agreement at any time, at its sole discretion. Your continued use of the Services following any changes will constitute your acceptance of the revised Agreement.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">Trader Representations</h2>
                            <p>
                                By using the Services, you affirm that you are at least eighteen (18) years old and have the capacity to enter into this Agreement. You represent that your use of the Services complies with all applicable laws and that you are not restricted from entering into this Agreement by any other agreements.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">Limited License</h2>
                            <p>
                                The Company grants you a limited, non-exclusive, non-transferable, non-sublicensable, revocable, and royalty-free license to access and use the Services solely for their intended purposes. You may not engage in any activities such as scraping, hacking, reverse engineering, or using the Services in any way that is unauthorized or unlawful.
                            </p>
                            <p className="mt-4">
                                All rights not expressly granted to you under this Agreement are reserved by company.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">Education</h2>
                            <p>
                                The Company may provide educational content regarding trading and investment strategies. However, such information is for general informational purposes only and should not be construed as financial or investment advice. You bear the responsibility of evaluating any data provided and agree not to hold the Company liable for any decisions made based on such information.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">Account Creation</h2>
                            <p>
                                To register as a Trader, you must provide accurate personal information, including your name, email, address, phone number, date of birth, and a unique username and password. Your account is personal and must not be shared with others. You are responsible for keeping your account information confidential. If you suspect any unauthorized access, you must notify the Company immediately.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">Prohibited Countries</h2>
                            <p>Individuals residing or having citizenship in the following countries are prohibited from registering as a Trader:</p>
                            <ul className="list-disc pl-5 mt-4 space-y-2">
                                <li>USA</li>
                                <li>North Korea</li>
                                <li>Pakistan</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">Purchases and Refunds</h2>
                            <p>
                                The Company offers products and services that may incur a monetary cost. Prices are subject to change without notice. By making a purchase, you agree that the Company is not responsible for any claims related to those purchases.
                            </p>
                            <p className="mt-4">
                                Once you begin trading your evaluation, you are not eligible for a refund. If you wish to receive a refund before taking any trades on your account, simply contact us, and we will process a refund. However, refunds are not eligible after the earlier of (a) 14 days from the date of initial purchase or (b) the date the Trader first executed a trade on the account.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">Guidelines</h2>
                            <p>
                                The Company will display guidelines associated with the Services on its website and via email. These guidelines may change at the Company's discretion and are incorporated into this Agreement.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">Trademarks</h2>
                            <p>
                                You acknowledge that all trademarks and logos displayed on the Company website are owned or licensed by the Company. You are prohibited from using the Company's trademarks in any manner that could cause confusion or mislead consumers.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">Disclosure Statement</h2>
                            <p>
                                Before participating in financial markets, carefully consider your investment objectives and risk tolerance. Trading carries risks, and you should only trade with money you can afford to lose.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">Term and Termination</h2>
                            <p>
                                This Agreement will commence when you purchase a Service and will continue until terminated by either party. The Company reserves the right to terminate your access to the Services at any time without prior notice.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">Disclaimer of Warranties and Limitation of Liability</h2>
                            <p>
                                The Services and Company website are provided "as-is" without any warranties. The Company is not liable for any claims, damages, or losses resulting from your use of the Services or any information on the website. Your use of the Services is at your own risk.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">Indemnification</h2>
                            <p>
                                You agree to indemnify and hold the Company harmless from any claims, losses, or damages arising from your use of the Services or violation of this Agreement.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">Arbitration</h2>
                            <p>
                                Any disputes arising from this Agreement will be settled by arbitration under the rules of the American Arbitration Association (AAA) in Quebec. Both parties agree to submit to the jurisdiction of Quebec.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">Force Majeure</h2>
                            <p>
                                The Company shall not be liable for any loss or damage caused by events beyond its control, including but not limited to natural disasters, governmental actions, and market conditions.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">Severability</h2>
                            <p>
                                If any provision of this Agreement is found to be invalid, the remaining provisions shall continue in full force and effect.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">Interpretation</h2>
                            <p>
                                This Agreement shall be interpreted as having been drafted by both parties.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">Assignment</h2>
                            <p>
                                You may not assign your rights under this Agreement. The Company may assign its rights at its discretion.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">Waiver</h2>
                            <p>
                                No waiver of any term of this Agreement shall be effective unless in writing and signed by the party to be charged.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">Entire Agreement</h2>
                            <p>
                                This Agreement constitutes the entire understanding between the Company and Trader regarding the Services and supersedes all prior agreements.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
