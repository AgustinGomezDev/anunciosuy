import React from 'react';

const HelpCenter = () => {
  return (
    <div className="container mx-auto py-5 px-5 lg:px-40">
      <h1 className="text-3xl font-bold mb-6">Centro de Ayuda</h1>

      {/* Sección FAQ */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Preguntas Frecuentes (FAQ)</h2>

        <div className="mb-4">
          <h3 className="font-semibold">1. ¿Cómo puedo publicar un anuncio?</h3>
          <p>
            Para publicar un anuncio, primero necesitas registrarte o iniciar sesión en nuestra plataforma. Luego, dirígete a la página de <a href="/publicar" className="text-blue-500 underline">publicar</a> y completa el formulario con la información requerida sobre tu anuncio. Asegúrate de añadir una descripción detallada y fotos para atraer más atención.
          </p>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold">2. ¿Es gratis publicar un anuncio?</h3>
          <p>
            Sí, puedes publicar anuncios básicos de forma gratuita. Sin embargo, ofrecemos opciones premium que te permiten destacar tu anuncio para obtener más visibilidad. Para más información sobre las suscripciones premium, consulta nuestra <span href="/suscripciones" className="text-blue-500 underline">página de suscripciones</span> (próximamente).
          </p>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold">3. ¿Cómo puedo editar o eliminar mi anuncio?</h3>
          <p>
            Puedes editar o eliminar tu anuncio desde tu cuenta. Simplemente ve a tu cuenta en la parte superiro derecha de tu pantalla, selecciona el anuncio que deseas modificar o eliminar, y haz clic en las opciones correspondientes para actualizarlo o eliminarlo permanentemente.
          </p>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold">4. ¿Qué debo hacer si tengo problemas para iniciar sesión?</h3>
          <p>
            Si tienes problemas para iniciar sesión, asegúrate de que estás utilizando el correo electrónico y la contraseña correctos. Si olvidaste tu contraseña, puedes restablecerla en la página de <span href="/recuperar-contrasena" className="text-blue-500 underline">recuperación de contraseña</span> (próximamente).  Si el problema persiste, ponte en contacto con nuestro equipo de soporte.
          </p>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold">5. ¿Cómo contacto con el vendedor o proveedor de un servicio?</h3>
          <p>
            En cada anuncio, encontrarás la opción de contactar al vendedor o proveedor de servicios a través de WhatsApp o correo electrónico. Haz clic en el botón de contacto disponible para iniciar la conversación directamente.
          </p>
        </div>
      </section>

      {/* Enlaces útiles */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Enlaces Útiles</h2>

        <ul className="list-disc ml-6">
          <li className="mb-2">
            <a href="/terminos" className="text-blue-500 underline">
              Términos y Condiciones
            </a>
          </li>
          <li className="mb-2">
            <a href="/politica-privacidad" className="text-blue-500 underline">
              Política de Privacidad
            </a>
          </li>
          <li className="mb-2">
            <a href="/politica-cookies" className="text-blue-500 underline">
              Política de Cookies
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default HelpCenter;
