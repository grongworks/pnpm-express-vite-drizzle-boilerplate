import express, { Express } from "express";
import { errorHandler } from "./middleware/errorHandler";
import { HelloMessage } from "@shared/types";
import { db } from "./lib/db";
import { changeMeIfNeeded } from "./lib/schema";

export function createApp(): Express {
  const app = express();

  // Middleware
  app.use(express.json());

  // Health check endpoint
  app.get("/api/health", async (_req, res) => {
    const message: HelloMessage = { status: "okido" };

    await db.insert(changeMeIfNeeded).values({});

    const data = await db.select().from(changeMeIfNeeded);
    res.json({
      ...message,
      data,
    });
  });

  // GET all records
  app.get("/api/items", async (_req, res) => {
    try {
      const data = await db.select().from(changeMeIfNeeded);
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch items" });
    }
  });

  // POST create new record
  app.post("/api/items", async (_req, res) => {
    try {
      const result = await db.insert(changeMeIfNeeded).values({}).returning();
      res.status(201).json(result[0]);
    } catch (error) {
      res.status(500).json({ error: "Failed to create item" });
    }
  });

  // Error handler (must be last)
  app.use(errorHandler);

  return app;
}
