import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SearchFilter from './components/SearchFilter';
import Packages from './components/Packages';
import Destinations from './components/Destinations';
import RealPhotosGallery from './components/RealPhotosGallery';
import WhyUs from './components/WhyUs';
import SafariFleet from './components/SafariFleet';
import LatestNews from './components/LatestNews';
import Reviews from './components/Reviews';
import TravelInfo from './components/TravelInfo';
import AboutSection from './components/AboutSection';
import BookingSection from './components/BookingSection';
import WhatsAppFloating from './components/WhatsAppFloating';
import Footer from './components/Footer';
import PackageDetailModal from './components/PackageDetailModal';
import DestinationModal from './components/DestinationModal';
import SearchModal from './components/SearchModal';

export default function App() {
  const [currency, setCurrency] = useState('USD');
  const [activePackageModal, setActivePackageModal] = useState(null);
  const [activeDestModal, setActiveDestModal] = useState(null);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
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

  const handleOpenBookingModal = (pkg) => {
    if (pkg) {
      setPrefilledPackageForBooking(pkg);
    }
    const contactElem = document.getElementById('booking') || document.getElementById('contact');
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
    <div className="min-h-screen bg-[#EDE9E0] flex flex-col antialiased selection:bg-[#FF6700] selection:text-white">
      {/* Top Header & Navigation Bar */}
      <Navbar
        onOpenSearchModal={() => setIsSearchModalOpen(true)}
      />

      {/* Hero Section matching Reference Screenshot 1 */}
      <Hero />

      {/* Floating Interactive Search Filter */}
      <SearchFilter
        onSearch={handleSearch}
        selectedDestination={selectedDestinationFilter}
        setSelectedDestination={setSelectedDestinationFilter}
      />

      {/* Tabbed Safari Packages Section matching Reference Screenshot 2 */}
      <Packages
        currency={currency}
        onOpenPackageModal={(pkg) => setActivePackageModal(pkg)}
        onOpenBookingModal={(pkg) => handleOpenBookingModal(pkg)}
        filterDestination={selectedDestinationFilter}
      />

      {/* Iconic 6 Destinations Grid matching Reference Screenshot 3 */}
      <Destinations
        onSelectDestination={handleFilterDestinationFromGuide}
        onOpenDestinationModal={(dest) => setActiveDestModal(dest)}
      />

      {/* Real Photos Gallery - USER EXPLICIT REQUIREMENT from assets/Real photos */}
      <RealPhotosGallery />

      {/* Why Travel With Us (Direct local operator, KPSGA guides, 4x4 fleet) */}
      <WhyUs />

      {/* Custom 4x4 Safari Land Cruiser Fleet */}
      <SafariFleet />

      {/* Latest News & Blog matching Reference Screenshot 4 & 5 */}
      <LatestNews />

      {/* Google Reviews matching Reference Screenshot 5 */}
      <Reviews />

      {/* Kenya Safari Travel Info & FAQ */}
      <TravelInfo />

      {/* About SafariDoctor & Founder Chris ("Black Santa") */}
      <AboutSection />

      {/* Interactive Custom Safari Booking Builder */}
      <div id="booking">
        <BookingSection
          initialPackage={prefilledPackageForBooking}
          currency={currency}
        />
      </div>

      {/* Comprehensive Footer matching Reference Screenshot 6 */}
      <Footer />

      {/* Floating "WhatsApp us" Button matching Reference Screenshots 2-6 */}
      <WhatsAppFloating />

      {/* Modals & Dialogs */}
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

      <SearchModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
        onSelectPackage={(pkg) => setActivePackageModal(pkg)}
        onSelectDestination={(dest) => setActiveDestModal(dest)}
      />
    </div>
  );
}
