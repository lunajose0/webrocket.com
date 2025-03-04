import { useEffect, useRef } from 'react';
import { Code, Server, Palette, PenTool, FileText } from 'lucide-react';

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const serviceRefs = {
    basic: useRef<HTMLDivElement>(null),
    standard: useRef<HTMLDivElement>(null),
    premium: useRef<HTMLDivElement>(null),
    logo: useRef<HTMLDivElement>(null),
    content: useRef<HTMLDivElement>(null)
  };

  const handleRequestService = (serviceId: string) => {
    let predefinedMessage = '';
    let serviceName = '';
  
    switch (serviceId) {
      case 'basic':
        serviceName = 'Paquete Básico';
        break;
      case 'standard':
        serviceName = 'Paquete Estándar';
        break;
      case 'premium':
        serviceName = 'Paquete Premium';
        break;
      case 'logo':
        serviceName = 'Diseño de Logotipo';
        break;
      case 'content':
        serviceName = 'Creación de Contenido';
        break;
      default:
        break;
    }
  
    predefinedMessage = `Hola, estoy interesado en el servicio de ${serviceName}. Me gustaría obtener más información.`;
  
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  
    setTimeout(() => {
      const messageTextarea = document.getElementById('message') as HTMLTextAreaElement;
      const serviceSelect = document.getElementById('service') as HTMLSelectElement;
      if (messageTextarea && serviceSelect) {
        messageTextarea.value = predefinedMessage;
        serviceSelect.value = serviceId;
        serviceSelect.dispatchEvent(new Event('change'));
      }
    }, 300);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeInUp');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    
    Object.values(serviceRefs).forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      
      Object.values(serviceRefs).forEach(ref => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={sectionRef} className="text-center mb-16 opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Nuestros Servicios</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluciones web simples y asequibles para emprendedores principiantes y pequeños negocios
          </p>
        </div>

        {/* Paquete Básico */}
        <div id="service-basic" ref={serviceRefs.basic} className="mb-16 opacity-0">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow duration-300">
            <div className="md:flex">
              <div className="md:w-1/3 bg-teal-50 p-8">
                <Code className="h-12 w-12 text-teal-500 mb-4" />
                <h3 className="text-2xl font-bold mb-2 text-gray-800">Paquete Básico</h3>
                <p className="text-gray-600 mb-4">Ideal para emprendedores que están comenzando</p>
                <div className="text-3xl font-bold text-teal-500">U$S 120</div>
                <p className="text-gray-500 mt-1">Pago único</p>
              </div>
              <div className="md:w-2/3 p-8">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-teal-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Sitio web sencillo de 3-5 páginas</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-teal-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Diseño minimalista y moderno</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-teal-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Hosting y dominio básico por un año</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-teal-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Mantenimiento básico y soporte por email</span>
                  </li>
                </ul>
                <button onClick={() => handleRequestService('basic')} className="mt-6 bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 px-6 rounded-lg transition duration-300 transform hover:-translate-y-1">
                  Solicitar Ahora
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Paquete Estándar */}
        <div id="service-standard" ref={serviceRefs.standard} className="mb-16 opacity-0">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow duration-300">
            <div className="md:flex">
              <div className="md:w-1/3 bg-teal-50 p-8">
                <Server className="h-12 w-12 text-teal-500 mb-4" />
                <h3 className="text-2xl font-bold mb-2 text-gray-800">Paquete Estándar</h3>
                <p className="text-gray-600 mb-4">Para negocios en crecimiento</p>
                <div className="text-3xl font-bold text-teal-500">U$S 200</div>
                <p className="text-gray-500 mt-1">Pago único</p>
              </div>
              <div className="md:w-2/3 p-8">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-teal-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Sitio web de 5-8 páginas</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-teal-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Diseño personalizado con tu identidad de marca</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-teal-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Hosting y dominio de mayor rendimiento por un año</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-teal-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Soporte técnico prioritario y optimización básica</span>
                  </li>
                </ul>
                <button onClick={() => handleRequestService('standard')} className="mt-6 bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 px-6 rounded-lg transition duration-300 transform hover:-translate-y-1">
                  Solicitar Ahora
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Paquete Premium */}
        <div id="service-premium" ref={serviceRefs.premium} className="mb-16 opacity-0">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow duration-300">
            <div className="md:flex">
              <div className="md:w-1/3 bg-teal-50 p-8">
                <Palette className="h-12 w-12 text-teal-500 mb-4" />
                <h3 className="text-2xl font-bold mb-2 text-gray-800">Paquete Premium</h3>
                <p className="text-gray-600 mb-4">Para pequeñas empresas establecidas</p>
                <div className="text-3xl font-bold text-teal-500">U$S 300</div>
                <p className="text-gray-500 mt-1">Pago único</p>
              </div>
              <div className="md:w-2/3 p-8">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-teal-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Sitio web con hasta 12 páginas</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-teal-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Diseño completamente personalizado y exclusivo</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-teal-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Hosting y dominio de alto rendimiento por un año</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-teal-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>SEO básico, análisis de tráfico y soporte prioritario</span>
                  </li>
                </ul>
                <button onClick={() => handleRequestService('premium')} className="mt-6 bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 px-6 rounded-lg transition duration-300 transform hover:-translate-y-1">
                  Solicitar Ahora
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Servicios Adicionales */}
        <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Servicios Adicionales</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Diseño de Logotipo */}
          <div id="service-logo" ref={serviceRefs.logo} className="opacity-0">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow duration-300 h-full">
              <div className="p-8">
                <PenTool className="h-12 w-12 text-teal-500 mb-4" />
                <h3 className="text-xl font-bold mb-4 text-gray-800">Diseño de Logotipo</h3>
                <p className="text-gray-600 mb-6">
                  Logotipos simples y memorables para tu marca emergente.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-teal-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>2 propuestas de diseño</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-teal-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Archivos en formatos digitales</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-teal-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Guía básica de uso</span>
                  </li>
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-teal-500">U$S 70</span>
                  <button onClick={() => handleRequestService('logo')} className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 px-6 rounded-lg transition duration-300 transform hover:-translate-y-1">
                    Solicitar
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Creación de Contenido */}
          <div id="service-content" ref={serviceRefs.content} className="opacity-0">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow duration-300 h-full">
              <div className="p-8">
                <FileText className="h-12 w-12 text-teal-500 mb-4" />
                <h3 className="text-xl font-bold mb-4 text-gray-800">Creación de Contenido</h3>
                <p className="text-gray-600 mb-6">
                  Textos claros y efectivos que conectan con tu audiencia.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-teal-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Redacción para 5 páginas</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-teal-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Optimización básica para SEO</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-teal-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Lenguaje adaptado a tu público</span>
                  </li>
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-teal-500">U$S 90</span>
                  <button onClick={() => handleRequestService('content')} className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 px-6 rounded-lg transition duration-300 transform hover:-translate-y-1">
                    Solicitar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;