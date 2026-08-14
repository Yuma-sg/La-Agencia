export type Language = "es" | "en";

export interface Translations {
  header: {
    whatsapp: string;
    whatsappMessage: string;
    instagramLabel: string;
    themeLabel: string;
    themeLabelToDark: string;
  };
  hero: {
    badge: string;
    titleLine1: string;
    titleHighlight: string;
    paragraph: string;
    ctaPrimary: string;
    ctaSecondary: string;
    footnote: string;
    whatsappMessage: string;
  };
  servicios: {
    heading: string;
    subheading: string;
    items: { icono: string; titulo: string; descripcion: string }[];
  };
  problemas: {
    heading: string;
    subheading: string;
    items: { titulo: string; descripcion: string }[];
  };
  solucion: {
    heading: string;
    subheading: string;
    steps: { numero: string; titulo: string; descripcion: string }[];
  };
  oferta: {
    badge: string;
    heading: string;
    paragraph: string;
    items: string[];
    cta: string;
    whatsappMessage: string;
  };
  prueba: {
    heading: string;
    subheading: string;
    metrics: { valor: string; etiqueta: string }[];
    quote: string;
    name: string;
    role: string;
  };
  ctaFinal: {
    heading: string;
    paragraph: string;
    cta: string;
    whatsappMessage: string;
    instagramHandle: string;
    copyright: (year: number) => string;
  };
}

