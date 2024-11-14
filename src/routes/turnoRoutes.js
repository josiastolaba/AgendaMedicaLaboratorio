import { Router } from 'express';
import { verTurnos, reservarTurno, cancelarTurno, confirmarTurno, guardarReserva } from '../controllers/turnoController.js'

const router = Router();

router.post('/reservarTurno/:id_turno', guardarReserva);
router.get('/crearTurno', verTurnos)
router.get('/reservarTurno/:id_turno', reservarTurno)
router.get('/cancelar/:id_turno', cancelarTurno)
router.get('/confirmar/:id_turno', confirmarTurno)


export default router;