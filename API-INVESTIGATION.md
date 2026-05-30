# 🔍 Investigación API de Vacancy Rewards

## Lo que sabemos hasta ahora:

### Tecnología del Sistema
- **Framework**: JavaServer Faces (JSF) - `javax.faces`
- **UI Framework**: PrimeFaces 13.0.7
- **Pagos**: Stripe API (`js.stripe.com/v3/`)
- **reCAPTCHA**: Google reCAPTCHA
- **Hosting**: booking.vacancyrewards.com / members.vacancyrewards.com

### URLs del Sistema
- Login: `https://login.live-leisure.com`
- Booking: `https://booking.vacancyrewards.com`
- Members: `https://members.vacancyrewards.com`

### Información de Contacto Actual (a actualizar)
- Dirección: 2688 SW 137 Avenue. Miami, Florida. 33175
- Teléfono: +1 305 907 6068
- Email: reservations@vacancyrewards.com
- WhatsApp: +5219987643785

---

## 🎯 Opciones para integración

### Opción A: Solicitar API de Vacancy Rewards ⭐
**Contactar a Vacancy Rewards para preguntar:**

1. **¿Tienen API REST/GraphQL?**
   - Endpoint de autenticación
   - Endpoint de búsqueda de hoteles
   - Endpoint de reservas
   - Endpoint de perfil de usuario
   - Webhook de pagos

2. **¿Ofrecen integración white-label?**
   - Configuración de branding
   - Personalización de emails
   - Custom domain con su info

3. **Documentación**
   - Swagger/OpenAPI docs
   - Ejemplos de código
   - Rate limits
   - Ambientes de prueba

### Opción B: Reverse Engineering (no recomendado)
- Interceptar requests del navegador
- Analizar JSF ViewState
- NO RECOMENDADO: Frágil, puede romper con updates

### Opción C: Sistema Híbrido
**Frontend propio + iframe del sistema:**
```
┌─────────────────────────────────┐
│   Live-Leisure Frontend         │
│   (Next.js con tu branding)     │
│                                 │
│   ┌─────────────────────────┐  │
│   │  Vacancy Rewards        │  │
│   │  (iframe o embed)       │  │
│   └─────────────────────────┘  │
└─────────────────────────────────┘
```

### Opción D: Migrar a otro sistema
Sistemas alternativos con API pública:
- **Booking.com API**
- **Expedia API**
- **Amadeus API**
- **Custom con Supabase/Firebase**

---

## 📋 Siguiente Pasos

### INMEDIATO: Contactar a Vacancy Rewards
Email/contacto a preguntar:
```
Asunto: API Integration for Live-Leisure Platform

Hola,

Somos Live-Leisure y estamos usando su sistema de reservas 
en login.live-leisure.com. Necesitamos:

1. ¿Tienen documentación de API REST/GraphQL disponible?
2. ¿Ofrecen configuración white-label para personalizar 
   branding, logos y información de contacto?
3. ¿Cuáles son los endpoints disponibles para:
   - Autenticación
   - Búsqueda de hoteles
   - Crear/gestionar reservas
   - Perfil de usuario

Apreciamos su ayuda.

Saludos,
Live-Leisure Team
```

### MIENTRAS TANTO: Solución temporal
Podemos crear:
1. Landing page mejorada (✅ Ya hecho)
2. Página de "Member Portal" que redirija al sistema actual
3. FAQ/Documentación para usuarios

---

## 🛠️ Si tienen API: Plan de Implementación

```
/app/api/
  /auth/
    - login.ts
    - register.ts
    - logout.ts
  /bookings/
    - search.ts
    - create.ts
    - [id].ts
  /user/
    - profile.ts
    - reservations.ts

/app/members/
  /dashboard/
  /bookings/
  /profile/
```

---

## 📞 Contactos a Preguntar

**Vacancy Rewards:**
- reservations@vacancyrewards.com
- WhatsApp: +5219987643785
- Tel: +1 305 907 6068

**Preguntas específicas:**
1. "Do you provide API documentation for partners?"
2. "Can we get white-label configuration access?"
3. "What's the technical contact for integration questions?"
