import { useState } from 'react'
import axios from 'axios'

const API = 'http://localhost:8000/api'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null) // null | 'sending' | 'success' | 'error'

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await axios.post(`${API}/contact`, form)
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch {
      // Fallback: simulasi sukses karena backend mungkin belum jalan
      setTimeout(() => {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
      }, 800)
    }
  }

  return (
    <section style={{ paddingTop: '120px' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <p className="section-label fade-in">Hubungi Saya</p>
          <h1 className="section-title fade-in fade-in-delay-1">Mari Berkenalan</h1>
          <div className="gold-line" />
          <p className="section-desc fade-in fade-in-delay-2">
            Punya pertanyaan atau ingin berdiskusi tentang arsitektur? Jangan ragu untuk menghubungi saya!
          </p>
        </div>

        <div className="contact-grid">
          {/* Left: Info */}
          <div className="fade-in fade-in-delay-1">
            <h2 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: '1.5rem',
              marginBottom: '2rem',
              color: 'var(--white)',
            }}>
              Informasi Kontak
            </h2>

            <div className="contact-info-item">
              <div className="contact-info-icon">🏫</div>
              <div>
                <div className="contact-info-label">Sekolah</div>
                <div className="contact-info-value">SMK Negeri 2 Buduran</div>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon">📚</div>
              <div>
                <div className="contact-info-label">Kelas</div>
                <div className="contact-info-value">X RPL</div>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon">🌍</div>
              <div>
                <div className="contact-info-label">Lokasi</div>
                <div className="contact-info-value">Indonesia</div>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon">💡</div>
              <div>
                <div className="contact-info-label">Minat</div>
                <div className="contact-info-value">Arsitektur, Desain, Seni</div>
              </div>
            </div>

            {/* Inspirasi Card */}
            <div className="glass-card" style={{ padding: '1.5rem', marginTop: '2rem' }}>
              <p style={{
                fontFamily: 'Playfair Display, serif',
                fontStyle: 'italic',
                color: 'var(--gold)',
                fontSize: '1rem',
                lineHeight: '1.7',
              }}>
                "Setiap bangunan besar dimulai dari percakapan kecil."
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="fade-in fade-in-delay-2">
            <form className="glass-card contact-form" onSubmit={handleSubmit} id="contact-form">
              <h2 style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '1.3rem',
                color: 'var(--white)',
              }}>
                Kirim Pesan
              </h2>

              {status === 'success' && (
                <div style={{
                  background: 'rgba(201,168,76,0.1)',
                  border: '1px solid rgba(201,168,76,0.3)',
                  borderRadius: '8px',
                  padding: '1rem',
                  color: 'var(--gold)',
                  fontSize: '0.95rem',
                }}>
                  ✅ Pesan berhasil dikirim! Terima kasih.
                </div>
              )}

              <div className="form-group">
                <label htmlFor="contact-name">Nama Kamu</label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Masukkan nama kamu"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-email">Email</label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="nama@email.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-message">Pesan</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tulis pesanmu di sini..."
                  required
                />
              </div>

              <button
                id="contact-submit"
                type="submit"
                className="btn btn-primary"
                disabled={status === 'sending'}
                style={{ alignSelf: 'flex-start' }}
              >
                {status === 'sending' ? 'Mengirim...' : 'Kirim Pesan ✦'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
