import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];


// data/index.ts
export const projects = [
  {
    id: 1,
    title: "Chief Digital Officer, Athletic Greens",
    description:
      "We are the developers of AG1, the leading powdered beverage designed to provide daily foundational nutrition...",
    status: "Previously",
    linkLabel: "Athletic Greens valued at $1.2B",
    link: "/projects/1", // Enlace dinámico basado en el id del proyecto
    image: "/verificacion.jpeg", // Ruta ajustada de la imagen
  },
  {
    id: 2,
    title: "Founder & lead investor, Axacraft",
    description:
      "Axacraft was founded in August 2022 to address a substantial market gap...",
    status: "Currently",
    linkLabel: "What if everything we knew about consulting was wrong?",
    link: "/projects/2", // Enlace dinámico basado en el id del proyecto
    image: "/conexion.jpg", // Ruta ajustada de la imagen
  },
  {
    id: 3,
    title:
      "I led Product, Engineering, Design, and IT at Hagerty - the global leader in classic car insurance.",
    description:
      "You may know us as the classic car insurance juggernaut...",
    status: "Previously",
    linkLabel: "Discover more about Hagerty",
    link: "/projects/3", // Enlace dinámico basado en el id del proyecto
    image: "/estudio.jpg", // Ruta ajustada de la imagen
  }
];


// data/projects.ts (o en la ubicación correspondiente)
export const projectsinfo = [
  {
    id: 1,
    title: "Conexión Constructiva",
    image: "/images/ag1.jpg",
    details: {
      detail1: `
        **Conexión Constructiva** redefine el éxito en el mercado inmobiliario mediante la transformación emocional de organizaciones. Combinamos el poder del coaching ontológico con la programación neurolingüística (PNL) para crear estrategias efectivas que impulsan el crecimiento y fortalecen relaciones comerciales. Nuestro enfoque único ayuda a empresas inmobiliarias y constructoras a alcanzar metas extraordinarias al reconocer y aprovechar el papel crucial de las emociones en cada transacción.
      `,
      detail2: `
        En este proyecto, diseñamos planes personalizados basados en la comprensión emocional de las dinámicas de compra y venta en el sector inmobiliario. Entrenamos a los equipos en habilidades de comunicación que impactan directamente en el éxito organizacional, desarrollando un lenguaje que conecta emocionalmente con clientes e inversores. Fortalecemos las relaciones con proveedores y clientes al identificar sus expectativas y necesidades emocionales, asegurando condiciones de satisfacción que fomenten relaciones sostenibles y mutuamente beneficiosas. Conexión Constructiva transforma tu enfoque empresarial, ayudándote a tomar decisiones más estratégicas y emocionales, logrando así un impacto positivo en todo el ecosistema inmobiliario.
      `
    },
    link: "https://www.conexionconstructiva.com.ar"
  },

  {
    id: 2,
    title: "Romero Porres Asociados",
    image: "/images/romero-porres.jpg",
    details: {
      detail1: `
        En **Romero Porres Asociados**, nuestra misión es ofrecer asistencia integral en el ámbito inmobiliario, acompañando a nuestros clientes en cada etapa de sus transacciones y proyectos. Con un enfoque en la seguridad y la eficacia, nuestras áreas de especialización abarcan desde asesoría experta en la compra y venta de inmuebles, asegurando un proceso seguro y eficiente, hasta la consultoría especializada en la planificación y desarrollo de proyectos inmobiliarios.
      `,
      detail2: `
        Esto incluye desde el diseño inicial hasta la estructuración de contratos fiduciarios, garantizando una ejecución exitosa conforme a los estándares del sector. También proporcionamos apoyo en la adquisición y venta de inmuebles, con una gestión eficiente en cada etapa del proceso. Nos especializamos en la creación de contratos fiduciarios que protegen los intereses de nuestros clientes, generando confianza y seguridad en las transacciones inmobiliarias. En **Romero Porres Asociados**, entendemos que el inmueble es un reflejo de la organización del mundo humano, y nuestro compromiso es generar nuevas oportunidades de creación de riqueza.
      `
    },
    link: "http://romeroporres.com.ar"
  },

  {
    id: 3,
    title: "Verificadora Externa De Obra",
    image: "/images/hagerty.jpg",
    details: {
      detail1: `
        **VEO S.A.** se posiciona como líder en el sector de consultoría inmobiliaria, ofreciendo un conjunto integral de servicios enfocados en la certificación, inspección y verificación de inmuebles y obras de infraestructura. Proporcionamos informes detallados que certifican el estado actual de inmuebles, garantizando seguridad en cada transacción, además de analizar la documentación legal y técnica para asegurar transparencia en las operaciones.
      `,
      detail2: `
        Supervisamos la correcta ejecución de los proyectos mediante auditorías ex post y evaluamos daños o patologías en construcciones para ofrecer soluciones efectivas. Nuestro objetivo en **VEO S.A.** es ser reconocidos como el referente en consultoría para compradores e inversores inmobiliarios, destacando por nuestra integridad, innovación y compromiso con la satisfacción del cliente.
      `
    },
    link: "http://veosa.com.ar"
  }
];

