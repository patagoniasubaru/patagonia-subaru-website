'use client';

import React from 'react';
import Image from 'next/image';

const mockVehicles = [
  {
    id: 1,
    year: 2019,
    model: 'Subaru Forester 2.5i Dynamic',
    transmission: 'Lineartronic CVT',
    mileage: '85.000 km',
    price: 22500,
    imageUrl: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 2,
    year: 2021,
    model: 'Subaru Crosstrek 2.0 Limited',
    transmission: 'Lineartronic CVT',
    mileage: '42.000 km',
    price: 26000,
    imageUrl: 'https://images.unsplash.com/photo-1503376712349-a1afdb0d3023?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 3,
    year: 2016,
    model: 'Subaru XV 2.0i AWD',
    transmission: 'Manual 6v',
    mileage: '115.000 km',
    price: 16800,
    imageUrl: 'https://images.unsplash.com/photo-1469285994282-454ceb49e63c?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 4,
    year: 2018,
    model: 'Subaru Outback 3.6R',
    transmission: 'Lineartronic CVT',
    mileage: '98.000 km',
    price: 24000,
    imageUrl: 'https://images.unsplash.com/photo-1520031441872-265e4ff70366?auto=format&fit=crop&w=600&q=80',
  }
];

export default function VehicleGrid() {
  const handleConsultar = (model: string) => {
    const inputVehiculo = document.getElementById('vehiculo') as HTMLInputElement;
    if (inputVehiculo) {
      inputVehiculo.value = model;
    }

    const seccionContacto = document.getElementById('contacto');
    if (seccionContacto) {
      seccionContacto.scrollIntoView({ behavior: 'smooth' });
      
      setTimeout(() => {
        const inputNombre = document.getElementById('nombre') as HTMLInputElement;
        if (inputNombre) inputNombre.focus();
      }, 500);
    }
  };

  return (
    <section className="py-16 px-6 bg-gray-50 w-full" id="vehiculos">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Vehículos Disponibles
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Todas nuestras unidades son inspeccionadas rigurosamente para garantizar su rendimiento en los caminos de la Patagonia.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {mockVehicles.map((vehicle) => (
            <div 
              key={vehicle.id} 
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 flex flex-col transition-transform hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="h-48 w-full overflow-hidden relative bg-gray-200">
                <Image 
                  src={vehicle.imageUrl} 
                  alt={`${vehicle.year} ${vehicle.model}`} 
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-3 right-3 bg-[#E5B22C] text-[#013A81] font-bold px-3 py-1 rounded-md text-sm shadow-sm z-10">
                  {vehicle.year}
                </div>
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-800 mb-3 leading-tight line-clamp-2">
                  {vehicle.model}
                </h3>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-gray-100 text-gray-600 text-xs font-semibold px-2.5 py-1 rounded-md border border-gray-200">
                    Symmetrical AWD
                  </span>
                  <span className="bg-gray-100 text-gray-600 text-xs font-semibold px-2.5 py-1 rounded-md border border-gray-200">
                    {vehicle.transmission}
                  </span>
                </div>

                <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-end mb-5">
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Kilometraje</span>
                    <span className="text-gray-700 font-medium">{vehicle.mileage}</span>
                  </div>
                  <div className="flex flex-col text-right">
                    <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Precio</span>
                    <span className="text-2xl font-black text-[#013A81]">
                      U$S {vehicle.price.toLocaleString('es-AR')}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => handleConsultar(vehicle.model)}
                  className="w-full bg-[#013A81] hover:bg-[#012a5e] text-white font-semibold py-3 rounded-lg transition-colors shadow-sm"
                >
                  Consultar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
