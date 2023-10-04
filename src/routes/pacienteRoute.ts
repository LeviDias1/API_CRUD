

import { Router } from "express";
import pacieteController from "../controllers/pacienteController";

const pacienteRouter = Router();

pacienteRouter.post("/criar", pacieteController.criarPaciente);
pacienteRouter.get("/listar", pacieteController.listarPaciente);
pacienteRouter.patch("/:id", pacieteController.updatePaciente);
pacienteRouter.delete("/:id", pacieteController.deletarPaciente);

export default pacienteRouter