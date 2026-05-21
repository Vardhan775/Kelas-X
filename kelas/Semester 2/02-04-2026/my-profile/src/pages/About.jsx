import { useEffect, useState } from 'react'
import axios from 'axios'

const API = 'http://localhost:8000/api'

// Fallback data jika backend belum jalan
const fallback = {
  nama: 'Aditya Vardhan Irwansyah',
  kelas: 'RPL',
  sekolah: 'SMK Negeri 2 Buduran',
  hobi: 'Bersepeda, bermain basket, dan memasak',
  motto: '"Arsitektur adalah puisi yang diukir dengan batu dan baja."',
  bio: 'Nama saya Aditya Vardhan Irwansyah. Saat ini saya berusia 16 tahun dan tahun ini akan menginjak usia 17 tahun. Saya memiliki beberapa hobi yang saya sukai, seperti bersepeda, bermain basket, dan memasak. Bagi saya, hobi tersebut bukan hanya sekadar kegiatan mengisi waktu luang, tetapi juga menjadi cara untuk menjaga kesehatan, melatih kerja sama, dan menambah kreativitas.\n\nSaya memiliki cita-cita menjadi seorang arsitek karena saya tertarik dengan dunia desain bangunan dan seni dalam menciptakan sebuah karya. Saya ingin bisa membuat bangunan yang tidak hanya indah, tetapi juga nyaman dan bermanfaat bagi banyak orang.\n\nSaat ini saya bersekolah di SMK Negeri 2 Buduran dan mengambil jurusan Rekayasa Perangkat Lunak (RPL). Saya memilih jurusan ini karena saya ingin mempelajari lebih dalam tentang dunia coding dan teknologi. Selain itu, saya juga ingin mengembangkan kemampuan di bidang pemrograman agar dapat mengikuti perkembangan zaman yang semakin maju. Saya percaya bahwa dengan belajar sungguh-sungguh, kerja keras, dan terus mencoba hal baru, saya bisa meraih cita-cita yang saya impikan di masa depan.',
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

            <p className="about-bio fade-in fade-in-delay-2" style={{ whiteSpace: 'pre-line' }}>
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
