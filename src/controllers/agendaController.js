import { obtenerTodasLasMatriculas } from "../models/especialidad_medicoModel.js";
import { obtenerTodasLasSucursales } from "../models/sucursalModel.js";
import { obtenerTodosLosDias } from "../models/diaModel.js"
import { crearAgendaInsert } from "../models/agendaModel.js"

export const getAgenda = (req,res)=>{
    res.render('agenda')
}

export const nuevaAgenda = async (req,res)=>{
    try {
        const matriculas = await obtenerTodasLasMatriculas(req,res)
        const sucursales = await obtenerTodasLasSucursales(req,res)
        const diasTodos = await obtenerTodosLosDias(req,res)
        res.render("agenda",{matriculas,sucursales,diasTodos})
    } catch (error) {
        console.error("Error al listarMatriculas", error)
    }
}

export const crearAgenda = async (req, res) => {
    try {
        const { hora_inicio, hora_fin, intervalo_turno, max_sobreTurno, descripcion, matricula, id_sucursal } = req.body;
        const diasSeleccionados = req.body['dias[]'];
        const todo = await crearAgendaInsert(hora_inicio, hora_fin, intervalo_turno, max_sobreTurno, descripcion, matricula, id_sucursal, diasSeleccionados);
    } catch (error) {
        console.error("Error en crearAgenda", error);
    }
    res.redirect('/agenda');
}
