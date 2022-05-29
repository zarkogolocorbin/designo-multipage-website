/*
  Warnings:

  - You are about to drop the column `slug` on the `Project` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Project_slug_key";

-- AlterTable
ALTER TABLE "Category" ADD COLUMN     "slug" TEXT NOT NULL DEFAULT E'default-slug';

-- AlterTable
ALTER TABLE "Project" DROP COLUMN "slug";
