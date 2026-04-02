import { useEffect, useState } from 'react'
import axios from 'axios'

const API = 'http://localhost:8000/api'

// Fallback data jika backend belum jalan
const fallback = {
  nama: 'Aditya Vardhan Irwansyah',
  kelas: 'X RPL',
  sekolah: 'SMK Negeri 2 Buduran',
  hobi: 'Menggambar, Membaca Desain, Bersepeda',
  motto: '"Arsitektur adalah puisi yang diukir dengan batu dan baja."',
  bio: 'Halo! Saya adalah seorang siswa kelas X yang memiliki passion besar terhadap dunia arsitektur. Sejak kecil, saya selalu terpesona melihat gedung-gedung megah, rumah-rumah berdesain unik, dan bagaimana manusia bisa mengubah ruang kosong menjadi tempat yang bermakna. Impian saya adalah menjadi seorang arsitek yang merancang bangunan yang tidak hanya indah secara estetika, tetapi juga fungsional dan berkelanjutan.',
}

export default function About() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get(`${API}/profile`)
      .then(res => setData(res.data))
      .catch(() => setData(fallback))
      .finally(() => setLoading(false))
  }, [])

  const info = data || fallback

  return (
    <section style={{ paddingTop: '120px' }}>
      <div className="container">
        <div className="about-grid">
          {/* Left: Photo */}
          <div className="about-photo-wrapper fade-in">
            <div className="about-photo-placeholder glass-card">
              <span>🧑‍🎨</span>
              <p>Foto Profil</p>
            </div>
            <div className="about-accent-box" />
            <div className="about-accent-dot" />
          </div>

          {/* Right: Info */}
          <div>
            <p className="section-label fade-in">Tentang Saya</p>
            <h1 className="section-title fade-in fade-in-delay-1">
              {loading ? '...' : info.nama}
            </h1>
            <div className="gold-line" style={{ margin: '0 0 1.5rem 0' }} />

            <p className="about-bio fade-in fade-in-delay-2">
              {loading ? 'Memuat...' : info.bio}
            </p>

            <div className="about-info-grid fade-in fade-in-delay-3">
              <div className="about-info-item glass-card">
                <div className="about-info-label">Nama</div>
                <div className="about-info-value">{loading ? '...' : info.nama}</div>
              </div>
              <div className="about-info-item glass-card">
                <div className="about-info-label">Kelas</div>
                <div className="about-info-value">{loading ? '...' : info.kelas}</div>
              </div>
              <div className="about-info-item glass-card">
                <div className="about-info-label">Sekolah</div>
                <div className="about-info-value">{loading ? '...' : info.sekolah}</div>
              </div>
              <div className="about-info-item glass-card">
                <div className="about-info-label">Hobi</div>
                <div className="about-info-value">{loading ? '...' : info.hobi}</div>
              </div>
            </div>

            <blockquote className="fade-in fade-in-delay-4" style={{
              borderLeft: '3px solid var(--gold)',
              paddingLeft: '1.5rem',
              color: 'var(--gray-light)',
              fontStyle: 'italic',
              fontSize: '1.05rem',
              lineHeight: '1.9'
            }}>
              {loading ? '...' : info.motto}
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
