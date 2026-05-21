import { useEffect, useState } from 'react'
import axios from 'axios'

const API = 'http://localhost:8000/api'

const fallbackSkills = [
  { id: 1, icon: '✍️', name: 'Sketsa manual', desc: 'Kemampuan menggambar murni dengan tangan untuk visualisasi ide.', level: 85 },
  { id: 2, icon: '💻', name: 'Digital drawing', desc: 'Teknik pembuatan sketsa secara digital menggunakan perangkat lunak.', level: 80 },
  { id: 3, icon: '🎨', name: 'Creative design', desc: 'Kreativitas dalam merancang solusi visual yang unik dan fungsional.', level: 80 },
  { id: 4, icon: '🎯', name: 'Accuracy', desc: 'Ketelitian tinggi dalam memastikan setiap detail karya divisualisasikan dengan tepat.', level: 90 },
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
            Skill yang saya miliki adalah menggambar sketsa manual, digital drawing dasar, kreativitas desain, dan ketelitian dalam membuat karya visual.
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
