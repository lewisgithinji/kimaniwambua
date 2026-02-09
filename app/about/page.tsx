'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import { FIRM_INFO, CORE_VALUES, MAJOR_CLIENTS } from '@/lib/constants';

export default function AboutPage() {
    return (
        <>
            <Header />
            <main>
                <PageHero
                    title="Our Firm"
                    description={`Providing sophisticated, timely, and amicable legal solutions since ${FIRM_INFO.established}.`}
                    backgroundImage="https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2070&auto=format&fit=crop"
                />

                {/* Narrative Section */}
                <section className="section bg-white">
                    <div className="container">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="section-title left">Our Strategic Narrative</h2>
                            <div className="prose-premium">
                                <p>
                                    Kimani Wambua & Company Advocates is a premier legal practice and consultancy firm established in {FIRM_INFO.established}. Our firm was conceived with a clear directive: to provide sophisticated, timely, and amicable legal solutions that navigate the complexities of modern jurisprudence.
                                </p>
                                <p>
                                    Strategically headquartered at {FIRM_INFO.address.building} in {FIRM_INFO.address.area}, we operate from one of Nairobi's most dynamic commercial hubs. Our location reflects our commitment to being at the center of regional growth and professional excellence.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Pillars of Excellence */}
                <section className="section section-subtle">
                    <div className="container">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="card-premium p-10 bg-white">
                                <h3 className="text-secondary text-sm font-bold uppercase tracking-widest mb-4">Our Vision</h3>
                                <p className="text-lg leading-relaxed text-primary">To be renowned global legal practitioners, setting benchmarks of excellence in every territory we serve.</p>
                            </div>
                            <div className="card-premium p-10 bg-white">
                                <h3 className="text-secondary text-sm font-bold uppercase tracking-widest mb-4">Our Mission</h3>
                                <p className="text-lg leading-relaxed text-primary">To apply our core architectural competencies to provide innovative, results-oriented legal solutions for our clients.</p>
                            </div>
                            <div className="card-premium p-10 bg-white">
                                <h3 className="text-secondary text-sm font-bold uppercase tracking-widest mb-4">Our Strategy</h3>
                                <p className="text-lg leading-relaxed text-primary">Cultivating enduring, mutually beneficial relationships through a highly competent and motivated professional team.</p>
                            </div>
                        </div>

                        {/* Mission Statement Block */}
                        <div className="mt-16 bg-primary p-12 text-center relative overflow-hidden">
                            <div className="absolute inset-0 opacity-10 parallax-bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop)' }}></div>
                            <div className="relative z-10">
                                <h3 className="text-secondary text-2xl font-bold mb-6 tracking-wide">The Mission Statement</h3>
                                <p className="text-xl text-white font-light italic max-w-3xl mx-auto leading-relaxed">
                                    "To aggressively represent our clients by offering quality professional legal counsel, uncompromising dedication, and upholding the highest ethical standards of the bar."
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Core Values with Visual Hierarchy */}
                <section className="section bg-white">
                    <div className="container">
                        <div className="text-center mb-16">
                            <h2 className="section-title">Foundational Values</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {CORE_VALUES.map((value) => (
                                <div key={value.title} className="p-8 border-l-4 border-secondary bg-surface">
                                    <h3 className="text-primary text-xl font-bold mb-3">{value.title}</h3>
                                    <p className="text-primary-light leading-relaxed">{value.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Professional Integrity & Indemnity */}
                <section className="section bg-black text-white relative overflow-hidden">
                    <div className="absolute inset-0 opacity-20 parallax-bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop)' }}></div>
                    <div className="container relative z-10">
                        <div className="card-premium" style={{
                            backgroundImage: 'linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.85)), url(https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1500&auto=format&fit=crop)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(255,255,255,0.15)',
                            padding: '6rem 4rem',
                            borderRadius: '4px',
                            maxWidth: '1000px',
                            margin: '0 auto'
                        }}>
                            <h2 className="section-title left" style={{ color: '#ffffff', marginBottom: '2.5rem' }}>Professional Indemnity & Risk Management</h2>
                            <div className="space-y-8 text-white text-lg leading-relaxed font-light">
                                <p style={{ opacity: 1, fontSize: '1.25rem', lineHeight: '1.8' }}>
                                    Kimani Wambua & Company Advocates maintains full professional indemnity coverage with <strong className="text-white font-bold" style={{ color: 'var(--color-accent)' }}>Britam General Insurance Limited</strong>. Our record is exemplary, with zero claims made against the firm or its partners.
                                </p>
                                <p style={{ opacity: 0.9, fontSize: '1.15rem', lineHeight: '1.8' }}>
                                    We maintain a rigorous internal audit of our practice standards and risk management protocols to ensure our clients operate with absolute security and legal certainty. This commitment to indemnity is the cornerstone of our professional relationship with global entities.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Client Portfolio Preview */}
                <section className="section bg-white">
                    <div className="container">
                        <div className="text-center mb-16">
                            <h2 className="section-title">Strategic Clients</h2>
                            <p className="text-primary-light">Representing a portfolio of distinguished individual and corporate entities.</p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {MAJOR_CLIENTS.map((client) => (
                                <div key={client} className="p-6 border border-gray-100 flex items-center justify-center text-center hover:shadow-md transition-shadow grayscale hover:grayscale-0">
                                    <p className="font-bold text-primary text-sm tracking-tight">{client}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />

            <style jsx>{`
                .prose-premium p {
                    font-size: 1.25rem;
                    line-height: 1.8;
                    color: var(--color-primary-light);
                    margin-bottom: 2rem;
                }
            `}</style>
        </>
    );
}
