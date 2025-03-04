
import { ChevronRight, Slash, ChevronLeft, Facebook, Twitter, Instagram, Linkedin, Github, GithubIcon } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img src='image/logo/1.jpg' className="h-8 w-8 rounded-full" />
              <span className="ml-2 text-xl font-bold">WebRocket</span>
            </div>
            <p className="text-gray-400 mb-4">
              Soluciones web simples y efectivas para emprendedores y pequeños negocios.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/jose-luna-br10/" className="text-gray-400 hover:text-teal-400 transition duration-300" target='_blank'>
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://github.com/lunajose0" className="text-gray-400 hover:text-teal-400 transition duration-300" target='_blank'>
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li>
                <a href="#service-basic" className="text-gray-400 hover:text-teal-400 transition duration-300">
                  Paquete Básico
                </a>
              </li>
              <li>
                <a href="#service-standard" className="text-gray-400 hover:text-teal-400 transition duration-300">
                  Paquete Estándar
                </a>
              </li>
              <li>
                <a href="#service-premium" className="text-gray-400 hover:text-teal-400 transition duration-300">
                  Paquete Premium
                </a>
              </li>
              <li>
                <a href="#service-logo" className="text-gray-400 hover:text-teal-400 transition duration-300">
                  Diseño de Logotipo
                </a>
              </li>
              <li>
                <a href="#service-content" className="text-gray-400 hover:text-teal-400 transition duration-300">
                  Creación de Contenido
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-teal-400 transition duration-300">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-teal-400 transition duration-300">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-teal-400 transition duration-300">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-teal-400 transition duration-300">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contacto</h3>
            <ul className="space-y-2 text-gray-400">
              <li></li>
              <li><a href="mailto:info@gmail.com" className="text-gray-400 hover:text-teal-400 text-sm transition duration-300" target="_blank">info@gmail.com</a></li>
              <li><a href="https://wa.me/+59896933968" className="text-gray-400 hover:text-teal-400 text-sm transition duration-300" target='_blank'>+598 96933968</a></li>
              <li><p>Calle Francisco Araucho, Montevido, Uruguay</p></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} WebRocket. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-teal-400 text-sm transition duration-300">
              Política de Privacidad
            </a>
            <a href="#" className="text-gray-400 hover:text-teal-400 text-sm transition duration-300">
              Términos y Condiciones
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;