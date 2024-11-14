import connection from '../database/db.js'

export const obtenerTodasLasEspecialidades = async (req,res)=>{
    try {
        const connection = `
        SELECT  nombre_especialidad, id_especialidad FROM especialidad 
        `
        const [resultado] = await connection.execute(consulta)
        return resultado
    } catch (error) {
        console.error("Error al obtenerTodasLasEspecialidades")
    }
}

