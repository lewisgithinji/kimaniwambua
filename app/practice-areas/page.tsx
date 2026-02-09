import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import { PRACTICE_AREAS } from '@/lib/constants';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Practice Areas | Kimani Wambua & Company Advocates',
    description: 'Explore our comprehensive legal services including Property Law, Banking Securities, Commercial Law, Litigation, Company Secretarial Services, and more.',
};

export default function PracticeAreasPage() {
    return (
        <>
            <Header />
            <main>
                {/* Hero Section */}
                {/* Hero Section */}
                <PageHero
                    title="Our Practice Areas"
                    description="Comprehensive legal services tailored to meet your business and personal needs"
                    backgroundImage="https://images.unsplash.com/photo-1453948575854-3239bee241ee?q=80&w=2070&auto=format&fit=crop"
                />

                {/* Practice Areas Grid */}
                <section className="section">
                    <div className="container">
                        {PRACTICE_AREAS.map((area, index) => (
                            <div
                                key={area.id}
                                className="card"
                                style={{
                                    marginBottom: 'var(--space-xl)',
                                    display: 'grid',
                                    gridTemplateColumns: '1fr 3fr',
                                    gap: 'var(--space-xl)',
                                    alignItems: 'start',
                                }}
                            >
                                <div style={{ textAlign: 'center' }}>
                                    <div style={{ fontSize: '80px', marginBottom: 'var(--space-md)' }}>{area.icon}</div>
                                    <h3 style={{ color: 'var(--color-secondary)', fontSize: 'var(--font-size-xl)' }}>0{area.id}</h3>
                                </div>
                                <div>
                                    <h2 style={{ marginBottom: 'var(--space-md)' }}>{area.title}</h2>
                                    <p style={{ fontSize: 'var(--font-size-lg)', lineHeight: 'var(--line-height-relaxed)', marginBottom: 'var(--space-md)' }}>
                                        {area.fullDescription}
                                    </p>
                                    <div>
                                        <h4 style={{ color: 'var(--color-accent)', marginBottom: 'var(--space-sm)' }}>Key Services:</h4>
                                        <ul style={{ columns: 2, columnGap: 'var(--space-xl)', marginLeft: 'var(--space-lg)' }}>
                                            {area.services.map((service) => (
                                                <li key={service} style={{ marginBottom: 'var(--space-xs)', lineHeight: 'var(--line-height-relaxed)' }}>
                                                    {service}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Global Expertise Portal CTA */}
                <section className="relative py-32 overflow-hidden bg-black text-white">
                    <div
                        className="absolute inset-0 z-0 parallax-bg opacity-20"
                        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop)' }}
                    ></div>

                    <div className="container relative z-10">
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'stretch' }}>
                            <div className="card-premium" style={{
                                backgroundImage: 'linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.85)), url(https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=1000&auto=format&fit=crop)',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backdropFilter: 'blur(5px)',
                                border: '1px solid rgba(255,255,255,0.15)',
                                padding: '4rem',
                                borderRadius: '4px',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center'
                            }}>
                                <h2 className="section-title left" style={{ color: '#ffffff !important', fontSize: '2.5rem', marginBottom: '2rem' }}>Global Legal Architecture</h2>
                                <p style={{ fontSize: '1.25rem', lineHeight: '1.8', color: '#ffffff', opacity: 1, fontWeight: '400', marginBottom: '3rem' }}>
                                    Navigating the complexities of contemporary jurisprudence requires more than just advice; it requires strategic architectural legal maneuvers tailored to global standards.
                                </p>
                                <div>
                                    <a href="/contact" className="btn-premium btn-primary btn-lg">
                                        Establish Contact
                                    </a>
                                </div>
                            </div>
                            <div className="card-premium" style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(15px)', border: '1px solid rgba(255,255,255,0.15)', padding: '4rem', borderRadius: '4px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <h3 style={{ color: 'var(--color-accent)', fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.8rem', fontWeight: '700' }}>Strategic Consultations</h3>
                                <p style={{ color: '#ffffff', opacity: 0.95, fontSize: '1.15rem', lineHeight: '1.8', marginBottom: '2.5rem' }}>
                                    Connect with our senior partners to discuss your organization's legal roadmap and strategic risk mitigation.
                                </p>
                                <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '2.5rem' }}>
                                    <p style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'white', fontWeight: '700', fontSize: '1.1rem' }}>
                                        <span style={{ color: 'var(--color-accent)' }}>●</span> Priority Registry Active
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
