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
      <section className="section section-subtle">
        <div className="container">
          <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
            <h2 className="section-title">About Our Firm</h2>
            <p style={{ fontSize: 'var(--font-size-xl)', lineHeight: 'var(--line-height-relaxed)', color: 'var(--color-primary-light)' }}>
              Kimani Wambua & Company Advocates is a premier legal practice and consultancy firm established in {FIRM_INFO.established} to provide sophisticated, timely, and amicable legal solutions.
            </p>
            <div className="grid grid-cols-3" style={{ marginTop: 'var(--space-3xl)', gap: 'var(--space-2xl)' }}>
              <div className="card-premium" style={{ border: 'none', background: 'transparent' }}>
                <h3 style={{ color: 'var(--color-secondary)', fontSize: 'var(--font-size-5xl)', marginBottom: '0.5rem' }}>9+</h3>
                <p style={{ fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Years of Excellence</p>
              </div>
              <div className="card-premium" style={{ border: 'none', background: 'transparent' }}>
                <h3 style={{ color: 'var(--color-secondary)', fontSize: 'var(--font-size-5xl)', marginBottom: '0.5rem' }}>7</h3>
                <p style={{ fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Core Specialities</p>
              </div>
              <div className="card-premium" style={{ border: 'none', background: 'transparent' }}>
                <h3 style={{ color: 'var(--color-secondary)', fontSize: 'var(--font-size-5xl)', marginBottom: '0.5rem' }}>4</h3>
                <p style={{ fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Strategic Partners</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission with Parallax Backdrop */}
      <section className="relative section overflow-hidden">
        <div
          className="absolute inset-0 z-0 parallax-bg opacity-10"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2070&auto=format&fit=crop)' }}
        ></div>
        <div className="container relative z-10">
          <div className="grid grid-cols-2" style={{ gap: 'var(--space-2xl)' }}>
            <div className="card-premium" style={{ padding: '4rem 3rem' }}>
              <h3 className="section-title left" style={{ fontSize: '1.8rem' }}>Our Vision</h3>
              <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)' }}>To be renowned global legal practitioners, setting standards of excellence in every territory we serve.</p>
            </div>
            <div className="card-premium" style={{ padding: '4rem 3rem' }}>
              <h3 className="section-title left" style={{ fontSize: '1.8rem' }}>Our Mission</h3>
              <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)' }}>To apply our core competencies to provide professional, innovative, and results-oriented legal solutions that satisfy our clients' most complex needs.</p>
            </div>
          </div>
          <div className="grid grid-cols-2" style={{ marginTop: 'var(--space-2xl)', gap: 'var(--space-2xl)' }}>
            {CORE_VALUES.map((value) => (
              <div key={value.title} className="card-premium" style={{ padding: '3rem 2.5rem' }}>
                <h4 style={{ color: 'var(--color-secondary)', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '1.2rem', marginBottom: '1rem' }}>{value.title}</h4>
                <p style={{ color: 'var(--color-text-light)' }}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practice Areas (Global Partners Style) */}
      <section style={{ backgroundColor: '#000000', padding: '8rem 0', position: 'relative', overflow: 'hidden' }}>
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 1,
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.73), rgba(0,0,0,0.73)), url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop)',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed',
            opacity: 0.55
          }}
        ></div>

        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
            <h2 style={{ color: '#ffffff', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, marginBottom: '1.5rem', letterSpacing: '-0.02em', textTransform: 'none' }}>
              Specialist Practice Areas
            </h2>
            <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.75)', maxWidth: '850px', margin: '0 auto', fontWeight: '400', lineHeight: '1.7' }}>
              Strategic legal architecture tailored for complex global mandates, delivering results with precision and executive integrity.
            </p>
          </div>

          <PracticeGrid />

          <div style={{ textAlign: 'center', marginTop: '6rem' }}>
            <Link href="/practice-areas" className="btn-premium btn-primary btn-lg" style={{ borderRadius: '4px', padding: '1.2rem 3.5rem' }}>
              Explore All Specialist Services
            </Link>
          </div>
        </div>
      </section>

      {/* Our Team Preview */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--space-2xl)' }}>
            <h2 className="section-title">Our Expert Team</h2>
            <p style={{ fontSize: 'var(--font-size-lg)', color: 'var(--color-text-light)' }}>Meet our experienced legal professionals</p>
          </div>
          <div className="grid grid-cols-4">
            {PARTNERS.map((partner) => (
              <div key={partner.id} className="card-premium" style={{ border: 'none', background: 'transparent' }}>
                <div style={{ position: 'relative', marginBottom: 'var(--space-md)', overflow: 'hidden' }}>
                  <div
                    style={{
                      width: '100%',
                      aspectRatio: '1',
                      background: 'var(--color-surface-dark)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 'var(--font-size-6xl)',
                      fontWeight: 'var(--font-weight-bold)',
                      color: 'var(--color-primary)',
                      borderBottom: '4px solid var(--color-secondary)'
                    }}
                  >
                    {partner.name.split(' ')[0][0]}{partner.name.split(' ')[1] ? partner.name.split(' ')[1][0] : ''}
                  </div>
                </div>
                <div style={{ padding: '0 var(--space-xs)' }}>
                  <h4 style={{ marginBottom: 'var(--space-xs)', fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{partner.name}</h4>
                  <p style={{ color: 'var(--color-secondary)', fontWeight: 'var(--font-weight-bold)', fontSize: '0.9rem', marginBottom: 'var(--space-xs)', textTransform: 'uppercase' }}>
                    {partner.title}
                  </p>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-text-light)', marginBottom: 'var(--space-md)', minHeight: '3em' }}>
                    {partner.department}
                  </p>
                  <a href={`mailto:${partner.email}`} className="btn-premium btn-secondary" style={{ width: '100%', padding: '0.75rem', fontSize: '0.75rem' }}>
                    Contact
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 'var(--space-3xl)' }}>
            <Link href="/team" className="btn btn-primary btn-lg btn-premium">
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

      {/* Executive CTA Hub */}
      <section className="relative py-40 overflow-hidden bg-black text-white">
        <div
          className="absolute inset-0 z-0 parallax-bg opacity-40"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1436450412740-6b988f486c6b?q=80&w=2070&auto=format&fit=crop)' }}
        ></div>

        <div className="container relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="card-premium" style={{
              backgroundImage: 'linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.85)), url(https://images.unsplash.com/photo-1436450412740-6b988f486c6b?q=80&w=1500&auto=format&fit=crop)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.15)',
              padding: '6rem 4rem',
              textAlign: 'center',
              borderRadius: '4px'
            }}>
              <div className="mb-12">
                <span style={{ color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.4em', fontSize: '0.9rem', fontWeight: '800', display: 'block', marginBottom: '2rem' }}>Executive Engagement</span>
                <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter" style={{ color: '#ffffff' }}>Secure Your Strategic Position</h2>
                <p style={{ fontSize: '1.4rem', lineHeight: '1.7', color: '#ffffff', opacity: 1, fontWeight: '400', maxWidth: '800px', margin: '0 auto' }}>
                  Professional participation in complex litigation and high-stakes corporate advisory requires precise timing. Our senior registrars are standing by to coordinate your placement.
                </p>
              </div>

              <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/meeting-booking" className="btn-premium btn-primary btn-lg px-12">
                  Initiate Consultation
                </Link>
                <Link href="/contact" className="btn-premium btn-outline btn-lg px-12" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.6)' }}>
                  Locate Chambers
                </Link>
              </div>

              <div style={{ marginTop: '5rem', display: 'flex', justifyContent: 'center', gap: '4rem', opacity: 0.5 }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '0.5rem' }}>100%</div>
                  <div style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Confidential</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '0.5rem' }}>09+</div>
                  <div style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Years Professional</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '0.5rem' }}>24h</div>
                  <div style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Registry Response</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
