'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import { FIRM_INFO, PARTNERS, PRACTICE_AREAS } from '@/lib/constants';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function MeetingBookingPage() {
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
                    subject: `Formal Meeting Request: ${data.clientName}`,
                    from_name: FIRM_INFO.name,
                    ...data,
                }),
            });

            if (response.ok) {
                setSubmitMessage('Consultation request received. Our senior registrar will contact you shortly to confirm the appointment specifics.');
                reset();
            } else {
                setSubmitMessage('The submission gate encountered an issue. Please engage our direct registry via telephony.');
            }
        } catch (error) {
            setSubmitMessage('Connectivity failure in registry transmission. Please utilize direct electronic mail.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <Header />
            <main>
                <PageHero
                    title="Executive Consultation"
                    description="Formalize your engagement with our senior legal consultants."
                    backgroundImage="https://images.unsplash.com/photo-1423592707957-3b2d29445a0b?q=80&w=2070&auto=format&fit=crop"
                />

                <section className="section bg-surface">
                    <div className="container">
                        <div className="booking-layout">
                            {/* Booking Form Card */}
                            <div className="booking-card-wrapper">
                                <div className="card-premium booking-card">
                                    <div className="booking-header">
                                        <h2 className="section-title left">Appointment Registry</h2>
                                        <p>Comprehensive protocol for scheduling senior-level consultations.</p>
                                    </div>

                                    <form onSubmit={handleSubmit(onSubmit)} className="premium-form">
                                        <div className="form-section">
                                            <h3 className="form-section-title">I. Client Identification</h3>
                                            <div className="form-grid">
                                                <div className="form-group">
                                                    <label>Full Legal Name*</label>
                                                    <input
                                                        type="text"
                                                        placeholder="As it appears on identification"
                                                        {...register('clientName', { required: 'REQUIRED' })}
                                                    />
                                                    {errors.clientName && <span className="error-hint">{errors.clientName.message?.toString()}</span>}
                                                </div>
                                                <div className="form-group">
                                                    <label>Professional Email*</label>
                                                    <input
                                                        type="email"
                                                        placeholder="registry@yourfirm.com"
                                                        {...register('email', { required: 'REQUIRED' })}
                                                    />
                                                    {errors.email && <span className="error-hint">{errors.email.message?.toString()}</span>}
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label>Primary Contact Number*</label>
                                                <input
                                                    type="tel"
                                                    placeholder="International Format Recommended"
                                                    {...register('phone', { required: 'REQUIRED' })}
                                                />
                                                {errors.phone && <span className="error-hint">{errors.phone.message?.toString()}</span>}
                                            </div>
                                        </div>

                                        <div className="form-section">
                                            <h3 className="form-section-title">II. Engagement Specifics</h3>
                                            <div className="form-grid">
                                                <div className="form-group">
                                                    <label>Specialist Department*</label>
                                                    <select {...register('practiceArea', { required: 'REQUIRED' })}>
                                                        <option value="">Select Service Area</option>
                                                        {PRACTICE_AREAS.map((area) => (
                                                            <option key={area.id} value={area.title}>{area.title}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                                <div className="form-group">
                                                    <label>Consultant Preference</label>
                                                    <select {...register('preferredPartner')}>
                                                        <option value="">Senior Availability (No Preference)</option>
                                                        {PARTNERS.map((partner) => (
                                                            <option key={partner.id} value={partner.name}>{partner.name}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-section">
                                            <h3 className="form-section-title">III. Scheduling Protocol</h3>
                                            <div className="form-grid">
                                                <div className="form-group">
                                                    <label>Proposed Date*</label>
                                                    <input
                                                        type="date"
                                                        min={new Date().toISOString().split('T')[0]}
                                                        {...register('preferredDate', { required: 'REQUIRED' })}
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label>Temporal Preference*</label>
                                                    <select {...register('preferredTime', { required: 'REQUIRED' })}>
                                                        <option value="">Select Slot</option>
                                                        <option value="9:00 AM - 11:00 AM">Morning (09:00 - 11:00)</option>
                                                        <option value="11:00 AM - 1:00 PM">Mid-day (11:00 - 13:00)</option>
                                                        <option value="2:00 PM - 4:00 PM">Afternoon (14:00 - 16:00)</option>
                                                        <option value="4:00 PM - 5:00 PM">Evening (16:00 - 17:00)</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label>Priority Level</label>
                                                <div className="radio-group-modern">
                                                    {['Standard', 'Urgent', 'Strategic'].map((level) => (
                                                        <label key={level} className="radio-btn">
                                                            <input type="radio" value={level} {...register('urgency')} />
                                                            <span>{level}</span>
                                                        </label>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label>Executive Briefing / Case Context*</label>
                                            <textarea
                                                rows={5}
                                                placeholder="Please provide initial briefing documentation or context..."
                                                {...register('description', { required: 'Briefing required' })}
                                            />
                                        </div>

                                        <button type="submit" disabled={isSubmitting} className="btn-premium btn-primary w-full btn-lg">
                                            {isSubmitting ? 'Transmitting Registry Data...' : 'Submit Consultation Request'}
                                        </button>

                                        {submitMessage && (
                                            <div className={`status-alert ${submitMessage.includes('issue') ? 'error' : 'success'}`}>
                                                {submitMessage}
                                            </div>
                                        )}
                                    </form>
                                </div>
                            </div>

                            {/* Procedure Sidebar */}
                            <div className="procedure-sidebar">
                                <div className="card-premium procedure-card">
                                    <h3>Standard Procedure</h3>
                                    <div className="steps-list">
                                        <div className="step-item">
                                            <div className="step-num">01</div>
                                            <div className="step-content">
                                                <h4>Registry Review</h4>
                                                <p>Our administrative unit reviews your credentials and case briefing.</p>
                                            </div>
                                        </div>
                                        <div className="step-item">
                                            <div className="step-num">02</div>
                                            <div className="step-content">
                                                <h4>Conflict Clearance</h4>
                                                <p>Standard legal conflict checks are initiated within our database.</p>
                                            </div>
                                        </div>
                                        <div className="step-item">
                                            <div className="step-num">03</div>
                                            <div className="step-content">
                                                <h4>Engagement Confirmation</h4>
                                                <p>A formal confirmation and calendar invite will be dispatched within 12-24 hours.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="sidebar-footer">
                                        <p>For urgent litigation matters, please utilize our priority registry via:</p>
                                        <a href={`tel:${FIRM_INFO.contact.phone}`} className="sidebar-link">{FIRM_INFO.contact.phone}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />

            <style jsx>{`
                .booking-layout {
                    display: grid;
                    grid-template-columns: 1fr 380px;
                    gap: 3rem;
                    align-items: start;
                }

                .booking-card {
                    padding: 4rem;
                    background: #fff;
                    border: none;
                }

                .premium-form {
                    display: flex;
                    flex-direction: column;
                    gap: 3.5rem;
                }

                .form-section {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                }

                .form-section-title {
                    font-size: 0.75rem;
                    text-transform: uppercase;
                    letter-spacing: 0.25em;
                    color: var(--color-secondary);
                    font-weight: 800;
                    margin-bottom: 0.5rem;
                    border-bottom: 1px solid rgba(0,0,0,0.05);
                    padding-bottom: 0.5rem;
                }

                .form-grid {
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
                    font-size: 0.8rem;
                    font-weight: 700;
                    color: var(--color-primary);
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                }

                .form-group input, .form-group select, .form-group textarea {
                    padding: 1rem;
                    border: 1px solid rgba(0,0,0,0.1);
                    border-radius: 0;
                    font-family: inherit;
                    font-size: 1rem;
                    transition: all 0.3s ease;
                    background: var(--color-surface);
                }

                .form-group input:focus, .form-group select:focus, .form-group textarea:focus {
                    outline: none;
                    border-color: var(--color-secondary);
                    background: #fff;
                }

                .radio-group-modern {
                    display: flex;
                    gap: 1rem;
                }

                .radio-btn {
                    flex: 1;
                    position: relative;
                }

                .radio-btn input {
                    position: absolute;
                    opacity: 0;
                    cursor: pointer;
                }

                .radio-btn span {
                    display: block;
                    padding: 0.75rem;
                    text-align: center;
                    background: var(--color-surface);
                    border: 1px solid rgba(0,0,0,0.1);
                    font-size: 0.85rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }

                .radio-btn input:checked + span {
                    background: var(--color-secondary);
                    color: white;
                    border-color: var(--color-secondary);
                }

                .error-hint {
                    color: var(--color-error);
                    font-size: 0.7rem;
                    font-weight: 700;
                }

                .procedure-card {
                    padding: 3rem 2.5rem;
                    background: var(--color-primary);
                    color: #fff;
                    border: none;
                }

                .procedure-card h3 {
                    font-size: 1.4rem;
                    margin-bottom: 3rem;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    color: var(--color-secondary-light);
                }

                .steps-list {
                    display: flex;
                    flex-direction: column;
                    gap: 2.5rem;
                }

                .step-item {
                    display: flex;
                    gap: 1.5rem;
                }

                .step-num {
                    font-size: 0.8rem;
                    font-weight: 800;
                    color: var(--color-secondary);
                    padding-top: 0.3rem;
                }

                .step-content h4 {
                    font-size: 1rem;
                    margin-bottom: 0.5rem;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                }

                .step-content p {
                    font-size: 0.9rem;
                    color: rgba(255,255,255,0.6);
                    line-height: 1.6;
                }

                .sidebar-footer {
                    margin-top: 4rem;
                    padding-top: 2rem;
                    border-top: 1px solid rgba(255,255,255,0.1);
                }

                .sidebar-footer p {
                    font-size: 0.8rem;
                    color: rgba(255,255,255,0.5);
                    margin-bottom: 1rem;
                }

                .sidebar-link {
                    font-size: 1.2rem;
                    font-weight: 700;
                    color: #fff;
                    text-decoration: none;
                }

                .status-alert {
                    padding: 1.5rem;
                    text-align: center;
                    font-weight: 600;
                    font-size: 0.95rem;
                }

                .status-alert.success { background: var(--color-success); color: white; }
                .status-alert.error { background: var(--color-error); color: white; }

                @media (max-width: 1024px) {
                    .booking-layout {
                        grid-template-columns: 1fr;
                    }
                    .procedure-sidebar {
                        order: -1;
                    }
                }

                @media (max-width: 768px) {
                    .booking-card {
                        padding: 2.5rem 1.5rem;
                    }
                    .form-grid {
                        grid-template-columns: 1fr;
                    }
                    .radio-group-modern {
                        flex-direction: column;
                    }
                }
            `}</style>
        </>
    );
}
