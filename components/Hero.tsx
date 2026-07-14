import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center">
      {/* Imagen de Fondo (Placeholder de montaña/bosque) */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop')",
        }}
      />
      
      {/* Overlay oscuro para mejorar la legibilidad del texto */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Contenido */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center mt-16">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-lg leading-tight">
          Tu Subaru en la Patagonia
        </h1>

        <p className="text-xl md:text-2xl text-gray-200 mb-10 font-medium drop-shadow-md">
          Especialistas en tracción integral. El Bolsón y 300km a la redonda.
        </p>

        {/* Botón Dorado */}
        <Link 
          href="#vehiculos"
          className="bg-[#E5B22C] hover:bg-[#d4a020] text-[#013A81] font-bold text-lg px-8 py-4 rounded-md transition-all transform hover:-translate-y-1 shadow-lg"
        >
          Ver Vehículos
        </Link>
      </div>
    </section>
  );
}