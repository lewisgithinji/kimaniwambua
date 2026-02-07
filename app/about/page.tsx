import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import { FIRM_INFO, CORE_VALUES, PARTNERS, MAJOR_CLIENTS } from '@/lib/constants';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Us | Kimani Wambua & Company Advocates',
    description: 'Learn about Kimani Wambua & Company Advocates - established in 2015 to provide professional legal services in Kenya.',
};

export default function AboutPage() {
    return (
        <>
            <Header />
            <main style={{ marginTop: '80px' }}>
                {/* Hero Section */}
                {/* Hero Section */}
                <PageHero
                    title="About Us"
                    description={`Professional legal services tailored to meet your needs since ${FIRM_INFO.established}`}
                />

                {/* Main About Content */}
                <section className="section">
                    <div className="container">
                        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                            <h2>Our Story</h2>
                            <p style={{ fontSize: 'var(--font-size-lg)', lineHeight: 'var(--line-height-relaxed)' }}>
                                Kimani Wambua Advocates is a medium-sized legal practice and consultancy firm set up in {FIRM_INFO.established} to provide timely and amicable legal solutions to meet the needs of its clients.
                            </p>
                            <p style={{ fontSize: 'var(--font-size-lg)', lineHeight: 'var(--line-height-relaxed)' }}>
                                We are strategically located at {FIRM_INFO.address.building}, {FIRM_INFO.address.area}, which is a fast-growing residential and commercial hub in Nairobi.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Vision, Mission, Strategy */}
                <section className="section bg-surface">
                    <div className="container">
                        <div className="grid grid-cols-3" style={{ marginBottom: 'var(--space-2xl)' }}>
                            <div className="card">
                                <h3 style={{ color: 'var(--color-secondary)', marginBottom: 'var(--space-md)' }}>Our Vision</h3>
                                <p style={{ fontSize: 'var(--font-size-lg)' }}>To be renowned global legal practitioners.</p>
                            </div>
                            <div className="card">
                                <h3 style={{ color: 'var(--color-secondary)', marginBottom: 'var(--space-md)' }}>Our Mission</h3>
                                <p style={{ fontSize: 'var(--font-size-lg)' }}>To apply our core competencies to provide professional innovative legal solutions to satisfy our clients' needs.</p>
                            </div>
                            <div className="card">
                                <h3 style={{ color: 'var(--color-secondary)', marginBottom: 'var(--space-md)' }}>Our Strategy</h3>
                                <p style={{ fontSize: 'var(--font-size-lg)' }}>Our focus is to cultivate and maintain mutually beneficial relationships with our clients and offer quality legal services through a highly competent and motivated professional team.</p>
                            </div>
                        </div>

                        {/* Mission Statement */}
                        <div className="card" style={{ background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%)', color: 'var(--color-text-white)', padding: 'var(--space-2xl)', textAlign: 'center' }}>
                            <h3 style={{ color: 'var(--color-secondary)', fontSize: 'var(--font-size-2xl)', marginBottom: 'var(--space-md)' }}>Mission Statement</h3>
                            <p style={{ fontSize: 'var(--font-size-lg)', lineHeight: 'var(--line-height-relaxed)' }}>
                                To aggressively represent our clients by offering quality professional legal counsel, uncompromising dedication and ensuring a high reputation as well as upholding ethical standards.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Core Values */}
                <section className="section">
                    <div className="container">
                        <div className="text-center" style={{ marginBottom: 'var(--space-2xl)' }}>
                            <h2>Our Core Values</h2>
                        </div>
                        <div className="grid grid-cols-2">
                            {CORE_VALUES.map((value) => (
                                <div key={value.title} className="card">
                                    <h3 style={{ color: 'var(--color-secondary)', marginBottom: 'var(--space-md)' }}>{value.title}</h3>
                                    <p style={{ fontSize: 'var(--font-size-lg)', lineHeight: 'var(--line-height-relaxed)' }}>{value.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Professional Indemnity */}
                <section className="section bg-surface">
                    <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
                        <div className="card">
                            <h2>Professional Indemnity Insurance</h2>
                            <p style={{ fontSize: 'var(--font-size-lg)', lineHeight: 'var(--line-height-relaxed)' }}>
                                Our law firm is currently covered by professional indemnity insurance with Heritage Insurance Limited. No claims have been made against our law firm, any of our partners or against our insurance policy.
                            </p>
                            <p style={{ fontSize: 'var(--font-size-lg)', lineHeight: 'var(--line-height-relaxed)' }}>
                                We regularly review our practice standards and risk management policies so that we and our clients are adequately covered at all times. This ensures we meet the recommended requirements of our business partners and clients.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Our Clients */}
                <section className="section">
                    <div className="container">
                        <div className="text-center" style={{ marginBottom: 'var(--space-2xl)' }}>
                            <h2>Our Valued Clients</h2>
                            <p style={{ fontSize: 'var(--font-size-lg)' }}>
                                We represent a number of individual and corporate clients
                            </p>
                        </div>
                        <div className="grid grid-cols-3">
                            {MAJOR_CLIENTS.map((client) => (
                                <div
                                    key={client}
                                    className="card text-center"
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        minHeight: '120px',
                                    }}
                                >
                                    <p style={{ fontSize: 'var(--font-size-base)', fontWeight: 'var(--font-weight-semibold)' }}>{client}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
