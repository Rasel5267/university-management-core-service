/*
  Warnings:

  - You are about to drop the column `coursrId` on the `StudentEnrolledCourse` table. All the data in the column will be lost.
  - Added the required column `courseId` to the `StudentEnrolledCourse` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "StudentEnrolledCourse" DROP CONSTRAINT "StudentEnrolledCourse_coursrId_fkey";

-- AlterTable
ALTER TABLE "StudentEnrolledCourse" DROP COLUMN "coursrId",
ADD COLUMN     "courseId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "StudentEnrolledCourse" ADD CONSTRAINT "StudentEnrolledCourse_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "courses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
