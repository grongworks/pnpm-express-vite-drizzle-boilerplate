import express, { Express } from "express";
import { errorHandler } from "./middleware/errorHandler";
import { HelloMessage } from "@shared/types";
import { prisma } from "./lib/prisma";

export function createApp(): Express {
  const app = express();

  // Middleware
  app.use(express.json());

  // Health check endpoint
  app.get("/api/health", async (_req, res) => {
    const message: HelloMessage = { status: "okido" };

    await prisma.changeMeIfNeeded.create({
      data: {},
    });

    const data = await prisma.changeMeIfNeeded.findMany();
    res.json({
      ...message,
      data,
    });
  });

  // Error handler (must be last)
  app.use(errorHandler);

  return app;
}
