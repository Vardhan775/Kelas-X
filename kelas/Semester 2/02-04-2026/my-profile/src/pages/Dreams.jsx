import { useEffect, useState } from 'react'
import axios from 'axios'

const API = 'http://localhost:8000/api'

const fallbackDreams = [
  {
    id: 1,
    year: 'Sekarang — 2026',
    title: 'Belajar Dasar-Dasar Koding dan AI',
    desc: 'Menguasai HTML, CSS, JavaScript, dan AI untuk membangun website dan aplikasi.',
  },
  {
    id: 2,
    year: 'SMK — 2025-2028',
    title: 'Membangun Portofolio Awal',
    desc: 'Membuat website dan aplikasi sederhana, bergabung dengan komunitas koding, dan mengikuti lomba koding.',
  },
  {
    id: 3,
    year: 'Kuliah — 2029-2034',
    title: 'Studi Teknik Informatika di Universitas Impian',
    desc: 'Mengejar beasiswa di jurusan Teknik Informatika, belajar dari dosen terbaik, dan magang di firma teknologi terkemuka.',
  },
  {
    id: 4,
    year: 'Karier — 2034-2040',
    title: 'Arsitek Junior di Firma Bergengsi',
    desc: 'Mulai karier profesional, mengerjakan proyek nyata, dan belajar langsung dari arsitek berpengalaman di lapangan.',
  },
  {
    id: 5,
    year: 'Masa Depan — 2040+',
    title: 'Mendirikan Studio Arsitektur Sendiri',
    desc: 'Mendirikan studio arsitektur yang berfokus pada desain berkelanjutan dan arsitektur hijau untuk Indonesia yang lebih baik.',
  },
]

export default function Dreams() {
  const [dreams, setDreams] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get(`${API}/dreams`)
      .then(res => setDreams(res.data))
      .catch(() => setDreams(fallbackDreams))
      .finally(() => setLoading(false))
  }, [])

  return (
    <section style={{ paddingTop: '120px' }}>
      <div className="container">
        {/* Header */}
        <div className="dreams-hero">
          <p className="section-label fade-in">Mimpi & Visi</p>
          <h1 className="section-title fade-in fade-in-delay-1">
            Perjalanan Menuju<br />
            <span style={{ color: 'var(--gold)' }}>Menjadi Arsitek</span>
          </h1>
          <div className="gold-line" />
          <p className="section-desc fade-in fade-in-delay-2">
            Setiap arsitek besar pernah menjadi pemula yang bermimpi besar.
            Ini adalah peta jalan saya menuju cita-cita yang sudah lama saya impikan.
          </p>
        </div>

        {/* Inspirasi Quote */}
        <div className="glass-card fade-in fade-in-delay-3" style={{
          padding: '2.5rem 3rem',
          textAlign: 'center',
          marginBottom: '5rem',
          borderColor: 'rgba(201,168,76,0.2)',
          background: 'rgba(201,168,76,0.04)',
        }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🏛️</div>
          <p style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
            color: 'var(--white)',
            fontStyle: 'italic',
            lineHeight: '1.7',
          }}>
            "Arsitek yang baik bukan hanya merancang ruang —<br />
            ia merancang <span style={{ color: 'var(--gold)' }}>pengalaman manusia</span>."
          </p>
          <p style={{ color: 'var(--gray)', marginTop: '1rem', fontSize: '0.9rem' }}>— Filosofi Arsitektur</p>
        </div>

        {/* Timeline */}
        {loading ? (
          <div className="loading"><div className="spinner" /></div>
        ) : (
          <div className="dreams-timeline">
            {dreams.map((item, i) => (
              <div key={item.id} className="timeline-item">
                {i % 2 === 0 ? (
                  <>
                    <div className={`timeline-content glass-card fade-in fade-in-delay-${(i % 4) + 1}`}>
                      <div className="timeline-year">{item.year}</div>
                      <div className="timeline-title">{item.title}</div>
                      <div className="timeline-desc">{item.desc}</div>
                    </div>
                    <div className="timeline-spacer">
                      <div className="timeline-dot" />
                    </div>
                    <div className="timeline-empty" />
                  </>
                ) : (
                  <>
                    <div className="timeline-empty" />
                    <div className="timeline-spacer">
                      <div className="timeline-dot" />
                    </div>
                    <div className={`timeline-content glass-card fade-in fade-in-delay-${(i % 4) + 1}`}>
                      <div className="timeline-year">{item.year}</div>
                      <div className="timeline-title">{item.title}</div>
                      <div className="timeline-desc">{item.desc}</div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
