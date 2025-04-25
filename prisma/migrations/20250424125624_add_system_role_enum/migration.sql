/*
  Warnings:

  - The `systemRole` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "SystemRole" AS ENUM ('system_team');

-- AlterTable
ALTER TABLE "User" DROP COLUMN "systemRole",
ADD COLUMN     "systemRole" "SystemRole";
