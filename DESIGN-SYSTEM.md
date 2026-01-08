# 🎨 DESIGN SYSTEM - Live-Leisure

## 🎯 FILOSOFÍA DE DISEÑO

**Objetivo:** Crear una experiencia visual que sea:
- **Professional** - Que transmita confianza y seriedad
- **Modern** - Diseño limpio y minimalista
- **Tropical** - Fondos claros que evocan viajes y vacaciones
- **Consistent** - Un solo color de marca en toda la UI

---

## 🎨 COLOR PALETTE

### Brand Color (Único - Sin Gradientes)
```css
--brand-primary: #0472ab    /* Azul Corporativo */
--brand-hover: #035d8c      /* Hover State */
```

### Neutrals
```css
--dark-900: #0A0E27         /* Footer, glass-dark */
--dark-800: #1A1D3A
--gray-900: #111827         /* Textos principales */
--gray-700: #374151         /* Textos secundarios */
--gray-600: #8892B0
--gray-400: #B4BECF
--white: #FFFFFF
```

### Backgrounds (Light Tropical Theme)
```css
--warm-50: Crema cálido
--warm-100: Beige suave
--cool-50: Azul muy claro
--cool-100: Celeste suave
```

### Accent Colors (Solo para ratings/badges específicos)
```css
--gold: #D4AF37            /* Solo para estrellas de rating */
```

---

## 🎭 EFECTOS MODERNOS A USAR

### 1. **Glassmorphism** (Para cards y modals)
```css
background: rgba(255, 255, 255, 0.1);
backdrop-filter: blur(10px);
border: 1px solid rgba(255, 255, 255, 0.18);
box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
```

### 2. **Neumorphism** (Botones y elementos)
```css
background: #e0e5ec;
box-shadow: 9px 9px 16px #a3b1c6, -9px -9px 16px #ffffff;
```

### 3. **3D Card Tilt Effect**
- Usar `react-tilt` o custom con Framer Motion
- Rotar en X/Y basado en mouse position
- Shadow que sigue el tilt

### 4. **Parallax Scrolling**
- Background images con diferentes velocidades
- Elementos flotantes que se mueven
- Texto con reveal on scroll

### 5. **Hover Effects Premium**
```css
/* Glow Effect */
box-shadow: 0 0 20px rgba(0, 102, 255, 0.5);

/* Scale + Shadow */
transform: scale(1.05);
box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);

/* Gradient Border Animation */
border-image: linear-gradient(45deg, #667eea, #764ba2) 1;
animation: gradientRotate 3s linear infinite;
```

### 6. **Loading Animations**
- Skeleton screens con shimmer effect
- Spinner con gradientes
- Progress bars animadas

### 7. **Micro-interactions**
- Botones que respiran (breathing animation)
- Icons que reaccionan al hover
- Forms con feedback instantáneo visual

---

## 🎬 ANIMACIONES ESPECÍFICAS

### Hero Section
```typescript
// Fade in + Slide up con stagger
const heroVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
}

// Typing effect para el headline
<TypeAnimation
  sequence={['Save up to 70%', 1000, 'Travel the World', 1000]}
  speed={50}
  repeat={Infinity}
/>

// Particles background
<Particles options={particlesConfig} />
```

### Benefits Cards
```typescript
// 3D Tilt con parallax interno
<Tilt
  tiltMaxAngleX={10}
  tiltMaxAngleY={10}
  glareEnable={true}
  glareMaxOpacity={0.45}
>
  <Card />
</Tilt>

// Stagger animation para el grid
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}
```

### Destinations Carousel
```typescript
// Swiper con efectos
<Swiper
  effect="coverflow"
  grabCursor={true}
  centeredSlides={true}
  coverflowEffect={{
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
  }}
/>
```

### Scroll Animations
```typescript
// Reveal on scroll con GSAP
gsap.from(".animate-on-scroll", {
  scrollTrigger: {
    trigger: ".section",
    start: "top 80%",
    toggleActions: "play none none reverse"
  },
  y: 100,
  opacity: 0,
  duration: 1
});
```

