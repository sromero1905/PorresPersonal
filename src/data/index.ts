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
    title: "Chief Digital Officer, Athletic Greens",
    description:
      "We are the developers of AG1, the leading powdered beverage designed to provide daily foundational nutrition...",
    image: "/images/ag1.jpg",
    details: "As CDO of Athletic Greens, I was responsible for the digital transformation...",
  },
  {
    id: 2,
    title: "Founder & Lead Investor, Axacraft",
    description:
      "Axacraft was founded to address the needs of the digital transformation market...",
    image: "/images/axacraft.jpg",
    details: "Axacraft has revolutionized consulting with a unique approach...",
  },
  {
    id: 3,
    title: "I led Product, Engineering, Design, and IT at Hagerty",
    description:
      "Hagerty is the global leader in classic car insurance...",
    image: "/images/hagerty.jpg",
    details: "I led the digital strategy at Hagerty...",
  }
];
