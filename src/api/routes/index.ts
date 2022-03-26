import { Router } from "express";
import personaRouter from "./persona";
import estudianteRouter from "./estudiante";
import maestroRouter from './maestro';
import gradoRouter from "./grado";
import grupoRouter from "./grupo";
import materiaRouter from "./materia";
import cicloRouter from "./ciclo";
import rolRouter from "./rol";
import personaRol from './personaRol'

const router = Router();

router.use('/persona', personaRouter)
router.use('/estudiante', estudianteRouter)
router.use('/maestro', maestroRouter)
router.use('/grado', gradoRouter)
router.use('/grupo', grupoRouter)
router.use('/materia', materiaRouter)
router.use('/ciclo', cicloRouter)
router.use('/rol', rolRouter)
router.use('/personaRol', personaRol)

export default router