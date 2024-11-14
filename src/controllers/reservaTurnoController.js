import * as Paciente  from "../models/pacienteModel.js";

export const getReservaTurnos = async (req, res) => {
    try {
        const pacientes = await Paciente.obtenerTodosLosPacientes()
        res.render('/reservarTurno', {pacientes})
    } catch (error) {
        console.error("Error getReservaTurnos")
    }
    
}