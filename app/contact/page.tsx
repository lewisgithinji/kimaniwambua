'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import { FIRM_INFO } from '@/lib/constants';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = async (data: any) => {
        setIsSubmitting(true);
        setSubmitMessage('');

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    access_key: 'YOUR_WEB3FORMS_ACCESS_KEY',
                    subject: `New Strategic Inquiry from ${data.name}`,
                    from_name: FIRM_INFO.name,
                    ...data,
                }),
            });

            if (response.ok) {
                setSubmitMessage('Your inquiry has been successfully logged. A legal consultant will review and respond within one business cycle.');
                reset();
            } else {
                setSubmitMessage('Submission failed. Please utilize our direct telephony line for urgent matters.');
            }
        } catch (error) {
            setSubmitMessage('A connectivity error occurred. Please contact us via the provided electronic mail address.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <Header />
            <main>
                <PageHero
                    title="Strategic Contact"
                    description="Professional engagement for complex legal requirements."
                    backgroundImage="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop"
                />

                <section className="section bg-white overflow-hidden">
                    <div className="container">
                        <div className="contact-grid">
                            {/* Information Panel */}
                            <div className="info-panel">
                                <h2 className="section-title left">Reach Our Registry</h2>
                                <p className="panel-intro">
                                    Our administrative team is available to coordinate your engagement with our senior partners.
                                </p>

                                <div className="info-cards">
                                    <div className="info-card-premium">
                                        <div className="card-icon">🏢</div>
                                        <div className="card-body">
                                            <h4>Main Chambers</h4>
                                            <p>{FIRM_INFO.address.building}, {FIRM_INFO.address.area}</p>
                                            <p>{FIRM_INFO.address.poBox}, {FIRM_INFO.address.city}</p>
                                            <p>{FIRM_INFO.address.country}</p>
                                        </div>
                                    </div>

                                    <div className="info-card-premium">
                                        <div className="card-icon">📞</div>
                                        <div className="card-body">
                                            <h4>Direct Communication</h4>
                                            <p><a href={`tel:${FIRM_INFO.contact.phone}`} className="contact-link-main">{FIRM_INFO.contact.phone}</a></p>
                                            <a href={`https://wa.me/${FIRM_INFO.contact.whatsapp}`} className="whatsapp-badge">
                                                Fast Track via WhatsApp
                                            </a>
                                        </div>
                                    </div>

                                    <div className="info-card-premium">
                                        <div className="card-icon">✉️</div>
                                        <div className="card-body">
                                            <h4>Electronic Mail</h4>
                                            <p><a href={`mailto:${FIRM_INFO.contact.email}`} className="contact-link-main">{FIRM_INFO.contact.email}</a></p>
                                        </div>
                                    </div>

                                    <div className="info-card-premium">
                                        <div className="card-icon">🕐</div>
                                        <div className="card-body">
                                            <h4>Standard Hours</h4>
                                            <p>Mon - Fri: 08:00 - 17:00</p>
                                            <p>Saturday: 09:00 - 13:00</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Form Panel */}
                            <div className="form-panel-wrapper">
                                <div className="form-card-premium card-premium">
                                    <div className="form-header">
                                        <h3>Secure Inquiry Form</h3>
                                        <p>Field marked with * are required for protocol.</p>
                                    </div>
                                    <form onSubmit={handleSubmit(onSubmit)} className="premium-form">
                                        <div className="form-row">
                                            <div className="form-group">
                                                <label>Full Legal Name*</label>
                                                <input
                                                    type="text"
                                                    placeholder="e.g. John Doe"
                                                    {...register('name', { required: 'Name is required' })}
                                                />
                                                {errors.name && <span className="error-hint">{errors.name.message?.toString()}</span>}
                                            </div>
                                        </div>

                                        <div className="form-grid-inner">
                                            <div className="form-group">
                                                <label>Professional Email*</label>
                                                <input
                                                    type="email"
                                                    placeholder="email@example.com"
                                                    {...register('email', {
                                                        required: 'Required',
                                                        pattern: { value: /^\S+@\S+$/i, message: 'Invalid format' }
                                                    })}
                                                />
                                                {errors.email && <span className="error-hint">{errors.email.message?.toString()}</span>}
                                            </div>
                                            <div className="form-group">
                                                <label>Contact Number</label>
                                                <input type="tel" placeholder="+254..." {...register('phone')} />
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label>Practice Department</label>
                                            <select {...register('practiceArea')}>
                                                <option value="">Select a department</option>
                                                <option value="Corporate">Corporate & Commercial</option>
                                                <option value="Conveyancing">Property & Conveyancing</option>
                                                <option value="Litigation">Litigation & Arbitration</option>
                                                <option value="Probate">Probate & Succession</option>
                                                <option value="Consultancy">Legal Consultancy</option>
                                            </select>
                                        </div>

                                        <div className="form-group">
                                            <label>Message / Case Summary*</label>
                                            <textarea
                                                rows={4}
                                                placeholder="Provide a brief context of your inquiry..."
                                                {...register('message', { required: 'Message required' })}
                                            />
                                            {errors.message && <span className="error-hint">{errors.message.message?.toString()}</span>}
                                        </div>

                                        <button type="submit" disabled={isSubmitting} className="btn-premium btn-primary w-full">
                                            {isSubmitting ? 'Processing Submission...' : 'Transmit Inquiry'}
                                        </button>

                                        {submitMessage && (
                                            <div className={`status-alert ${submitMessage.includes('failed') ? 'error' : 'success'}`}>
                                                {submitMessage}
                                            </div>
                                        )}
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Satellite Location Map */}
                <section className="map-section">
                    <div className="container">
                        <h2 className="section-title">Satellite Location</h2>
                    </div>
                    <div className="map-frame-premium">
                        <iframe
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            src="https://maps.google.com/maps?q=Kimani+Wambua+Advocates+Nairobi&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            title="Office Location"
                        ></iframe>
                    </div>
                </section>
            </main>
            <Footer />

            <style jsx>{`
                .contact-grid {
                    display: grid;
                    grid-template-columns: 1fr 1.2fr;
                    gap: 5rem;
                    align-items: start;
                }

                .panel-intro {
                    font-size: 1.2rem;
                    color: var(--color-text-light);
                    margin-bottom: 3rem;
                    line-height: 1.7;
                }

                .info-cards {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 2rem;
                }

                .info-card-premium {
                    padding: 2.5rem;
                    background: var(--color-surface);
                    border-bottom: 3px solid transparent;
                    transition: all 0.3s ease;
                }

                .info-card-premium:hover {
                    background: #fff;
                    box-shadow: var(--shadow-lg);
                    border-bottom-color: var(--color-secondary);
                }

                .card-icon {
                    font-size: 2rem;
                    margin-bottom: 1.5rem;
                }

                .card-body h4 {
                    font-size: 0.85rem;
                    text-transform: uppercase;
                    letter-spacing: 0.15em;
                    color: var(--color-secondary);
                    margin-bottom: 1rem;
                }

                .card-body p {
                    margin-bottom: 0.5rem;
                    color: var(--color-text-light);
                    font-size: 0.95rem;
                    line-height: 1.5;
                }

                .contact-link-main {
                    font-size: 1.1rem;
                    font-weight: 700;
                    color: var(--color-primary);
                    text-decoration: none;
                }

                .whatsapp-badge {
                    display: inline-block;
                    margin-top: 1rem;
                    padding: 0.5rem 1rem;
                    background: #25D366;
                    color: white;
                    border-radius: 4px;
                    font-size: 0.8rem;
                    font-weight: 700;
                    text-decoration: none;
                }

                .form-panel-wrapper {
                    position: relative;
                }

                .form-card-premium {
                    background: #fff;
                    padding: 4rem;
                    border-radius: 4px;
                }

                .form-header {
                    margin-bottom: 3rem;
                }

                .form-header h3 {
                    font-size: 2rem;
                    margin-bottom: 0.5rem;
                }

                .form-header p {
                    font-size: 0.9rem;
                    color: var(--color-text-light);
                }

                .premium-form {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                }

                .form-grid-inner {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 1.5rem;
                }

                .form-group {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                }

                .form-group label {
                    font-size: 0.75rem;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    font-weight: 700;
                    color: var(--color-primary-light);
                }

                .form-group input, .form-group select, .form-group textarea {
                    padding: 1rem;
                    border: 1px solid rgba(0,0,0,0.1);
                    border-radius: 4px;
                    font-family: inherit;
                    font-size: 1rem;
                    transition: all 0.3s ease;
                }

                .form-group input:focus, .form-group select:focus, .form-group textarea:focus {
                    outline: none;
                    border-color: var(--color-secondary);
                    box-shadow: 0 0 0 3px rgba(139, 26, 30, 0.05);
                }

                .error-hint {
                    font-size: 0.75rem;
                    color: var(--color-error);
                    font-weight: 600;
                }

                .status-alert {
                    margin-top: 2rem;
                    padding: 1.5rem;
                    border-radius: 4px;
                    font-weight: 600;
                    text-align: center;
                }

                .status-alert.success {
                    background: var(--color-success);
                    color: white;
                }

                .status-alert.error {
                    background: var(--color-error);
                    color: white;
                }

                .map-section {
                    background: var(--color-surface);
                    padding-top: 6rem;
                }

                .map-frame-premium {
                    height: 600px;
                    width: 100%;
                    position: relative;
                    background: #eee;
                    margin-top: 4rem;
                }

                .grayscale-map {
                    filter: grayscale(1) contrast(1.2) opacity(0.8);
                }

                .map-overlay {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    z-index: 10;
                }

                @media (max-width: 1200px) {
                    .contact-grid {
                        grid-template-columns: 1fr;
                        gap: 4rem;
                    }
                    .info-cards {
                        grid-template-columns: 1fr 1fr;
                    }
                }

                @media (max-width: 768px) {
                    .info-cards {
                        grid-template-columns: 1fr;
                    }
                    .form-grid-inner {
                        grid-template-columns: 1fr;
                    }
                    .form-card-premium {
                        padding: 2rem;
                    }
                }
            `}</style>
        </>
    );
}
