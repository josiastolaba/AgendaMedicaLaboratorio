import connection from '../database/db.js'

export const obtenerTodasLasPersonas = async (req,res)=>{
    try {
        const consulta = `
        SELECT dni, nombre, apellido 
        FROM persona AS p
        WHERE p.dni NOT IN (SELECT m.dni FROM medico AS m)
        `
        const [resultado] = await connection.execute(consulta)
        return resultado
    } catch (error) {
        console.error("Error al obtenerTodasLasPersonas")
    }
}

export const crearPersonaInsert = async(dni,nombre,apellido,direccion,fecha_nacimiento,email,imagen_documento) =>{
    try {
        const consulta = `
            INSERT INTO persona(dni, nombre, apellido, direccion, fechaNacimiento, email, img_doc) VALUES (?,?,?,?,?,?,?)
            `
        const [resultado] = await connection.execute(consulta,[dni,nombre,apellido,direccion,fecha_nacimiento,email,imagen_documento])
        return dni
    } catch (error) {
        console.error("Error crearPersonaInsert", error)   
    }
}

export const modificarPersona = async(dni_m, nombre_m, apellido_m, direccion_m, fecha_nacimiento_m, email_m, imagen_documento_m) => {
    try {

        let campos = [];
        let valores = [];

        if (nombre_m !== null) {
            campos.push("nombre = ?");
            valores.push(nombre_m);
        }
        if (apellido_m !== null) {
            campos.push("apellido = ?");
            valores.push(apellido_m);
        }
        if (direccion_m !== null) {
            campos.push("direccion = ?");
            valores.push(direccion_m);
        }
        if (fecha_nacimiento_m !== null) {
            campos.push("fechaNacimiento = ?");
            valores.push(fecha_nacimiento_m);
        }
        if (email_m !== null) {
            campos.push("email = ?");
            valores.push(email_m);
        }
        if (imagen_documento_m !== null) {
            campos.push("img_doc = ?");
            valores.push(imagen_documento_m);
        }

        valores.push(dni_m);

        const consulta = `
            UPDATE persona 
            SET ${campos.join(", ")}
            WHERE persona.dni = ?
        `;
        
        const [resultado] = await connection.execute(consulta, valores);
        
        return dni_m;
    } catch (error) {
        console.error("Error en modificarPersona", error);   
    }
}



