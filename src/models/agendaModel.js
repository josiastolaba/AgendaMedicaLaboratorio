import connection from '../database/db.js'

export const crearAgendaInsert = async(hora_inicio, hora_fin, intervalo_turno, max_sobreTurno,descripcion, matricula, id_sucursal, diasSeleccionados) => {
    try {

        const consulta = `
            INSERT INTO agenda(hora_inicio, hora_fin, intervalo_turno, max_sobreTurno,descripcion, matricula, id_sucursal) VALUES (?,?,?,?,?,?,?)
        `;
        const [resultado] = await connection.execute(consulta, [hora_inicio, hora_fin, intervalo_turno, max_sobreTurno, descripcion, matricula, id_sucursal]);

        const id_agenda = resultado.insertId;

        const consulta2 = `
            INSERT INTO agenda_dia(id_dia,id_agenda) VALUES (?,?)
        `;

        for (const dia of diasSeleccionados) {
            await connection.execute(consulta2, [dia, id_agenda]);
        }

        return resultado;
    } catch (error) {
        console.error("Error en crearAgendaInsert", error);
    }
};

export const obtenerAgendas = async (req,res)=>{
    try {
        const conexion = await connection
        const consulta = `
        SELECT a.* , e.nombre_especialidad, p.nombre, p.apellido
        FROM agenda a
        JOIN especialidad_medico em ON em.matricula = a.matricula
        JOIN medico m ON m.id_medico = em.id_medico
        JOIN especialidad e ON e.id_especialidad = em.id_especialidad
        JOIN persona p ON p.dni = m.dni 
        `
        const [resultado] = await connection.execute(consulta)
        return resultado
    } catch (error) {
        console.error("Error al obtenerAgendas")
    }
}