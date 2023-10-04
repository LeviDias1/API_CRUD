

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class secretariaServices{

    constructor(){}

    async criarSecretaria(dado: any){
        try{
            const secretaria = await prisma.secretaria.create({
                data:{
                    nome: dado.nome,
                    RG: dado.RG,
                }
            });
            return secretaria;
        }catch(error){
            throw new Error ("Erro ao criar secretarias")
        }
    }

    async listarSecretarias() {
        try {
          const secretarias = await prisma.secretaria.findMany();
          return secretarias;
        } catch (error) {
          console.log(error);
          throw new Error("Erro ao listar secretarias");
        }
      }

    async updateSecretarias(id: number, dado: any){
        try{
            const secretaria = await prisma.secretaria.update({
                where: {id: id},
                data: dado
            });
            return secretaria;
        }catch(error){
            throw new Error ("Error ao atualizar")
        }
    }

    async deletarSecretarias(id: number){
        try {
            const secretaria = await prisma.secretaria.delete({
                where: {id: id}
            });
            return secretaria;
        }catch(error){
            console.log(error);
            throw new Error ("Erro ao deletar a lista")
        }
    }
}

export default new secretariaServices