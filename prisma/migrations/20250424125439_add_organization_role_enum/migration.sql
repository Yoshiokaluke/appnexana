/*
  Warnings:

  - Changed the type of `role` on the `OrganizationMembership` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "OrganizationRole" AS ENUM ('admin', 'member');

-- AlterTable
ALTER TABLE "OrganizationMembership" DROP COLUMN "role",
ADD COLUMN     "role" "OrganizationRole" NOT NULL;
