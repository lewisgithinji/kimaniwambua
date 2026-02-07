'use client';

import { Component, ReactNode } from 'react';

interface ErrorBoundaryProps {
    children: ReactNode;
    fallback?: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
    error?: Error;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: any) {
        // Log error to console in development
        console.error('Error caught by boundary:', error, errorInfo);
        // In production, you might want to log to an error tracking service
    }

    render() {
        if (this.state.hasError) {
            return this.props.fallback || (
                <div className="error-boundary" style={{
                    minHeight: '400px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 'var(--space-xl)',
                    textAlign: 'center'
                }}>
                    <h2 style={{ color: 'var(--color-primary)', marginBottom: 'var(--space-md)' }}>
                        Something went wrong
                    </h2>
                    <p style={{ color: 'var(--color-text-light)', marginBottom: 'var(--space-lg)' }}>
                        We apologize for the inconvenience. Please try refreshing the page.
                    </p>
                    <button
                        onClick={() => window.location.reload()}
                        className="btn btn-primary"
                        aria-label="Refresh page"
                    >
                        Refresh Page
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}
