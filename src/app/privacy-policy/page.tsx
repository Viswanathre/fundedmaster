import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen bg-background text-white">
            <Navbar />
            <div className="container mx-auto px-6 py-32">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">Privacy Policy</h1>

                    <div className="prose prose-invert prose-lg max-w-none space-y-12 text-gray-400">
                        {/* Table of Contents */}
                        <div className="bg-white/5 border border-white/5 rounded-2xl p-8">
                            <h3 className="text-white text-xl font-bold mb-4">Contents</h3>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Privacy Notice</li>
                                <li>Trading Rules</li>
                                <li>What Information Do We Collect?</li>
                                <li>Sensitive Information</li>
                                <li>Payment Information</li>
                            </ul>
                        </div>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">Privacy Notice</h2>
                            <p>
                                Funded Master ("Company," "we," "us," or "our") is committed to protecting your privacy. This privacy notice outlines our data collection and processing practices. By using our services, you acknowledge and agree to our policies regarding the handling of your personal information. If you have any questions or concerns, please contact us at <a href="mailto:support@fundedmaster.com" className="text-primary hover:underline">support@fundedmaster.com</a>. If you do not agree with our policies, we kindly ask you to refrain from using our services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">Trading Rules</h2>
                            <p>
                                Our trading rules are designed to create a transparent, fair and supportive trading environment. These guidelines protect the trading experience for all participants while promoting responsible and sustainable practices.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">What Information Do We Collect?</h2>
                            <p>We collect personal information that you voluntarily provide to us when you:</p>
                            <ul className="list-disc pl-5 mt-4 space-y-2">
                                <li>Register for our services</li>
                                <li>Express interest in our products or services</li>
                                <li>Participate in activities on our platform</li>
                                <li>Contact us directly</li>
                            </ul>
                            <p className="mt-4">
                                The personal information we collect may vary depending on how you interact with us and which services you use. This information may include, but is not limited to:
                            </p>
                            <ul className="list-disc pl-5 mt-4 space-y-2">
                                <li>Full name</li>
                                <li>Phone number</li>
                                <li>Email address</li>
                                <li>Physical address</li>
                                <li>Billing address</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">Sensitive Information</h2>
                            <p>
                                We do not collect sensitive personal information, such as Social Security numbers or any other data that is not essential to the operation of our business.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">Payment Information</h2>
                            <p className="mb-4">
                                When you make a purchase, we may collect the information necessary to process your payment, including payment instrument numbers and security codes associated with your payment method.
                            </p>
                            <p className="mb-4">
                                All payment data is securely processed by our third-party payment providers. We do not store or manage sensitive payment details directly. For more information, please refer to the privacy policies of our payment processors, available on their respective websites.
                            </p>
                            <p>
                                It is important that the personal information you provide is accurate, complete, and up to date. You are responsible for notifying us of any changes to your information.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
