import React from 'react';
import { Hero } from './components/sections/Hero';
import { Introduction } from './components/sections/Introduction';
import { Timeline } from './components/sections/Timeline';
import { Solution } from './components/sections/Solution';
import { Testimonial } from './components/sections/Testimonial';
import { CTASection } from './components/CTASection';
import CustomerReviews from './components/CustomerReviews';
import ProductDescription from './components/ProductDescription';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Introduction />
      <Timeline />
      <Solution />
      <Testimonial />
      <CTASection />
      <CustomerReviews />
      <ProductDescription />
    </div>
  );
}

export default App;
