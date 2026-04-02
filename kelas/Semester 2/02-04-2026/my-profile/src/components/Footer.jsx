export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container">
        <p>
          &copy; {year} — Dibuat dengan ❤️ oleh <strong>Kaito</strong> · Calon Arsitek Masa Depan
        </p>
      </div>
    </footer>
  )
}
