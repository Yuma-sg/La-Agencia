# La Agencia - Landing Page

Landing page de una sola página para la agencia de servicios digitales "La Agencia", orientada a vender servicios de optimización de e-commerce.

## Stack Tecnológico

- **Framework:** Next.js 14 (App Router)
- **Estilos:** Tailwind CSS
- **TypeScript:** Sí
- **Deploy:** Vercel (recomendado)

## Instalación

1. Instala las dependencias:

```bash
npm install
```

2. Ejecuta el servidor de desarrollo:

```bash
npm run dev
```

3. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Deploy en Vercel

1. Sube tu código a un repositorio de GitHub/GitLab/Bitbucket.

2. Ve a [vercel.com](https://vercel.com) y crea una cuenta o inicia sesión.

3. Haz clic en "New Project" e importa tu repositorio.

4. Vercel detectará automáticamente que es un proyecto Next.js.

5. Haz clic en "Deploy" y espera a que se complete el despliegue.

6. Tu sitio estará disponible en una URL como: `tu-proyecto.vercel.app`

## Configuración

### WhatsApp

Edita los enlaces de WhatsApp en los componentes:
- `components/Hero.tsx`
- `components/OfertaCerrada.tsx`
- `components/CTAFinal.tsx`

Reemplaza `5210000000000` con tu número de WhatsApp (formato internacional sin +).

### SEO

El SEO básico está configurado en `app/layout.tsx`. Puedes personalizar:
- Título
- Descripción
- Open Graph tags
- Twitter Card tags

## Estructura del Proyecto

```
la-agencia-ags/
├── app/
│   ├── layout.tsx          # Layout principal con metadata SEO
│   ├── page.tsx            # Página principal (landing)
│   └── globals.css         # Estilos globales Tailwind
├── components/
│   ├── Hero.tsx            # Sección Hero
│   ├── ProblemasComunes.tsx # Sección de problemas
│   ├── Solucion.tsx        # Sección de solución
│   ├── OfertaCerrada.tsx   # Oferta destacada
│   ├── PruebaSocial.tsx    # Caso de éxito
│   └── CTAFinal.tsx        # CTA final
├── public/                 # Assets estáticos (si los hay)
└── README.md
```

## Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm start` - Inicia el servidor de producción (después de build)
- `npm run lint` - Ejecuta el linter

## Características

- ✅ 100% responsive
- ✅ SEO básico configurado
- ✅ Optimizado para conversión
- ✅ Código limpio y simple
- ✅ Listo para producción
