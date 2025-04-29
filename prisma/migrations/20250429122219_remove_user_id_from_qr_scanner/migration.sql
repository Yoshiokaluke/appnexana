/*
  Warnings:

  - You are about to drop the column `userId` on the `QrScanner` table. All the data in the column will be lost.
  - Made the column `location` on table `QrScanner` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "QrScanner" DROP CONSTRAINT "QrScanner_userId_fkey";

-- AlterTable
ALTER TABLE "QrScanner" DROP COLUMN "userId",
ALTER COLUMN "location" SET NOT NULL;
