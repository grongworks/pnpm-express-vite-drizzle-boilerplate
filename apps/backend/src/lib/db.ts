import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "./schema";

const globalForDrizzle = global as unknown as { db?: ReturnType<typeof drizzle> };

let poolInstance: Pool | null = null;
let dbInstance: ReturnType<typeof drizzle> | null = null;

function getPool(): Pool {
  if (!poolInstance) {
    poolInstance = new Pool({
      connectionString: process.env.DATABASE_URL,
      max: 20,
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 5000,
    });

    // Handle pool errors
    poolInstance.on("error", (err) => {
      console.error("Unexpected error on idle client", err);
    });
  }
  return poolInstance;
}

function getDb(): ReturnType<typeof drizzle> {
  if (!dbInstance) {
    dbInstance = drizzle(getPool(), { schema });
  }
  return dbInstance;
}

export const db = new Proxy({} as ReturnType<typeof drizzle>, {
  get: (target, prop) => {
    const instance = getDb();
    return (instance as any)[prop];
  },
}) as ReturnType<typeof drizzle>;

if (process.env.NODE_ENV !== "production" && !globalForDrizzle.db) {
  globalForDrizzle.db = db;
}