---

## 📦 COMPONENTES PREMIUM A CREAR

### 1. HeroSection
- Full viewport height
- Video background o gradient animado
- Typing animation en headline
- CTA buttons con glow effect
- Scroll indicator animado
- Particles/shapes flotando

### 2. BenefitsGrid
- 9 cards en grid 3x3
- Glassmorphism + 3D tilt
- Icons con Lottie animations
- Hover: glow + scale
- Stagger entrance animation

### 3. DestinationShowcase
- Swiper carousel premium
- Image zoom on hover
- Quick view modal con transiciones
- Lazy loading + blur placeholder
- Touch gestures optimizados

### 4. TestimonialsCarousel
- Auto-play infinito
- Avatar con border gradient animado
- Star rating con fill animation
- Background blur effect
- Navigation dots con active state

### 5. PricingCards
- Comparison table interactiva
- Toggle mensual/anual con switch animado
- "Most Popular" badge con shine effect
- Hover: lift + shadow
- Feature list con checkmarks animados

### 6. FAQAccordion
- Smooth expand/collapse
- Icons rotating 180deg
- Active state con highlight
- Search filter option
- Scroll to section

### 7. ContactForm
- Real-time validation
- Field focus con glow effect
- Success: confetti animation
- Error: shake animation
- Loading state en submit button

### 8. InteractiveMap
- Google Maps con custom markers
- Info windows con animación
- Filter por tipo de servicio
- Cluster markers

### 9. StatsCounter
- Numbers counting up cuando entran en viewport
- Circular progress bars
- Icons pulsando
- Gradient text

### 10. NewsletterSection
- Input con blur background
- Email validation instant
- Subscribe button con loading state
- Success modal con animation

---

## 🎨 INSPIRACIÓN / REFERENCIAS

### Websites de referencia para efectos:
1. **Apple.com** - Smooth scrolling, product reveals
2. **Stripe.com** - Gradient meshes, micro-interactions
3. **Linear.app** - Clean, modern, fast animations
4. **Vercel.com** - Dark mode, glassmorphism
5. **Awwwards.com** - Mejores diseños web premiados

### Librerías de componentes premium:
- **Aceternity UI** - Componentes ultra modernos
- **Magic UI** - Effects y animations
- **Tailwind UI** - Componentes profesionales
- **Shadcn/ui** - Base sólida customizable

### Recursos de animación:
- **LottieFiles** - Animaciones de iconos
- **GSAP Showcase** - Demos de animaciones avanzadas
- **Framer Motion Gallery** - Ejemplos de transiciones

---

## 🚀 PERFORMANCE CONSIDERATIONS

A pesar de todas las animaciones, debemos mantener:
- **Lighthouse Score:** 90+ en todas las categorías
- **First Contentful Paint:** < 1.5s
- **Time to Interactive:** < 3.5s
- **Cumulative Layout Shift:** < 0.1

### Técnicas de optimización:
- Lazy load para animations pesadas
- IntersectionObserver para trigger animaciones solo cuando son visibles
- Code splitting por ruta
- Image optimization (Next.js Image)
- Prefetch de recursos críticos
- CSS animations en lugar de JS cuando sea posible
- RequestAnimationFrame para animaciones smooth
- Debounce en scroll listeners

---

## 📱 RESPONSIVE DESIGN

Todos los efectos deben adaptarse:
- **Desktop:** Full effects + 3D + parallax
- **Tablet:** Efectos reducidos, sin 3D pesado
- **Mobile:** Micro-interactions ligeras, sin parallax
- **Touch devices:** Gestures optimizados, no hover effects

---

## ♿ ACCESIBILIDAD

Mantener mientras nos vemos increíbles:
- Contrast ratios WCAG AA compliance
- Keyboard navigation funcional
- Reduced motion preference (prefers-reduced-motion)
- Alt text en todas las imágenes
- ARIA labels donde sea necesario
- Focus indicators visibles

---

**Next Step:** Implementar este diseño en el código 🚀
