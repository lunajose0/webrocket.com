import { useEffect, useRef } from 'react';
import { Award, Users, Clock } from 'lucide-react';

const About = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);

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

    if (titleRef.current) observer.observe(titleRef.current);
    if (contentRef.current) observer.observe(contentRef.current);
    if (statsRef.current) observer.observe(statsRef.current);
    if (teamRef.current) observer.observe(teamRef.current);

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (contentRef.current) observer.unobserve(contentRef.current);
      if (statsRef.current) observer.unobserve(statsRef.current);
      if (teamRef.current) observer.unobserve(teamRef.current);
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="text-center mb-16 opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Sobre Nosotros</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un equipo pequeño con grandes ideas para emprendedores como tú
          </p>
        </div>
        
        <div ref={contentRef} className="md:flex items-center mb-20 opacity-0">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <img 
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Nuestro equipo trabajando" 
              className="rounded-lg shadow-sm"
            />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Nuestra Historia</h3>
            <p className="text-gray-600 mb-6">
              Fundada en 2025, WebRocket nació cuando vimos que muchos emprendedores y pequeños negocios no podían acceder a servicios web de calidad por sus altos costos y complejidad.
            </p>
            <p className="text-gray-600 mb-6">
              Nuestra misión es democratizar el acceso a la presencia digital con soluciones simples, efectivas y asequibles. Creemos que cada emprendedor merece tener una presencia web profesional sin complicaciones técnicas ni grandes inversiones.
            </p>
            
            <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <Award className="h-10 w-10 text-teal-500 mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-800">5+</div>
                <p className="text-gray-600">Proyectos Completados</p>
              </div>
              <div className="text-center bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <Users className="h-10 w-10 text-teal-500 mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-800">4+</div>
                <p className="text-gray-600">Emprendedores Felices</p>
              </div>
              <div className="text-center bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <Clock className="h-10 w-10 text-teal-500 mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-800">3+</div>
                <p className="text-gray-600">Años de Experiencia</p>
              </div>
            </div>
          </div>
        </div>
        
        <div ref={teamRef} className="bg-white rounded-lg shadow-sm p-8 md:p-12 opacity-0">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Nuestro Pequeño Equipo</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center transform hover:-translate-y-2 transition-transform duration-300">
              <img 
                src="image/trabajadores/yo.jpg" 
                alt="Team Member" 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-sm"
              />
              <h4 className="text-xl font-bold text-gray-800">José Luna</h4>
              <p className="text-teal-500">Desarrollador y Diseñador Web</p>
            </div>
            <div className="text-center transform hover:-translate-y-2 transition-transform duration-300">
              <img 
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" 
                alt="Team Member" 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-sm"
              />
              <h4 className="text-xl font-bold text-gray-800">Ana Torres</h4>
              <p className="text-teal-500">Desarrolladora</p>
            </div>
            <div className="text-center transform hover:-translate-y-2 transition-transform duration-300">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" 
                alt="Team Member" 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-sm"
              />
              <h4 className="text-xl font-bold text-gray-800">Miguel Sánchez</h4>
              <p className="text-teal-500">Soporte al Cliente</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;