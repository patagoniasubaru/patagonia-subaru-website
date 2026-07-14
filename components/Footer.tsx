import Link from 'next/link';

export default function Footer() {
  // Reemplaza este número con el de tu negocio (incluye el código de país y área sin el signo +)
  const whatsappNumber = "5492944123456"; 
  const whatsappMessage = "Hola, vengo desde la web de Patagonia Subaru. Me gustaría hacer una consulta.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <>
      {/* Footer Principal */}
      <footer className="bg-gray-950 text-gray-300 py-16 px-6 border-t border-gray-900">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          
          {/* Logo y Eslogan */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold tracking-tight text-white mb-2">
              Patagonia<span className="text-[#E5B22C]">Subaru</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Conectando la Patagonia con tracción integral.
            </p>
          </div>

          {/* Enlace Destacado de Instagram */}
          <div className="mb-12">
            <p className="text-sm uppercase tracking-widest text-gray-500 mb-3 font-semibold">
              Seguinos en redes
            </p>
            <a 
              href="https://instagram.com/patagonia.subaru" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 text-3xl md:text-5xl font-extrabold text-white hover:text-[#E5B22C] transition-colors duration-300"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="1em" 
                height="1em" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="transform group-hover:scale-110 transition-transform duration-300"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              @patagonia.subaru
            </a>
          </div>

          {/* Contacto directo e info legal */}
          <div className="w-full flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800 text-sm">
            <p className="mb-4 md:mb-0">
              Contacto: <a href="mailto:patagonia.subaru@gmail.com" className="text-white hover:text-[#E5B22C] transition-colors">patagonia.subaru@gmail.com</a>
            </p>
            <p className="text-gray-600">
              &copy; {new Date().getFullYear()} Patagonia Subaru. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* Botón Flotante de WhatsApp */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 hover:bg-[#20ba59] transition-all duration-300 z-50 flex items-center justify-center group"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="32" 
          height="32" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
        
        {/* Tooltip de WhatsApp (Aparece al pasar el mouse en desktop) */}
        <span className="absolute right-16 bg-white text-gray-800 text-sm font-semibold py-1 px-3 rounded shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          ¡Chateá con nosotros!
        </span>
      </a>
    </>
  );
}