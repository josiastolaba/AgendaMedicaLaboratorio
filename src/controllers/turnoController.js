import  * as Turno  from "../models/turnoModel.js";
import  * as Agenda  from "../models/agendaModel.js";
import  * as Medico  from "../models/medicoModel.js";
import  * as Paciente  from "../models/pacienteModel.js";
import  * as EstadoTurno  from "../models/estadoTurnoModel.js";


export const nuevoTurno = async (req, res) => {
    const turnos = await Turno.getTurnosAgenda(req.body.id_agenda);
    const pacientes = await Paciente.obtenerTodosLosPacientes()
    const estadosturnos = await EstadoTurno.obtenerTurnos()
    const agendas = await Agenda.obtenerAgendas()
    res.render("turnos", {turnos,pacientes,estadosturnos,agendas})
}

export const selectMedico = async (req, res) => {
    const medicos = await Medico.obtenerTodosLosMedicos();
        res.render('nuevo_turno', {medicos})
}

export const verTurnos = async (req, res) => {
    const medicos = await Medico.obtenerTodosLosMedicos()
    const estadosturnos = await EstadoTurno.obtenerTurnos();
    const pacientes = await Paciente.obtenerTodosLosPacientes()
    const agendas = await Agenda.obtenerAgendas()
    console.log(req.body.matricula)
    const matricula = req.body.matricula;
        const turnosAgenda = await Turno.getTurnosAgenda(matricula)
        res.render('nuevo_turno', {medicos, turnosAgenda,estadosturnos,pacientes,agendas})
}


export const reservarTurno = async(req,res) => {
    
    const id_turno = req.params.id_turno
    const pacientes = await Paciente.obtenerTodosLosPacientes()
    res.render("reservarTurno", {pacientes, id_turno})
}

export const confirmarTurno = async(req,res) => {
    const id_turno = req.params.id_turno
    await Turno.confirmar(id_turno)
    res.redirect('/agenda/verAgenda')
}

export const cancelarTurno = async(req,res) => {
    const id_turno = req.params.id_turno
    await Turno.cancelar(id_turno)
    res.redirect('/agenda/verAgenda')
}

export const guardarReserva = async(req,res)=> {
    console.log(req.body)
    try {
        const {motivo_consulta, id_paciente} = req.body
        const id_turno = req.params.id_turno
        await Turno.reservarTurno(motivo_consulta, id_paciente,id_turno)
        res.redirect('/')
    } catch (error) {
        console.error(error)
    }
}