'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FIRM_INFO } from '@/lib/constants';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const socialIcons = [
        { name: 'LinkedIn', icon: <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M2 4a2 2 0 1 1 2 2 2 2 0 0 1-2-2z" />, href: '#' },
        { name: 'Twitter', icon: <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />, href: '#' },
        { name: 'Facebook', icon: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />, href: '#' }
    ];

    return (
        <>
            {/* Top Bar - Always visible but scrolls away, or stays? User said "uniform". Let's make it part of the fixed header but hide on scroll or keep small. 
                Actually, usually Top Bar is above the nav. If the nav is fixed, the top bar might slide up. 
                For simplicity and "uniformity", let's make the whole thing fixed but compress correctly. 
            */}
            <header
                className={`header ${isScrolled ? 'glass' : ''}`}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 'var(--z-fixed)',
                    backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'white',
                    backdropFilter: isScrolled ? 'blur(12px)' : 'none',
                    borderBottom: '1px solid rgba(0,0,0,0.05)',
                    transition: 'all 0.3s ease',
                    boxShadow: isScrolled ? '0 4px 20px rgba(0,0,0,0.05)' : 'none',
                }}
            >
                {/* Top Bar Section */}
                <div
                    style={{
                        backgroundColor: '#2a2a2b',
                        color: 'rgba(255,255,255,0.8)',
                        fontSize: '0.85rem',
                        padding: isScrolled ? '0' : '0.5rem 0',
                        height: isScrolled ? '0' : 'auto',
                        overflow: 'hidden',
                        transition: 'all 0.3s ease',
                        borderBottom: '1px solid rgba(255,255,255,0.1)'
                    }}
                >
                    <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ display: 'flex', gap: '1.5rem' }}>
                            <a href={`tel:${FIRM_INFO.contact.phone}`} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'inherit', textDecoration: 'none' }}>
                                <span>📞</span> {FIRM_INFO.contact.phone}
                            </a>
                            <a href={`mailto:${FIRM_INFO.contact.email}`} style={{ alignItems: 'center', gap: '0.5rem', color: 'inherit', textDecoration: 'none', display: isMobileMenuOpen ? 'none' : 'flex' }}>
                                <span>✉️</span> {FIRM_INFO.contact.email}
                            </a>
                        </div>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            {socialIcons.map((social) => (
                                <a key={social.name} href={social.href} style={{ color: 'white', opacity: 0.8, transition: 'opacity 0.2s' }} className="hover-opacity">
                                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        {social.icon}
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Main Nav Section */}
                <div style={{ padding: isScrolled ? '0.8rem 0' : '1.2rem 0', transition: 'padding 0.3s ease' }}>
                    <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Link href="/" style={{ textDecoration: 'none' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
                                <img
                                    src="/images/logo-header.png"
                                    alt="Kimani Wambua & Company Advocates"
                                    style={{
                                        height: isScrolled ? '45px' : '60px',
                                        width: 'auto',
                                        transition: 'height 0.3s ease',
                                        objectFit: 'contain'
                                    }}
                                />
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <ul className="desktop-nav" style={{ display: 'flex', listStyle: 'none', gap: '2rem', margin: 0, padding: 0, alignItems: 'center' }}>
                            {['Home', 'About', 'Practice Areas', 'Team', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                                        style={{
                                            color: '#2a2a2b',
                                            fontWeight: '600',
                                            fontSize: '0.9rem',
                                            letterSpacing: '0.02em',
                                            textTransform: 'uppercase',
                                            position: 'relative',
                                        }}
                                        className="nav-link"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <Link
                                    href="/meeting-booking"
                                    className="btn btn-primary"
                                    style={{
                                        fontSize: '0.85rem',
                                        padding: '0.6rem 1.5rem',
                                        borderRadius: '50px',
                                        background: 'var(--color-secondary)',
                                        border: 'none',
                                        fontWeight: '600'
                                    }}
                                >
                                    Book Meeting
                                </Link>
                            </li>
                        </ul>

                        {/* Mobile Menu Button */}
                        <button
                            className="mobile-menu-btn"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            style={{
                                display: 'none',
                                background: 'none',
                                border: 'none',
                                fontSize: '1.5rem',
                                cursor: 'pointer',
                                color: 'var(--color-primary)',
                                padding: '0.5rem',
                            }}
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? '✕' : '☰'}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <div
                        className="mobile-nav glass"
                        style={{
                            position: 'absolute',
                            top: '100%',
                            left: 0,
                            right: 0,
                            background: 'white',
                            padding: 'var(--space-xl) var(--space-lg)',
                            borderTop: '1px solid rgba(0,0,0,0.05)',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                            height: '100vh',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}
                    >
                        <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', textAlign: 'center', width: '100%' }}>
                            {['Home', 'About', 'Practice Areas', 'Team', 'Contact', 'Book Meeting'].map((item) => (
                                <li key={item} style={{ marginBottom: 'var(--space-lg)' }}>
                                    <Link
                                        href={item === 'Home' ? '/' : item === 'Book Meeting' ? '/meeting-booking' : `/${item.toLowerCase().replace(' ', '-')}`}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        style={{
                                            color: 'var(--color-primary)',
                                            fontWeight: '600',
                                            fontSize: '1.2rem',
                                            fontFamily: 'Playfair Display, serif',
                                        }}
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div style={{ display: 'flex', gap: '1.5rem', marginTop: 'auto', paddingBottom: '5rem' }}>
                            {socialIcons.map((social) => (
                                <a key={social.name} href={social.href} style={{ color: 'var(--color-primary)', padding: '10px', background: '#f5f5f5', borderRadius: '50%' }}>
                                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        {social.icon}
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>
                )}

                <style jsx>{`
                    .nav-link:hover {
                        color: var(--color-secondary) !important;
                    }
                    .hover-opacity:hover {
                        opacity: 1 !important;
                    }
                    @media (max-width: 968px) {
                        .desktop-nav { display: none !important; }
                        .mobile-menu-btn { display: block !important; }
                    }
                `}</style>
            </header>
            {/* Spacer for fixed header */}
            <div style={{ height: isScrolled ? '80px' : '110px' }}></div>
        </>
    );
}
