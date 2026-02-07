export function PageLoader() {
    return (
        <div className="page-loader" style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '400px',
            padding: 'var(--space-xl)'
        }}>
            <div className="spinner" style={{
                width: '48px',
                height: '48px',
                border: '4px solid var(--color-border)',
                borderTop: '4px solid var(--color-secondary)',
                borderRadius: '50%',
                animation: 'spin 1s linear infinite'
            }} />
            <p style={{
                marginTop: 'var(--space-md)',
                color: 'var(--color-text-light)'
            }}>
                Loading...
            </p>
            <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
        </div>
    );
}

export function SkeletonCard() {
    return (
        <div className="skeleton-card" style={{
            padding: 'var(--space-lg)',
            borderRadius: 'var(--border-radius)',
            backgroundColor: 'var(--color-surface)',
            animation: 'pulse 1.5s ease-in-out infinite'
        }}>
            <div className="skeleton-image" style={{
                width: '100%',
                height: '200px',
                backgroundColor: 'var(--color-border)',
                borderRadius: 'var(--border-radius)',
                marginBottom: 'var(--space-md)'
            }} />
            <div className="skeleton-text" style={{
                width: '80%',
                height: '20px',
                backgroundColor: 'var(--color-border)',
                borderRadius: '4px',
                marginBottom: 'var(--space-sm)'
            }} />
            <div className="skeleton-text short" style={{
                width: '60%',
                height: '20px',
                backgroundColor: 'var(--color-border)',
                borderRadius: '4px'
            }} />
            <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
        </div>
    );
}

export function SkeletonText({ width = '100%' }: { width?: string }) {
    return (
        <div
            className="skeleton-text"
            style={{
                width,
                height: '20px',
                backgroundColor: 'var(--color-border)',
                borderRadius: '4px',
                animation: 'pulse 1.5s ease-in-out infinite',
                marginBottom: 'var(--space-sm)'
            }}
        />
    );
}
