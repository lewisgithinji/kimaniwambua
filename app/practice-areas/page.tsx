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
            <main style={{ marginTop: '80px' }}>
                {/* Hero Section */}
                {/* Hero Section */}
                <PageHero
                    title="Our Practice Areas"
                    description="Comprehensive legal services tailored to meet your business and personal needs"
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

                {/* CTA Section */}
                <section className="section bg-surface">
                    <div className="container text-center">
                        <h2>Need Legal Assistance?</h2>
                        <p style={{ fontSize: 'var(--font-size-lg)', maxWidth: '700px', margin: '0 auto var(--space-xl)' }}>
                            Our team of experienced legal professionals is ready to help you with your legal needs
                        </p>
                        <a href="/contact" className="btn btn-primary btn-lg">
                            Contact Us Today
                        </a>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
