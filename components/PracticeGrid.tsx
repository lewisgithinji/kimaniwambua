'use client';

import Link from 'next/link';
import { PRACTICE_AREAS } from '@/lib/constants';

export default function PracticeGrid() {
    return (
        <div className="practice-grid">
            {PRACTICE_AREAS.map((area, index) => (
                <Link
                    href="/practice-areas"
                    key={area.id}
                    className="practice-card"
                    style={{ textDecoration: 'none' }}
                >
                    <div className="practice-icon">
                        {area.icon}
                    </div>
                    <h3 className="practice-title">{area.title}</h3>
                    <p className="practice-desc">{area.description}</p>
                    <div className="practice-arrow">→</div>
                </Link>
            ))}

            <style jsx>{`
                .practice-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 1.5rem;
                }

                .practice-card {
                    background: var(--color-background);
                    border: 1px solid var(--color-border);
                    border-radius: var(--radius-lg);
                    padding: 2rem;
                    transition: all 0.3s ease;
                    position: relative;
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                    height: 100%;
                }

                .practice-card:hover {
                    transform: translateY(-5px);
                    box-shadow: var(--shadow-xl);
                    border-color: var(--color-secondary);
                }

                .practice-card::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 4px;
                    height: 0;
                    background: var(--color-secondary);
                    transition: height 0.3s ease;
                }

                .practice-card:hover::before {
                    height: 100%;
                }

                .practice-icon {
                    font-size: 2.5rem;
                    margin-bottom: 1.5rem;
                    color: var(--color-primary);
                    transition: transform 0.3s ease;
                }

                .practice-card:hover .practice-icon {
                    transform: scale(1.1);
                    color: var(--color-secondary);
                }

                .practice-title {
                    font-size: 1.25rem;
                    font-weight: 700;
                    margin-bottom: 1rem;
                    color: var(--color-primary);
                    font-family: 'Playfair Display', serif;
                }

                .practice-desc {
                    color: var(--color-text-light);
                    margin-bottom: 1.5rem;
                    line-height: 1.6;
                    flex-grow: 1;
                }

                .practice-arrow {
                    color: var(--color-secondary);
                    font-weight: bold;
                    transform: translateX(0);
                    transition: transform 0.3s ease;
                    align-self: flex-start;
                }

                .practice-card:hover .practice-arrow {
                    transform: translateX(5px);
                }
            `}</style>
        </div>
    );
}
