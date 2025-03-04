import { useEffect, useRef } from 'react';
import { Code, Zap, Users } from 'lucide-react';

const Hero = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const heading = headingRef.current;
    const text = textRef.current;
    const buttons = buttonsRef.current;
    const image = imageRef.current;
    const features = featuresRef.current;

    if (heading) heading.classList.add('animate-fadeInUp');
    if (text) {
      setTimeout(() => {
        text.classList.add('animate-fadeInUp');
      }, 200);
    }
    if (buttons) {
      setTimeout(() => {
        buttons.classList.add('animate-fadeInUp');
      }, 400);
    }
    if (image) {
      setTimeout(() => {
        image.classList.add('animate-fadeInRight');
      }, 600);
    }
    if (features) {
      setTimeout(() => {
        features.classList.add('animate-fadeInUp');
      }, 800);
    }
  }, []);

  return (
    <section id="home" className="pt-24 pb-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 
              ref={headingRef}
              className="text-4xl md:text-5xl font-bold leading-tight mb-4 text-gray-800 opacity-0"
            >
              Páginas Web <span className="text-teal-500">Simples</span> para Emprendedores
            </h1>
            <p 
              ref={textRef}
              className="text-xl mb-8 text-gray-600 opacity-0"
            >
              Diseñamos sitios web accesibles y efectivos para emprendedores principiantes y pequeños negocios.
            </p>
            <div 
              ref={buttonsRef}
              className="flex flex-wrap gap-4 opacity-0"
            >
              <button 
                onClick={() => {
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-3 px-6 rounded-lg transition duration-300"
              >
                Ver Servicios
              </button>
              <button 
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-transparent hover:bg-teal-50 text-teal-500 border border-teal-500 font-medium py-3 px-6 rounded-lg transition duration-300"
              >
                Contáctanos
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              ref={imageRef}
              src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Emprendedor con laptop" 
              className="rounded-lg shadow-md opacity-0"
            />
          </div>
        </div>
        
        <div 
          ref={featuresRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 opacity-0"
        >
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 transform hover:-translate-y-1">
            <Code className="h-10 w-10 text-teal-500 mb-4" />
            <h3 className="text-xl font-medium mb-2 text-gray-800">Diseño Simple</h3>
            <p className="text-gray-600">Creamos diseños minimalistas y efectivos que cargan rápido y son fáciles de navegar.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 transform hover:-translate-y-1">
            <Zap className="h-10 w-10 text-teal-500 mb-4" />
            <h3 className="text-xl font-medium mb-2 text-gray-800">Rápido y Eficiente</h3>
            <p className="text-gray-600">Sitios optimizados para cargar rápidamente y funcionar en todos los dispositivos.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 transform hover:-translate-y-1">
            <Users className="h-10 w-10 text-teal-500 mb-4" />
            <h3 className="text-xl font-medium mb-2 text-gray-800">Soporte Amigable</h3>
            <p className="text-gray-600">Te acompañamos en cada paso con un lenguaje claro y sin tecnicismos complicados.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;