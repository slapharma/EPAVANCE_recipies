import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Gut-Friendly Recipes | EPAVANCE',
  description: 'Anti-inflammatory, whole-food recipes designed to support people living with IBD. Gluten-free, dairy-free, and nutrient-dense meals for every occasion.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <header className="no-print" style={{ background: 'var(--primary)', borderBottom: '3px solid var(--accent)' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
            <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
              <div style={{
                width: 40, height: 40, borderRadius: '50%', background: 'var(--accent)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0,
              }}>🌿</div>
              <div>
                <div style={{ color: '#fff', fontWeight: 700, fontSize: 18, letterSpacing: '-0.3px' }}>EPAVANCE</div>
                <div style={{ color: 'rgba(255,255,255,0.65)', fontSize: 11, letterSpacing: '1px', textTransform: 'uppercase' }}>Gut-Friendly Recipes</div>
              </div>
            </a>
            <nav style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
              <a href="/" style={{ color: 'rgba(255,255,255,0.85)', textDecoration: 'none', fontSize: 14, fontWeight: 500 }}>All Recipes</a>
              <a href="/meal-plan" style={{ color: 'rgba(255,255,255,0.85)', textDecoration: 'none', fontSize: 14, fontWeight: 500 }}>Meal Planner</a>
              <a
                href="https://epavance.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ background: 'var(--accent)', color: '#fff', padding: '8px 18px', borderRadius: 20, textDecoration: 'none', fontSize: 13, fontWeight: 600 }}
              >
                Shop EPAVANCE ↗
              </a>
            </nav>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="no-print" style={{ background: 'var(--primary)', color: 'rgba(255,255,255,0.6)', textAlign: 'center', padding: '28px 24px', marginTop: 64, fontSize: 13, lineHeight: 1.7 }}>
          <p>These recipes are not medical advice. Please consult your healthcare professional regarding dietary changes.</p>
          <p style={{ marginTop: 6 }}>© {new Date().getFullYear()} EPAVANCE. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
