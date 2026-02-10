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
                    backgroundImage="https://images.unsplash.com/photo-1505663912202-ac22d4cb3707?q=80&w=2070&auto=format&fit=crop"
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

                {/* Global Expertise Portal - Immersive Branch Section */}
                <section className="relative py-48 overflow-hidden bg-black">
                    {/* Parallax Background Layer */}
                    <div
                        className="absolute inset-0 z-0"
                        style={{
                            backgroundImage: 'url(https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundAttachment: 'fixed',
                            opacity: '0.4'
                        }}
                    ></div>
                    {/* Dark Institutional Overlay */}
                    <div className="absolute inset-0 z-1" style={{ background: 'radial-gradient(circle at center, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.95) 100%)' }}></div>

                    <div className="container relative z-10">
                        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
                            {/* Narrative Plate */}
                            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-12 md:p-16 rounded-sm flex flex-col justify-center shadow-2xl">
                                <span className="text-red-600 font-bold tracking-[0.4em] uppercase text-xs mb-6 block">Strategic Command</span>
                                <h2 className="section-title left" style={{ color: '#ffffff', fontSize: '3rem', marginBottom: '2.5rem' }}>Global Legal Architecture</h2>
                                <p className="text-xl md:text-2xl leading-relaxed text-gray-200 font-light mb-12">
                                    Navigating the complexities of contemporary jurisprudence requires more than just advice; it requires strategic architectural legal maneuvers tailored to global standards.
                                </p>
                                <div>
                                    <a href="/contact" className="inline-block px-12 py-5 bg-red-600 hover:bg-red-700 text-white font-bold text-lg uppercase tracking-widest transition-all hover:-translate-y-1 hover:shadow-xl">
                                        Establish Contact
                                    </a>
                                </div>
                            </div>

                            {/* Info Card */}
                            <div className="bg-black/40 backdrop-blur-2xl border border-white/5 p-12 md:p-16 flex flex-col justify-center shadow-2xl relative">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 blur-[80px]"></div>
                                <h3 className="text-red-500 text-sm font-black tracking-[0.3em] uppercase mb-8">Strategic Consultations</h3>
                                <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-10">
                                    Connect with our senior partners to discuss your organization's legal roadmap and strategic risk mitigation. Our registry ensures top-tier priority for institutional matters.
                                </p>
                                <div className="pt-8 border-t border-white/10">
                                    <div className="flex items-center gap-4 text-white">
                                        <div className="p-2 border border-red-600/30 rounded-full animate-pulse">
                                            <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                                        </div>
                                        <span className="font-bold tracking-widest uppercase text-xs">Priority Registry Active</span>
                                    </div>
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
