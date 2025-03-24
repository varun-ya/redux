import React from 'react';

const Home = () => {

  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 16px',
    },
    page: {
      minHeight: '100vh',
      background: 'linear-gradient(to bottom, #f9fafb, #f3f4f6)',
      fontFamily: 'system-ui, -apple-system, sans-serif',
    },
    navbar: {
      background: 'white',
      borderBottom: '1px solid #e5e7eb',
      position: 'sticky',
      top: 0,
      zIndex: 10,
    },
    navbarInner: {
      display: 'flex',
      justifyContent: 'space-between',
      height: '64px',
    },
    logo: {
      fontSize: '1.5rem',
      fontWeight: 600,
      color: '#2563eb',
      display: 'flex',
      alignItems: 'center',
    },
    navLinks: {
      display: 'none',
      alignItems: 'center',
      '@media (min-width: 768px)': {
        display: 'flex',
      },
    },
    navLinksInner: {
      display: 'flex',
      marginLeft: '40px',
      gap: '32px',
    },
    activeLink: {
      color: '#2563eb',
      fontWeight: 500,
      textDecoration: 'none',
    },
    navLink: {
      color: '#4b5563',
      textDecoration: 'none',
      transition: 'color 0.2s ease',
    },
    mobileMenuButton: {
      display: 'flex',
      alignItems: 'center',
      color: '#4b5563',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      '@media (min-width: 768px)': {
        display: 'none',
      },
    },
    header: {
      background: 'white',
      padding: '64px 0 96px',
      textAlign: 'center',
    },
    hero: {
      textAlign: 'center',
    },
    heroTitle: {
      fontSize: 'clamp(2.5rem, 5vw, 3.75rem)',
      fontWeight: 'bold',
      color: '#111827',
      lineHeight: 1.2,
      marginBottom: '16px',
    },
    heroTitleHighlight: {
      color: '#2563eb',
    },
    heroSubtitle: {
      fontSize: '1.25rem',
      color: '#4b5563',
      maxWidth: '36rem',
      margin: '16px auto',
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'center',
      gap: '16px',
      marginTop: '32px',
    },
    primaryButton: {
      background: '#2563eb',
      color: 'white',
      fontWeight: 500,
      padding: '12px 24px',
      borderRadius: '8px',
      border: 'none',
      cursor: 'pointer',
      transition: 'background-color 0.2s ease',
    },
    secondaryButton: {
      background: 'white',
      color: '#2563eb',
      fontWeight: 500,
      padding: '12px 24px',
      borderRadius: '8px',
      border: '1px solid #2563eb',
      cursor: 'pointer',
      transition: 'background-color 0.2s ease',
    },
    featuresSection: {
      padding: '48px 0',
      background: 'white',
    },
    featuresGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '32px',
      '@media (min-width: 768px)': {
        gridTemplateColumns: 'repeat(3, 1fr)',
      },
    },
    featureCard: {
      padding: '24px',
      border: '1px solid #e5e7eb',
      borderRadius: '8px',
      transition: 'box-shadow 0.2s ease',
    },
    featureIcon: {
      width: '48px',
      height: '48px',
      background: '#dbeafe',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#2563eb',
      marginBottom: '16px',
    },
    featureTitle: {
      fontSize: '1.25rem',
      fontWeight: 600,
      color: '#111827',
      marginBottom: '8px',
    },
    featureDescription: {
      color: '#4b5563',
    },
    footer: {
      background: '#1f2937',
      color: 'white',
      padding: '48px 0',
    },
    footerGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '32px',
      '@media (min-width: 768px)': {
        gridTemplateColumns: 'repeat(4, 1fr)',
      },
    },
    footerTitle: {
      fontSize: '1.25rem',
      fontWeight: 600,
      marginBottom: '16px',
    },
    footerText: {
      color: '#9ca3af',
    },
    footerHeading: {
      fontWeight: 500,
      marginBottom: '16px',
    },
    footerLinksList: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
    },
    footerLink: {
      color: '#9ca3af',
      textDecoration: 'none',
      transition: 'color 0.2s ease',
    },
    socialLinks: {
      display: 'flex',
      gap: '16px',
      marginTop: '16px',
    },
    socialIcon: {
      color: '#9ca3af',
      transition: 'color 0.2s ease',
    },
    footerBottom: {
      marginTop: '32px',
      paddingTop: '32px',
      borderTop: '1px solid #374151',
      textAlign: 'center',
      color: '#9ca3af',
    },
  };

  // Event handlers for hover states
  const handleMouseEnter = (e, hoverStyle) => {
    for (const property in hoverStyle) {
      e.target.style[property] = hoverStyle[property];
    }
  };

  const handleMouseLeave = (e, originalStyle) => {
    for (const property in originalStyle) {
      e.target.style[property] = originalStyle[property];
    }
  };

  return (
    <div style={styles.page}>
      <nav style={styles.navbar}>
        <div style={styles.container}>
          <div style={styles.navbarInner}>
            <div style={styles.logo}>
              <span>MyWebsite</span>
            </div>
            <div style={{...styles.navLinks, display: window.innerWidth >= 768 ? 'flex' : 'none'}}>
              <div style={styles.navLinksInner}>
                <a href="#" style={styles.activeLink}>Home</a>
              
                <a 
                  href="/student" 
                  style={styles.navLink}
                  onMouseEnter={(e) => handleMouseEnter(e, { color: '#2563eb' })}
                  onMouseLeave={(e) => handleMouseLeave(e, { color: '#4b5563' })}
                >Student</a>
                <a 
                  href="/contact" 
                  style={styles.navLink}
                  onMouseEnter={(e) => handleMouseEnter(e, { color: '#2563eb' })}
                  onMouseLeave={(e) => handleMouseLeave(e, { color: '#4b5563' })}
                >Contact</a>
              </div>
            </div>
            <button style={{...styles.mobileMenuButton, display: window.innerWidth < 768 ? 'flex' : 'none'}}>
              <svg style={{ width: '24px', height: '24px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <header style={styles.header}>
        <div style={styles.container}>
          <div style={styles.hero}>
            <h1 style={styles.heroTitle}>
              Welcome to <span style={styles.heroTitleHighlight}>Student Management</span>
            </h1>
            <p style={styles.heroSubtitle}>
              Explore our professional services 
            </p>
            <div style={styles.buttonContainer}>
              <button 
                style={styles.primaryButton}
                onMouseEnter={(e) => handleMouseEnter(e, { backgroundColor: '#1d4ed8' })}
                onMouseLeave={(e) => handleMouseLeave(e, { backgroundColor: '#2563eb' })}
              >
                Get Started
              </button>
              <button 
                style={styles.secondaryButton}
                onMouseEnter={(e) => handleMouseEnter(e, { backgroundColor: '#eff6ff' })}
                onMouseLeave={(e) => handleMouseLeave(e, { backgroundColor: 'white' })}
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </header>

      
      <footer style={styles.footer}>
        <div style={styles.container}>
          <div style={styles.footerGrid}>
            <div>
              <h3 style={styles.footerTitle}>MyWebsite</h3>
              <p style={styles.footerText}>Providing professional solutions since 2023.</p>
            </div>
            <div>
              <h4 style={styles.footerHeading}>Links</h4>
              <ul style={styles.footerLinksList}>
                <li><a href="#" style={styles.footerLink}
                  onMouseEnter={(e) => handleMouseEnter(e, { color: 'white' })}
                  onMouseLeave={(e) => handleMouseLeave(e, { color: '#9ca3af' })}>Home</a></li>
                <li><a href="#" style={styles.footerLink}
                  onMouseEnter={(e) => handleMouseEnter(e, { color: 'white' })}
                  onMouseLeave={(e) => handleMouseLeave(e, { color: '#9ca3af' })}>About</a></li>
                <li><a href="/student" style={styles.footerLink}
                  onMouseEnter={(e) => handleMouseEnter(e, { color: 'white' })}
                  onMouseLeave={(e) => handleMouseLeave(e, { color: '#9ca3af' })}>Student</a></li>
                <li><a href="/contact" style={styles.footerLink}
                  onMouseEnter={(e) => handleMouseEnter(e, { color: 'white' })}
                  onMouseLeave={(e) => handleMouseLeave(e, { color: '#9ca3af' })}>Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 style={styles.footerHeading}>Contact Us</h4>
              <p style={styles.footerText}>jaddukinagri@gmail.com</p>
              <p style={styles.footerText}>+91 51 52 baki teri.....</p>
              <div style={styles.socialLinks}>
                <a href="#" style={styles.socialIcon}
                  onMouseEnter={(e) => handleMouseEnter(e, { color: 'white' })}
                  onMouseLeave={(e) => handleMouseLeave(e, { color: '#9ca3af' })}>
                  <span style={{ position: 'absolute', width: '1px', height: '1px', padding: '0', margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', borderWidth: '0' }}>Facebook</span>
                  <svg style={{ height: '24px', width: '24px' }} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" style={styles.socialIcon}
                  onMouseEnter={(e) => handleMouseEnter(e, { color: 'white' })}
                  onMouseLeave={(e) => handleMouseLeave(e, { color: '#9ca3af' })}>
                  <span style={{ position: 'absolute', width: '1px', height: '1px', padding: '0', margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', borderWidth: '0' }}>Twitter</span>
                  <svg style={{ height: '24px', width: '24px' }} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" style={styles.socialIcon}
                  onMouseEnter={(e) => handleMouseEnter(e, { color: 'white' })}
                  onMouseLeave={(e) => handleMouseLeave(e, { color: '#9ca3af' })}>
                  <span style={{ position: 'absolute', width: '1px', height: '1px', padding: '0', margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', borderWidth: '0' }}>LinkedIn</span>
                  <svg style={{ height: '24px', width: '24px' }} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div style={styles.footerBottom}>
            <p>© 2025 MyWebsite. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;