'use client';

interface PageHeroProps {
    title: string;
    description?: string;
    backgroundImage?: string;
}

export default function PageHero({ title, description, backgroundImage = '/images/hero-bg.svg' }: PageHeroProps) {
    return (
        <section
            style={{
                position: 'relative',
                background: '#2a2a2b',
                color: 'white',
                padding: '12rem 0 8rem 0', // Increased top padding to clear the 110px header
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '500px' // Taller for better visual impact
            }}
        >
            {/* Background Image with Overlay */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 0,
                }}
            >
                {/* The Image */}
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundImage: `url(${backgroundImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />

                {/* Dark Overlay for text readability */}
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundColor: 'rgba(42, 42, 43, 0.85)', // Dark overlay
                        backdropFilter: 'blur(2px)'
                    }}
                />
            </div>

            {/* Content */}
            <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                <h1
                    className="fade-in"
                    style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                        marginBottom: '1.5rem',
                        fontFamily: 'Playfair Display, serif',
                        textShadow: '0 4px 20px rgba(0,0,0,0.5)',
                        lineHeight: 1.2
                    }}
                >
                    {title}
                </h1>
                <div
                    className="fade-in"
                    style={{
                        width: '60px',
                        height: '4px',
                        background: 'var(--color-secondary)',
                        margin: '0 auto 1.5rem auto',
                        borderRadius: '2px',
                        animationDelay: '0.2s'
                    }}
                />
                {description && (
                    <p
                        className="fade-in"
                        style={{
                            fontSize: '1.25rem',
                            maxWidth: '700px',
                            margin: '0 auto',
                            opacity: 0.95,
                            lineHeight: 1.6,
                            animationDelay: '0.3s',
                            fontWeight: 300
                        }}
                    >
                        {description}
                    </p>
                )}
            </div>
        </section>
    );
}
