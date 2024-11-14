import connection from '../database/db.js'

export const getTurnosAgenda = async (id_agenda) => {
    try {
        const consulta = `
        SELECT t.*, a.descripcion, et.estado_turno
        FROM turno t
        JOIN agenda a ON a.id_agenda = t.id_agenda
        JOIN especialidad_medico em ON em.matricula = a.matricula
        JOIN estado_turno et ON t.id_estado_turno = et.id_estado_turno
        WHERE a.matricula = ?
        `
        const [resultado] = await connection.execute(consulta, [id_agenda])
        return resultado
    } catch (error) {
        console.error("Error al obtener turnos de agenda")
    }
}

export const crearTurnoInsert = async() =>{
    try {
        const consulta = `
            INSERT INTO persona(dni, nombre, apellido, direccion, fechaNacimiento, email, img_doc) VALUES (?,?,?,?,?,?,?)
            `
        const [resultado] = await connection.execute(consulta,[dni,nombre,apellido,direccion,fecha_nacimiento,email,imagen_documento])
        return dni
    } catch (error) {
        console.error("Error crearTurnoInsert", error)   
    }
}

export const cancelar = async(id_turno) =>{
    try {
        const consulta = `
            UPDATE turno SET id_estado_turno= 3
            WHERE id_turno = ?
            `
        const [resultado] = await connection.execute(consulta,[id_turno])
        return resultado
    } catch (error) {
        console.error("Error cancelar", error)   
    }
}
export const confirmar = async(id_turno) =>{
    try {
        const consulta = `
            UPDATE turno SET id_estado_turno= 2
            WHERE id_turno = ?
            `
        const [resultado] = await connection.execute(consulta,[id_turno])
        return resultado
    } catch (error) {
        console.error("Error confirmar", error)   
    }
}

export const reservarTurno = async(motivo_consulta, id_paciente,id_turno) =>{
    try {
        const consulta = `
            UPDATE turno 
            SET id_estado_turno=1 ,motivo_consulta = ?, id_paciente = ?
            WHERE id_turno = ?
            `
        const [resultado] = await connection.execute(consulta,[motivo_consulta, id_paciente,id_turno])
        return resultado
    } catch (error) {
        console.error("Error reservarTurno", error)   
    }
}




