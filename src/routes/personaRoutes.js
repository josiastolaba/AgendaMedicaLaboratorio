import { Router } from 'express';
import { crearPersona, mostrarPersonas } from '../controllers/personaController.js';

const router = Router();

router.get('/', mostrarPersonas)
router.post('/crearPersona', crearPersona)

export default router;