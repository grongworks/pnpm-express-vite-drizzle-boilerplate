# Boilerplate

A clean, minimal full-stack boilerplate for customer projects.

**This is a project foundation – no business logic, domain models, or example features included.**

## Tech Stack

- **Package Manager**: pnpm
- **Backend**: Express (TypeScript)
- **Frontend**: Vite + React (TypeScript)
- **ORM**: Drizzle ORM with PostgreSQL
- **Styling**: Tailwind CSS + Ant Design
- **Structure**: Monorepo with shared types

## Project Structure

```
/apps
  /backend
    /drizzle        Drizzle ORM migrations
    /src
      /lib          Database client and schema
    drizzle.config.ts
  /frontend         React + Vite application
/packages
  /types            Shared TypeScript types
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

**General:**
- `pnpm dev` – Start frontend and backend in development mode
- `pnpm dev:backend` – Start backend only
- `pnpm dev:frontend` – Start frontend only
- `pnpm build` – Build both applications
- `pnpm build:backend` – Build backend only
- `pnpm build:frontend` – Build frontend only
- `pnpm type-check` – Run TypeScript type checking
- `pnpm lint` – Run linting

**Database (from `/apps/backend`):**
- `pnpm db:generate` – Generate Drizzle migrations
- `pnpm db:migrate` – Run pending migrations
- `pnpm db:push` – Push schema changes to database

## Database Setup

Before running the application, ensure a PostgreSQL database is set up and the connection string is configured in `.env`:

```env
DATABASE_URL=postgresql://user:password@localhost:5432/dbname
```

Then run migrations:
```bash
cd apps/backend
pnpm db:generate  # Generate migrations from schema changes
pnpm db:migrate   # Run migrations
```

## Next Steps

This boilerplate contains only infrastructure and tooling. To extend it:

1. **Update database schema** in `/apps/backend/src/lib/schema.ts` (replace the example table)
2. **Generate migrations** with `pnpm db:generate` from the backend directory
3. **Apply migrations** with `pnpm db:migrate`
4. **Build backend API** routes in `/apps/backend/src`
5. **Create frontend pages** in `/apps/frontend/src`
6. **Define shared types** in `/packages/types/src`

No business logic, authentication, or example features are included.

