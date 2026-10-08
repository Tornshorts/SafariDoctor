import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SearchFilter from './components/SearchFilter';
import Destinations from './components/Destinations';
import Packages from './components/Packages';
import PackageDetailModal from './components/PackageDetailModal';
import DestinationModal from './components/DestinationModal';
import WhyUs from './components/WhyUs';
import SafariFleet from './components/SafariFleet';
import TravelInfo from './components/TravelInfo';
import Reviews from './components/Reviews';
import AboutSection from './components/AboutSection';
import BookingSection from './components/BookingSection';
import VideoModal from './components/VideoModal';
import WhatsAppFloating from './components/WhatsAppFloating';
import Footer from './components/Footer';

export default function App() {
  const [currency, setCurrency] = useState('KES');
  const [activePackageModal, setActivePackageModal] = useState(null);
  const [activeDestModal, setActiveDestModal] = useState(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [selectedDestinationFilter, setSelectedDestinationFilter] = useState('');
  const [prefilledPackageForBooking, setPrefilledPackageForBooking] = useState(null);

  const handleSearch = (searchParams) => {
    if (searchParams.destination) {
      setSelectedDestinationFilter(searchParams.destination);
    }
    const packagesElem = document.getElementById('packages');
    if (packagesElem) {
      packagesElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreClick = () => {
    const packagesElem = document.getElementById('packages');
    if (packagesElem) {
      packagesElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenBookingModal = (pkg) => {
    if (pkg) {
      setPrefilledPackageForBooking(pkg);
    }
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFilterDestinationFromGuide = (destId) => {
    setSelectedDestinationFilter(destId);
    const packagesElem = document.getElementById('packages');
    if (packagesElem) {
      packagesElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] flex flex-col antialiased">
      {/* Navigation */}
      <Navbar
        currency={currency}
        setCurrency={setCurrency}
        onOpenBookingModal={() => handleOpenBookingModal()}
      />

      {/* Hero Section */}
      <Hero
        onExploreClick={handleExploreClick}
        onWatchVideoClick={() => setIsVideoModalOpen(true)}
      />

      {/* Floating Search Filter Bar */}
      <SearchFilter
        onSearch={handleSearch}
        selectedDestination={selectedDestinationFilter}
        setSelectedDestination={setSelectedDestinationFilter}
      />

      {/* Top Destinations matching Mockup */}
      <Destinations
        onSelectDestination={handleFilterDestinationFromGuide}
        onOpenDestinationModal={(dest) => setActiveDestModal(dest)}
      />

      {/* Popular Safari Packages matching Mockup */}
      <Packages
        currency={currency}
        onOpenPackageModal={(pkg) => setActivePackageModal(pkg)}
        filterDestination={selectedDestinationFilter}
      />

      {/* Why Travel With Us (from Mockup) */}
      <WhyUs />

      {/* Safari 4x4 Land Cruiser Fleet */}
      <SafariFleet />

      {/* Kenya Travel Info & FAQ */}
      <TravelInfo />

      {/* Traveler Reviews & Ratings */}
      <Reviews />

      {/* About SafariDoctor & Chris */}
      <AboutSection />

      {/* Interactive Booking & Custom Safari Builder */}
      <BookingSection
        initialPackage={prefilledPackageForBooking}
      />

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Widget */}
      <WhatsAppFloating />

      {/* Modals */}
      <PackageDetailModal
        pkg={activePackageModal}
        onClose={() => setActivePackageModal(null)}
        currency={currency}
        onBookNow={(pkg) => handleOpenBookingModal(pkg)}
      />

      <DestinationModal
        dest={activeDestModal}
        onClose={() => setActiveDestModal(null)}
        onExploreTours={handleFilterDestinationFromGuide}
        currency={currency}
      />

      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />
    </div>
  );
}
