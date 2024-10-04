import React from 'react';

const CookiesPolicy = () => {
  return (
    <div className="container mx-auto py-5 px-5 lg:px-40">
      <h1 className="text-3xl font-bold mb-4">Política de Cookies</h1>

      <p className="mb-4">
        En AnunciosUy, utilizamos cookies y otras tecnologías de seguimiento para mejorar tu experiencia en nuestra plataforma, personalizar el contenido, y analizar el uso de nuestros servicios. Esta Política de Cookies explica qué cookies usamos, por qué las utilizamos y cómo puedes gestionarlas.
      </p>

      <h2 className="text-2xl font-semibold mb-2">1. ¿Qué son las cookies?</h2>
      <p className="mb-4">
        Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. Sirven para recordar tus preferencias y ofrecerte una experiencia personalizada en cada visita. Las cookies pueden ser temporales (de sesión) o permanentes (persistentes).
      </p>

      <h2 className="text-2xl font-semibold mb-2">2. Tipos de cookies que utilizamos</h2>
      <p className="mb-4">
        En nuestro sitio web utilizamos los siguientes tipos de cookies:
      </p>

      <ul className="list-disc ml-6 mb-4">
        <li><strong>Cookies esenciales:</strong> Estas cookies son necesarias para que nuestro sitio funcione correctamente y no pueden ser desactivadas en nuestros sistemas. Se suelen configurar en respuesta a tus acciones, como establecer tus preferencias de privacidad, iniciar sesión o completar formularios.</li>

        <li><strong>Cookies de rendimiento:</strong> Estas cookies nos permiten contar visitas y fuentes de tráfico para medir y mejorar el rendimiento de nuestro sitio. Nos ayudan a saber qué páginas son las más y las menos populares y ver cómo los usuarios navegan por el sitio.</li>

        <li><strong>Cookies funcionales:</strong> Estas cookies permiten que el sitio web ofrezca una funcionalidad mejorada y personalización. Pueden ser establecidas por nosotros o por proveedores externos cuyos servicios hemos agregado a nuestras páginas.</li>

        <li><strong>Cookies de publicidad y targeting:</strong> Estas cookies pueden ser establecidas a través de nuestro sitio por nuestros socios publicitarios. Pueden ser utilizadas para crear un perfil sobre tus intereses y mostrarte anuncios relevantes en otros sitios.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">3. Cómo puedes gestionar las cookies</h2>
      <p className="mb-4">
        Puedes gestionar tus preferencias de cookies en cualquier momento desde la configuración de tu navegador. La mayoría de los navegadores te permiten rechazar o aceptar cookies, eliminar las cookies ya almacenadas en tu dispositivo, o recibir una advertencia antes de que una cookie se almacene. Ten en cuenta que si deshabilitas o eliminas cookies, algunas funciones de nuestro sitio web podrían no funcionar correctamente.
      </p>

      <p className="mb-4">
        A continuación, te proporcionamos enlaces a las instrucciones para gestionar las cookies en los navegadores más comunes:
      </p>

      <ul className="list-disc ml-6 mb-4">
        <li><a href="https://support.google.com/chrome/answer/95647?hl=es" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Google Chrome</a></li>
        <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Mozilla Firefox</a></li>
        <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Safari</a></li>
        <li><a href="https://support.microsoft.com/es-es/help/17442/windows-internet-explorer-delete-manage-cookies" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Internet Explorer</a></li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">4. Cookies de terceros</h2>
      <p className="mb-4">
        En algunos casos, utilizamos cookies proporcionadas por terceros confiables para mejorar tu experiencia en nuestro sitio web. Por ejemplo, usamos herramientas de análisis como Google Analytics para ayudarnos a entender cómo interactúan los usuarios con nuestro sitio, lo que nos permite mejorar su funcionalidad.
      </p>

      <p className="mb-4">
        Estos servicios pueden recopilar información sobre tu actividad en nuestro sitio y en otros sitios web que utilizas. Para obtener más detalles sobre cómo estas terceras partes gestionan la información recopilada, te recomendamos que revises sus respectivas políticas de privacidad.
      </p>

      <h2 className="text-2xl font-semibold mb-2">5. Cambios en nuestra Política de Cookies</h2>
      <p className="mb-4">
        Nos reservamos el derecho de actualizar esta Política de Cookies en cualquier momento. Cualquier cambio que realicemos será publicado en esta página. Te recomendamos revisar esta política periódicamente para mantenerte informado sobre cómo usamos las cookies.
      </p>

      <h2 className="text-2xl font-semibold mb-2">6. Contacto</h2>
      <p className="mb-4">
        Si tienes alguna pregunta o inquietud sobre nuestra Política de Cookies, puedes ponerte en contacto con nosotros a través de nuestra página de contacto.
      </p>

      <p className="mb-4">
        Última actualización: 04/10/2024
      </p>
    </div>
  );
};

export default CookiesPolicy;
