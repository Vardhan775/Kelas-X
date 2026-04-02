import { useEffect, useState } from 'react'
import axios from 'axios'

const API = 'http://localhost:8000/api'

const fallbackSkills = [
  { id: 1, icon: '📐', name: 'AutoCAD', desc: 'Software menggambar teknik 2D untuk denah, tampak, dan potongan bangunan.', level: 70 },
  { id: 2, icon: '🏗️', name: 'SketchUp', desc: 'Pemodelan 3D bangunan untuk visualisasi desain arsitektur secara intuitif.', level: 60 },
  { id: 3, icon: '🎨', name: 'Blender', desc: 'Rendering 3D realistis untuk presentasi proyek arsitektur.', level: 45 },
  { id: 4, icon: '📏', name: 'Menggambar Manual', desc: 'Teknik menggambar tangan untuk sketsa awal konsep dan ideasi desain.', level: 80 },
  { id: 5, icon: '🌿', name: 'Desain Berkelanjutan', desc: 'Prinsip arsitektur hijau dan ramah lingkungan untuk masa depan.', level: 55 },
  { id: 6, icon: '📖', name: 'Sejarah Arsitektur', desc: 'Memahami evolusi gaya arsitektur dari klasik hingga kontemporer.', level: 75 },
]

export default function Skills() {
  const [skills, setSkills] = useState([])
  const [loading, setLoading] = useState(true)
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    axios.get(`${API}/skills`)
      .then(res => setSkills(res.data))
      .catch(() => setSkills(fallbackSkills))
      .finally(() => {
        setLoading(false)
        setTimeout(() => setAnimated(true), 100)
      })
  }, [])

  return (
    <section style={{ paddingTop: '120px' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
          <p className="section-label fade-in">Keahlian Saya</p>
          <h1 className="section-title fade-in fade-in-delay-1">
            Skill yang Sedang<br />Saya Pelajari
          </h1>
          <div className="gold-line" />
          <p className="section-desc fade-in fade-in-delay-2">
            Sebagai calon arsitek, saya terus mengasah berbagai kemampuan teknis
            dan kreatif yang dibutuhkan di dunia arsitektur.
          </p>
        </div>

        {loading ? (
          <div className="loading"><div className="spinner" /></div>
        ) : (
          <div className="skills-grid">
            {skills.map((skill, i) => (
              <div
                key={skill.id}
                className={`glass-card skill-card fade-in fade-in-delay-${(i % 5) + 1}`}
              >
                <span className="skill-icon">{skill.icon}</span>
                <div className="skill-name">{skill.name}</div>
                <p className="skill-desc">{skill.desc}</p>
                <div className="skill-bar-bg">
                  <div
                    className="skill-bar-fill"
                    style={{ width: animated ? `${skill.level}%` : '0%' }}
                  />
                </div>
                <div className="skill-level">{skill.level}%</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
