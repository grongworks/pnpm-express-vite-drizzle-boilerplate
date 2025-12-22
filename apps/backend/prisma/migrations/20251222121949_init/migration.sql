-- CreateTable
CREATE TABLE "ChangeMeIfNeeded" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ChangeMeIfNeeded_pkey" PRIMARY KEY ("id")
);
