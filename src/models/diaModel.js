import connection from '../database/db.js'

export const obtenerTodosLosDias = async (req,res)=>{
    try {
        const consulta = `
        SELECT * FROM dias
        `
        const [resultado] = await connection.execute(consulta)
        return resultado
    } catch (error) {
        console.error("Error al obtenerTodosLosDias")
    }
}