import connection from '../database/db.js'

export const obtenerTurnos = async (req,res)=>{
    try {
        const consulta = `
        SELECT * FROM estado_turno
        `
        const [resultado] = await connection.execute(consulta)
        return resultado
    } catch (error) {
        console.error("Error al obtenerTurnos")
    }
}