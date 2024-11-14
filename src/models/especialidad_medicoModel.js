import connection from '../database/db.js'

export const obtenerTodasLasMatriculas = async (req,res)=>{
    try {
        const consulta = `
        SELECT em.*, p.nombre, p.apellido, e.nombre_especialidad
        FROM especialidad_medico em
        JOIN medico m ON m.id_medico = em.id_medico
        JOIN especialidad e ON e.id_especialidad = em.id_especialidad
        JOIN persona p ON m.dni = p.dni
        `
        const [resultado] = await connection.execute(consulta)
        return resultado
    } catch (error) {
        console.error("Error al obtenerTodasLasMatriculas")
    }
}

export const modificarEspecialidadMedico = async (req,res)=>{
    try {
        const consulta = `
        SELECT  nombre_especialidad, id_especialidad FROM especialidad 
        `
        const [resultado] = await connection.execute(consulta)
        return resultado
    } catch (error) {
        console.error("Error al modificarEspecialidadMedico")
    }
}
