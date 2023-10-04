

import { Request, Response } from "express";
import secretariaServices from "../services/secretariaServices";

class secretariaController{

    constructor(){}

    async criarSecretaria(req: Request, res: Response){
        try{
            const secretarias = secretariaServices.criarSecretaria(req.body);
            res.status(200).json({status: "ok", secretarias: secretarias});
        }catch(error){
            res.status(500).json({status: "Erro", message: (error as any).message});
        }
    }

    async listarSecretaria(req: Request, res: Response) {
        try {
          const secretarias = await secretariaServices.listarSecretarias();
          res.status(200).json({ status: "ok", secretarias: secretarias });
        } catch (error) {
          res.status(500).json({ status: "error", message: (error as any).message });
        }
      }

    async updateSecretaria(req: Request, res: Response){
       try{
        const id = parseInt(req.params.id);
        const secretarias = secretariaServices.updateSecretarias(id, req.body);
        res.status(200).json({status: "ok", secretarias: secretarias });
        }catch(error){
            res.status(500).json({status: "erro", messagem: (error as any).message});
        }
    }

    async deletarSecretaria(req: Request, res: Response){
        try{
            const id = parseInt(req.params.id)
            const secretarias = secretariaServices.deletarSecretarias(id);
            res.status(200).json({status: "ok", secretarias: secretarias});
        }catch(error){
            res.status(500).json({status: "erro", message: (error as any).message});
        }
    }
}

export default new secretariaController