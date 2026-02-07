'use client';

import Link from 'next/link';
import { FIRM_INFO, MAJOR_CLIENTS } from '@/lib/constants';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer style={{ backgroundColor: '#2a2a2b', color: 'var(--color-text-white)', paddingTop: 'var(--space-3xl)', paddingBottom: 'var(--space-lg)', borderTop: '4px solid var(--color-secondary)' }}>
            <div className="container">
                <div className="footer-grid" style={{ marginBottom: 'var(--space-2xl)', gap: 'var(--space-xl)' }}>
                    {/* About Column */}
                    <div>
                        <div style={{ marginBottom: 'var(--space-md)', background: 'white', padding: '10px', display: 'inline-block', borderRadius: '4px' }}>
                            <img src="/images/logo-header.png" alt={FIRM_INFO.name} style={{ height: '40px', width: 'auto' }} />
                        </div>
                        <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: '1.6', marginBottom: 'var(--space-md)' }}>
                            {FIRM_INFO.tagline}
                        </p>
                        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem' }}>
                            Established {FIRM_INFO.established}
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 style={{ color: 'white', marginBottom: 'var(--space-md)', fontFamily: 'Playfair Display, serif' }}>Quick Links</h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            {['About', 'Practice Areas', 'Team', 'Contact'].map((item) => (
                                <li key={item} style={{ marginBottom: '0.8rem' }}>
                                    <Link
                                        href={item === 'Team' ? '/team' : `/${item.toLowerCase().replace(' ', '-')}`}
                                        style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem', transition: 'color 0.2s' }}
                                        className="hover-text-white"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 style={{ color: 'white', marginBottom: 'var(--space-md)', fontFamily: 'Playfair Display, serif' }}>Contact Us</h4>
                        <div style={{ fontSize: '0.95rem', lineHeight: '1.8' }}>
                            <p style={{ marginBottom: '0.5rem', color: 'rgba(255,255,255,0.8)' }}>
                                {FIRM_INFO.address.building}<br />
                                {FIRM_INFO.address.area}<br />
                                {FIRM_INFO.address.poBox}, {FIRM_INFO.address.city}
                            </p>
                            <p style={{ marginBottom: '0.5rem' }}>
                                <a href={`tel:${FIRM_INFO.contact.phone}`} style={{ color: 'rgba(255,255,255,0.8)' }}>{FIRM_INFO.contact.phone}</a>
                            </p>
                            <p>
                                <a href={`mailto:${FIRM_INFO.contact.email}`} style={{ color: 'rgba(255,255,255,0.8)' }}>{FIRM_INFO.contact.email}</a>
                            </p>
                        </div>
                    </div>

                    {/* Office Hours */}
                    <div>
                        <h4 style={{ color: 'white', marginBottom: 'var(--space-md)', fontFamily: 'Playfair Display, serif' }}>Office Hours</h4>
                        <div style={{ fontSize: '0.95rem', lineHeight: '1.8', color: 'rgba(255,255,255,0.8)' }}>
                            <p>Monday - Friday<br /><span style={{ color: 'white' }}>8:00 AM - 5:00 PM</span></p>
                            <p style={{ marginTop: '0.5rem' }}>Saturday<br /><span style={{ color: 'white' }}>9:00 AM - 1:00 PM</span></p>
                            <p style={{ marginTop: '0.5rem' }}>Sunday: Closed</p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: 'var(--space-lg)', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)' }}>
                        © {currentYear} {FIRM_INFO.name}. All rights reserved.
                    </p>
                    <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)' }}>
                        Professional Indemnity Insurance: Heritage Insurance Limited
                    </p>
                </div>
            </div>
            <style jsx>{`
                .footer-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                }
                a:hover {
                    color: white !important;
                    text-decoration: underline;
                }
                .hover-text-white:hover {
                    color: white !important;
                }
            `}</style>
        </footer>
    );
}
