import Link from 'next/link';

export default function ThankYouPage() {
    return (
        <main id="main-content" style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 'var(--space-xl)',
            textAlign: 'center',
            backgroundColor: 'var(--color-surface)'
        }}>
            <div style={{
                maxWidth: '600px',
                padding: 'var(--space-xl)',
                backgroundColor: 'var(--color-background)',
                borderRadius: 'var(--border-radius-lg)',
                boxShadow: 'var(--shadow-lg)'
            }}>
                {/* Success Icon */}
                <div style={{
                    width: '80px',
                    height: '80px',
                    margin: '0 auto var(--space-lg)',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-secondary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <svg
                        width="48"
                        height="48"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                </div>

                <h1 style={{
                    fontSize: 'var(--font-size-3xl)',
                    fontWeight: 'var(--font-weight-bold)',
                    color: 'var(--color-primary)',
                    marginBottom: 'var(--space-md)'
                }}>
                    Thank You!
                </h1>

                <p style={{
                    fontSize: 'var(--font-size-lg)',
                    color: 'var(--color-text)',
                    marginBottom: 'var(--space-md)',
                    lineHeight: '1.6'
                }}>
                    We've received your message and appreciate you taking the time to contact us.
                </p>

                <p style={{
                    fontSize: 'var(--font-size-base)',
                    color: 'var(--color-text-light)',
                    marginBottom: 'var(--space-xl)',
                    lineHeight: '1.6'
                }}>
                    Our team will review your inquiry and get back to you within <strong>24 business hours</strong>.
                </p>

                <div style={{
                    display: 'flex',
                    gap: 'var(--space-md)',
                    justifyContent: 'center',
                    flexWrap: 'wrap'
                }}>
                    <Link href="/" className="btn btn-primary">
                        Return to Home
                    </Link>
                    <Link href="/practice-areas" className="btn btn-outline">
                        Our Services
                    </Link>
                </div>

                <p style={{
                    marginTop: 'var(--space-lg)',
                    fontSize: 'var(--font-size-sm)',
                    color: 'var(--color-text-light)'
                }}>
                    Need immediate assistance?<br />
                    Call us at <a href="tel:+254733877867" style={{ color: 'var(--color-secondary)' }}>+254 733 877 867</a>
                </p>
            </div>
        </main>
    );
}
