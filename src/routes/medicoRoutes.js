
import { Router } from 'express';
import { mostrarMedicos, crearMedico, traerMedico, crearEspecialidadMedico, inactivarMedico,  } from '../controllers/medicoController.js';

const router = Router();

router.get('/', mostrarMedicos)
router.post('/crearMedico', crearMedico)
router.post('/crearEspeMedico', crearEspecialidadMedico)
router.get('/buscarMedico', traerMedico)
router.get('/inactivarMedico/:id_medico', inactivarMedico)

export default router;
