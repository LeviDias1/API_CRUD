

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class Paciente{
    
    constructor(){}

    async criarPaciente(dado: any){
        try{
            const paciente = await prisma.paciente.create({
                data:{
                    nomePcnte: dado.nomePcnte,
                    senha: dado.senha,
                    usuario: dado.usuario
                }
            });
            return paciente;
        }catch(error){
            console.log(error);
            throw new Error ("Erro ao criar pacientes")
        }
    }

    async listarPaciente(){
        try {
            const paciente = await prisma.paciente.findMany()
            return paciente;
        }catch (error){
            throw new Error ("Erro ao listar pacientes")
        }
    }

    async updatePaciente(id: number, dado: any){
        try{
            const paciente = await prisma.paciente.update({
                where: {id: id},
                data: dado
            });
            return paciente;
        }catch(error){
            throw new Error ("Erro ao atualizar")
        }
    }

    async deletarPaciente(id: number){
        try {
            const paciente = await prisma.paciente.delete({
                where: {id: id}
            });
            return paciente;
        }catch(error){
            throw new Error ("Erro ao deletar a lsita")
        }
    }
}

export default new Paciente