import connection from '../database/db.js'

export const obtenerTodasLasSucursales = async (req,res)=>{
    try {
        const consulta = `
        SELECT * FROM sucursal
        `
        const [resultado] = await connection.execute(consulta)
        return resultado
    } catch (error) {
        console.error("Error al obtenerTodasLasSucursales")
    }
}