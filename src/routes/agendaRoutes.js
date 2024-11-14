import { Router } from "express";
import { getAgenda } from "../controllers/agendaController.js";
import { nuevaAgenda, crearAgenda } from "../controllers/agendaController.js";
import { selectMedico, verTurnos } from '../controllers/turnoController.js'

const router = Router()

router.get('/agenda', getAgenda)
router.get('/',nuevaAgenda)
router.post('/crearAgenda', crearAgenda)
router.get('/verAgenda', selectMedico)
router.post('/verAgenda', verTurnos)

export default router