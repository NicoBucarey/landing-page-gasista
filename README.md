# Carlos Barros - Gasista Matriculado 🔧

Sitio web profesional para "Carlos Barros - Gasista Matriculado" - servicios de gas, plomería y destapaciones en Neuquén, Argentina. Landing page moderno, responsivo y optimizado para conversiones con integración WhatsApp.

## 📋 Descripción del Proyecto

Landing page de una sola página (SPA) que presenta los servicios de un gasista profesional matriculado. Incluye:

- **Hero Section**: Carrusel automático de 8 imágenes (agua, gas, plomería)
- **Servicios Principales**: Gasista, Plomería, Destapaciones, Reparaciones
- **Servicios Detallados**: Trámites Camuzzi, Baterías de medidores, Tuberías (Epoxi/Termofusión), Instalaciones de gas
- **Credenciales**: Experiencia, Garantía, Presupuestos sin cargo, Servicios de gas
- **Galería de Trabajos**: Proyectos realizados con zoom hover
- **Ubicación**: Mapa interactivo de Google Maps + horarios
- **Botón WhatsApp flotante**: Contacto directo (+54 299 528-4941)
- **Responsive design**: Optimizado para móvil, tablet y escritorio
- **Dark mode support**: Interfaz compatible con preferencias del sistema

## 🛠️ Stack Tecnológico

- **Frontend Framework**: React 18 (Hooks: useState, useEffect)
- **Build Tool**: Vite (HMR en desarrollo, bundling optimizado)
- **Styling**: Tailwind CSS (utility-first con configuración personalizada)
- **Hosting**: Vercel (auto-deploy en push a rama main)
- **Maps**: Google Maps Embed API
- **Control de Versiones**: Git + GitHub

## 📦 Instalación y Setup

### Requisitos Previos
- Node.js 16+ 
- npm o yarn
- Git

### Pasos de Instalación

```bash
# Clonar repositorio
git clone https://github.com/NicoBucarey/landing-page-gasista.git
cd servicios-gasista

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build

# Preview de producción local
npm run preview
```

**URL de desarrollo**: http://localhost:5173

## 📁 Estructura de Componentes

```
src/
├── App.jsx                    # Componente raíz - renderiza todos los componentes
├── components/
│   ├── Hero.jsx              # Carrusel automático (5 seg por imagen)
│   ├── Services.jsx          # 4 servicios principales
│   ├── DetailedServices.jsx  # 4 servicios especializados
│   ├── Credentials.jsx       # 4 tarjetas de valor (exp., garantía, etc.)
│   ├── Gallery.jsx           # Grid de trabajos realizados
│   ├── Location.jsx          # Dirección, horarios, Google Maps
│   └── WhatsappButton.jsx    # Botón flotante de contacto
├── index.css                 # Estilos globales + fixes de dark mode
└── main.jsx                  # Entry point

public/
└── images/                   # 8 imágenes PNG para carrusel Hero
    ├── agua1.png, agua2.png, agua3.png
    ├── gas1.png, gas2.png, gas3.png
    └── plomeria1.png, plomeria2.png
```

## 🎨 Diseño y Colores

**Esquema de Color**:
- **Primario**: Esmeralda (#10b981)
- **Secundario**: Azul (#3b82f6)
- **Acentos**: Ámbar (#f59e0b), Púrpura (#a855f7)
- **Fondo**: Slate-50 a Slate-100
- **Texto**: Slate-900 (oscuro en todos los modos)

**Responsive Breakpoints**:
- Móvil: < 640px (1 columna)
- Tablet: 640px-1024px (2 columnas)
- Desktop: > 1024px (3-4 columnas)

## 🚀 Despliegue en Vercel

El proyecto está configurado para auto-deploy:

```bash
# Push a main dispara automáticamente un deploy en Vercel
git push origin main
```

**URL de Producción**: [landing-page-gasista.vercel.app](https://landing-page-gasista.vercel.app)

**Repositorio GitHub**: [NicoBucarey/landing-page-gasista](https://github.com/NicoBucarey/landing-page-gasista)

## 📱 Git Workflow

```bash
# 1. Verificar cambios
git status

# 2. Agregar cambios
git add .

# 3. Crear commit con descripción
git commit -m "Descripción del cambio"

# 4. Hacer push (auto-deploy a Vercel si es rama main)
git push origin main
```

**Nota**: Siempre seguir el orden: `status → add → commit → push`

## 🔧 Solución de Problemas

### Textos invisibles en modo oscuro móvil
- **Causa**: Conflicto de Tailwind dark: con estilos globales
- **Solución**: Aplicar `!text-slate-900` a h2, h3 + CSS global con !important en index.css

### Carrusel Hero no avanza
- **Causa**: useEffect no ejecutándose
- **Solución**: Verificar que el componente esté importado en App.jsx

### Cambios no reflejados en Vercel
- **Causa**: No hacer push a rama main
- **Solución**: Ejecutar `git push origin main` (no a otra rama)

## 📞 Información de Contacto

**Carlos Barros - Gasista Matriculado**
- 📍 Dirección: San Ignacio 4310, Valentina Sur, Neuquén Capital
- 📱 WhatsApp: +54 299 528-4941
- 🕐 Horarios: Lunes-Viernes 8:00-18:00 | Sábados 9:00-14:00 | Emergencias 24/7

## 🎯 Futuras Mejoras

- [ ] Testimonios de clientes
- [ ] Blog de consejos y tips
- [ ] Formulario de contacto integrado
- [ ] Sistema de reserva de citas
- [ ] Chat en vivo
- [ ] Optimización SEO avanzada
- [ ] Analytics e integración con Google Business

## 📄 Licencia

Este proyecto es privado. Todos los derechos reservados © 2024 Carlos Barros.
