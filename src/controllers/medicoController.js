
import { obtenerTodosLosMedicos, crearMedicosInsert, obtenerMedico, crearEspeMedicoInsert , inactivarMedicoUpdate , cargarSelecMedico} from "../models/medicoModel.js";
import { obtenerTodasLasEspecialidades } from "../models/especialidadModel.js";
import { obtenerTodasLasPersonas } from "../models/personaModel.js";

export const inactivarMedico = async (req,res)=>{
    try {
        const id_medico = req.params.id_medico
        const result = await inactivarMedicoUpdate(id_medico)
        console.log(result)
    } catch (error) {
        console.error("Error al mostrarMedicos", error)
    }
    res.redirect('/medico')
}

export const crearEspecialidadMedico = async (req,res)=>{
    try {
        const {medico,especialidad,estado} = req.body
        const especialidadMedico = await crearEspeMedicoInsert(medico, especialidad, estado)
    } catch (error) {
        console.error("Error al mostrarMedicos", error)
    }
    res.redirect('/medico')
}

export const mostrarMedicos = async (req,res)=>{
    try {
        const medicos = await obtenerTodosLosMedicos(req,res)
        const personas = await obtenerTodasLasPersonas(req,res)
        const especialidades = await obtenerTodasLasEspecialidades(req,res)
        const medicos_puros = await cargarSelecMedico(req,res)
        res.render("medico",{medicos,personas,especialidades,medicos_puros})
    } catch (error) {
        console.error("Error al mostrarMedicos", error)
    }
}

export const crearMedico = async (req,res)=>{
    try {
        const {persona} = req.body
        const todo = await crearMedicosInsert(persona)
    } catch (error) {
        console.error("Error crearMedico", error)
    }
    res.redirect('/medico')
}

export const traerMedico = async (req,res)=>{
    try {
        const {dni} = req.query
        console.log(req.query)
        const todo = await obtenerMedico(dni)
        res.status(200).json(todo)
    } catch (error) {
        console.error("Error traerMedico", error)
        console.error(404).end()
    }
}








