-- CreateTable
CREATE TABLE "usuario" (
    "id_usuario" SERIAL NOT NULL,
    "nome_usuario" TEXT,
    "email" TEXT NOT NULL,
    "paroquia_capela" TEXT DEFAULT '',
    "total_votos" INTEGER,
    "votou" BOOLEAN DEFAULT false,

    CONSTRAINT "usuario_pkey" PRIMARY KEY ("id_usuario")
);

-- CreateTable
CREATE TABLE "imagem" (
    "id_imagem" SERIAL NOT NULL,
    "upload_imagem" TEXT NOT NULL,
    "descricao_imagem" TEXT,
    "id_usuario" INTEGER NOT NULL,

    CONSTRAINT "imagem_pkey" PRIMARY KEY ("id_imagem")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuario_email_key" ON "usuario"("email");

-- AddForeignKey
ALTER TABLE "imagem" ADD CONSTRAINT "imagem_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "usuario"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;
