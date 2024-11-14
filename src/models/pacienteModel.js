import connection from '../database/db.js'

export const obtenerTodosLosPacientes = async (req,res)=>{
    try {
        const consulta = `
        SELECT id_paciente, pa.* 
        FROM paciente p
        JOIN persona pa ON pa.dni = p.dni   
        `
        const [resultado] = await connection.execute(consulta)
        return resultado
    } catch (error) {
        console.error("Error al obtenerTodasLasPersonas")
    }
}