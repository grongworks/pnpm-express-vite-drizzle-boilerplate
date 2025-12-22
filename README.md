# Boilerplate

A clean, minimal full-stack boilerplate for customer projects.

**This is a project foundation – no business logic, domain models, or example features included.**

## Tech Stack

- **Package Manager**: pnpm
- **Backend**: Express (TypeScript)
- **Frontend**: Vite + React (TypeScript)
- **ORM**: Prisma (no models)
- **Styling**: Tailwind CSS + Ant Design
- **Structure**: Monorepo with shared types

## Project Structure

```
/apps
  /backend          Express application
  /frontend         React + Vite application
/packages
  /types            Shared TypeScript types
/prisma            Prisma ORM configuration (empty schema)
```

## Setup

```bash
pnpm install
```

## Running

### Development

```bash
# Run both frontend and backend
pnpm dev

# Or separately
pnpm dev:backend
pnpm dev:frontend
```

### Production Build

```bash
pnpm build
```

## Scripts

- `pnpm dev` – Start frontend and backend in development mode
- `pnpm dev:backend` – Start backend only
- `pnpm dev:frontend` – Start frontend only
- `pnpm build` – Build both applications
- `pnpm build:backend` – Build backend only
- `pnpm build:frontend` – Build frontend only
- `pnpm type-check` – Run TypeScript type checking
- `pnpm lint` – Run linting

## Next Steps

This boilerplate contains only infrastructure and tooling. To extend it:

1. **Define models** in `/prisma/schema.prisma`
2. **Create backend routes** in `/apps/backend/src`
3. **Build frontend pages** in `/apps/frontend/src`
4. **Add shared types** to `/packages/types/src`

No business logic, auth, or example features are included.

