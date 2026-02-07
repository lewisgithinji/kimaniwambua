'use client';

interface PageHeroProps {
    title: string;
    description?: string;
}

export default function PageHero({ title, description }: PageHeroProps) {
    return (
        <section
            style={{
                position: 'relative',
                background: '#2a2a2b',
                color: 'white',
                padding: '5rem 0 4rem 0',
                overflow: 'hidden',
                marginTop: '80px' // Offset for fixed header
            }}
        >
            {/* Background Pattern */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 0,
                    opacity: 0.4,
                    backgroundImage: 'url(/images/hero-bg.svg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />

            {/* Content */}
            <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                <h1
                    style={{
                        fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                        marginBottom: '1rem',
                        fontFamily: 'Playfair Display, serif',
                        textShadow: '0 4px 20px rgba(0,0,0,0.5)',
                        lineHeight: 1.2
                    }}
                >
                    {title}
                </h1>
                {description && (
                    <p
                        style={{
                            fontSize: '1.2rem',
                            maxWidth: '700px',
                            margin: '0 auto',
                            opacity: 0.9,
                            lineHeight: 1.6
                        }}
                    >
                        {description}
                    </p>
                )}
            </div>

            {/* Bottom Gradient Overlay */}
            <div
                style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: '100px',
                    background: 'linear-gradient(to top, rgba(255,255,255,0.05), transparent)',
                    zIndex: 1
                }}
            />
        </section>
    );
}
