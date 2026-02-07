import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import PracticeGrid from '@/components/PracticeGrid';
import Link from 'next/link';
import { FIRM_INFO, PRACTICE_AREAS, PARTNERS, MAJOR_CLIENTS, CORE_VALUES } from '@/lib/constants';

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />

      {/* About Section */}
      <section className="section bg-surface">
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <h2>About Us</h2>
            <p style={{ fontSize: 'var(--font-size-lg)', lineHeight: 'var(--line-height-relaxed)', fontFamily: 'Inter, sans-serif' }}>
              Kimani Wambua Advocates is a medium-sized legal practice and consultancy firm set up in {FIRM_INFO.established} to provide timely and amicable legal solutions to meet the needs of its clients.
            </p>
            <div className="grid grid-cols-3" style={{ marginTop: 'var(--space-2xl)', gap: 'var(--space-xl)' }}>
              <div>
                <h3 style={{ color: 'var(--color-secondary)', fontSize: 'var(--font-size-4xl)' }}>9+</h3>
                <p>Years of Experience</p>
              </div>
              <div>
                <h3 style={{ color: 'var(--color-secondary)', fontSize: 'var(--font-size-4xl)' }}>7</h3>
                <p>Practice Areas</p>
              </div>
              <div>
                <h3 style={{ color: 'var(--color-secondary)', fontSize: 'var(--font-size-4xl)' }}>3</h3>
                <p>Expert Partners</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-2">
            <div className="card">
              <h3>Our Vision</h3>
              <p>To be renowned global legal practitioners.</p>
            </div>
            <div className="card">
              <h3>Our Mission</h3>
              <p>To apply our core competencies to provide professional innovative legal solutions to satisfy our clients' needs.</p>
            </div>
          </div>
          <div className="grid grid-cols-2" style={{ marginTop: 'var(--space-xl)' }}>
            {CORE_VALUES.map((value) => (
              <div key={value.title} className="card">
                <h4>{value.title}</h4>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="section bg-surface">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--space-2xl)' }}>
            <h2>Our Practice Areas</h2>
            <p style={{ fontSize: 'var(--font-size-lg)' }}>Comprehensive legal services tailored to your needs</p>
          </div>

          <PracticeGrid />

          <div style={{ textAlign: 'center', marginTop: 'var(--space-xl)' }}>
            <Link href="/practice-areas" className="btn btn-primary btn-lg">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Our Team Preview */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--space-2xl)' }}>
            <h2>Our Expert Team</h2>
            <p style={{ fontSize: 'var(--font-size-lg)' }}>Meet our experienced legal professionals</p>
          </div>
          <div className="grid grid-cols-3">
            {PARTNERS.map((partner) => (
              <div key={partner.id} className="card text-center">
                <div
                  style={{
                    width: '150px',
                    height: '150px',
                    borderRadius: 'var(--radius-full)',
                    background: 'var(--color-secondary)',
                    margin: '0 auto var(--space-md)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 'var(--font-size-5xl)',
                    fontWeight: 'var(--font-weight-bold)',
                    color: 'var(--color-primary)',
                  }}
                >
                  {partner.name.split(' ')[0][0]}{partner.name.split(' ')[1][0]}
                </div>
                <h4 style={{ marginBottom: 'var(--space-xs)' }}>{partner.name}</h4>
                <p style={{ color: 'var(--color-secondary)', fontWeight: 'var(--font-weight-semibold)', marginBottom: 'var(--space-xs)' }}>
                  {partner.title}
                </p>
                <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-light)', marginBottom: 'var(--space-md)' }}>
                  {partner.department}
                </p>
                <a href={`mailto:${partner.email}`} className="btn btn-outline" style={{ fontSize: 'var(--font-size-sm)' }}>
                  Contact
                </a>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 'var(--space-xl)' }}>
            <Link href="/team" className="btn btn-secondary btn-lg">
              View Full Team
            </Link>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="section bg-surface">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--space-2xl)' }}>
            <h2>Our Valued Clients</h2>
            <p style={{ fontSize: 'var(--font-size-lg)' }}>Trusted by leading organizations</p>
          </div>
          <div className="grid grid-cols-4" style={{ gap: 'var(--space-md)' }}>
            {MAJOR_CLIENTS.slice(0, 8).map((client) => (
              <div
                key={client}
                className="card text-center"
                style={{
                  padding: 'var(--space-md)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: '100px',
                }}
              >
                <p style={{ fontSize: 'var(--font-size-sm)', fontWeight: 'var(--font-weight-semibold)' }}>{client}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%)', color: 'var(--color-text-white)' }}>
        <div className="container text-center">
          <h2 style={{ color: 'var(--color-text-white)', marginBottom: 'var(--space-lg)' }}>Ready to Get Started?</h2>
          <p style={{ fontSize: 'var(--font-size-lg)', marginBottom: 'var(--space-xl)', maxWidth: '700px', margin: '0 auto var(--space-xl)' }}>
            Schedule a consultation with our expert legal team today. We're here to provide the legal solutions you need.
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/meeting-booking" className="btn btn-primary btn-lg">
              Book Consultation
            </Link>
            <Link href="/contact" className="btn btn-outline btn-lg" style={{ color: 'white', borderColor: 'white' }}>
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
