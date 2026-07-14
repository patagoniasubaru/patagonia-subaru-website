import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import VehicleGrid from '@/components/VehicleGrid';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <Hero />
      <VehicleGrid />
      <ContactForm />
      <Footer />
    </main>
  );
}