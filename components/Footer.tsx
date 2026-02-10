'use client';

import Link from 'next/link';
import { FIRM_INFO } from '@/lib/constants';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-premium">
            <div className="container">
                <div className="footer-main">
                    {/* Brand Column */}
                    <div className="footer-brand">
                        <div className="footer-logo-container">
                            <img
                                src="/images/logo-custom.png"
                                alt={FIRM_INFO.name}
                                className="footer-logo"
                            />
                        </div>
                        <p className="footer-tagline">{FIRM_INFO.tagline}</p>
                        <div className="footer-insurance">
                            <span className="insurance-label">Regulated Excellence:</span>
                            <p>Professional Indemnity Insurance</p>
                            <strong>Britam General Insurance Limited</strong>
                        </div>
                    </div>

                    {/* Navigation Columns */}
                    <div className="footer-nav">
                        <div className="nav-group">
                            <h4>Legal Expertise</h4>
                            <ul>
                                <li><Link href="/practice-areas">Corporate Law</Link></li>
                                <li><Link href="/practice-areas">Conveyancing</Link></li>
                                <li><Link href="/practice-areas">Litigation</Link></li>
                                <li><Link href="/practice-areas">Dispute Resolution</Link></li>
                            </ul>
                        </div>
                        <div className="nav-group">
                            <h4>The Firm</h4>
                            <ul>
                                <li><Link href="/about">Our Story</Link></li>
                                <li><Link href="/team">Leadership</Link></li>
                                <li><Link href="/contact">Location</Link></li>
                                <li><Link href="/meeting-booking">Book Consultation</Link></li>
                            </ul>
                        </div>
                    </div>

                    {/* Contact Column */}
                    <div className="footer-contact">
                        <h4>Contact Registry</h4>
                        <div className="contact-details">
                            <p>{FIRM_INFO.address.building}</p>
                            <p>{FIRM_INFO.address.area}</p>
                            <p>{FIRM_INFO.address.city}, {FIRM_INFO.address.poBox}</p>
                            <div className="contact-links">
                                <a href={`tel:${FIRM_INFO.contact.phone}`}>{FIRM_INFO.contact.phone}</a>
                                <a href={`mailto:${FIRM_INFO.contact.email}`}>{FIRM_INFO.contact.email}</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="copyright">
                        © {currentYear} {FIRM_INFO.name}. All rights reserved.
                    </div>
                    <div className="designer-credit">
                        Architecture by <a href="https://datacare.co.ke" target="_blank" rel="noopener noreferrer">Datacare</a>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .footer-premium {
                    background: #000000;
                    color: #fff;
                    padding-top: 6rem;
                    padding-bottom: 3rem;
                    position: relative;
                    overflow: hidden;
                }

                .footer-premium::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 4px;
                    background: linear-gradient(90deg, var(--color-secondary) 0%, var(--color-accent) 50%, var(--color-secondary) 100%);
                }

                .footer-main {
                    display: grid;
                    grid-template-columns: 1.5fr 2fr 1.2fr;
                    gap: 4rem;
                    margin-bottom: 5rem;
                }

                .footer-logo-container {
                    margin-bottom: 2rem;
                    display: inline-block;
                }

                .footer-logo {
                    height: 120px;
                    width: auto;
                    filter: brightness(0) invert(1);
                    margin-bottom: 2rem;
                }

                .footer-tagline {
                    color: rgba(255,255,255,0.6);
                    font-size: 1rem;
                    line-height: 1.7;
                    margin-bottom: 2.5rem;
                    max-width: 300px;
                }

                .footer-insurance {
                    border-left: 2px solid var(--color-secondary);
                    padding-left: 1.5rem;
                }

                .insurance-label {
                    display: block;
                    font-size: 0.75rem;
                    text-transform: uppercase;
                    letter-spacing: 0.15em;
                    color: var(--color-secondary);
                    margin-bottom: 0.25rem;
                }

                .footer-insurance p {
                    font-size: 0.9rem;
                    margin: 0;
                    color: rgba(255,255,255,0.8);
                }

                .footer-nav {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 2rem;
                }

                .nav-group h4, .footer-contact h4 {
                    font-size: 0.85rem;
                    text-transform: uppercase;
                    letter-spacing: 0.2em;
                    color: var(--color-secondary);
                    margin-bottom: 2rem;
                    font-weight: 700;
                }

                .nav-group ul {
                    list-style: none;
                    padding: 0;
                }

                .nav-group ul li {
                    margin-bottom: 1rem;
                }

                .nav-group ul li :global(a) {
                    color: rgba(255,255,255,0.7);
                    text-decoration: none;
                    font-size: 0.95rem;
                    transition: all 0.3s ease;
                }

                .nav-group ul li :global(a:hover) {
                    color: #fff;
                    padding-left: 8px;
                }

                .contact-details p {
                    color: rgba(255,255,255,0.7);
                    margin-bottom: 0.5rem;
                    font-size: 0.95rem;
                }

                .contact-links {
                    margin-top: 2rem;
                    display: flex;
                    flex-direction: column;
                    gap: 0.75rem;
                }

                .contact-links a {
                    color: #fff;
                    text-decoration: none;
                    font-weight: 600;
                    font-size: 1.1rem;
                    transition: color 0.3s ease;
                }

                .contact-links a:hover {
                    color: var(--color-secondary);
                }

                .footer-bottom {
                    border-top: 1px solid rgba(255,255,255,0.1);
                    padding-top: 2rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    font-size: 0.85rem;
                    color: rgba(255,255,255,0.4);
                }

                .designer-credit a {
                    color: rgba(255,255,255,0.6);
                    text-decoration: none;
                    font-weight: 600;
                }

                .designer-credit a:hover {
                    color: var(--color-secondary);
                }

                @media (max-width: 1024px) {
                    .footer-main {
                        grid-template-columns: 1fr 1fr;
                    }
                    .footer-brand {
                        grid-column: span 2;
                        margin-bottom: 2rem;
                    }
                }

                @media (max-width: 768px) {
                    .footer-main {
                        grid-template-columns: 1fr;
                    }
                    .footer-brand, .footer-nav {
                        grid-column: span 1;
                    }
                    .footer-bottom {
                        flex-direction: column;
                        gap: 1rem;
                        text-align: center;
                    }
                }
            `}</style>
        </footer>
    );
}
