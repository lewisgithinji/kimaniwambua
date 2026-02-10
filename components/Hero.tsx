'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { FIRM_INFO } from '@/lib/constants';

const HERO_IMAGES = [
    'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop', // Scales & Books
    'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2070&auto=format&fit=crop', // Library
    'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=2070&auto=format&fit=crop', // Fountain pen
];

export default function Hero() {
    const heroRef = useRef<HTMLDivElement>(null);
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (heroRef.current) {
                const scrollY = window.scrollY;
                heroRef.current.style.transform = `translateY(${scrollY * 0.4}px)`;
            }
        };

        const slideInterval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % HERO_IMAGES.length);
        }, 6000);

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearInterval(slideInterval);
        };
    }, []);

    return (
        <section
            style={{
                position: 'relative',
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                backgroundColor: '#000',
            }}
        >
            {/* Parallax Slider Layer */}
            <div
                ref={heroRef}
                style={{
                    position: 'absolute',
                    top: '-10%',
                    left: 0,
                    width: '100%',
                    height: '120%',
                    zIndex: 0,
                }}
            >
                {HERO_IMAGES.map((img, idx) => (
                    <div
                        key={img}
                        style={{
                            position: 'absolute',
                            inset: 0,
                            backgroundImage: `url(${img})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            opacity: currentImage === idx ? 1 : 0,
                            transition: 'opacity 2.5s ease-in-out',
                            zIndex: currentImage === idx ? 1 : 0,
                        }}
                    >
                        {/* Dark Overlay for text readability */}
                        <div style={{
                            position: 'absolute',
                            inset: 0,
                            backgroundColor: 'rgba(0, 0, 0, 0.65)',
                        }} />
                    </div>
                ))}

                {/* Accent Glow */}
                <div style={{
                    position: 'absolute',
                    bottom: '30%',
                    right: '10%',
                    width: '400px',
                    height: '400px',
                    background: 'radial-gradient(circle, rgba(237, 29, 36, 0.15) 0%, transparent 70%)',
                    filter: 'blur(60px)',
                    zIndex: 2
                }} />
            </div>

            {/* Content Container */}
            <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', color: 'var(--color-text-white)' }}>
                <h1
                    className="fade-in"
                    style={{
                        fontSize: 'clamp(3rem, 5vw, 5rem)', // Responsive font size
                        marginBottom: 'var(--space-md)',
                        color: 'var(--color-text-white)',
                        textShadow: '0 4px 12px rgba(0,0,0,0.3)',
                        maxWidth: '900px',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        lineHeight: 1.1,
                    }}
                >
                    {FIRM_INFO.name}
                </h1>

                <div
                    className="fade-in"
                    style={{
                        width: '80px',
                        height: '4px',
                        background: 'var(--color-secondary)',
                        margin: '0 auto var(--space-lg)',
                        borderRadius: '2px',
                        animationDelay: '0.2s'
                    }}
                />

                <p
                    className="fade-in"
                    style={{
                        fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
                        marginBottom: 'var(--space-xl)',
                        maxWidth: '700px',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        color: 'rgba(255,255,255,0.9)',
                        animationDelay: '0.3s',
                        fontWeight: 300,
                    }}
                >
                    {FIRM_INFO.tagline}
                </p>

                <div
                    className="fade-in"
                    style={{
                        display: 'flex',
                        gap: 'var(--space-md)',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                        animationDelay: '0.5s'
                    }}
                >
                    <Link
                        href="/meeting-booking"
                        className="btn btn-primary btn-lg"
                        style={{
                            padding: '1rem 2.5rem',
                            borderRadius: '50px',
                            fontSize: '1.1rem',
                            boxShadow: '0 10px 30px rgba(237, 29, 36, 0.3)'
                        }}
                    >
                        Schedule Consultation
                    </Link>
                    <Link
                        href="/practice-areas"
                        className="btn btn-lg"
                        style={{
                            padding: '1rem 2.5rem',
                            borderRadius: '50px',
                            color: 'white',
                            border: '1px solid rgba(255,255,255,0.3)',
                            background: 'rgba(255,255,255,0.05)',
                            backdropFilter: 'blur(5px)',
                            fontSize: '1.1rem',
                        }}
                    >
                        Our Expertise
                    </Link>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div
                className="fade-in"
                style={{
                    position: 'absolute',
                    bottom: '40px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    animation: 'bounce 2s infinite',
                    animationDelay: '1s',
                    opacity: 0.7,
                }}
            >
                <div style={{
                    width: '24px',
                    height: '40px',
                    border: '2px solid rgba(255,255,255,0.3)',
                    borderRadius: '12px',
                    position: 'relative',
                }}>
                    <div style={{
                        position: 'absolute',
                        top: '8px',
                        left: '50%',
                        width: '4px',
                        height: '4px',
                        background: 'white',
                        borderRadius: '50%',
                        transform: 'translateX(-50%)',
                    }} />
                </div>
            </div>

            <style jsx>{`
                @keyframes bounce {
                    0%, 20%, 50%, 80%, 100% { transform: translateY(0) translateX(-50%); }
                    40% { transform: translateY(-10px) translateX(-50%); }
                    60% { transform: translateY(-5px) translateX(-50%); }
                }
            `}</style>
        </section>
    );
}
