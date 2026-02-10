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

                {/* Narrative Section - White Background */}
                <section className="section bg-white">
                    <div className="container">
                        <div className="narrative-flex-container">
                            <div className="narrative-content-col">
                                <h2 className="section-title left" style={{ marginBottom: '2rem' }}>Our Strategic Narrative</h2>
                                <div className="prose-refined">
                                    <p>
                                        Kimani Wambua & Company Advocates is a premier legal practice and consultancy firm established in {FIRM_INFO.established}. Our firm was conceived with a clear directive: to provide sophisticated, timely, and amicable legal solutions that navigate the complexities of modern jurisprudence.
                                    </p>
                                    <p>
                                        Strategically headquartered at {FIRM_INFO.address.building} in {FIRM_INFO.address.area}, we operate from one of Nairobi's most dynamic commercial hubs. Our location reflects our commitment to being at the center of regional growth and professional excellence.
                                    </p>
                                </div>
                            </div>
                            <div className="narrative-image-col">
                                <div
                                    className="scales-of-justice-img"
                                    style={{
                                        backgroundImage: 'url(https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop)',
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        height: '500px',
                                        width: '100%',
                                        borderRadius: '8px',
                                        boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                                    }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Core Pillars - Parallax Dark Background */}
                <section className="section relative overflow-hidden" style={{ backgroundColor: '#000000', minHeight: '500px', display: 'flex', alignItems: 'center' }}>
                    {/* Parallax Background Image */}
                    <div
                        className="absolute inset-0 z-0"
                        style={{
                            backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundAttachment: 'fixed'
                        }}
                    ></div>
                    {/* Rich Dark Overlay */}
                    <div className="absolute inset-0 z-1" style={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}></div>

                    <div className="container relative z-10">
                        <div className="pillars-wrapper">
                            <div className="pillar-glass-horizontal">
                                <div className="pillar-icon-box" style={{ background: 'rgba(255,255,255,0.1)', color: '#ffffff', border: '1px solid rgba(255,255,255,0.2)' }}>⚖️</div>
                                <div className="pillar-text-box">
                                    <h3 className="pillar-label-small" style={{ color: '#ffffff' }}>Our Vision</h3>
                                    <p className="pillar-p" style={{ color: 'rgba(255,255,255,0.8)' }}>To be renowned global legal practitioners, setting benchmarks of excellence in every territory we serve.</p>
                                </div>
                            </div>

                            <div className="pillar-glass-horizontal">
                                <div className="pillar-icon-box" style={{ background: 'rgba(255,255,255,0.1)', color: '#ffffff', border: '1px solid rgba(255,255,255,0.2)' }}>🏛️</div>
                                <div className="pillar-text-box">
                                    <h3 className="pillar-label-small" style={{ color: '#ffffff' }}>Our Mission</h3>
                                    <p className="pillar-p" style={{ color: 'rgba(255,255,255,0.8)' }}>To apply our core architectural competencies to provide innovative, results-oriented legal solutions for our clients.</p>
                                </div>
                            </div>

                            <div className="pillar-glass-horizontal">
                                <div className="pillar-icon-box" style={{ background: 'rgba(255,255,255,0.1)', color: '#ffffff', border: '1px solid rgba(255,255,255,0.2)' }}>🤝</div>
                                <div className="pillar-text-box">
                                    <h3 className="pillar-label-small" style={{ color: '#ffffff' }}>Our Strategy</h3>
                                    <p className="pillar-p" style={{ color: 'rgba(255,255,255,0.8)' }}>Cultivating enduring, mutually beneficial relationships through a highly competent and motivated professional team.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* The Mission Statement - White Background with Red Stripes */}
                <section className="section bg-white relative overflow-hidden section-red-stripes">
                    <div className="container relative z-10">
                        <div className="max-w-4xl mx-auto">
                            <div className="quote-box-modern">
                                <div className="quote-mark-large">"</div>
                                <p className="mission-quote-executive">
                                    To aggressively represent our clients by offering quality professional legal counsel, uncompromising dedication, and upholding the highest ethical standards of the bar.
                                </p>
                                <div className="quote-label-footer">
                                    <span className="line-red"></span>
                                    <span className="tag-text">The Mission Statement</span>
                                    <span className="line-red"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Foundational Values - Silk Vellum Aesthetic */}
                <section className="section section-vellum-texture relative overflow-hidden">
                    {/* Decorative Red Tape - Subtle Vertical Thread */}
                    <div className="absolute top-0 left-12 w-[1px] h-full bg-red-600 opacity-20 z-0"></div>
                    <div className="absolute top-0 right-12 w-[1px] h-full bg-red-600 opacity-20 z-0"></div>

                    <div className="container relative z-10">
                        <div className="flex flex-col lg:flex-row items-center justify-between mb-20">
                            <div className="max-w-xl">
                                <h2 className="section-title left mb-0">Foundational Values</h2>
                                <p className="text-gray-500 mt-4 uppercase tracking-widest text-xs font-bold">The Pillars of our integrity</p>
                            </div>
                            <div className="hidden lg:block w-32 h-[1px] bg-red-600 opacity-30"></div>
                        </div>

                        <div className="values-staggered-row">
                            {CORE_VALUES.map((value, idx) => (
                                <div key={value.title} className={`value-vellum-card ${idx % 2 === 0 ? 'stagger-up' : 'stagger-down'}`}>
                                    <div className="card-inner-padding">
                                        <div className="value-index-folio">SECTION 0{idx + 1}</div>
                                        <h3 className="value-heading-serif">{value.title}</h3>
                                        <div className="value-accent-stripe"></div>
                                        <p className="value-body-text">{value.description}</p>
                                    </div>
                                    <div className="card-corner-accent"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Professional Indemnity - Guaranteed Visibility Layout */}
                <section className="section bg-white relative overflow-hidden">
                    <div className="container">
                        <div className="indemnity-hub relative overflow-hidden" style={{ backgroundColor: '#1a1a1a' }}>
                            {/* Visual Background Layer */}
                            <div
                                className="absolute inset-0"
                                style={{
                                    backgroundImage: 'url(https://images.unsplash.com/photo-1453904300235-0f2f60b15b5d?q=80&w=2070&auto=format&fit=crop)',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    zIndex: 1
                                }}
                            ></div>
                            {/* Sophisticated Dark Overlay */}
                            <div
                                className="absolute inset-0"
                                style={{
                                    background: 'linear-gradient(90deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.6) 100%)',
                                    zIndex: 2
                                }}
                            ></div>

                            <div className="indemnity-content relative" style={{ zIndex: 10 }}>
                                <h2 className="section-title left" style={{ color: '#ffffff' }}>Professional Indemnity</h2>
                                <p className="mb-6 text-xl leading-relaxed text-white font-light">
                                    Kimani Wambua & Company Advocates maintains full professional indemnity coverage with <strong className="text-red-500 font-bold">Britam General Insurance Limited</strong>. Our record is exemplary, with zero claims made against the firm or its partners.
                                </p>
                                <p className="text-gray-300 text-lg leading-relaxed">
                                    We maintain a rigorous internal audit of our practice standards and risk management protocols to ensure our clients operate with absolute security and legal certainty.
                                </p>
                            </div>
                            <div className="indemnity-badge relative" style={{ zIndex: 10 }}>
                                <div className="badge-seal-executive">
                                    <div className="seal-outer-thread"></div>
                                    <span className="badge-year">EST 2015</span>
                                    <div className="seal-divider"></div>
                                    <span className="badge-status">CERTIFIED<br />EXCELLENCE</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Strategic Clients - Infinite Auto-Scrolling Row */}
                <section className="py-24 bg-gray-50/50 border-y border-gray-100 overflow-hidden">
                    <div className="container mb-12">
                        <div className="text-center">
                            <h2 className="section-title" style={{ fontSize: '2rem' }}>Strategic Client Portfolio</h2>
                            <div className="h-1 w-12 bg-red-600 mx-auto mt-4 opacity-40"></div>
                        </div>
                    </div>

                    <div className="client-marquee-container">
                        <div className="client-marquee-track">
                            {/* Original List */}
                            {MAJOR_CLIENTS.map((client) => (
                                <div key={client} className="client-scroller-card">
                                    <span className="client-scroller-name">{client}</span>
                                </div>
                            ))}
                            {/* Duplicated List for Seamless Loop */}
                            {MAJOR_CLIENTS.map((client) => (
                                <div key={`${client}-clone`} className="client-scroller-card">
                                    <span className="client-scroller-name">{client}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />

            <style jsx>{`
                .prose-refined p {
                    font-size: 1.15rem;
                    line-height: 1.8;
                    color: var(--color-text-light);
                    margin-bottom: 2rem;
                }

                .pillars-wrapper {
                    display: flex;
                    flex-direction: row;
                    gap: 2rem;
                    width: 100%;
                }

                .pillar-glass-horizontal {
                    flex: 1;
                    background: rgba(255, 255, 255, 0.03);
                    backdrop-filter: blur(15px);
                    -webkit-backdrop-filter: blur(15px);
                    padding: 2.5rem 2rem;
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 4px;
                    display: flex;
                    flex-direction: row;
                    align-items: flex-start;
                    gap: 1.5rem;
                    transition: all var(--transition-base);
                }

                .pillar-glass-horizontal:hover {
                    transform: translateY(-5px);
                    background: rgba(255, 255, 255, 0.06);
                    border-color: var(--color-accent);
                    box-shadow: 0 20px 40px rgba(0,0,0,0.5);
                }

                .pillar-icon-box {
                    font-size: 2.2rem;
                    flex-shrink: 0;
                    width: 60px;
                    height: 60px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 4px;
                }

                .pillar-text-box {
                    flex: 1;
                    text-align: left;
                }

                .pillar-label-small {
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    font-size: 1rem;
                    font-weight: 800;
                    margin-bottom: 0.5rem;
                }

                .pillar-p {
                    line-height: 1.6;
                    font-size: 0.95rem;
                    margin: 0;
                }

                /* Mission Statement - Red Stripes Style */
                .section-red-stripes::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    right: 0;
                    width: 300px;
                    height: 100%;
                    background: repeating-linear-gradient(
                        -45deg,
                        transparent,
                        transparent 20px,
                        rgba(237, 29, 36, 0.03) 20px,
                        rgba(237, 29, 36, 0.03) 40px
                    );
                    pointer-events: none;
                }

                .quote-box-modern {
                    padding: 4rem;
                    position: relative;
                    background: #ffffff;
                    text-align: center;
                }

                .quote-mark-large {
                    font-family: 'Playfair Display', serif;
                    font-size: 10rem;
                    line-height: 0;
                    height: 4rem;
                    color: var(--color-accent);
                    opacity: 0.2;
                    margin-bottom: 2rem;
                }

                .mission-quote-executive {
                    font-family: 'Playfair Display', serif;
                    font-style: italic;
                    font-size: 2rem;
                    line-height: 1.5;
                    color: var(--color-primary);
                    margin-bottom: 3.5rem;
                    position: relative;
                    z-index: 2;
                }

                .quote-label-footer {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 1.5rem;
                }

                .line-red {
                    width: 40px;
                    height: 2px;
                    background: var(--color-accent);
                }

                .tag-text {
                    text-transform: uppercase;
                    letter-spacing: 0.4em;
                    font-size: 0.8rem;
                    font-weight: 800;
                    color: var(--color-secondary);
                }

                .section-vellum-texture {
                    background-color: #f9f8f6;
                    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3%3Cfilter id='noiseFilter'%3%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3%3C/filter%3%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3%3C/svg%3");
                    background-repeat: repeat;
                    background-size: 150px 150px;
                    padding: 8rem 0;
                }

                .values-staggered-row {
                    display: flex;
                    flex-direction: row;
                    gap: 3rem;
                    width: 100%;
                }

                .value-vellum-card {
                    flex: 1;
                    background: #ffffff;
                    padding: 4rem;
                    position: relative;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.03), 0 1px 2px rgba(0,0,0,0.02);
                    transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                    border: 1px solid rgba(0,0,0,0.03);
                }

                .value-vellum-card:hover {
                    box-shadow: 0 40px 70px rgba(0,0,0,0.08);
                    transform: scale(1.02);
                }

                .stagger-up { transform: translateY(-20px); }
                .stagger-down { transform: translateY(20px); }

                @media (max-width: 1024px) {
                    .values-staggered-row { flex-direction: column; gap: 4rem; }
                    .stagger-up, .stagger-down { transform: translateY(0); }
                }

                .card-inner-padding { position: relative; z-index: 2; }

                .value-index-folio {
                    font-size: 0.7rem;
                    font-weight: 800;
                    color: #999;
                    letter-spacing: 0.3em;
                    margin-bottom: 2rem;
                }

                .value-heading-serif {
                    font-family: 'Playfair Display', serif;
                    font-size: 2rem;
                    color: var(--color-primary);
                    font-weight: 700;
                    margin-bottom: 2rem;
                }

                .value-accent-stripe {
                    width: 30px;
                    height: 2px;
                    background: var(--color-accent);
                    margin-bottom: 2.5rem;
                }

                .value-body-text {
                    color: var(--color-text-light);
                    line-height: 1.8;
                    font-size: 1.1rem;
                }

                .card-corner-accent {
                    position: absolute;
                    top: 0;
                    right: 0;
                    width: 40px;
                    height: 40px;
                    background: linear-gradient(135deg, transparent 50%, rgba(237, 29, 36, 0.05) 50%);
                }

                .indemnity-hub {
                    display: grid;
                    grid-template-columns: 2fr 1fr;
                    gap: 4rem;
                    align-items: center;
                    padding: 6rem;
                    border: 1px solid var(--color-border);
                    position: relative;
                }

                .indemnity-content {
                    position: relative;
                    z-index: 10;
                }

                .indemnity-badge {
                    display: flex;
                    justify-content: center;
                    position: relative;
                    z-index: 10;
                }

                .badge-seal-executive {
                    width: 200px;
                    height: 200px;
                    border: 2px solid rgba(255, 255, 255, 0.2);
                    border-radius: 50%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    padding: 2rem;
                    position: relative;
                    background: rgba(255, 255, 255, 0.05);
                    backdrop-filter: blur(10px);
                }

                .seal-outer-thread {
                    position: absolute;
                    inset: -8px;
                    border: 1px dashed rgba(237, 29, 36, 0.4);
                    border-radius: 50%;
                    animation: spin 30s linear infinite;
                }

                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }

                .badge-year {
                    font-weight: 800;
                    font-size: 1.4rem;
                    color: #ffffff;
                    margin-bottom: 0.5rem;
                }

                .seal-divider {
                    width: 40px;
                    height: 2px;
                    background: var(--color-accent);
                    margin: 0.5rem 0;
                }

                .badge-status {
                    font-size: 0.7rem;
                    text-transform: uppercase;
                    letter-spacing: 0.2em;
                    color: rgba(255, 255, 255, 0.8);
                    font-weight: 700;
                    line-height: 1.4;
                }

                .client-marquee-container {
                    width: 100%;
                    overflow: hidden;
                    position: relative;
                    padding: 2rem 0;
                }

                .client-marquee-track {
                    display: flex;
                    width: max-content;
                    animation: marquee-scroll 40s linear infinite;
                }

                @keyframes marquee-scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }

                .client-marquee-container:hover .client-marquee-track {
                    animation-play-state: paused;
                }

                .client-scroller-card {
                    background: #ffffff;
                    padding: 2.5rem 3.5rem;
                    margin: 0 1rem;
                    border: 1px solid rgba(0,0,0,0.05);
                    box-shadow: 0 5px 15px rgba(0,0,0,0.02);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    min-width: 320px;
                    transition: all 0.4s ease;
                }

                .client-scroller-card:hover {
                    border-color: var(--color-accent);
                    box-shadow: 0 20px 40px rgba(0,0,0,0.05);
                    transform: translateY(-5px);
                }

                .client-scroller-name {
                    font-weight: 800;
                    font-size: 0.85rem;
                    text-transform: uppercase;
                    letter-spacing: 0.15em;
                    color: var(--color-primary);
                    text-align: center;
                    white-space: normal;
                }

                .narrative-flex-container {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    gap: 5rem;
                    width: 100%;
                }

                .narrative-content-col {
                    flex: 1;
                    min-width: 0;
                }

                .narrative-image-col {
                    flex: 1;
                    min-width: 0;
                }

                @media (max-width: 900px) {
                    .narrative-flex-container {
                        flex-direction: column;
                        gap: 3rem;
                    }
                    .narrative-content-col, .narrative-image-col {
                        width: 100%;
                    }
                }

                @media (max-width: 640px) {
                    .card-content-stack {
                        padding: 3.5rem 2rem;
                    }
                    .card-heading {
                        font-size: 1.35rem;
                    }
                }

                @media (max-width: 1024px) {
                    .indemnity-hub {
                        grid-template-columns: 1fr;
                        padding: 3rem;
                        text-align: center;
                    }
                    .indemnity-badge {
                        order: -1;
                    }
                }
            `}</style>
        </>
    );
}
