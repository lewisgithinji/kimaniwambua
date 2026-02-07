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
            // Send to Web3Forms
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    access_key: 'YOUR_WEB3FORMS_ACCESS_KEY', // User needs to add their own key
                    subject: `Meeting Request from ${data.clientName}`,
                    from_name: FIRM_INFO.name,
                    ...data,
                }),
            });

            if (response.ok) {
                setSubmitMessage('Your meeting request has been received! We will contact you within 24 hours to confirm the appointment.');
                reset();
            } else {
                setSubmitMessage('Sorry, there was an error submitting your request. Please call us directly at ' + FIRM_INFO.contact.phone);
            }
        } catch (error) {
            setSubmitMessage('Sorry, there was an error. Please call us directly at ' + FIRM_INFO.contact.phone);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <Header />
            <main style={{ marginTop: '80px' }}>
                {/* Hero Section */}
                {/* Hero Section */}
                <PageHero
                    title="Book a Consultation"
                    description="Schedule a meeting with our expert legal team"
                />

                {/* Meeting Booking Form */}
                <section className="section">
                    <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <div className="card">
                            <div style={{ marginBottom: 'var(--space-xl)' }}>
                                <h2 style={{ marginBottom: 'var(--space-md)' }}>Meeting Request Form</h2>
                                <p style={{ color: 'var(--color-text-light)' }}>
                                    Fill out the form below and we will contact you within 24 hours to confirm your appointment.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit(onSubmit)}>
                                {/* Client Information */}
                                <div style={{ marginBottom: 'var(--space-xl)' }}>
                                    <h3 style={{ color: 'var(--color-accent)', marginBottom: 'var(--space-md)' }}>Your Information</h3>

                                    <div className="form-group">
                                        <label className="form-label">Full Name*</label>
                                        <input
                                            type="text"
                                            className="form-input"
                                            placeholder="John Doe"
                                            {...register('clientName', { required: 'Name is required' })}
                                        />
                                        {errors.clientName && <p className="form-error">{errors.clientName.message?.toString()}</p>}
                                    </div>

                                    <div className="form-group">
                                        <label className="form-label">Email Address*</label>
                                        <input
                                            type="email"
                                            className="form-input"
                                            placeholder="john@example.com"
                                            {...register('email', {
                                                required: 'Email is required',
                                                pattern: {
                                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                    message: 'Invalid email address'
                                                }
                                            })}
                                        />
                                        {errors.email && <p className="form-error">{errors.email.message?.toString()}</p>}
                                    </div>

                                    <div className="form-group">
                                        <label className="form-label">Phone Number*</label>
                                        <input
                                            type="tel"
                                            className="form-input"
                                            placeholder="+254 7XX XXX XXX"
                                            {...register('phone', { required: 'Phone number is required' })}
                                        />
                                        {errors.phone && <p className="form-error">{errors.phone.message?.toString()}</p>}
                                    </div>
                                </div>

                                {/* Meeting Details */}
                                <div style={{ marginBottom: 'var(--space-xl)' }}>
                                    <h3 style={{ color: 'var(--color-accent)', marginBottom: 'var(--space-md)' }}>Meeting Details</h3>

                                    <div className="form-group">
                                        <label className="form-label">Preferred Partner</label>
                                        <select className="form-select" {...register('preferredPartner')}>
                                            <option value="">No Preference</option>
                                            {PARTNERS.map((partner) => (
                                                <option key={partner.id} value={partner.name}>
                                                    {partner.name} - {partner.department}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label className="form-label">Legal Service Area*</label>
                                        <select
                                            className="form-select"
                                            {...register('practiceArea', { required: 'Please select a practice area' })}
                                        >
                                            <option value="">Select a practice area</option>
                                            {PRACTICE_AREAS.map((area) => (
                                                <option key={area.id} value={area.title}>{area.title}</option>
                                            ))}
                                        </select>
                                        {errors.practiceArea && <p className="form-error">{errors.practiceArea.message?.toString()}</p>}
                                    </div>

                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-md)' }}>
                                        <div className="form-group">
                                            <label className="form-label">Preferred Date*</label>
                                            <input
                                                type="date"
                                                className="form-input"
                                                min={new Date().toISOString().split('T')[0]}
                                                {...register('preferredDate', { required: 'Date is required' })}
                                            />
                                            {errors.preferredDate && <p className="form-error">{errors.preferredDate.message?.toString()}</p>}
                                        </div>

                                        <div className="form-group">
                                            <label className="form-label">Preferred Time*</label>
                                            <select
                                                className="form-select"
                                                {...register('preferredTime', { required: 'Time is required' })}
                                            >
                                                <option value="">Select a time</option>
                                                <option value="9:00 AM - 10:00 AM">9:00 AM - 10:00 AM</option>
                                                <option value="10:00 AM - 11:00 AM">10:00 AM - 11:00 AM</option>
                                                <option value="11:00 AM - 12:00 PM">11:00 AM - 12:00 PM</option>
                                                <option value="12:00 PM - 1:00 PM">12:00 PM - 1:00 PM</option>
                                                <option value="2:00 PM - 3:00 PM">2:00 PM - 3:00 PM</option>
                                                <option value="3:00 PM - 4:00 PM">3:00 PM - 4:00 PM</option>
                                                <option value="4:00 PM - 5:00 PM">4:00 PM - 5:00 PM</option>
                                            </select>
                                            {errors.preferredTime && <p className="form-error">{errors.preferredTime.message?.toString()}</p>}
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label className="form-label">Urgency Level*</label>
                                        <select
                                            className="form-select"
                                            {...register('urgency', { required: 'Please select urgency level' })}
                                        >
                                            <option value="">Select urgency</option>
                                            <option value="Low">Low - General inquiry</option>
                                            <option value="Medium">Medium - Within 1-2 weeks</option>
                                            <option value="High">High - Urgent matter</option>
                                        </select>
                                        {errors.urgency && <p className="form-error">{errors.urgency.message?.toString()}</p>}
                                    </div>

                                    <div className="form-group">
                                        <label className="form-label">Brief Description of Legal Matter*</label>
                                        <textarea
                                            className="form-textarea"
                                            rows={5}
                                            placeholder="Please provide a brief description of your legal matter..."
                                            {...register('description', { required: 'Description is required' })}
                                        />
                                        {errors.description && <p className="form-error">{errors.description.message?.toString()}</p>}
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-primary btn-lg"
                                    disabled={isSubmitting}
                                    style={{ width: '100%' }}
                                >
                                    {isSubmitting ? 'Submitting...' : 'Request Meeting'}
                                </button>

                                {submitMessage && (
                                    <div style={{
                                        marginTop: 'var(--space-md)',
                                        padding: 'var(--space-md)',
                                        backgroundColor: submitMessage.includes('error') || submitMessage.includes('Sorry') ? 'var(--color-error)' : 'var(--color-success)',
                                        color: 'white',
                                        borderRadius: 'var(--radius-md)',
                                        textAlign: 'center'
                                    }}>
                                        {submitMessage}
                                    </div>
                                )}
                            </form>

                            <div style={{ marginTop: 'var(--space-xl)', padding: 'var(--space-lg)', backgroundColor: 'var(--color-surface)', borderRadius: 'var(--radius-md)' }}>
                                <h4 style={{ marginBottom: 'var(--space-md)' }}>What Happens Next?</h4>
                                <ol style={{ marginLeft: 'var(--space-lg)' }}>
                                    <li style={{ marginBottom: 'var(--space-sm)' }}>We will review your meeting request</li>
                                    <li style={{ marginBottom: 'var(--space-sm)' }}>Our team will contact you within 24 hours to confirm the appointment</li>
                                    <li style={{ marginBottom: 'var(--space-sm)' }}>You'll receive a confirmation email with meeting details</li>
                                    <li>Meet with our expert legal team at the scheduled time</li>
                                </ol>
                            </div>
                        </div>

                        {/* Alternative Contact Methods */}
                        <div style={{ marginTop: 'var(--space-2xl)', textAlign: 'center' }}>
                            <p style={{ marginBottom: 'var(--space-md)', color: 'var(--color-text-light)' }}>
                                Prefer to speak with us directly?
                            </p>
                            <div style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
                                <a href={`tel:${FIRM_INFO.contact.phone}`} className="btn btn-outline">
                                    📞 Call: {FIRM_INFO.contact.phone}
                                </a>
                                <a href={`https://wa.me/${FIRM_INFO.contact.whatsapp}`} className="btn btn-outline">
                                    💬 WhatsApp
                                </a>
                                <a href={`mailto:${FIRM_INFO.contact.email}`} className="btn btn-outline">
                                    ✉️ Email
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
