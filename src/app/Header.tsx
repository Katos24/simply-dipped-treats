export default function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-sm shadow-sm border-b border-[var(--border)] sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <a href="/" className="text-2xl font-bold text-[var(--primary)] hover:text-[var(--accent)] transition">
            Simply Dipped
          </a>
          <nav className="flex gap-8">
            <a href="/treats" className="text-[var(--foreground)] hover:text-[var(--accent)] transition font-medium">
              Treats
            </a>
            <a href="/spanakopita" className="text-[var(--foreground)] hover:text-[var(--accent)] transition font-medium">
              Spanakopita
            </a>
            <a href="#contact" className="text-[var(--foreground)] hover:text-[var(--accent)] transition font-medium">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
