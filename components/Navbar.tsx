import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-[#013A81] text-white w-full py-4 px-6 fixed top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-tight">
          Patagonia<span className="text-[#E5B22C]">Subaru</span>
        </Link>

        {/* Enlaces de Navegación e Instagram */}
        <div className="flex items-center space-x-6">
          <Link href="/vehiculos" className="hover:text-gray-300 transition-colors hidden md:block font-medium">
            Vehículos
          </Link>
          <Link href="/nosotros" className="hover:text-gray-300 transition-colors hidden md:block font-medium">
            Nosotros
          </Link>

          {/* Ícono de Instagram */}
          <a
            href="https://instagram.com/patagonia.subaru"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
            aria-label="Instagram Patagonia Subaru"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
}