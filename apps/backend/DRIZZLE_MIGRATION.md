# Migration von Prisma zu Drizzle ORM

Diese Dokumentation beschreibt die Migration von Prisma zu Drizzle ORM durchgeführt.

## Was wurde geändert:

### Dependencies
- ❌ Entfernt: `@prisma/client`, `prisma`
- ✅ Hinzugefügt: `drizzle-orm`, `pg`, `drizzle-kit`, `@types/pg`

### Struktur
- `src/lib/prisma.ts` → `src/lib/prisma.ts` (umbenannt zu drizzle client)
- `src/lib/schema.ts` → Neue Datei mit Drizzle-Schema-Definitionen
- `drizzle.config.ts` → Drizzle-Konfiguration
- `drizzle/` → Migrationen-Verzeichnis (ersetzt `prisma/migrations/`)

### Scripts
- `prisma:migrate` → `db:migrate`
- `prisma:reset` → entfernt (kann manuell über `drizzle-kit` erfolgen)
- `prisma:generate` → `db:generate`
- `db:push` → Direkter Push ohne Migration (optional)

## Setup nach Migration:

1. Dependencies installieren:
   ```bash
   pnpm install
   ```

2. Datenbankverbindung sicherstellen (`.env`):
   ```
   DATABASE_URL=postgresql://user:password@localhost:5432/dbname
   ```

3. Migration durchführen:
   ```bash
   pnpm db:migrate
   ```

4. Entwicklungsserver starten:
   ```bash
   pnpm dev:backend
   ```

## Drizzle ORM Dokumentation
- [Offizielle Docs](https://orm.drizzle.team/)
- [PostgreSQL Docs](https://orm.drizzle.team/docs/get-started-postgresql)
- [Drizzle Studio](https://orm.drizzle.team/drizzle-studio/overview)

## Hinweise:
- Der alte `prisma/` Ordner kann gelöscht werden, wenn die Migration erfolgreich war
- Die `prisma.config.ts` Datei wird nicht mehr benötigt
- Drizzle ist typesicherer und bietet bessere Developer Experience für TypeScript
