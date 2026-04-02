import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section className="hero">
      {/* Background Effects */}
      <div className="hero-bg" />
      <div className="hero-grid" />

      <div className="hero-content">
        {/* LEFT: Text */}
        <div>
          <div className="hero-eyebrow fade-in">
            <div className="hero-eyebrow-line" />
            <span>Profil Diri — Kelas X</span>
          </div>

          <h1 className="hero-title fade-in fade-in-delay-1">
            Mimpi Menjadi<br />
            <span className="gold">Arsitek</span><br />
            Masa Depan
          </h1>

          <p className="hero-subtitle fade-in fade-in-delay-2">
            Saya percaya bahwa sebuah bangunan bukan sekadar struktur —
            melainkan sebuah karya seni yang hidup, tempat di mana
            manusia bercerita dan bermimpi.
          </p>

          <div className="hero-cta fade-in fade-in-delay-3">
            <Link to="/dreams" className="btn btn-primary" id="cta-dreams">
              Lihat Cita-Cita Saya ✦
            </Link>
            <Link to="/about" className="btn btn-outline" id="cta-about">
              Tentang Saya
            </Link>
          </div>

          <div className="hero-stats fade-in fade-in-delay-4">
            <div>
              <div className="hero-stat-value">10+</div>
              <div className="hero-stat-label">Inspirasi Proyek</div>
            </div>
            <div>
              <div className="hero-stat-value">5+</div>
              <div className="hero-stat-label">Skill Teknis</div>
            </div>
            <div>
              <div className="hero-stat-value">∞</div>
              <div className="hero-stat-label">Semangat Belajar</div>
            </div>
          </div>
        </div>

        {/* RIGHT: Blueprint Card */}
        <div className="hero-visual fade-in fade-in-delay-2">
          <div className="blueprint-card">
            <div className="blueprint-lines">
              <svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Floor plan lines */}
                <rect x="20" y="20" width="260" height="180" stroke="#c9a84c" strokeWidth="1.5" strokeDasharray="4 2" opacity="0.5"/>
                <rect x="40" y="40" width="100" height="80" stroke="#c9a84c" strokeWidth="1" opacity="0.4"/>
                <rect x="160" y="40" width="100" height="80" stroke="#c9a84c" strokeWidth="1" opacity="0.4"/>
                <rect x="40" y="140" width="220" height="40" stroke="#c9a84c" strokeWidth="1" opacity="0.4"/>
                {/* Elevation lines */}
                <line x1="20" y1="220" x2="280" y2="220" stroke="#c9a84c" strokeWidth="1" opacity="0.3"/>
                <line x1="60" y1="220" x2="60" y2="260" stroke="#c9a84c" strokeWidth="1" opacity="0.3"/>
                <line x1="240" y1="220" x2="240" y2="260" stroke="#c9a84c" strokeWidth="1" opacity="0.3"/>
                <line x1="60" y1="260" x2="240" y2="260" stroke="#c9a84c" strokeWidth="1" opacity="0.3"/>
                {/* Triangle roof */}
                <polygon points="150,230 60,260 240,260" stroke="#c9a84c" strokeWidth="1.5" fill="none" opacity="0.5"/>
                {/* Compass */}
                <circle cx="260" cy="260" r="20" stroke="#c9a84c" strokeWidth="1" opacity="0.4"/>
                <line x1="260" y1="244" x2="260" y2="276" stroke="#c9a84c" strokeWidth="1" opacity="0.4"/>
                <line x1="244" y1="260" x2="276" y2="260" stroke="#c9a84c" strokeWidth="1" opacity="0.4"/>
                <text x="260" y="248" fill="#c9a84c" fontSize="8" textAnchor="middle" opacity="0.6">N</text>
              </svg>
            </div>

            <div className="blueprint-info">
              <h3>Arsitek Muda</h3>
              <p>Merancang masa depan, satu blueprint dalam satu waktu</p>
            </div>

            <div className="hero-badge">
              <div className="hero-badge-inner">
                <div>Calon</div>
                <div style={{fontSize:'1rem'}}>✦</div>
                <div>Arsitek</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
