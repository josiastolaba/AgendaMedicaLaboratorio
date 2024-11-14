
import connection from '../database/db.js'

export const obenertMedicoPorEspecialidadYDNI = async (dni,id_especialidad)=>{
    try {
        const consulta = `
        SELEC m.*,p.*, e.nombre_especialidad
        FROM medico m 
        JOIN persona p ON p.dni = m.dni
        JOIN especialidad_medico em ON m.id_medico = em.id_medico
        JOIN especialidad e ON em.id_especialidad = e.id_especialidad
        WHERE m.dni = ? AND em.id_especialidad = ? `
        const [resultado] = await connection.execute(consulta,)
    } catch (error) {
        
    }
}

export const obtenerMedico = async (dni)=>{
    try {
        const consulta = `
        SELECT p.* , m.id_medico
        FROM persona p JOIN medico m ON p.dni = m.dni
        WHERE m.dni = ?
        `
        const [resultado] = await connection.execute(consulta,dni)
        return resultado
    } catch (error) {
        console.error("Error al obtenerMedico")
    }
}

export const obtenerTodosLosMedicos = async (req,res)=>{
    try {
        const consulta = `
        SELECT p.*, e.nombre_especialidad,m.estado_medico, em.matricula
        FROM medico m 
        JOIN especialidad_medico em ON m.id_medico = em.id_medico
        JOIN especialidad e ON em.id_especialidad = e.id_especialidad
        JOIN persona p ON p.dni = m.dni
        `
        const [resultado] = await connection.execute(consulta)
        return resultado
    } catch (error) {
        console.error("Error al obtenerTodosLosMedicos")
    }
}

export const crearMedicosInsert = async (dni)=>{
    try {
        const consulta = `
        INSERT INTO medico (dni) VALUES (?)
        `
        const [resultado] = await connection.execute(consulta,[dni])
        return true
    } catch (error) {
        console.error("Error al crearMedicosInsert", error)
        return false
    }
}
export const crearEspeMedicoInsert = async (medico,especialidad,estado)=>{
    try {
        const consulta3 = `INSERT INTO especialidad_medico (id_medico, id_especialidad, estado) VALUES (?,?,?)`
        const [resultado2] = await connection.execute(consulta3,[medico,especialidad,estado])
        return true
    } catch (error) {
        console.error("Error al crearMedicosInsert", error)
        return false
    }
}
export const modificarMedicosUpdate = async (dni_m,nombre_m,apellido_m,direccion_m,fecha_nacimiento_m,email_m,imagen_documento_m,especialidad_m,estado_m)=>{
    try {
        const persona = await modificarPersona(dni_m,nombre_m,apellido_m,direccion_m,fecha_nacimiento_m,email_m,imagen_documento_m)
        const consulta = `
        INSERT INTO medico (dni) VALUES (?)
        `
        const [resultado] = await connection.execute(consulta,[persona])
        const consulta2 = `SELECT LAST_INSERT_ID() AS id`
        const [id] = await connection.execute(consulta2)
        console.log(id)
        const consulta3 = `INSERT INTO especialidad_medico (id_medico, id_especialidad, estado) VALUES (?,?,?)`
        const [resultado2] = await connection.execute(consulta3,[id[0].id,especialidad,estado])
        
        return true
    } catch (error) {
        console.error("Error al crearMedicosInsert", error)
        return false
    }
}

export const inactivarMedicoUpdate = async (id_medico)=>{
    try {

        const consulta = `UPDATE medico SET estado_medico = 0 WHERE medico.id_medico = ?`
        const [resultado] = await connection.execute(consulta,[id_medico])
        if(resultado.affectedRows === 1){
            return true
        }else{
            return false
        }
        
    } catch (error) {
        console.error("Error al crearMedicosInsert", error)
        return false
    }
}

export const cargarSelecMedico = async ()=>{
    try {
        const consulta = `
        SELECT m.dni, p.nombre,p.apellido, m.id_medico
        FROM medico m
        JOIN persona p ON m.dni = p.dni`
        const [resultado] = await connection.execute(consulta)
        return resultado
    } catch (error) {
        console.error("Error al cargarSelecMedico", error)
    }
}


