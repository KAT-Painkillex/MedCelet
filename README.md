# Pulsera Inteligente de Emergencia

> **Porque en una emergencia, cada segundo cuenta.**

Plataforma web para el mercado mexicano que conecta pulseras físicas con QR a perfiles médicos de emergencia, con privacidad por capas y autoservicio 24/7.

## Stack

| Capa | Tecnología |
|------|------------|
| Frontend | Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS 4 |
| Backend / DB | Supabase (PostgreSQL + Auth) |
| Pagos (fase 4) | Mercado Pago (MXN) |
| QR | `qrcode.react` |

## Estructura del proyecto

```
pulsera-emergencia/
├── supabase/
│   ├── schema.sql          # Esquema inicial (revisión fase 1)
│   └── config.toml         # Config local Supabase CLI (futuro)
├── src/
│   ├── app/                # App Router (rutas)
│   │   ├── (marketing)/    # Landing + catálogo (fase 4)
│   │   ├── (auth)/         # Login / registro (fase 3)
│   │   ├── dashboard/      # Panel usuario (fase 3)
│   │   └── e/[braceletId]/ # Vista de emergencia QR (fase 2) ★ core
│   ├── components/         # UI reutilizable
│   ├── lib/                # Supabase client, utilidades
│   └── types/              # Tipos TypeScript
├── public/
└── package.json
```

## Plan de desarrollo por fases

| Fase | Entregable | Estado |
|------|------------|--------|
| **1** | Estructura + `schema.sql` | ✅ En revisión |
| **2** | Vista de emergencia (`/e/[braceletId]`) | Pendiente |
| **3** | Dashboard + autenticación | Pendiente |
| **4** | Landing + Mercado Pago | Pendiente |

## Variables de entorno (cuando se configure Supabase)

Copia `.env.example` a `.env.local`:

```bash
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## Comandos

```bash
npm install
npm run dev
```

## Base de datos

El esquema vive en `supabase/schema.sql`. Incluye:

- Perfiles y roles de usuario
- Pulseras vinculadas por UUID (QR)
- Información médica pública vs. protegida
- Contactos de emergencia (acceso con PIN)
- Auditoría de accesos al modo protegido
- Tablas preparadas para catálogo y pedidos (fase 4)

Aplicar en Supabase: SQL Editor → pegar `schema.sql` → ejecutar.
