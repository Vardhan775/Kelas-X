import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (password.length < 8) {
      setError('Password minimal harus 8 karakter');
      return;
    }

    setLoading(true);
    
    try {
      await register(name, email, password);
      navigate('/');
    } catch (err) {
      if (err.response?.data?.errors?.email) {
        setError('Email sudah digunakan.');
      } else {
        setError('Registrasi gagal. Silakan coba lagi nanti.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section style={{ paddingTop: '120px', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{ maxWidth: '450px' }}>
        <div className="glass-card fade-in" style={{ padding: '2.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h1 className="section-title" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Buat Akun</h1>
            <p className="section-desc" style={{ margin: 0 }}>Bergabunglah untuk melihat lebih banyak fitur</p>
          </div>

          {error && (
            <div style={{ padding: '1rem', backgroundColor: 'rgba(255, 77, 77, 0.1)', color: '#ff4d4d', borderRadius: '8px', marginBottom: '1.5rem', border: '1px solid rgba(255, 77, 77, 0.2)' }}>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="form-group">
              <input
                type="text"
                className="form-input"
                placeholder="Nama Lengkap"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                className="form-input"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <div className="form-group">
              <input
                type="password"
                className="form-input"
                placeholder="Password (Minimal 8 karakter)"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength="8"
              />
            </div>

            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? 'Memproses...' : 'Daftar'}
            </button>
          </form>

          <p style={{ textAlign: 'center', marginTop: '2rem', color: 'var(--text-secondary)' }}>
            Sudah punya akun? <Link to="/login" style={{ color: 'var(--primary-color)', textDecoration: 'none', fontWeight: 'bold' }}>Masuk di sini</Link>
          </p>
        </div>
      </div>
    </section>
  );
}
