-- DropTable
DROP TABLE IF EXISTS "SystemTeamMember";

-- AlterTable
ALTER TABLE "QrScanner" ADD COLUMN "description" TEXT,
                       ADD COLUMN "userId" TEXT NOT NULL,
                       ADD FOREIGN KEY ("userId") REFERENCES "User"("id"); 