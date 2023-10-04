

import { Request, Response } from "express";
import agendaServices from "../services/agendaServices";

class agendaController{

    constructor(){}

      async criarAgenda(req: Request, res: Response) {
        try {
          const agendas = await agendaServices.criarAgenda(req.body);
          res.status(200).json({status: "ok", agenda: agendas });
        } catch (error) {
          res.status(500).json({status: "error", message: (error as any).message });
        }
      }

      async listarAgenda(req: Request, res: Response){
        try{
            const agendas = await agendaServices.listarAgendas();
            res.status(200).json({status: "ok", agenda: agendas});
        }catch(error){
            res.status(500).json({status: "error", message: (error as any).message})
        }
      }

      async updateAgenda(req: Request, res: Response){
        try{
            const id = parseInt(req.params.id);                                     
            const agendas = await agendaServices.updateAgenda(id, req.body);
            res.status(200).json({status: "ok", agenda: agendas});
        }catch(error){
            res.status(500).json({status: "error", message: (error as any).message});
        }
      }

      async deletarAgenda(req: Request, res: Response){
        try{
            const id = parseInt(req.params.id);     
            const agendas = await agendaServices.deletarAgenda(id);
            res.status(200).json({status: "ok", agenda: agendas});
        }catch(error){
            res.status(500).json({status: "error",message: (error as any).message});
        }
      }
}
export default new agendaController