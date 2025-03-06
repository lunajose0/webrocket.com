import React, { useState, useEffect } from 'react';
import { Globe, ChevronDown, Code, Palette, Server, PenTool, FileText } from 'lucide-react';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAdditionalOpen, setIsAdditionalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
    setIsServicesOpen(false);
    setIsAdditionalOpen(false);
    setMobileMenuOpen(false);
  };

  const handleServicesClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsServicesOpen(!isServicesOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50 transition-colors duration-300">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-sm' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
            <img src='image/logo/1.jpg' className="h-8 w-8 rounded-full" />
              <span className="ml-2 text-xl font-bold text-gray-800">WebSimple</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('home')}
                className={`text-gray-700 hover:text-teal-500 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${activeSection === 'home' ? 'text-teal-500' : ''}`}
              >
                Inicio
              </button>

              <div className="relative group">
                <button
                  onClick={handleServicesClick}
                  className={`flex items-center text-gray-700 hover:text-teal-500 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${activeSection.includes('service') || isServicesOpen ? 'text-teal-500' : ''}`}
                >
                  Servicios que ofrecemos
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-300 ${isServicesOpen ? 'transform rotate-180' : ''}`} />
                </button>

                {isServicesOpen && (
                  <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-black ring-opacity-5 z-50 animate-fadeIn">
                    <div className="py-1" role="menu" aria-orientation="vertical">
                      <button
                        onClick={() => scrollToSection('service-basic')}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-teal-500 w-full text-left transition-colors duration-300"
                      >
                        Paquete Básico
                      </button>
                      <button
                        onClick={() => scrollToSection('service-standard')}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-teal-500 w-full text-left transition-colors duration-300"
                      >
                        Paquete Estándar
                      </button>
                      <button
                        onClick={() => scrollToSection('service-premium')}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-teal-500 w-full text-left transition-colors duration-300"
                      >
                        Paquete Premium
                      </button>

                      <div className="relative group">
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            setIsAdditionalOpen(!isAdditionalOpen);
                          }}
                          className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-teal-500 w-full text-left transition-colors duration-300"
                        >
                          Servicios Adicionales
                          <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-300 ${isAdditionalOpen ? 'transform rotate-180' : ''}`} />
                        </button>

                        {isAdditionalOpen && (
                          <div className="absolute left-full top-0 w-56 rounded-md shadow-lg bg-white ring-black ring-opacity-5 animate-fadeIn">
                            <div className="py-1">
                              <button
                                onClick={() => scrollToSection('service-logo')}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-teal-500 w-full text-left transition-colors duration-300"
                              >
                                Diseño de Logotipo
                              </button>
                              <button
                                onClick={() => scrollToSection('service-content')}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-teal-500 w-full text-left transition-colors duration-300"
                              >
                                Creación de Contenido
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <button
                onClick={() => scrollToSection('about')}
                className={`text-gray-700 hover:text-teal-500 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${activeSection === 'about' ? 'text-teal-500' : ''}`}
              >
                Nosotros
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={`text-gray-700 hover:text-teal-500 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${activeSection === 'contact' ? 'text-teal-500' : ''}`}
              >
                Contacto
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500"
              >
                <span className="sr-only">Abrir menú</span>
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile menu, show/hide based on menu state */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-white shadow-lg rounded-b-lg animate-fadeIn">
              <div className="px-2 pt-2 pb-3 space-y-1"><button
                  onClick={() => scrollToSection('home')}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${activeSection === 'home' ? 'text-teal-500 bg-teal-50' : 'text-gray-700 hover:bg-gray-50'}`}
                >
                  Inicio
                </button>

                {/* Mobile Services Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className={`flex items-center justify-between w-full text-left px-3 py-2 rounded-md text-base font-medium ${activeSection.includes('service') ? 'text-teal-500 bg-teal-50' : 'text-gray-700 hover:bg-gray-50'}`}
                  >
                    Servicios que ofrecemos
                    <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-300 ${isServicesOpen ? 'transform rotate-180' : ''}`} />
                  </button>

                  {isServicesOpen && (
                    <div className="pl-4 mt-1 space-y-1 animate-fadeIn">
                      <button
                        onClick={() => scrollToSection('service-basic')}
                        className="block w-full text-left px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-teal-500"
                      >
                        Paquete Básico
                      </button>
                      <button
                        onClick={() => scrollToSection('service-standard')}
                        className="block w-full text-left px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-teal-500"
                      >
                        Paquete Estándar
                      </button>
                      <button
                        onClick={() => scrollToSection('service-premium')}
                        className="block w-full text-left px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-teal-500"
                      >
                        Paquete Premium
                      </button>

                      {/* Mobile Additional Services Dropdown */}
                      <div className="relative">
                        <button
                          onClick={() => setIsAdditionalOpen(!isAdditionalOpen)}
                          className="flex items-center justify-between w-full text-left px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-teal-500"
                        >
                          Servicios Adicionales
                          <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-300 ${isAdditionalOpen ? 'transform rotate-180' : ''}`} />
                        </button>

                        {isAdditionalOpen && (
                          <div className="pl-4 mt-1 space-y-1 animate-fadeIn">
                            <button
                              onClick={() => scrollToSection('service-logo')}
                              className="block w-full text-left px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-teal-500"
                            >
                              Diseño de Logotipo
                            </button>
                            <button
                              onClick={() => scrollToSection('service-content')}
                              className="block w-full text-left px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-teal-500"
                            >
                              Creación de Contenido
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                <button
                  onClick={() => scrollToSection('about')}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${activeSection === 'about' ? 'text-teal-500 bg-teal-50' : 'text-gray-700 hover:bg-gray-50'}`}
                >
                  Nosotros
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${activeSection === 'contact' ? 'text-teal-500 bg-teal-50' : 'text-gray-700 hover:bg-gray-50'}`}
                >
                  Contacto
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <div>
        <Hero />
        <Services />
        <About />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;