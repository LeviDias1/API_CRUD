
import { Router } from "express";
import consultaController from "../controllers/consultaController";

const consultaRouter = Router();

consultaRouter.post("/criar", consultaController.criarConsulta);
consultaRouter.get("/listar", consultaController.listarConsultas);
consultaRouter.patch("/:id", consultaController.upedateConsultas);
consultaRouter.delete("/:id", consultaController.deletarConsultas);

export default consultaRouter