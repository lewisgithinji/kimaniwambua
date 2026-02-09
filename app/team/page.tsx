'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import { PARTNERS, FIRM_INFO } from '@/lib/constants';

export default function TeamPage() {
    return (
        <>
            <Header />
            <main>
                <PageHero
                    title="Our Leadership"
                    description="Distinguished legal professionals committed to providing sophisticated legal solutions."
                    backgroundImage="https://images.unsplash.com/photo-1436450412740-6b988f486c6b?q=80&w=2070&auto=format&fit=crop"
                />

                <section className="section bg-white">
                    <div className="container">
                        <div className="text-center" style={{ marginBottom: 'var(--space-3xl)' }}>
                            <h2 className="section-title">The Partners</h2>
                            <p style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--color-text-light)' }}>
                                Our team brings together decades of experience across diverse legal disciplines,
                                ensuring that every client receives the highest level of professional representation.
                            </p>
                        </div>

                        <div className="team-container">
                            {PARTNERS.map((partner) => (
                                <div key={partner.id} className="team-profile card-premium">
                                    <div className="profile-sidebar">
                                        <div className="profile-avatar">
                                            {partner.name.split(' ')[0][0]}{partner.name.split(' ')[1] ? partner.name.split(' ')[1][0] : ''}
                                        </div>
                                        <div className="profile-contact-info">
                                            <a href={`mailto:${partner.email}`} className="btn-premium btn-secondary">
                                                Electronic Mail
                                            </a>
                                        </div>
                                    </div>

                                    <div className="profile-main">
                                        <div className="profile-header">
                                            <h2 className="profile-name">{partner.name}</h2>
                                            <div className="profile-meta">
                                                <span className="profile-role">{partner.title}</span>
                                                <span className="separator">|</span>
                                                <span className="profile-qualifications">{partner.qualifications}</span>
                                            </div>
                                            <div className="profile-dept">{partner.department}</div>
                                        </div>

                                        <div className="profile-content">
                                            <div className="content-block">
                                                <h3>Professional Overview</h3>
                                                <p>{partner.bio}</p>
                                            </div>

                                            <div className="content-block">
                                                <h3>Strategic Experience</h3>
                                                <p>{partner.experience}</p>
                                            </div>

                                            {partner.specializations && (
                                                <div className="content-block">
                                                    <h3>Areas of Specialization</h3>
                                                    <div className="spec-tags">
                                                        {partner.specializations.map((spec) => (
                                                            <span key={spec} className="tag">{spec}</span>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Executive Engagement Hub */}
                <section className="relative py-32 overflow-hidden bg-black text-white">
                    <div
                        className="absolute inset-0 z-0 parallax-bg opacity-30"
                        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2070&auto=format&fit=crop)' }}
                    ></div>

                    <div className="container relative z-10">
                        <div className="card-premium" style={{
                            backgroundImage: 'linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.85)), url(https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=1500&auto=format&fit=crop)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(255,255,255,0.15)',
                            padding: '6rem 4rem',
                            borderRadius: '4px',
                            textAlign: 'center'
                        }}>
                            <div className="max-w-4xl mx-auto">
                                <h2 className="section-title" style={{ color: '#ffffff', marginBottom: '2.5rem' }}>Strategic Engagement</h2>
                                <p style={{ fontSize: '1.4rem', lineHeight: '1.8', color: '#ffffff', opacity: 1, fontWeight: '400', marginBottom: '4rem' }}>
                                    Our senior partners are available for high-level consultations regarding complex litigation and strategic corporate advisory. Secure your position with our executive registry for uncompromising legal representation.
                                </p>

                                <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                                    <a href="/meeting-booking" className="btn-premium btn-primary btn-lg px-12">
                                        Schedule Consultation
                                    </a>
                                    <a href={`tel:${FIRM_INFO.contact.phone}`} className="btn-premium btn-outline btn-lg px-12" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.6)' }}>
                                        Direct Partner Line
                                    </a>
                                </div>

                                <div style={{ marginTop: '5rem', display: 'flex', justifyContent: 'center', gap: '5rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '4rem' }}>
                                    <div style={{ textAlign: 'center' }}>
                                        <h4 style={{ color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.2rem', fontSize: '0.9rem', marginBottom: '1rem', fontWeight: '700' }}>Global Standards</h4>
                                        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem' }}>International Protocols</p>
                                    </div>
                                    <div style={{ textAlign: 'center' }}>
                                        <h4 style={{ color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.2rem', fontSize: '0.9rem', marginBottom: '1rem', fontWeight: '700' }}>Confidentiality</h4>
                                        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem' }}>Absolute Discretion</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />

            <style jsx>{`
                .team-container {
                    display: flex;
                    flex-direction: column;
                    gap: 4rem;
                }

                .team-profile {
                    display: grid;
                    grid-template-columns: 350px 1fr;
                    background: #fff;
                    border: 1px solid rgba(0,0,0,0.05);
                    border-radius: 0;
                }

                .profile-sidebar {
                    padding: 4rem 3rem;
                    background: var(--color-surface);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    border-right: 1px solid rgba(0,0,0,0.05);
                }

                .profile-avatar {
                    width: 200px;
                    height: 200px;
                    background: var(--color-primary);
                    color: #fff;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 5rem;
                    font-weight: 700;
                    margin-bottom: 3rem;
                    border-bottom: 8px solid var(--color-secondary);
                }

                .profile-contact-info {
                    width: 100%;
                }

                .profile-contact-info .btn-premium {
                    width: 100%;
                    padding: 1.25rem;
                    font-size: 0.75rem;
                }

                .profile-main {
                    padding: 4rem;
                }

                .profile-header {
                    margin-bottom: 3rem;
                    padding-bottom: 2rem;
                    border-bottom: 1px solid rgba(0,0,0,0.1);
                }

                .profile-name {
                    font-size: 2.8rem;
                    margin-bottom: 0.5rem;
                    letter-spacing: -0.02em;
                    color: var(--color-primary);
                }

                .profile-meta {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    margin-bottom: 1rem;
                }

                .profile-role {
                    color: var(--color-secondary);
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    font-size: 0.9rem;
                }

                .separator {
                    color: #ccc;
                }

                .profile-qualifications {
                    color: var(--color-text-light);
                    font-style: italic;
                    font-size: 1rem;
                }

                .profile-dept {
                    font-size: 1.1rem;
                    font-weight: 600;
                    color: var(--color-primary-light);
                }

                .content-block {
                    margin-bottom: 2.5rem;
                }

                .content-block h3 {
                    font-size: 0.85rem;
                    text-transform: uppercase;
                    letter-spacing: 0.2em;
                    color: #999;
                    margin-bottom: 1.25rem;
                    font-family: 'Inter', sans-serif;
                }

                .content-block p {
                    line-height: 1.8;
                    color: var(--color-text);
                    font-size: 1.05rem;
                }

                .spec-tags {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.75rem;
                }

                .tag {
                    padding: 0.6rem 1.2rem;
                    background: var(--color-surface);
                    border: 1px solid rgba(0,0,0,0.05);
                    font-size: 0.85rem;
                    font-weight: 500;
                    color: var(--color-primary);
                    transition: all 0.3s ease;
                }

                .tag:hover {
                    background: var(--color-secondary);
                    color: #fff;
                    border-color: var(--color-secondary);
                }

                @media (max-width: 1024px) {
                    .team-profile {
                        grid-template-columns: 1fr;
                    }
                    .profile-sidebar {
                        border-right: none;
                        border-bottom: 1px solid rgba(0,0,0,0.05);
                    }
                    .profile-main {
                        padding: 3rem 2rem;
                    }
                }
            `}</style>
        </>
    );
}
