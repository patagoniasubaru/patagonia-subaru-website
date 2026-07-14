'use client';

import { useState, useRef, FormEvent } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error' | null; text: string }>({
    type: null,
    text: '',
  });

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage({ type: null, text: '' });

    try {
      // Reemplaza estas variables con tus IDs de EmailJS (ver guía abajo)
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
        formRef.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
      );

      setStatusMessage({
        type: 'success',
        text: '¡Mensaje enviado con éxito! Nos contactaremos a la brevedad.',
      });
      formRef.current?.reset();
    } catch (error) {
      console.error('Error enviando el correo:', error);
      setStatusMessage({
        type: 'error',
        text: 'Hubo un error al enviar el mensaje. Por favor, intenta nuevamente o contáctanos por Instagram.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 px-6 bg-white w-full" id="contacto">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#013A81] mb-4">
            Consultá por tu próximo Subaru
          </h2>
          <p className="text-gray-600">
            Dejanos tus datos y el vehículo que te interesa. Te responderemos directo desde la Patagonia.
          </p>
        </div>

        <form 
          ref={formRef} 
          onSubmit={sendEmail} 
          className="bg-gray-50 p-8 rounded-xl shadow-sm border border-gray-100"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Nombre */}
            <div className="flex flex-col">
              <label htmlFor="nombre" className="text-sm font-semibold text-gray-700 mb-2">Nombre Completo</label>
              <input
                type="text"
                name="user_name"
                id="nombre"
                required
                className="px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#013A81] focus:border-transparent transition-all"
                placeholder="Ej. Martín Pérez"
              />
            </div>

            {/* Teléfono */}
            <div className="flex flex-col">
              <label htmlFor="telefono" className="text-sm font-semibold text-gray-700 mb-2">Teléfono / WhatsApp</label>
              <input
                type="tel"
                name="user_phone"
                id="telefono"
                required
                className="px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#013A81] focus:border-transparent transition-all"
                placeholder="Ej. +54 9 294 4123456"
              />
            </div>
          </div>

          {/* Vehículo de interés */}
          <div className="flex flex-col mb-6">
            <label htmlFor="vehiculo" className="text-sm font-semibold text-gray-700 mb-2">Vehículo de Interés</label>
            <input
              type="text"
              name="user_vehicle"
              id="vehiculo"
              className="px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#013A81] focus:border-transparent transition-all"
              placeholder="Ej. Forester 2019 o 'Busco un usado automático'"
            />
          </div>

          {/* Mensaje */}
          <div className="flex flex-col mb-8">
            <label htmlFor="mensaje" className="text-sm font-semibold text-gray-700 mb-2">Tu Mensaje</label>
            <textarea
              name="message"
              id="mensaje"
              rows={4}
              required
              className="px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#013A81] focus:border-transparent transition-all resize-none"
              placeholder="Contanos qué estás buscando o qué dudas tenés..."
            ></textarea>
          </div>

          {/* Mensajes de estado (Éxito o Error) */}
          {statusMessage.type && (
            <div className={`p-4 mb-6 rounded-md font-medium text-sm ${
              statusMessage.type === 'success' ? 'bg-green-100 text-green-800 border border-green-200' : 'bg-red-100 text-red-800 border border-red-200'
            }`}>
              {statusMessage.text}
            </div>
          )}

          {/* Botón de Enviar */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#013A81] hover:bg-[#012a5e] disabled:bg-gray-400 text-white font-bold text-lg py-4 rounded-md transition-colors shadow-md flex items-center justify-center"
          >
            {isSubmitting ? 'Enviando...' : 'Enviar Consulta'}
          </button>
        </form>
      </div>
    </section>
  );
}