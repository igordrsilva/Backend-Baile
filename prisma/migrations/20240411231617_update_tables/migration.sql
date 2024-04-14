/*
  Warnings:

  - You are about to drop the column `total_votos` on the `usuario` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "imagem" ADD COLUMN     "total_votos" INTEGER;

-- AlterTable
ALTER TABLE "usuario" DROP COLUMN "total_votos";
