import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import { PARTNERS } from '@/lib/constants';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Our Team | Kimani Wambua & Company Advocates',
    description: 'Meet our experienced legal team - Francisca Wambua Mungai, Victor Kimani, and Daniel Njoroge.',
};

export default function TeamPage() {
    return (
        <>
            <Header />
            <main style={{ marginTop: '80px' }}>
                {/* Hero Section */}
                {/* Hero Section */}
                <PageHero
                    title="Our Team"
                    description="Meet our experienced legal professionals dedicated to providing excellence"
                />

                {/* Partners Section */}
                <section className="section">
                    <div className="container">
                        {PARTNERS.map((partner, index) => (
                            <div
                                key={partner.id}
                                className="card"
                                style={{
                                    display: 'grid',
                                    gridTemplateColumns: '300px 1fr',
                                    gap: 'var(--space-2xl)',
                                    alignItems: 'start',
                                    marginBottom: 'var(--space-2xl)',
                                }}
                            >
                                {/* Profile Image/Avatar */}
                                <div style={{ textAlign: 'center' }}>
                                    <div
                                        style={{
                                            width: '250px',
                                            height: '250px',
                                            borderRadius: 'var(--radius-full)',
                                            background: 'var(--color-secondary)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontSize: '120px',
                                            fontWeight: 'var(--font-weight-bold)',
                                            color: 'var(--color-primary)',
                                            margin: '0 auto var(--space-md)',
                                            border: '5px solid var(--color-primary)',
                                        }}
                                    >
                                        {partner.name.split(' ')[0][0]}{partner.name.split(' ')[1][0]}
                                    </div>
                                    <a href={`mailto:${partner.email}`} className="btn btn-primary" style={{ width: '100%', marginTop: 'var(--space-md)' }}>
                                        Contact
                                    </a>
                                </div>

                                {/* Details */}
                                <div>
                                    <h2 style={{ marginBottom: 'var(--space-xs)' }}>{partner.name}</h2>
                                    <p style={{ color: 'var(--color-secondary)', fontWeight: 'var(--font-weight-semibold)', fontSize: 'var(--font-size-xl)', marginBottom: 'var(--space-xs)' }}>
                                        {partner.title}
                                    </p>
                                    <p style={{ color: 'var(--color-accent)', marginBottom: 'var(--space-md)' }}>
                                        {partner.qualifications}
                                    </p>
                                    <p style={{ fontSize: 'var(--font-size-lg)', marginBottom: 'var(--space-sm)', fontWeight: 'var(--font-weight-semibold)' }}>
                                        {partner.department}
                                    </p>

                                    <div style={{ marginBottom: 'var(--space-md)' }}>
                                        <h4 style={{ color: 'var(--color-primary)', marginBottom: 'var(--space-sm)' }}>About</h4>
                                        <p style={{ lineHeight: 'var(--line-height-relaxed)' }}>{partner.bio}</p>
                                    </div>

                                    <div style={{ marginBottom: 'var(--space-md)' }}>
                                        <h4 style={{ color: 'var(--color-primary)', marginBottom: 'var(--space-sm)' }}>Experience</h4>
                                        <p style={{ lineHeight: 'var(--line-height-relaxed)' }}>{partner.experience}</p>
                                    </div>

                                    {partner.specializations && (
                                        <div>
                                            <h4 style={{ color: 'var(--color-primary)', marginBottom: 'var(--space-sm)' }}>Areas of Specialization</h4>
                                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-xs)' }}>
                                                {partner.specializations.map((spec) => (
                                                    <span
                                                        key={spec}
                                                        style={{
                                                            backgroundColor: 'var(--color-surface)',
                                                            padding: 'var(--space-xs) var(--space-sm)',
                                                            borderRadius: 'var(--radius-md)',
                                                            fontSize: 'var(--font-size-sm)',
                                                            border: '1px solid var(--color-border)',
                                                        }}
                                                    >
                                                        {spec}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    <div style={{ marginTop: 'var(--space-md)' }}>
                                        <p style={{ color: 'var(--color-text-light)' }}>
                                            <strong>Email:</strong> <a href={`mailto:${partner.email}`}>{partner.email}</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA Section */}
                <section className="section bg-surface text-center">
                    <div className="container">
                        <h2>Ready to Work With Our Team?</h2>
                        <p style={{ fontSize: 'var(--font-size-lg)', maxWidth: '700px', margin: '0 auto var(--space-xl)' }}>
                            Schedule a consultation with one of our experienced partners today
                        </p>
                        <a href="/meeting-booking" className="btn btn-primary btn-lg">
                            Book a Meeting
                        </a>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
