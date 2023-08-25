/*
  Warnings:

  - Made the column `middleName` on table `faculties` required. This step will fail if there are existing NULL values in that column.
  - Made the column `profileImage` on table `faculties` required. This step will fail if there are existing NULL values in that column.
  - Made the column `middleName` on table `students` required. This step will fail if there are existing NULL values in that column.
  - Made the column `profileImage` on table `students` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "faculties" ALTER COLUMN "middleName" SET NOT NULL,
ALTER COLUMN "profileImage" SET NOT NULL;

-- AlterTable
ALTER TABLE "students" ALTER COLUMN "middleName" SET NOT NULL,
ALTER COLUMN "profileImage" SET NOT NULL;

-- CreateTable
CREATE TABLE "buildings" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "buildings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Room" (
    "id" TEXT NOT NULL,
    "roomNumber" TEXT NOT NULL,
    "floor" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "buildingId" TEXT NOT NULL,

    CONSTRAINT "Room_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Room" ADD CONSTRAINT "Room_buildingId_fkey" FOREIGN KEY ("buildingId") REFERENCES "buildings"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
