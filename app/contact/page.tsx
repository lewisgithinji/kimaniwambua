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
            // Send to Web3Forms
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    access_key: 'YOUR_WEB3FORMS_ACCESS_KEY', // User needs to add their own key
                    subject: `New Contact Form Submission from ${data.name}`,
                    from_name: FIRM_INFO.name,
                    ...data,
                }),
            });

            if (response.ok) {
                setSubmitMessage('Thank you! Your message has been sent successfully. We will get back to you within 24 hours.');
                reset();
            } else {
                setSubmitMessage('Sorry, there was an error sending your message. Please try again or contact us directly via phone or email.');
            }
        } catch (error) {
            setSubmitMessage('Sorry, there was an error. Please contact us directly via phone or email.');
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
                    title="Contact Us"
                    description="Get in touch with our legal team"
                />

                {/* Contact Information & Form */}
                <section className="section">
                    <div className="container">
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-2xl)' }}>
                            {/* Contact Details */}
                            <div>
                                <h2 style={{ marginBottom: 'var(--space-lg)' }}>Get in Touch</h2>

                                <div className="card" style={{ marginBottom: 'var(--space-lg)' }}>
                                    <h4 style={{ color: 'var(--color-secondary)', marginBottom: 'var(--space-md)' }}>📍 Office Location</h4>
                                    <p style={{ lineHeight: 'var(--line-height-relaxed)' }}>
                                        {FIRM_INFO.address.building}<br />
                                        {FIRM_INFO.address.area}<br />
                                        {FIRM_INFO.address.poBox}<br />
                                        {FIRM_INFO.address.city}, {FIRM_INFO.address.country}
                                    </p>
                                </div>

                                <div className="card" style={{ marginBottom: 'var(--space-lg)' }}>
                                    <h4 style={{ color: 'var(--color-secondary)', marginBottom: 'var(--space-md)' }}>📞 Phone</h4>
                                    <p><a href={`tel:${FIRM_INFO.contact.phone}`} style={{ fontSize: 'var(--font-size-lg)' }}>{FIRM_INFO.contact.phone}</a></p>
                                    <p style={{ marginTop: 'var(--space-sm)' }}>
                                        <a href={`https://wa.me/${FIRM_INFO.contact.whatsapp}`} className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-xs)' }}>
                                            💬 WhatsApp
                                        </a>
                                    </p>
                                </div>

                                <div className="card" style={{ marginBottom: 'var(--space-lg)' }}>
                                    <h4 style={{ color: 'var(--color-secondary)', marginBottom: 'var(--space-md)' }}>✉️ Email</h4>
                                    <p><a href={`mailto:${FIRM_INFO.contact.email}`} style={{ fontSize: 'var(--font-size-lg)' }}>{FIRM_INFO.contact.email}</a></p>
                                </div>

                                <div className="card">
                                    <h4 style={{ color: 'var(--color-secondary)', marginBottom: 'var(--space-md)' }}>🕐 Office Hours</h4>
                                    <p style={{ lineHeight: 'var(--line-height-relaxed)' }}>
                                        Monday - Friday: 8:00 AM - 5:00 PM<br />
                                        Saturday: 9:00 AM - 1:00 PM<br />
                                        Sunday: Closed
                                    </p>
                                </div>
                            </div>

                            {/* Contact Form */}
                            <div>
                                <div className="card">
                                    <h3 style={{ marginBottom: 'var(--space-lg)' }}>Send Us a Message</h3>
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className="form-group">
                                            <label className="form-label">Full Name*</label>
                                            <input
                                                type="text"
                                                className="form-input"
                                                {...register('name', { required: 'Name is required' })}
                                            />
                                            {errors.name && <p className="form-error">{errors.name.message?.toString()}</p>}
                                        </div>

                                        <div className="form-group">
                                            <label className="form-label">Email Address*</label>
                                            <input
                                                type="email"
                                                className="form-input"
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
                                            <label className="form-label">Phone Number</label>
                                            <input type="tel" className="form-input" {...register('phone')} />
                                        </div>

                                        <div className="form-group">
                                            <label className="form-label">Area of Interest</label>
                                            <select className="form-select" {...register('practiceArea')}>
                                                <option value="">Select a practice area</option>
                                                <option value="Property and Conveyancing Law">Property and Conveyancing Law</option>
                                                <option value="Banking Securities Law">Banking Securities Law</option>
                                                <option value="Business Law">Business Law</option>
                                                <option value="Commercial Law">Commercial Law</option>
                                                <option value="Company Secretarial Services">Company Secretarial Services</option>
                                                <option value="Litigation and Arbitration">Litigation and Arbitration</option>
                                                <option value="Probate Administration">Probate Administration</option>
                                            </select>
                                        </div>

                                        <div className="form-group">
                                            <label className="form-label">Message*</label>
                                            <textarea
                                                className="form-textarea"
                                                rows={5}
                                                {...register('message', { required: 'Message is required' })}
                                            />
                                            {errors.message && <p className="form-error">{errors.message.message?.toString()}</p>}
                                        </div>

                                        <button type="submit" className="btn btn-primary btn-lg" disabled={isSubmitting} style={{ width: '100%' }}>
                                            {isSubmitting ? 'Sending...' : 'Send Message'}
                                        </button>

                                        {submitMessage && (
                                            <p style={{
                                                marginTop: 'var(--space-md)',
                                                padding: 'var(--space-md)',
                                                backgroundColor: submitMessage.includes('error') || submitMessage.includes('Sorry') ? 'var(--color-error)' : 'var(--color-success)',
                                                color: 'white',
                                                borderRadius: 'var(--radius-md)'
                                            }}>
                                                {submitMessage}
                                            </p>
                                        )}
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Map Section */}
                <section style={{ padding: 0 }}>
                    <div
                        style={{
                            width: '100%',
                            height: '500px',
                            backgroundColor: 'var(--color-surface)'
                        }}
                    >
                        <iframe
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            scrolling="no"
                            marginHeight={0}
                            marginWidth={0}
                            src={`https://maps.google.com/maps?q=${FIRM_INFO.mapCoordinates.lat},${FIRM_INFO.mapCoordinates.lng}&z=15&output=embed`}
                            title="Office Location"
                            aria-label="Office Location Map"
                        >
                        </iframe>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
