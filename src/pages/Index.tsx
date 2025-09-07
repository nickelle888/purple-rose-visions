import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Booking from '@/components/Booking';
import Events from '@/components/Events';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  console.log('Index component rendering...');
  
  return (
    <div style={{ background: 'red', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <h1 style={{ color: 'white', fontSize: '2rem' }}>TEST - APP IS WORKING</h1>
    </div>
  );
};

export default Index;