export const translations: Record<Language, Translations> = {
  es: {
    header: {
      whatsapp: "Hablar por WhatsApp",
      whatsappMessage: "Hola, quiero un diagnóstico gratuito para mi negocio.",
      instagramLabel: "Instagram de La Agencia",
      themeLabel: "Cambiar a modo claro",
      themeLabelToDark: "Cambiar a modo oscuro",
    },
    hero: {
      badge: "Marketing y diseño para negocios locales",
      titleLine1: "Dale a tu negocio la imagen",
      titleHighlight: "que se merece",
      paragraph:
        "Branding, diseño web y redes sociales para que tu negocio se vea profesional, se recuerde y venda. Todo en un solo lugar, sin complicaciones.",
      ctaPrimary: "Quiero mi diagnóstico gratuito",
      ctaSecondary: "Ver servicios",
      footnote: "Sin compromiso · Respuesta en menos de 24 horas",
      whatsappMessage: "Hola, quiero un diagnóstico gratuito para mi negocio.",
    },
    servicios: {
      heading: "Qué hacemos por tu negocio",
      subheading:
        "Todo lo que necesitas para verte y venderte mejor en línea, en un solo equipo.",
      items: [
        {
          icono: "✦",
          titulo: "Branding e Identidad Visual",
          descripcion:
            "Logotipo, paleta de colores, tipografía y manual de marca para que tu negocio se vea consistente y profesional en todos lados.",
        },
        {
          icono: "◆",
          titulo: "Diseño y Desarrollo Web",
          descripcion:
            "Sitios web y landing pages rápidas, claras y pensadas para convertir visitas en clientes, con tu marca al centro.",
        },
        {
          icono: "●",
          titulo: "Redes Sociales y Contenido",
          descripcion:
            "Gestión de tus redes y creación de contenido que conecta con tu audiencia y mantiene tu marca presente todo el mes.",
        },
      ],
    },
    problemas: {
      heading: "¿Te suena familiar?",
      subheading:
        "Estos son los problemas más comunes que frenan el crecimiento de negocios como el tuyo.",
      items: [
        {
          titulo: "Tu marca no se ve profesional",
          descripcion:
            "Logo hecho a la carrera, colores que cambian según el día y nada de consistencia entre tu local, tus redes y tu papelería.",
        },
        {
          titulo: "No tienes página web (o da pena)",
          descripcion:
            "Tus clientes te buscan en línea antes de visitarte y no encuentran nada, o encuentran algo que no representa tu negocio.",
        },
        {
          titulo: "Redes sociales abandonadas",
          descripcion:
            "Publicas cuando alcanzas, sin estrategia ni constancia, y tu negocio se va perdiendo entre la competencia.",
        },
        {
          titulo: "No sabes qué está funcionando",
          descripcion:
            "Inviertes tiempo y dinero en marketing sin saber qué te trae clientes de verdad y qué es solo ruido.",
        },
      ],
    },
    solucion: {
      heading: "Nuestra solución",
      subheading:
        "Un proceso claro para construir una marca que se vea, se sienta y venda mejor.",
      steps: [
        {
          numero: "01",
          titulo: "Diagnóstico",
          descripcion:
            "Revisamos tu marca, tu web y tus redes actuales para entender en dónde estás y qué te está frenando.",
        },
        {
          numero: "02",
          titulo: "Estrategia y diseño",
          descripcion:
            "Definimos tu identidad visual y el plan de contenido y web que mejor conecta con tus clientes ideales.",
        },
        {
          numero: "03",
          titulo: "Implementación",
          descripcion:
            "Creamos tu marca, tu sitio web y tu contenido, listos para publicarse y usarse en todos tus canales.",
        },
        {
          numero: "04",
          titulo: "Gestión y crecimiento",
          descripcion:
            "Mantenemos tus redes activas y seguimos ajustando la estrategia para que tu negocio crezca mes a mes.",
        },
      ],
    },
    oferta: {
      badge: "Cupo limitado este mes",
      heading: "Diagnóstico gratuito + plan de marca",
      paragraph:
        "Antes de invertir en nosotros, te mostramos exactamente qué le falta a tu marca y cómo lo resolveríamos. Sin costo, sin compromiso.",
      items: [
        "Diagnóstico completo de tu marca y presencia digital",
        "Revisión de tu web, redes sociales y competencia",
        "Plan de branding y marketing con prioridades claras",
        "Sesión de revisión de resultados en vivo",
      ],
      cta: "Solicitar mi lugar por WhatsApp",
      whatsappMessage:
        "Hola, quiero aprovechar el diagnóstico gratuito + plan de marca.",
    },
    prueba: {
      heading: "Resultados reales",
      subheading:
        "Así ayudamos a un negocio local a construir su marca desde cero en 8 semanas.",
      metrics: [
        { valor: "+180%", etiqueta: "en seguidores en redes" },
        { valor: "3x", etiqueta: "más clientes nuevos al mes" },
        { valor: "30 días", etiqueta: "de marca a sitio web listo" },
      ],
      quote:
        "“Antes de La Agencia no teníamos ni logo. Hoy tenemos una marca que la gente reconoce, un sitio web que se ve profesional y redes que por fin traen clientes nuevos cada semana.”",
      name: "Ana Martínez",
      role: "Dueña de negocio local",
    },
    ctaFinal: {
      heading: "Construyamos tu marca hoy mismo",
      paragraph:
        "Escríbenos por WhatsApp y en menos de 24 horas te contactamos para agendar tu diagnóstico gratuito.",
      cta: "Hablar con La Agencia por WhatsApp",
      whatsappMessage:
        "Hola, quiero agendar una llamada para mejorar la marca de mi negocio.",
      instagramHandle: "@laagenciaags",
      copyright: (year: number) =>
        `© ${year} La Agencia. Todos los derechos reservados.`,
    },
  },
  en: {
    header: {
      whatsapp: "Chat on WhatsApp",
      whatsappMessage: "Hi, I'd like a free diagnostic for my business.",
      instagramLabel: "La Agencia's Instagram",
      themeLabel: "Switch to light mode",
      themeLabelToDark: "Switch to dark mode",
    },
    hero: {
      badge: "Marketing and design for local businesses",
      titleLine1: "Give your business the image",
      titleHighlight: "it deserves",
      paragraph:
        "Branding, web design, and social media so your business looks professional, gets remembered, and sells. All in one place, no hassle.",
      ctaPrimary: "Get my free diagnostic",
      ctaSecondary: "See services",
      footnote: "No commitment · Reply within 24 hours",
      whatsappMessage: "Hi, I'd like a free diagnostic for my business.",
    },
    servicios: {
      heading: "What we do for your business",
      subheading:
        "Everything you need to look and sell better online, from one team.",
      items: [
        {
          icono: "✦",
          titulo: "Branding & Visual Identity",
          descripcion:
            "Logo, color palette, typography, and brand guidelines so your business looks consistent and professional everywhere.",
        },
        {
          icono: "◆",
          titulo: "Web Design & Development",
          descripcion:
            "Fast, clear websites and landing pages built to turn visitors into customers, with your brand front and center.",
        },
        {
          icono: "●",
          titulo: "Social Media & Content",
          descripcion:
            "We manage your social accounts and create content that connects with your audience and keeps your brand present all month.",
        },
      ],
    },
    problemas: {
      heading: "Sound familiar?",
      subheading:
        "These are the most common problems holding back businesses like yours.",
      items: [
        {
          titulo: "Your brand doesn't look professional",
          descripcion:
            "A rushed logo, colors that change by the day, and no consistency between your storefront, your social media, and your printed materials.",
        },
        {
          titulo: "You don't have a website (or it's embarrassing)",
          descripcion:
            "Your customers look you up online before visiting and find nothing — or find something that doesn't represent your business.",
        },
        {
          titulo: "Abandoned social media",
          descripcion:
            "You post whenever you remember, with no strategy or consistency, and your business gets lost among the competition.",
        },
        {
          titulo: "You don't know what's working",
          descripcion:
            "You spend time and money on marketing without knowing what's actually bringing you customers and what's just noise.",
        },
      ],
    },
    solucion: {
      heading: "Our process",
      subheading:
        "A clear process to build a brand that looks, feels, and sells better.",
      steps: [
        {
          numero: "01",
          titulo: "Diagnosis",
          descripcion:
            "We review your brand, website, and current social media to understand where you stand and what's holding you back.",
        },
        {
          numero: "02",
          titulo: "Strategy & Design",
          descripcion:
            "We define your visual identity and the content and web plan that best connects with your ideal customers.",
        },
        {
          numero: "03",
          titulo: "Implementation",
          descripcion:
            "We build your brand, your website, and your content, ready to publish and use across all your channels.",
        },
        {
          numero: "04",
          titulo: "Management & Growth",
          descripcion:
            "We keep your social media active and keep adjusting the strategy so your business grows month after month.",
        },
      ],
    },
    oferta: {
      badge: "Limited spots this month",
      heading: "Free diagnostic + brand plan",
      paragraph:
        "Before you invest in us, we'll show you exactly what your brand is missing and how we'd fix it. No cost, no commitment.",
      items: [
        "Complete diagnostic of your brand and online presence",
        "Review of your website, social media, and competitors",
        "Branding and marketing plan with clear priorities",
        "Live results review session",
      ],
      cta: "Claim my spot on WhatsApp",
      whatsappMessage:
        "Hi, I'd like to take advantage of the free diagnostic + brand plan.",
    },
    prueba: {
      heading: "Real results",
      subheading:
        "Here's how we helped a local business build their brand from scratch in 8 weeks.",
      metrics: [
        { valor: "+180%", etiqueta: "in social media followers" },
        { valor: "3x", etiqueta: "more new customers per month" },
        { valor: "30 days", etiqueta: "from brand to finished website" },
      ],
      quote:
        "“Before La Agencia we didn't even have a logo. Now we have a brand people recognize, a website that looks professional, and social media that finally brings in new customers every week.”",
      name: "Ana Martínez",
      role: "Local business owner",
    },
    ctaFinal: {
      heading: "Let's build your brand today",
      paragraph:
        "Message us on WhatsApp and we'll get back to you within 24 hours to schedule your free diagnostic.",
      cta: "Chat with La Agencia on WhatsApp",
      whatsappMessage:
        "Hi, I'd like to schedule a call to improve my business's brand.",
      instagramHandle: "@laagenciaags",
      copyright: (year: number) => `© ${year} La Agencia. All rights reserved.`,
    },
  },
};
