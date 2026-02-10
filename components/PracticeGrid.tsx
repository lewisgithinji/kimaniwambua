'use client';

import Link from 'next/link';
import { PRACTICE_AREAS } from '@/lib/constants';

// Executive color palette for icons circles
const CIRCLE_COLORS = [
    '#ED1D24', // Red
    '#3B82F6', // Blue
    '#F59E0B', // Gold
    '#8B5CF6', // Purple
    '#10B981', // Green
    '#6366F1', // Indigo
];

export default function PracticeGrid() {
    // Filter out "Probate Administration" (id: 7) for the homepage to maintain a perfectly balanced 2x3 grid.
    const displayAreas = PRACTICE_AREAS.filter(area => area.id !== 7);

    return (
        <div className="practice-architecture-grid">
            {displayAreas.map((area, index) => (
                <Link
                    href={`/practice-areas`}
                    key={area.id}
                    className="architect-card"
                >
                    <div className="card-frame">
                        <div className="card-glass-plate"></div>
                        <div className="card-content-stack">
                            <div className="icon-orbit" style={{ borderColor: CIRCLE_COLORS[index % CIRCLE_COLORS.length] }}>
                                <span className="icon-glyph">{area.icon}</span>
                            </div>

                            <h3 className="card-heading">{area.title}</h3>
                            <div className="card-accent-line"></div>
                            <p className="card-summary">{area.description}</p>

                            <div className="card-interactive-footer">
                                <span className="interactive-text">Specialist Mandate</span>
                                <div className="interactive-arrow">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                        <polyline points="12 5 19 12 12 19"></polyline>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}

            <style jsx>{`
                .practice-architecture-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 3.5rem 3rem;
                    width: 100%;
                    max-width: 1280px;
                    margin: 0 auto;
                }

                @media (max-width: 1100px) {
                    .practice-architecture-grid {
                        grid-template-columns: repeat(2, 1fr);
                        gap: 2.5rem;
                    }
                }

                @media (max-width: 768px) {
                    .practice-architecture-grid {
                        grid-template-columns: 1fr;
                        gap: 2rem;
                    }
                }

                .architect-card {
                    text-decoration: none;
                    display: block;
                    perspective: 1000px;
                    height: 100%;
                }

                .card-frame {
                    position: relative;
                    height: 100%;
                    min-height: 480px;
                    display: flex;
                    flex-direction: column;
                    transition: all 0.7s cubic-bezier(0.165, 0.84, 0.44, 1);
                    border-radius: 4px;
                }

                .card-glass-plate {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(145deg, rgba(20, 20, 20, 0.9), rgba(5, 5, 5, 0.95));
                    backdrop-filter: blur(15px);
                    -webkit-backdrop-filter: blur(15px);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    z-index: 1;
                    transition: all 0.6s ease;
                    box-shadow: 0 15px 35px rgba(0,0,0,0.5);
                }

                .card-content-stack {
                    position: relative;
                    z-index: 2;
                    padding: 4.5rem 2.5rem;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    height: 100%;
                }

                .icon-orbit {
                    width: 85px;
                    height: 85px;
                    border-radius: 50%;
                    border: 1.5px solid;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 2.5rem;
                    background: rgba(255, 255, 255, 0.03);
                    transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
                }

                .icon-glyph {
                    font-size: 2.8rem;
                    line-height: 1;
                }

                .card-heading {
                    color: #ffffff;
                    font-size: 1.5rem;
                    font-weight: 700;
                    margin-bottom: 1.25rem;
                    line-height: 1.25;
                    font-family: 'Playfair Display', serif;
                    letter-spacing: 0.01em;
                }

                .card-accent-line {
                    width: 40px;
                    height: 2px;
                    background: var(--color-secondary);
                    margin-bottom: 2rem;
                    transition: width 0.4s ease;
                }

                .card-summary {
                    color: rgba(255, 255, 255, 0.65);
                    font-size: 1.05rem;
                    line-height: 1.8;
                    margin-bottom: 2.5rem;
                    flex-grow: 1;
                    font-weight: 400;
                }

                .card-interactive-footer {
                    display: flex;
                    align-items: center;
                    gap: 1.5rem;
                    color: rgba(255, 255, 255, 0.4);
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.2em;
                    font-size: 0.75rem;
                    transition: all 0.4s ease;
                }

                .interactive-arrow {
                    transition: transform 0.4s ease;
                    color: var(--color-secondary);
                }

                /* HOVER ENHANCEMENTS */
                .architect-card:hover .card-frame {
                    transform: translateY(-20px) scale(1.02);
                }

                .architect-card:hover .card-glass-plate {
                    background: rgba(10, 10, 10, 0.98);
                    border-color: var(--color-secondary);
                    box-shadow: 0 50px 100px rgba(0,0,0,0.8), 0 0 30px rgba(139, 26, 30, 0.3);
                }

                .architect-card:hover .icon-orbit {
                    transform: scale(1.1) translateY(-5px);
                    background: var(--color-secondary);
                    border-color: transparent !important;
                    box-shadow: 0 10px 25px rgba(139, 26, 30, 0.4);
                }

                .architect-card:hover .card-heading {
                    color: var(--color-secondary);
                }

                .architect-card:hover .card-accent-line {
                    width: 70px;
                }

                .architect-card:hover .card-interactive-footer {
                    color: #ffffff;
                }

                .architect-card:hover .interactive-arrow {
                    transform: translateX(12px);
                    color: var(--color-accent);
                }

                @media (max-width: 640px) {
                    .card-content-stack {
                        padding: 3.5rem 2rem;
                    }
                    .card-heading {
                        font-size: 1.35rem;
                    }
                }
            `}</style>
        </div>
    );
}
